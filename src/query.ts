const pool = require('./data').pool;

// role table
const getRoles = (req, res) => {
    pool.query('SELECT * FROM "role"', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

// user table
const getUsers = (req, res) => {
    pool.query('SELECT * FROM "user"', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

// reimbursementstatus table
const getReimbursementStatus = (req, res) => {
    pool.query('SELECT * FROM reimbursementstatus', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

// reimbursementtype table
const getReimbursementType = (req, res) => {
    pool.query('SELECT * FROM reimbursementtype', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

// reimbursement table
const getReimbursement = (req, res) => {
    pool.query('SELECT * FROM reimbursement', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

export  = {
    getRoles,
    getUsers,
    getReimbursementStatus,
    getReimbursementType,
    getReimbursement
};