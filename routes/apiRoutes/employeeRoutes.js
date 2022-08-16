const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all employees and their roles
router.get('/employees', (req, res) => {
    const sql = `SELECT employees.*, roles.title 
                  AS role_name 
                  FROM employees 
                  LEFT JOIN roles 
                  ON employees.role_id = roles.id`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});