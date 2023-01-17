\c pizza_shop;

INSERT INTO pizza_menu (uuid, name, price, image, toppings, tags, default_order, short_description, long_description) VALUES
('92a46c54-2e7e-4c87-97d2-dad9e4978f3d', 'Meatball Pie', 25, 'add image here', ARRAY [ 'cheese','meatball', 'red sauce', 'onion', 'garlic' ], ARRAY [ 'thick_crust' ], 0, 'Our world famous Meatball pie! Contains 1,000 meatballs per pie!', 'Meatball garlic sauteed onions pork pan white pizza. Melted cheese buffalo chicken ranch party fresh tomatoes sausage steak platter marinara. Lasagna white pizza hand tossed burnt mouth extra sauce hawaiian chicken and bacon sausage NY style bacon & tomato onions. Mayo black olives garlic sauce bacon & tomato white garlic steak, pizza roll pesto. White pizza pan hand tossed red onions sausage, personal party pie stuffed pizza pesto chicken and bacon ranch ricotta thin crust. Marinara steak philly steak large spinach white pizza bacon mayo fresh tomatoes mushrooms. Chicago style pizza roll spinach sausage white garlic, pie chicken lasagna pineapple chicken and bacon onions ranch bianca ricotta.'),
('f5934334-b237-4aa2-98cd-4330a00e1659', 'Gluten Free Vegan', 19, 'add image here', ARRAY [ 'broccoli', 'red sauce', 'peppers', 'garlic', 'carrots' ], ARRAY [ 'thin_crust', 'vegetarian' ], 1, 'Gluten free crust, no cheese, lots of veggies', 'Pan meatball bbq party extra sauce pepperoni, pork beef pesto bianca lasagna pepperoni. Meatball anchovies steak string cheese bbq, bbq sauce sauteed onions broccoli stuffed lasagna. Parmesan mayo green bell peppers pineapple sausage chicken pepperoni white garlic. Sausage red onions large bbq rib, white pizza thin crust beef bbq bacon hawaiian. Meatball chicken and bacon chicken wing, bbq banana peppers ricotta bbq sauce hand tossed pepperoni pepperoni anchovies bianca sausage. Stuffed crust broccoli bacon & tomato mayo peppers mushrooms.'),
('425236b4-94a0-464f-873c-d3f18039c96a', 'Grandma Pie', 20, 'add image here', ARRAY [ 'cheese', 'pepperoni', 'red sauce', 'basil' ], ARRAY [ 'thick_crust' ], 2, 'Our famous Grandma Pie!', 'Hand tossed Chicago style pepperoni mayo melted cheese meatball marinara garlic sauteed onions pork pan white pizza. Melted cheese buffalo sauce mozzarella onions ricotta banana peppers chicken ranch party fresh tomatoes sausage Chicago style philly steak platter marinara. Lasagna white pizza hand tossed burnt mouth extra sauce hawaiian chicken and bacon sausage NY style bacon & tomato onions. Mayo black olives garlic sauce bacon & tomato white garlic steak, pizza roll pesto. White pizza pan hand tossed red onions sausage, personal party pie stuffed pizza pesto chicken and bacon ranch ricotta thin crust. Marinara steak philly steak large spinach white pizza bacon mayo fresh tomatoes mushrooms. Chicago style pizza roll spinach sausage white garlic, pie chicken lasagna pineapple chicken and bacon onions ranch bianca ricotta.'),
('deebcf71-685b-4e02-881f-376bbe615c20', 'Margherita', 11.5, 'image goes here', ARRAY [ 'cheese', 'red sauce', 'basil' ], ARRAY [ 'thin_crust', 'vegetarian' ], 3, 'The original classic', 'Bbq sauce chicken Chicago style bacon & tomato chicken and bacon platter peppers spinach pineapple. Broccoli stuffed philly chicken hawaiian beef pie pesto pan lasagna chicken wing. Onions black olives pepperoni large sauteed onions lasagna string cheese parmesan fresh tomatoes chicken and bacon Chicago style pie platter anchovies broccoli. Garlic sausage thin crust, pepperoni burnt mouth bianca mayo party extra sauce thin crust peppers. Stuffed crust steak pineapple melted cheese. Black olives pizza roll white pizza chicken and bacon ranch bacon & tomato mozzarella.');

INSERT INTO customers (firstname, lastname, email, phone, pizza_id) VALUES 
('Jimmy', 'Ryan', 'jimr@chickfila.net', '(212) 555-1235', 1),
('Ashley', 'Smith', 'ash@.google.com', '(212) 555-1234', 1),
('Samuela', 'Walsh', 'swalsh@.dominos.edu', '(212) 555-1233', 2),
('Mabel', 'Short', 'mabels@.papajohns.org', '(212) 555-1232', 2),
('Tim', 'Randolph', 'timothy@.staples.edu', '(212) 555-1231', 3),
('Lucy', 'Chapman', 'lucy74@.shakeshack.edu', '(212) 555-1230', 3),
('Zoe', 'Baker', 'zoebaker@.pastrychef.com', '(212) 555-1229', 4),
('Vanessa', 'Hayes', 'vhayes@krispykreme.com', '(212) 555-1228', 4);

INSERT INTO coupons (valid_coupon, coupon_pizza_id) VALUES
('f5934334-b237-4aa2-98cd-4330a00e1659', 2);