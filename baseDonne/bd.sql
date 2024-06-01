INSERT INTO user (id, created_at, date_naissance, email, nom, password,
                    prenom, service, telephone, username, role_id, modified_at,
                    reset_password_token, reset_password_token_expiration, is_active,
                    verification_token) VALUES (20, '2023-06-16 02:46:05.619000', '2023-06-11', 'yakoubi.emma1@gmail.com', 'testadmin',
                                               '$2y$10$tEiIQBqPtD2/21wRuK5AU.P7TyxcD4MkwLPpIiMprKzx4qGZIleWW', 'testadmin', 'testadminU8',
                                               '9999999999', 'testadminU8', 1, '2023-06-16 02:46:05.619000', NULL, NULL, b'1', NULL);



-- login : testadminU8
-- password : Test123456*


-- SET FOREIGN_KEY_CHECKS = 0; --pour désactiver les contraintes de clé étrangère
-- TRUNCATE TABLE nom_de_la_table; --pour vider une table
-- DELETE FROM nom_de_la_table; --pour supprimer toutes les données d'une table
-- update user set email="yakoubi.emma1@gmail.com" where id=24;