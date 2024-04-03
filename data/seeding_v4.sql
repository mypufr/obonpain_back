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
        'MARTIN', 'Paul', 'pmartin@free.fr', '$2b$10$FDqHzO.mm.tRE23Vol9RcOs6GCs2gBuMBFF5vOs124kiZ9ykjcnCS', '0909090909', '38400', 'LYON', true, 'client', false, 'allée des tilleuls'
    ),
        (
        'MARTIN', 'Olivier', 'polivier@free.fr', '$2b$10$FDqHzO.mm.tRE23Vol9RcOs6GCs2gBuMBFF5vOs124kiZ9ykjcnCS', '0909090909', '38400', 'LYON', false, 'client', false, 'allée des tilleuls'
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
VALUES 
    ('2024-04-02 00:00:00+00'),
    ('2024-04-05 00:00:00+00'),
    ('2024-04-09 00:00:00+00'),
    ('2024-04-12 00:00:00+00'),
    ('2024-04-16 00:00:00+00'),
    ('2024-04-19 00:00:00+00'),
    ('2024-04-23 00:00:00+00'),
    ('2024-04-26 00:00:00+00'),
    ('2024-04-30 00:00:00+00'),
    ('2024-05-03 00:00:00+00'),
    ('2024-05-07 00:00:00+00'),
    ('2024-05-10 00:00:00+00'),
    ('2024-05-14 00:00:00+00'),
    ('2024-05-17 00:00:00+00'),
    ('2024-05-21 00:00:00+00'),
    ('2024-05-24 00:00:00+00');

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
    (1, 8),
    (1, 9),
    (1, 10),
    (1, 11),
    (1, 12),
    (1, 13),
    (1, 14),
    (1, 15),
    (1, 16),
    (2, 1),
    (2, 2),
    (2, 3),
    (2, 4),
    (2, 9),
    (2, 10),
    (2, 11),
    (2, 14),
    (2, 15),
    (2, 16),
    (3, 5),
    (3, 6),
    (3, 7),
    (3, 11),
    (3, 13),
    (3, 15),
    (4, 2),
    (4, 4),
    (4, 6),
    (4, 9),
    (4, 12),
    (4, 14),
    (4, 16);




INSERT INTO
    "bread_type" (
        name, description, ingredient, photo, status
    )
VALUES (
        'Pain artisanal au levain naturel', 'Le pain de base, le bon goût de l’authenticité !', 'Farine paysanne T80, Sel, Levain et Eau', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain artisanal au levain naturel.jpg', true
    ),
    (
        'Pain aux graines', 'Un mélange de graines incorporé à la pâte pour un cocktail de saveur.', 'Farine paysanne T80, Sel, Levain, Eau et Graines (tournesol, lin doré, lin brun et millet décortiqué. )', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain aux graines.jpg', true
    ),
    (  
        'Pain complet bio', 'Un pain d’une belle couleur sombre et particulièrement digeste avec l’ajout de son de blé', 'Farine paysanne T80, Son de blé, Sel, Levain et Eau', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain complet bio.jpg', true
    ),
    (     
        'Brioche bio nature', 'Une brioche particulièrement fondante qui se trouve être faite avec une pâte de pain au lait !', 'Farine T65, Lait, Sel, Levure, Sucre et Beurre', 'file:///monChemin/projet-11-obon-pain-back/public/img/Brioche bio nature .jpg', true
    ),
    (     
        'Pain méteil', 'Mélange à 50/50 de farines de blé T80 et de seigle.', 'Farine paysanne T80, Farine paysanne de seigle, Sel, Levain et Eau', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain meteil.jpg', true
    ),
    (     
        'Pain breton', 'Pain né au fournil. La saveur noisette du sarrasin s’exprime avec douceur. Idéal avec un beau morceau de beurre salé !', 'Farine paysanne T80, Farine paysanne de seigle, Sel, Levain et Eau', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain breton.jpg', true
    ),
    (     
        'Pain de seigle', 'Pain de couleur brune assez parfumé et au goût parfumé. Il très riche en fibres alimentaires, en oligo-éléments, en sels minéraux et de bonne valeur nutritionnelle.!', 'Farine paysanne de seigle intégrale, sel, Levain de seigle et Eau', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain complet bio.jpg', false
    ),
      (     
        'Pain Khorasan', 'variété d’une belle couleur jaune et d’une excellente conservation !!', 'Farine de khorasan, sel, Levain de khorasan et Eau', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain khorasan.jpg', true
    ),
    (     
        'Pain au petit-épeautre', 'Pain pauvre en gluten, Se caractérisant par la richesse et la qualité de ses protéines, le petit épeautre contient 8 acides aminés essentiels à L’organisme ! Cette farine est une excellente source de protéine végétale', 'Farine paysanne de petit-épeautre, Sel, Levain de petit-épeautre et Eau', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain au petit-epeautre.jpg', true
    ),
    (     
        'Pain au petit-épeautre et graines', 'Les vertus du petit-épeautre avec la saveur gourmande du mélange de graines.
        Graines: tournesol, lin doré, lin brun et millet décortiqué.', 'Farine paysanne de petit- épeautre, Sel, Levain de petit-épeautre, eau et graines (tournesol, lin doré, lin brun et millet décortiqué. )', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain au petit-epeautre et graines.jpg', true
    ),
    (     
        'Pain aux Noix et raisins', 'Délicieux à tout moment de la journée!', 'Farine paysanne T80, Sel, Levain, eau, noix locales et raisins secs', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain aux noix et raisins.jpg', true
    ),
    (     
        'Pain aux Noix', 'Noix de Grenoble bien évidemment !', 'Farine paysanne T80, Sel, Levain, eau et noix locale', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain aux noix.jpg', true
    ),
    (     
        'Pain brioché bio', 'Succombé au délice d’un pain sucré ! Ingrédients: de la pâte à pain nature, de l’huile d’olive et du sucre', 'Farine T80, Sel, Levain, eau, huile d’olive, sucre et pépites de chocolat', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain brioche bio.jpg', true
    ),
    (     
        'Pain brioché chocolat', 'Un délice à goûter absolument !', 'Farine T80, Sel, Levain, Lait, Oeufs, Beurre et Sucre', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain brioche chocolat.jpg', true
    ),
    (     
        'Tourton Nantais bio', 'Pain brioché de la région nantaise. Il a tout pour ravir les papilles: Du lait, des œufs, du beurre et du sucre !', 'Farine T80, Sel, Levain, Lait, Oeufs, Beurre et Sucre', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain complet bio.jpg', true
    ),
    (     
        'Tourton Nantais bio au chocolat', 'Le summum de la gourmandise !', 'Farine T80, Sel, levain, Lait, Oeufs, Beurre, Sucre et Pépites de chocolat', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain complet bio.jpg', true
    ),
    (     
        'Tourton Nantais aux raisins', 'Délicieux !', 'Farine de riz, Farine T80, Sel, levain, Lait, Oeufs, Beurre, Sucre et Raisins secs', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain complet bio.jpg', true
    ),
    (     
        'Pain Riz-Sarrasin', 'Pain aux farines sans gluten. Un pain plutôt dense à la mie humide, parfumée à la délicate saveur de noisette de la farine de sarrasin.', 'Farine de riz, farine paysanne de sarrasin, levain de riz et eau  (Attention, trace de gluten)', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain complet bio.jpg', true
    ),
    (     
        'Pain Riz-Sarrasin aux graines:', 'Un pain sans gluten avec la saveur gourmande du mélange de graines', 'Farine de riz, Farine paysanne de sarrasin, Levain de riz, Eau et Graines (tournesol, lin doré, lin brun et millet décortiqué. )', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain complet bio.jpg', true
    ),
    (     
        'Pain de mie bio', 'Pain moelleux, compagnon des petits déjeuners et des croques monsieur', 'Farine T80, Sel, Levure, Sucre, Lait et Beurre.', 'file:///monChemin/projet-11-obon-pain-back/public/img/Pain de mie bio.jpg', true
    ),
    (     
        'Brioche au chocolat', 'Pour les vrais gourmands !', 'Farine T65, lait, sel, Levure, Sucre et Beurre et
        Pépites de chocolat', 'file:///monChemin/projet-11-obon-pain-back/public/img/Brioche bio nature .jpg', true
    ),
    (     
        'Brioche aux raisins', 'Pour varier les plaisirs !', 'Farine T65, lait, sel, Levure, Sucre et Beurre et
        Raisins secs', 'file:///monChemin/projet-11-obon-pain-back/public/img/Brioche bio nature .jpg', true
    )
    ;


INSERT INTO
    "mould" (name, quantity)
VALUES ('Non moulé', 1000),
    ('A', 10),
    ('B', 15),
    ('C', 5);


INSERT INTO
    "bread" (
        weight, price, status, bread_type_id, mould_id
    )
VALUES (500, '2.70', true, 1, 1),
    (1000, '5.60', true, 1, 2),
    (1000, '5.50', true, 2, 1),
    (500, '3.00', true, 3, 3),
    (1000, '4.50', true, 4, 1),
    (500, '3.00', true, 5, 3),
    (500, '3.00', false, 5, 2),    
    (500, '3.20', true, 6, 3),
    (500, '3.00', true, 7, 1),    
    (500, '3.00', false, 7, 3),
    (1000, '5.50', true, 8, 1), 
    (1000, '5.50', true, 8, 2),
    (1000, '5.60', true, 9, 1),
    (1000, '5.60', false, 9, 2),
    (1000, '4.50', true, 10, 1),
    (1000, '5.60', true, 11, 1),
    (1000, '5.00', true, 12, 1),
    (1000, '5.00', true, 12, 2),
    (500, '3.00', true, 12, 3),
    (1000, '5.20', true, 13, 4);



INSERT INTO
    "order" (
        creator_id, customer_id, delivery_place_id, delivery_date_id
    )
VALUES (1, 1, 1, 4),
    (2, 1, 2, 2),
    (3, 3, 3, 5),
    (2, 1, 2, 2),
    (3, 3, 2, 11),
    (3, 3, 2, 14),
    (3, 3, 2, 15),
    (2, 1, 3, 11),
    (3, 1, 3, 13),
    (3, 1, 3, 15);



INSERT INTO
    "bread_has_order" (bread_id, order_id, quantity, price)
VALUES (1, 1, 6, 3.2),
    (2, 1, 5, 5.4),
    (3, 2, 5, 1.6),
    (4, 3, 3, 2.2),
    (5, 3, 2, 2.5),
    (6, 4, 1, 2.3),
    (7, 4, 5, 2.2),
    (8, 5, 10, 2.2),
    (9, 5, 3, 2.6),
    (10, 6, 2, 5.2),
    (11, 6, 1, 2.2),
    (12, 7, 4, 6.2),
    (13, 8, 7, 2.2),
    (14, 8, 8, 5.2),
    (15, 9, 3, 2.2),
    (16, 9, 4, 6.2),
    (17, 10, 3, 2.2),
    (18, 10, 2, 5.2),
    (19, 10, 1, 2.2),
    (3, 3, 8, 3.1);

COMMIT;