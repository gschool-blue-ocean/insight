INSERT INTO users (username, firstName, lastName, role)
VALUES
    ('MrHawkins', 'John', 'Hawkins', 'instructor'),
    ('BubbaHoundstooth', 'Temuera', 'Morrison', 'admin'),
    ('TrishJenkins', 'Trish', 'Jenkins', 'student'),
    ('azure', 'Vivenna', 'Royal', 'student'),
    ('spirit', 'Ray', 'Sully', 'student'),
    ('slipperypete', 'Art', 'Vandalay', 'student'),
    ('sansabasongbird', 'Buster', 'Scruggs', 'student'),
    ('kramerica', 'H.E.', 'Pennypacker', 'student'),
    ('rogga', 'Baster', 'Tenring', 'student'),
    ('crazydiamond', 'Josuke', 'Higashikata', 'student'),
    ('starplatinum', 'Jotaro', 'Kujo', 'student'),
    ('bootlip', 'Fudgepot', 'Cainforth-Cain', 'student'),
    ('firstshot', 'Han', 'Solo', 'student'),
    ('painbow', 'Jared', 'Carthalion', 'student'),
    ('username', 'Warren', 'Atkinson', 'student'),
    ('critfail', 'Matt', 'Mercer', 'student'),
    ('slamacow', 'Finn', 'Mertins', 'student'),
    ('giogio', 'Giorno', 'Giovana', 'student'),
    ('president', 'Streetlamp', 'Le Moose', 'student'),
    ('UGUD', 'Kevin', 'Pouya', 'student'),
    ('sonapanic', 'Barty', 'Crouch', 'student'),
    ('MrsMarmalade', 'Jane', 'Marmalade', 'student'),
    ('syenite', 'Essun', 'Tirimo', 'instructor');


INSERT INTO instructors (userId)
VALUES
    (1),  
    (23); 
    

INSERT INTO cohorts (instructorId, start_date, end_date, nps)
VALUES
    (1, DATE '2024-01-01', DATE '2024-06-30', null), 
    (1, DATE '2023-09-01', DATE '2023-12-30', null),
    (2, DATE '2023-10-01', DATE '2024-01-15', null),
    (2, DATE '2024-02-15', DATE '2024-07-31', null); 


INSERT INTO students (cohortId, userId, nps_rating, days_absent, avg_grade)
VALUES

    (1, 3, 3, null, null),
    (1, 4, 3, null, null),  
    (1, 5, 3, null, null), 
    (1, 6, 3, 2, null), 
    (1, 7, 3, null, null), 
    (2, 8, 3, 5, null), 
    (2, 9, 3, null, null), 
    (2, 10, 3, null, null), 
    (2, 11, 3, null, null), 
    (2, 12, 3, null, null), 
    (3, 13, 4, null, null),
    (3, 14, 3, 1, null), 
    (3, 15, 3, null, null), 
    (3, 16, 3, null, null), 
    (3, 17, 3, 2, null), 
    (4, 18, 3, null, null), 
    (4, 19, 3, 2, null), 
    (4, 23, 4, null, null), 
    (4, 21, 3, null, null),
    (4, 22, 5, 3, null);

INSERT INTO assignments (title, due_date, description, cohortId, instructor_comments)
VALUES
    ('Pixel Art Maker', DATE '2023-09-15', 'Create a pixel art maker', 2, null),  
    ('Hackathon', DATE '2023-09-25', 'Your very own 1 day project', 2, null),

    ('Pixel Art Maker', DATE '2024-01-15', 'Create a pixel art maker', 1, null),  
    ('Hackathon', DATE '2024-01-25', 'Your very own 1 day project', 1, null),

    ('Pixel Art Maker', DATE '2023-10-15', 'Create a pixel art maker', 3, null),  
    ('Hackathon', DATE '2023-10-25', 'Your very own 1 day project', 3, null),

    ('Pixel Art Maker', DATE '2024-03-01', 'Create a pixel art maker', 4, null),  
    ('Hackathon', DATE '2024-03-15', 'Your very own 1 day project', 4, null);  


INSERT INTO students_assignments (studentId, assignmentId, is_submitted, grade)
VALUES 
    (1, 1, false, null),
    (1, 2, false, null),
    (2, 1, false, null),
    (2, 2, false, null),
    (3, 1, false, null),
    (3, 2, false, null),
    (4, 1, false, null),
    (4, 2, false, null),
    (5, 1, false, null),
    (5, 2, false, null),
    (6, 1, false, null),
    (6, 2, false, null),
    (7, 1, false, null),
    (7, 2, false, null),
    (8, 1, false, null),
    (8, 2, false, null),
    (9, 1, false, null),
    (9, 2, false, null),
    (10, 1, false, null),
    (10, 2, false, null),
    (11, 1, false, null),
    (11, 2, false, null),
    (12, 1, false, null),
    (12, 2, false, null),
    (13, 1, false, null),
    (13, 2, false, null),
    (14, 1, false, null),
    (14, 2, false, null),
    (15, 1, false, null),
    (15, 2, false, null),
    (16, 1, false, null),
    (16, 2, false, null),
    (17, 1, false, null),
    (17, 2, false, null),
    (18, 1, false, null),
    (18, 2, false, null),
    (19, 1, false, null),
    (19, 2, false, null),
    (20, 1, false, null),
    (20, 2, false, null);


INSERT INTO admin (userId)
VALUES
    (2);  


INSERT INTO auth (password, userId, token, expiration_date) 
VALUES 
    ('$2b$10$AEYCw0WmKHdj3DKi1.94QelhQ28KeVisxk9XJ2FVFgZp8VQ3S0o0O', 1, null, null),
    ('$2b$10$oj6cVKykXaBXmi47NZWFMuIrknLVCFdlIxf/1aRqwrbw/B.ArrfJ.', 2, null, null),
    ('$2b$10$fbRPquGm/6BLLTJW9oRQuuKAN25mckxXYSHIYVA.6N5GxXvt15TKu', 3, null, null),
    ('$2b$10$/bEcJM4c1xu48CfWYt6eWuBjmC9CjXs9CSGSq3uJCBXK7tRQrG59m', 22, null, null);




