-- SQLBook: Code
BEGIN;

TRUNCATE "bread_has_order", "order", "bread", "mould", "bread_type", "place_has_date", "delivery_date", "delivery_place", "user"
RESTART IDENTITY;

INSERT INTO
    "user" (
        last_name, first_name, email, password, phone, zip_code, city, status, role, agreement, adress
    ) VALUES (
        'DUPOND', 'Pierre', 'pdupond@orange.com', '$2b$10$UjdT7eElltpvtYBbHJJyWOh7m261q1kEuJ2xsYdlUnD.FWSK/FxOu', '0606060606', '38100', 'GRENOBLE', true, 'client', true, '24 rue du paradis'
    ),
    (
        'GADESSAUD', 'Noémie', 'noemie@gmail.fr', '$2b$10$pzWOyQsd7RgijqiVEYqy1.Y6OooiMoi1S3ud2ySgA5e6E9ecnlMm.', '0707070707', '38500', 'CHIRENS', true, 'admin', true, 'rue du parc'
    ),
    (
        'MARTIN', 'Paul', 'pmartin@free.fr', '$2b$10$FDqHzO.mm.tRE23Vol9RcOs6GCs2gBuMBFF5vOs124kiZ9ykjcnCS', '0909090909', '38400', 'LYON', false, 'client', false, 'allée des tilleuls'
    );

INSERT INTO
    "delivery_place" (
        name, adress, zip_code, city, information
    )
VALUES (
        'Au Clermont Bar', ' 612 route Bourg', '38850', 'CHIRENS', 'Entre 15h et 19h
modalité de paiement : espèces (faire l’appoint car pas de monnaie rendue), chèque, virement bancaire (IBAN : FR76 4255 9100 0008 0262 7651 839/
BIC : C C O P F R P P X X X)'
    ),
    (
        'Les Jardins du Coteau', '39 chemin de tréfond,', '38500', 'SAINT-CASSIEN', 'Entre 16h et 19h
modalité de paiement : à payer au maraicher
(espèces ou chèque)'
    ),
    (
        'Chez Pizza Reydo', 'Place de la mairie 75 route de Charavines', '38850', 'BILIEU', 'Entre 18h et 22h
modalité de paiement :espèces (faire l’appoint car pas de monnaie rendue), chèque, virement bancaire (IBAN : FR76 4255 9100 0008 0262 7651 839/
BIC : C C O P F R P P X X X)'
    ),
    (
        'Chez le maraîcher Yannick Berthollet', '304 Route des Prairies', '38500', 'SAINT-NICOLAS-DE-MACHERIN', 'Entre 15h et 19h
modalité de paiement : paiement auprès dumaraîcher (espèces) - * Pains bio en vente libre également chez les maraîchers.'
    );

INSERT INTO
    "delivery_date" (date)
VALUES ('2024-02-06 00:00:00+00'),
    ('2024-02-13 00:00:00+00'),
    ('2024-02-20 00:00:00+00'),
    ('2024-02-09 00:00:00+00'),
    ('2024-02-16 00:00:00+00'),
    ('2024-02-23 00:00:00+00'),
    ('2024-02-27 00:00:00+00'),
    ('2024-03-01 00:00:00+00'),
    ('2024-03-05 00:00:00+00'),
    ('2024-03-08 00:00:00+00'),
    ('2024-03-12 00:00:00+00'),
    ('2024-03-15 00:00:00+00'),
    ('2024-03-19 00:00:00+00'),
    ('2024-03-22 00:00:00+00'),
    ('2024-03-26 00:00:00+00'),
    ('2024-03-29 00:00:00+00');

INSERT INTO
    "place_has_date" (
         delivery_place_id, delivery_date_id
    )
VALUES (1, 1),
    (1, 2),
    (1, 3),
    (1, 4),
    (1, 5),
    (1, 6),
    (1, 7),
    (2, 1),
    (2, 2),
    (2, 3),
    (2, 4),
    (3, 5),
    (3, 6),
    (3, 7);




INSERT INTO
    "bread_type" (
        name, description, ingredient, photo, status
    )
VALUES (
        'Pain artisanal au levain naturel', 'Le pain de base, le bon goût de l’authenticité !', 'Farine paysanne T80, Sel, Levain et eau', 'Pain nature.jpg', true
    ),
    (
        'Pain aux graines', 'Un mélange de graines incorporé à la pâte pour un cocktail de saveur.', 'Farine paysanne T80, Sel, Levain, eau et graines (tournesol, lin doré, lin brun et millet décortiqué. )', 'Pain aux graines.jpg', true
    ),
    (
        'Pain au petit-épeautre et graines', 'Les vertus du petit-épeautre avec la saveur gourmande du mélange de graines
Graines : tournesol, lin doré, lin brun et millet décortiqué.', 'Farine paysanne de petit-épeautre, sel, Levain de petit-épeautre, eau et graines (tournesol, lin doré, lin brun et millet décortiqué. )', 'Pain aux graines.jpg', true
    ),
    (  
        'Pain complet bio', 'Un pain d’une belle couleur sombre et particulièrement digeste avec l’ajout de son de blé', 'Farine paysanne T80, Son de blé, Sel, Levain et eau', 'Pain complet.jpg', true
    ),
    (     
        'Brioche bio nature', 'Une brioche particulièrement fondante qui se trouve être faite avec une pâte de pain au lait !', 'Farine T65, lait, sel, levure, sucre et beurre', 'Pain complet.jpg', true
    )
    ;


INSERT INTO
    "mould" (name, quantity)
VALUES ('A', 10),
    ('B', 15),
    ('C', 5);



INSERT INTO
    "order" (
        creator_id, customer_id, delivery_place_id, delivery_date_id
    )
VALUES (1, 1, 1, 4),
    (2, 1, 2, 2),
    (3, 3, 3, 5);

INSERT INTO
    "bread" (
        weight, price, status, bread_type_id, mould_id
    )
VALUES (500, '2.70', true, 1, 1),
    (1000, '5.60', true, 1, 2),
    (1000, '6.00', false, 3, 3);


INSERT INTO
    "bread_has_order" (bread_id, order_id, quantity)
VALUES (1, 1, 6),
    (2, 1, 5),
    (2, 2, 5),
    (1, 3, 3),
    (2, 3, 8);

COMMIT;