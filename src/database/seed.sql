BEGIN;

INSERT INTO users VALUES
  (1, 'a@example.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO', '2017-12-25 00:00:00'),
  (2, 'b@example.com', '$2a$12$o2NP8ykiki.T11qRQOCnBeX68PhwXHprM/hxHkbAfqotWo2XT.vdW', '2017-12-25 00:00:00'),
  (3, 'c@example.com', '$2a$12$8HIQ9kqN0brBUfDigfSfB.9BlSsICw4LQ/tiw4U/zMW5QWtuTqMG6', '2017-12-25 00:00:00'),
  (4, 'j@example.com', '$2a$12$AEVcwDH6apiHoyJnZcgWaemY9gZ.fn2ZlTeQZKy.w4Pq7qptgyJtG', '2017-12-25 00:00:00')
ON CONFLICT DO NOTHING;

INSERT INTO companies VALUES
(1, 'Google'),
(2, 'Founders and Coders'),
(3, 'Facebook'),
(4, 'BP'),
(5, 'Unknown')
 
ON CONFLICT DO NOTHING;

INSERT INTO secrets VALUES
(1, 'This is big secret about google added by a@example.com', 1, 1, '2020-01-22 23:00:00'),
(2, 'This is big secret about facebook added by j@example.com', 4, 3, '2020-01-22 23:00:00'),
 
ON CONFLICT DO NOTHING;

COMMIT;
