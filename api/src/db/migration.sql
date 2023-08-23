DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS cohorts CASCADE;
DROP TABLE IF EXISTS instructors CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS assignments;
DROP TABLE IF EXISTS students_assignments;
DROP TABLE IF EXISTS admin;
DROP TABLE IF EXISTS auth;

CREATE TABLE IF NOT EXISTS users (
    userId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username TEXT,
    firstName TEXT,
    lastName TEXT,
    role TEXT
);

CREATE TABLE IF NOT EXISTS instructors (
    instructorId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES users (userId) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS cohorts (
    cohortId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    instructorId INTEGER,
    start_date DATE,
    end_date DATE,
    nps INTEGER,
    FOREIGN KEY (instructorId) REFERENCES instructors (instructorId) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS students (
    studentId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cohortId INTEGER,
    userId INTEGER,
    nps_rating INTEGER,
    days_absent INTEGER,
    checkin_count INTEGER,
    avg_grade INTEGER,
    FOREIGN KEY (cohortId) REFERENCES cohorts (cohortId) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES users (userId) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS assignments (
    assignmentId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT,
    due_date DATE,
    description TEXT,
    cohortId INTEGER,
    FOREIGN KEY (cohortId) REFERENCES cohorts (cohortId) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS students_assignments (
    studentId INTEGER REFERENCES students (studentId) ON UPDATE CASCADE ON DELETE CASCADE,
    assignmentId INTEGER REFERENCES assignments (assignmentId) ON UPDATE CASCADE ON DELETE CASCADE,
    is_submitted BOOLEAN DEFAULT FALSE,
    
    grade INTEGER CHECK (
        grade >= 0
        AND grade <= 100
    ),
    instructor_comments VARCHAR(256),
    CONSTRAINT students_assignments_pkey PRIMARY KEY (studentId, assignmentId)
);

CREATE TABLE IF NOT EXISTS admin (
    adminId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES users (userId) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS auth (
    passwordId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    password VARCHAR(100),
    userId INTEGER,
    token TEXT,
    expiration_date DATE,
    FOREIGN KEY (userId) REFERENCES users (userId) ON UPDATE CASCADE ON DELETE CASCADE
);