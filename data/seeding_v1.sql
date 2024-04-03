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
        'cafe', '1 rue de la mairie', '38500', 'CHIRENS', 'paiement en liquide'
    ),
    (
        'pizzeria', '1 rue de la gare', '38500', 'CHIRENS', 'paiement par chèque'
    ),
    (
        'bar-tabac', '1 rue de la paix', '38230', 'LIMAU', 'paiement par virement bancaire'
    );

INSERT INTO
    "delivery_date" (date)
VALUES ('2024-02-06 00:00:00+00'),
    ('2024-02-13 00:00:00+00'),
    ('2024-02-20 00:00:00+00'),
    ('2024-02-27 00:00:00+00'),
    ('2024-02-09 00:00:00+00'),
    ('2024-02-16 00:00:00+00'),
    ('2024-02-23 00:00:00+00');

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
        name, description, photo, status
    )
VALUES (
        'Pain nature', 'très bon pain, commandez le !!!', 'Pain nature.jpg', true
    ),
    (
        'Pain complet', 'pain encore meilleur que le nature', 'Pain complet.jpg', true
    ),
    (
        'Pain Méteil', 'pain délicieux !!!', 'Pain aux graines.jpg', true
    );


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
    "bread_has_order" (bread_id, order_id, quantity, price)
VALUES (1, 1, 6, 5.6),
    (2, 1, 5, 4.4),
    (2, 2, 5, 6.2),
    (1, 3, 3, 1.2),
    (2, 3, 8, 3.2);

COMMIT;