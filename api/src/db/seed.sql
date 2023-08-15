INSERT INTO users (username, firstName, lastName, role)
VALUES
    ('MrHawkins', 'John', 'Hawkins', 'instructor'),
    ('BubbaHoundstooth', 'Temuera', 'Morrison', 'admin'),
    ('TrishJenkins', 'Trish', 'Jenkins', 'student'),
    ('MrsMarmalade', 'Jane', 'marmalade', 'student');


INSERT INTO instructors (userId)
VALUES
    (1),  
    (2); 
    

INSERT INTO cohorts (instructorId, start_date, end_date, nps)
VALUES
    (1, DATE '2023-01-01', DATE '2023-06-30', 3), 
    (2, DATE '2023-02-15', DATE '2023-07-31', 4); 


INSERT INTO students (cohortId, userId, nps_rating)
VALUES
    (1, 3, 3),  
    (1, 4, 4);  


INSERT INTO assignments (title, due_date, description, cohortId)
VALUES
    ('Assignment 1', DATE '2023-02-01', 'Description for Assignment 1', 1),  
    ('Assignment 2', DATE '2023-03-15', 'Description for Assignment 2', 1);  


INSERT INTO avg_grades (score, studentId, cohortId)
VALUES
    (90, 1, 1),  
    (88, 2, 1);  


INSERT INTO attendance (absences, cohort_length, studentId)
VALUES
    (3, 180, 1), 
    (5, 180, 2); 

INSERT INTO admin (userId)
VALUES
    (2);  


INSERT INTO passwords (password, userId) 
VALUES 
    ('$2b$10$AEYCw0WmKHdj3DKi1.94QelhQ28KeVisxk9XJ2FVFgZp8VQ3S0o0O', 1),
    ('$2b$10$oj6cVKykXaBXmi47NZWFMuIrknLVCFdlIxf/1aRqwrbw/B.ArrfJ.', 2),
    ('$2b$10$fbRPquGm/6BLLTJW9oRQuuKAN25mckxXYSHIYVA.6N5GxXvt15TKu', 3),
    ('$2b$10$/bEcJM4c1xu48CfWYt6eWuBjmC9CjXs9CSGSq3uJCBXK7tRQrG59m', 4);


