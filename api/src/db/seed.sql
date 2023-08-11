-- Seed data for the 'users' table
INSERT INTO users (username, firstName, lastName, emailAddress, password) VALUES
    ('john_doe', 'John', 'Doe', 'john@example.com', 'password123'),
    ('jane_smith', 'Jane', 'Smith', 'jane@example.com', 'securepassword');

-- Seed data for the 'cohorts' table
INSERT INTO cohorts (instructorId, start_date, end_date, nps) VALUES
    (1, '2023-01-15', '2023-05-15', 85),
    (2, '2023-02-01', '2023-06-01', 90);

-- Seed data for the 'instructors' table
INSERT INTO instructors (userId) VALUES
    (1),
    (2);

-- Seed data for the 'students' table
INSERT INTO students (cohortId, userId) VALUES
    (1, 1),
    (1, 2),
    (2, 1);

-- Seed data for the 'assignments' table
INSERT INTO assignments (title, due_date, description, cohortId) VALUES
    ('Assignment 1', '2023-02-15', 'Complete exercises 1-5', 1),
    ('Assignment 2', '2023-03-01', 'Write a research paper', 2);

-- Seed data for the 'avg_grades' table
INSERT INTO avg_grades (score, studentId, cohortId) VALUES
    (85, 1, 1),
    (90, 2, 1),
    (88, 3, 2);

-- Seed data for the 'attendance' table
INSERT INTO attendance (absences, cohort_length, studentId) VALUES
    (2, 120, 1),
    (3, 120, 2),
    (1, 120, 3);

-- Seed data for the 'admin' table
INSERT INTO admin (userId) VALUES
    (1);