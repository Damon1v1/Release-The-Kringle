USE kringle_db;

INSERT INTO product 
    (name, description, price, image, has_nuts, has_wheat)
VALUES 
('Kringle - Raspberry','Our classic kringle with raspberry filling',15.00,'raspberrykringle.jpg',FALSE,TRUE),
('Kringle - Apple','Our classic kringle with apple filling',15.00,'applekringle.jpg',FALSE,TRUE),
('Kringle - Pecan','Our classic kringle with pecan filling',15.00,'pecankringle.jpg',TRUE,TRUE),
('Kringle - Cherry Cheese','Our classic kringle with cherry cheese filling',15.00,'cherrycheese.jpg',FALSE,TRUE),
('Kringle - Apricot','Our classic kringle with apricot filling',15.00,'apricotkringle.jpg',FALSE,TRUE),
('Kringle - Cream Cheesecake','Our classic kringle with cream cheesecake filling',15.00,'creamcheesecase.jpg',FALSE,TRUE),
('Mini Kringle - Raspberry','A mini version of our classic kringle with raspberry filling',7.00,'miniraspberrykringle.jpg',FALSE,TRUE),
('Mini Kringle - Apple','A mini version of our classic kringle with apple filling',7.00,'miniapplekringle.jpg',FALSE,TRUE),
('Mini Kringle - Pecan','A mini version of our classic kringle with pecan filling',7.00,'minipecankringle.jpg',TRUE,TRUE),
('Gluten Free Kringle - Apple','A gluten free version of our classic kringle with apple filling',25.00,'glutenfreeapplekringle.jpg',FALSE,FALSE);