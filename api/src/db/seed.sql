INSERT INTO users (username, firstName, lastName, emailAddress, password)
VALUES
    ('user1', 'John', 'Doe', 'john.doe@example.com', 'password1'),
    ('user2', 'Jane', 'Smith', 'jane.smith@example.com', 'password2'),
    ('user3', 'Alice', 'Johnson', 'alice.johnson@example.com', 'password3'),
    ('user4', 'Bob', 'Brown', 'bob.brown@example.com', 'password4');


INSERT INTO instructors (userId)
VALUES
    (1),  
    (3); 


INSERT INTO cohorts (instructorId, start_date, end_date, nps)
VALUES
    (1, DATE '2023-01-01', DATE '2023-06-30', 85), 
    (2, DATE '2023-02-15', DATE '2023-07-31', 90); 


INSERT INTO students (cohortId, userId)
VALUES
    (1, 2),  
    (1, 4);  


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
    (3, 180, 2), 
    (5, 180, 4); 

-- Sample admin
INSERT INTO admin (userId)
VALUES
    (1);  



