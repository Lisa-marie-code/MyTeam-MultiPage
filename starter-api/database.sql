CREATE DATABASE team_db;

-- \c into my_team

CREATE TABLE director(
    todo_id SERIAL PRIMARY KEY,
    dir_photo VARCHAR(255),
    dir_name VARCHAR(255),
    dir_position VARCHAR(255)
);

ALTER TABLE director
RENAME COLUMN todo_id TO dir_id;