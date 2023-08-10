CREATE TABLE IF NOT EXISTS users (
    userId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username TEXT, 
    firstName TEXT,
    lastName TEXT,
    emailAddress TEXT,
    userRole TEXT,
    password TEXT
);


CREATE TABLE IF NOT EXISTS students (
    studentId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    -- FOREIGN KEY (assignmentId) REFERENCES assignments (assignmentId) ON DELETE CASCADE,
    cohortId INTEGER,
    userId INTEGER,
    FOREIGN KEY (cohortId) REFERENCES cohorts (cohortId) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES users (userId) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS instructors (
    instructorId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES users (userId) ON DELETE CASCADE,
);



CREATE TABLE IF NOT EXISTS cohorts (
    cohortId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    instructorId INTEGER,
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (instructorId) REFERENCING instructors (instructorId) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS assignments (
    assignmentId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT, 
    due_date DATE,
    description text, 
    cohortId INTEGER,
    FOREIGN KEY (cohortId) REFERENCING cohorts (cohortId) ON DELETE CASCADE
);