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


INSERT INTO students (cohortId, userId, nps_rating, days_absent, checkin_count, avg_grade)
VALUES
    (1, 3, 3, 0, 0, 93),
    (1, 4, 3, 0, 0, 88),  
    (1, 5, 3, 0, 0, 87), 
    (1, 6, 3, 2, 0, 65), 
    (1, 7, 3, 0, 0, 89), 
    (2, 8, 3, 5, 0, 90), 
    (2, 9, 3, 0, 0, 95), 
    (2, 10, 3, 0, 0, 85), 
    (2, 11, 3, 0, 0, 78), 
    (2, 12, 3, 0, 0, 77), 
    (3, 13, 4, 0, 0, 90),
    (3, 14, 3, 1, 0, 87), 
    (3, 15, 3, 0, 0, 67), 
    (3, 16, 3, 0, 0, 81), 
    (3, 17, 3, 2, 0, 93), 
    (4, 18, 3, 0, 0, 100), 
    (4, 19, 3, 2, 0, 84), 
    (4, 23, 4, 0, 0, 94), 
    (4, 21, 3, 0, 0, 78),
    (4, 22, 5, 3, 0, 89);

INSERT INTO assignments (title, due_date, description, cohortId)
VALUES
    ('Pixel Art Maker', DATE '2023-09-15', 'Create a pixel art maker', 2),  
    ('Hackathon', DATE '2023-09-25', 'Your very own 1 day project', 2),

    ('Pixel Art Maker', DATE '2024-01-15', 'Create a pixel art maker', 1),  
    ('Hackathon', DATE '2024-01-25', 'Your very own 1 day project', 1),

    ('Pixel Art Maker', DATE '2023-10-15', 'Create a pixel art maker', 3),  
    ('Hackathon', DATE '2023-10-25', 'Your very own 1 day project', 3),

    ('Pixel Art Maker', DATE '2024-03-01', 'Create a pixel art maker', 4),  
    ('Hackathon', DATE '2024-03-15', 'Your very own 1 day project', 4);  


INSERT INTO students_assignments (studentId, assignmentId, is_submitted, grade, instructor_comments)
VALUES 
    (1, 3, false, 87, ''),
    (1, 4, false, 99, ''),
    (2, 1, false, 76, ''),
    (2, 2, false, 67, ''),
    (3, 1, false, 88, ''),
    (3, 2, false, 95, ''),
    (4, 1, false, 85, ''),
    (4, 2, false, 87, ''),
    (5, 1, false, 79, ''),
    (5, 2, false, 90, ''),
    (6, 1, false, 99, ''),
    (6, 2, false, 86, ''),
    (7, 1, false, 96, ''),
    (7, 2, false, 86, ''),
    (8, 1, false, 78, ''),
    (8, 2, false, 85, ''),
    (9, 1, false, 94, ''),
    (9, 2, false, 90, ''),
    (10, 1, false, 80, ''),
    (10, 2, false, 87, ''),
    (11, 1, false, 77, ''),
    (11, 2, false, 94, ''),
    (12, 1, false, 96, ''),
    (12, 2, false, 93, ''),
    (13, 1, false, 88, ''),
    (13, 2, false, 84, ''),
    (14, 1, false, 92, ''),
    (14, 2, false, 91, ''),
    (15, 1, false, 89, ''),
    (15, 2, false, 81, ''),
    (16, 1, false, 90, ''),
    (16, 2, false, 100, ''),
    (17, 1, false, 100, ''),
    (17, 2, false, 75, ''),
    (18, 1, false, 100, ''),
    (18, 2, false, 99, ''),
    (19, 1, false, 98, ''),
    (19, 2, false, 80, ''),
    (20, 1, false, 82, ''),
    (20, 2, false, 94, '');


INSERT INTO admin (userId)
VALUES
    (2);  


INSERT INTO auth (password, userId, token, expiration_date) 
VALUES 
    ('$2b$10$AEYCw0WmKHdj3DKi1.94QelhQ28KeVisxk9XJ2FVFgZp8VQ3S0o0O', 1, null, null),
    ('$2b$10$oj6cVKykXaBXmi47NZWFMuIrknLVCFdlIxf/1aRqwrbw/B.ArrfJ.', 2, null, null),
    ('$2b$10$fbRPquGm/6BLLTJW9oRQuuKAN25mckxXYSHIYVA.6N5GxXvt15TKu', 3, null, null),
    ('$2b$10$/bEcJM4c1xu48CfWYt6eWuBjmC9CjXs9CSGSq3uJCBXK7tRQrG59m', 22, null, null);




