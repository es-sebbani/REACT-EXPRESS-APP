create table users(
    uid serial primary key,
    username varchar(255) unique,
    email varchar(255),
    email_verified BOOLEAN,
    date_created DATE,
    last_login DATE
);
create table posts(
    pid serial primary key,
    title varchar(255),
    body varchar,
    user_id INT REFERENCES users(uid),
    author varchar REFERENCES users(username),
    date_created TIMESTAMP
);
CREATE table comments(
    cid SERIAL primary KEY,
    comment varchar(255),
    author varchar REFERENCES users(username),
    user_id INT REFERENCES users(uid),
    post_id INT REFERENCES posts(pid),
    date_created TIMESTAMP
);