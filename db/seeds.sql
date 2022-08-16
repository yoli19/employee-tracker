INSERT INTO departments
    (department_name)
VALUES
    ('Human Resources'),
    ('Marketing'),
    ('Sales'),
    ('Legal');

INSERT INTO roles
    (title, salary, department_id)
VALUES
    ('hiring manager', 80000, 1),
    ('intern', 30000, 2),
    ('sales person', 50000, 3),
    ('lawyer', 100000, 4);
    
INSERT INTO employees
    (first_name, last_name, role_id)
VALUES
    ('Tom', 'Holland', 1),
    ('Jennifer', 'Lawrence', 2),
    ('Adam', 'Driver', 3),
    ('Anne', 'Hathaway', 4);
    