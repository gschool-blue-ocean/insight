CREATE TABLE IF NOT EXISTS users (
    userId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username TEXT,
    firstName TEXT,
    lastName TEXT,
    emailAddress TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS students (
    studentId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
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
    nps INTEGER,
    FOREIGN KEY (instructorId) REFERENCES instructors (instructorId) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS assignments (
    assignmentId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT,
    due_date DATE,
    description text,
    cohortId INTEGER,
    FOREIGN KEY (cohortId) REFERENCES cohorts (cohortId) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS avg_grades (
    gradeId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    score INTEGER,
    studentId INTEGER,
    cohortId INTEGER,
    FOREIGN KEY (studentId) REFERENCES students (studentId) ON DELETE CASCADE,
    FOREIGN KEY (cohortId) REFERENCES cohorts (cohortId) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS attendence (
    attendenceId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    absences INTEGER,
    cohort_length INTEGER,
    studentId INTEGER,
    FOREIGN KEY (studentId) REFERENCES students (studentId) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS admin (
    adminId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES users (userId) ON DELETE CASCADE
);