import { pool } from './database.js';
import './dotenv.js';
import productsData from '../data/products.js';


const createProductsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS products; 

        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            brand VARCHAR(255) NOT NULL,
            size VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description VARCHAR(655) NOT NULL,
            condition VARCHAR(255) NOT NULL,
            category VARCHAR(255) NOT NULL,
            color VARCHAR(255) NOT NULL,
            price DECIMAL NOT NULL,
            num_likes INTEGER DEFAULT 0,
            submittedBy VARCHAR(255) NOT NULL,
            submittedOn TIMESTAMP NOT NULL
        );
    `

    try {
        await pool.query(createTableQuery);
        console.log('Products table created successfully');
    } catch (error) {
        console.log('Error: ', error);
    }
}

const createUserLikesTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS UserLikes;

        CREATE TABLE IF NOT EXISTS UserLikes (
            userEmail VARCHAR(255) NOT NULL,
            productId INTEGER NOT NULL,
            PRIMARY KEY (userEmail, productId),
            FOREIGN KEY (productId) REFERENCES products (id)
        );

    `
    try {
        await pool.query(createTableQuery);
        console.log('UserLikes table created successfully');
    }
    catch (error) {
        console.log('Error: ', error);
    }
}

const seedProductsTable = async () => {
    await createProductsTable();

    
    productsData.forEach((product) => {
        const insertQuery = {
        text: 'INSERT INTO products (title, brand, size, image, description, condition, category, color, price, num_likes, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
        }

        const values = [
            product.title,
            product.brand,
            product.size,
            product.image,
            product.description,
            product.condition,
            product.category,
            product.color,
            product.price,
            product.num_likes,
            product.submittedBy,
            product.submittedOn
        ];

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.log('Error inserting products', err)
                return
            }
            console.log(`🛍️  inserted product: ${product.title}`)
        })
    })
}

seedProductsTable();
createUserLikesTable();