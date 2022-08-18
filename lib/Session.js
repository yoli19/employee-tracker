const inquirer = require('inquirer');
const db = require('../db/connection');

class Session {
    constructor() {

    }

    initializeSession() {
        inquirer.prompt({
            type: 'list',
            name: 'initialize',
            message: 'What do you want to do?',
            choices: ['view departments', 'view roles', 'view employees', 'add department']
        })
            .then(answers => {
                if (answers.initialize === 'view departments') {
                    this.showDepartments();
                    //return this.initializeSession();
                }
                else if (answers.initialize === 'view roles') {
                    this.showRoles();
                    //return this.initializeSession();
                }
                else if (answers.initialize === 'view employees') {
                    this.showEmployees();
                    //return this.initializeSession();
                }
                else if (answers.initialize === 'add department') {
                    this.addDepartment();
                    //return this.initializeSession();
                }
            });
    }

    showDepartments() {
        const sql = `SELECT * FROM departments`;

        db.query(sql, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            console.log(rows)
        });
    }

    showRoles() {
        const sql = `SELECT * FROM roles`;

        db.query(sql, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            console.log(rows)
        });
    }

    showEmployees() {
        const sql = `SELECT * FROM employees`;

        db.query(sql, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            console.log(rows)
        });
    }

    addDepartment() {
        inquirer.prompt({
            type: 'input',
            name: 'newDepartment',
            message: 'What is the department name?',
            validate: newDepartment => {
                if (!newDepartment) {
                    console.log('Please enter a department name!')
                    return false;
                }
                return true;
            }
        })
            .then(answers => {
                const sql = 'INSERT INTO departments SET ?'
                db.query(sql, { department_name: answers.newDepartment }, (err, result) => {
                    if (err) {
                        res.status(500).json({ error: err.message });
                        return;
                        }
                        console.log('department added successfully');
                        
                    
                    });
            });
    }
}

module.exports = Session;
