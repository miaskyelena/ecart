import { pool } from '../config/database.js';

const getProductLikes = async (req, res) => {
    const { productId } = req.params;

    try {
        const result = await pool.query('SELECT likes FROM ProductLikes WHERE productId = $1', [productId]);
        res.json({ likes: result.rows[0]?.likes || 0 });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }

}


// Increment the number of likes for a product
 const incrementProductLikes = async (req, res) => {
    const { productId } = req.params;

    try {
        // Increment likes in ProductLikes
        await pool.query('UPDATE ProductLikes SET likes = likes + 1 WHERE productId = $1', [productId]);

        // Get the updated number of likes
        const result = await pool.query('SELECT likes FROM ProductLikes WHERE productId = $1', [productId]);
        res.json({ likes: result.rows[0]?.likes || 0 });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
};


export default {
    getProductLikes,
    incrementProductLikes,
};
// Compare this snippet from server/controllers/UserLikes.js: