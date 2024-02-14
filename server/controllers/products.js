import { pool } from '../config/database.js';

const getProducts = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM products ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(400).json({ error: error })
    }
}

const getProductById = async (req, res) => {
    try { 
        const productId = req.params.productId;
        const selectQuery = `SELECT title, brand, size, image, description, condition, category, color, price, num_likes, submittedBy, submittedOn FROM products WHERE id = ${productId}`;
        const results = await pool.query(selectQuery);

        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const createProduct = async (req, res) => {
    try { 
        const { title, brand, size, image, description, condition, category, color, price, num_likes, submittedby, submittedon } = req.body;
        const results = await pool.query(`
            INSERT INTO products (title, brand, size, image, description, condition, category, color, price, num_likes, submittedby, submittedon)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
            RETURNING *`,
            [title, brand, size, image, description, condition, category, color, price, num_likes, submittedby, submittedon]
            )
        res.status(201).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { title, brand, size, image, description, condition, category, color, price, submittedby, submittedon} = req.body;
        const results = await pool.query(`
            UPDATE products SET title = $1, size = $2, image = $3, description = $4, condition = $5, category = $6, color = $7, price = $8, submittedby = $9, submittedon = $10, brand = $11 WHERE id = $12`,
            [title, brand, size, image, description, condition, category, color, price, submittedby, submittedon, id]
            )
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try { 
        const id = parseInt(req.params.id)
        const results = await pool.query('DELETE FROM products WHERE id = $1', [id])
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const incrementProductLikes = async (req, res) => {
    const productId = req.params.productId;

    try {
        // Increment num_likes in Products
        await pool.query('UPDATE products SET num_likes = num_likes + 1 WHERE id = $1', [productId]);

        // Get the updated number of likes
        const result = await pool.query('SELECT num_likes FROM products WHERE id = $1', [productId]);
        res.json({ likes: result.rows[0]?.num_likes || 0 });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
};

const getProductLikes = async (req, res) => {
    const productId = req.params.productId;

    try {
        const result = await pool.query('SELECT num_likes FROM products WHERE id = $1', [productId]);
        res.json({ likes: result.rows[0]?.num_likes || 0 });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }

}

export default {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    incrementProductLikes,
    getProductLikes,
}

