CREATE DATABASE things_to_do_in_adelaide;
\c things_to_do_in_adelaide

CREATE TABLE events(
  id SERIAL PRIMARY KEY,
  name TEXT,
  img TEXT,
  location TEXT,
  description TEXT
);

INSERT INTO events(name, img, location, description)
VALUES
  ('Beach Party', 'https://images.unsplash.com/photo-1584156578723-b4ce606da400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80', 'Glenelg', 'Come out and swim in the beach, play sports like volleyball, and enjoy a nice outdoor barbeque'),
  ('Winery', 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'Barossa Valley', 'Enjoy the beautiful taste of red, white or any other type of wine you can think of');

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  event_id INTEGER,
  comment TEXT
);