-- -------------------------------------------------------------
-- TablePlus 4.5.0(396)
--
-- https://tableplus.com/
--
-- Database: da8lj9b35pijpp
-- Generation Time: 2021-10-26 23:07:46.7610
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS shops_id_seq;

-- Table Definition
CREATE TABLE "public"."shops" (
    "id" int4 NOT NULL DEFAULT nextval('shops_id_seq'::regclass),
    "name" varchar NOT NULL,
    "email" varchar NOT NULL,
    "phone" varchar NOT NULL,
    "address" varchar NOT NULL,
    "image" varchar,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now(),
    "url" varchar NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."shops_tags" (
    "shops" int4 NOT NULL,
    "tags" int4 NOT NULL,
    PRIMARY KEY ("shops","tags")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS tags_id_seq;

-- Table Definition
CREATE TABLE "public"."tags" (
    "id" int4 NOT NULL DEFAULT nextval('tags_id_seq'::regclass),
    "title" varchar NOT NULL,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now(),
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

-- Table Definition
CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "firstName" varchar,
    "lastName" varchar,
    "email" varchar NOT NULL,
    "username" varchar NOT NULL,
    "password" varchar NOT NULL,
    "isActive" bool NOT NULL DEFAULT false,
    "activationToken" varchar,
    "activationExpiry" int4,
    "passwordResetToken" varchar,
    "passwordResetExpiry" int4,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."shops" ("id", "name", "email", "phone", "address", "image", "createdAt", "updatedAt", "url") VALUES
(2, 'Daraz', 'darazdemo@gmail.com', '01800000000', 'notun bazar,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634827865/store-search/uq4yka5pbdziwfpr1rqq.jpg', '2021-10-21 14:51:19.370302', '2021-10-21 14:51:19.370302', 'https://www.daraz.com.bd/'),
(3, 'Chaldal', 'chaldaldemo@gmail.com', '01700000000', 'Badda,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634827989/store-search/cb3ayu3iraxn6c5uac1c.webp', '2021-10-21 14:53:21.174645', '2021-10-21 14:53:21.174645', 'https://chaldal.com/grocery'),
(4, 'PriyoShop', 'priyoshopdemo@gmail.com', '01600000000', 'Uttara,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634828166/store-search/j4ggwnt2rjyohpwh8fgy.png', '2021-10-21 14:56:16.80283', '2021-10-21 14:56:16.80283', 'https://priyoshop.com/'),
(5, 'pickaboo', 'pickaboodemo@gmail.com', '01300000000', 'Khuril,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634828375/store-search/rgsga1h7s0bxdhwljuqm.png', '2021-10-21 14:59:46.645216', '2021-10-21 14:59:46.645216', 'https://www.pickaboo.com/'),
(6, 'ajkerdeal', 'ajkerdealdemo@gmail.com', '018XXXXXXXX', 'cumilla,Bangladesh', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634828522/store-search/d1mxunqrwfjv82a3feop.png', '2021-10-21 15:02:13.645855', '2021-10-21 15:02:13.645855', 'https://ajkerdeal.com/'),
(7, 'Rokomari', 'rokomaridemo@gmail.com', '01600000000', 'Bashundara,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634828641/store-search/teomf8d83hx9fsh0n8nn.jpg', '2021-10-21 15:04:15.02186', '2021-10-21 15:04:15.02186', 'https://www.rokomari.com/book'),
(8, 'Bagdoom', 'badoomdemo@gmail.com', '01555555555', 'motijil,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634828756/store-search/v3d0cp4dxz0vqa7om74o.png', '2021-10-21 15:06:12.249929', '2021-10-21 15:06:12.249929', 'https://onlineshoppingbd.org/bagdoom-com/'),
(9, 'Clickbd', 'clickbddemo@gmail.com', '01222222222', 'Dhaka,Bangladesh', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634828832/store-search/qoijljqyv1zb6gvmpllf.jpg', '2021-10-21 15:08:09.958845', '2021-10-21 15:08:09.958845', 'https://www.clickbd.com/'),
(10, 'Othoba', 'othobademo@gmail.com', '0156666666', 'khulna,Bangladesh', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634829000/store-search/xbtqqurcyvv5os8bcgru.png', '2021-10-21 15:10:08.035386', '2021-10-21 15:10:08.035386', 'https://www.othoba.com/'),
(11, 'Jadroo', 'jadroodemo@gmail.com', '01655555555', 'comilla,Bangladesh', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634832638/store-search/eplw2nrd28uyzpdsejsp.png', '2021-10-21 16:10:48.179381', '2021-10-21 16:10:48.179381', 'https://www.jadroo.com/'),
(12, 'Banglashoppers', 'banglashoppersdemo@gmail.com', '01422222222', 'khilga,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634832765/store-search/iiplyiv556udng1lcemb.png', '2021-10-21 16:12:53.354864', '2021-10-21 16:12:53.354864', 'https://www.banglashoppers.com/'),
(13, 'Foodpanda', 'Foodpandademo@gmail.com', '01845454545', 'khilkhet,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634833057/store-search/iz0eyygi0i2lbu3xs3jd.png', '2021-10-21 16:17:49.083752', '2021-10-21 16:17:49.083752', 'https://www.foodpanda.com/'),
(14, 'Sohoz', 'sohozdemo123@gmail.com', '01899999999', 'badda,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634878730/store-search/w4hagquq4cdbufut9gtu.png', '2021-10-22 04:59:39.056197', '2021-10-22 04:59:39.056197', 'https://www.shohoz.com/'),
(15, 'Shwapno', 'shwapnodwmo@gmail.com', '01477777777', 'Rampura,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634878898/store-search/l2eu13glxpephjnoec8z.png', '2021-10-22 05:01:46.74987', '2021-10-22 05:01:46.74987', 'https://www.shwapno.com/'),
(16, 'Khaafood', 'khaafood@gmail.com', '01633333333', 'Rampura,Kacha Bazar ,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634879021/store-search/wr9601pdy4qymh3mpczk.png', '2021-10-22 05:03:49.918347', '2021-10-22 05:03:49.918347', 'https://www.khaasfood.com/'),
(17, 'Sheba', 'shebademo@gmail.com', '01955555555', 'Abul Hotel,,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634879131/store-search/oxlgl1nstrwndy3uo5oq.jpg', '2021-10-22 05:05:39.977523', '2021-10-22 05:05:39.977523', 'https://www.sheba.com/'),
(18, 'Pharmachi', 'pharmichidemo@gmail.com', '01799999999', 'Malibag,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634879248/store-search/pycf8ghjdkn934htrn9f.jpg', '2021-10-22 05:08:08.072061', '2021-10-22 05:08:08.072061', 'https://www.pharmacy.nhg.com.sg/'),
(19, 'Doctorola', 'doctorolademo@gmail.com', '01833333333', 'Pulish pari,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634879413/store-search/dcczctez0yzbru90qffe.png', '2021-10-22 05:10:21.20586', '2021-10-22 05:10:21.20586', 'https://doctorola.com/'),
(20, 'Belancer', 'belencerdemo@gmail.com', '01345454545', 'Khilga,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634879636/store-search/qjoel6xxnissb7hpwvmu.png', '2021-10-22 05:14:11.233911', '2021-10-22 05:14:11.233911', 'https://belancer.com/'),
(21, 'TendaBazar', 'tenderbazardemo@gmail.com', '01298948989', 'Basabo,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634879799/store-search/auxvlgughfqdkvtz5v69.jpg', '2021-10-22 05:16:45.731012', '2021-10-22 05:16:45.731012', 'http://www.tenderbazar.com/'),
(22, 'Hungrynaki', 'hungrynakidemo@gmail.com', '01389898484', 'Jatrabari,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634880137/store-search/vcixxtozpv3z4kpxkimk.png', '2021-10-22 05:22:24.024086', '2021-10-22 05:22:24.024086', 'https://hungrynaki.com/'),
(23, 'Dharankrishi', 'dharankrishidemo@gmail.com', '01390390393', 'Gulistan,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634880252/store-search/btaagjcxrakjrdbri2fd.jpg', '2021-10-22 05:25:16.078911', '2021-10-22 05:25:16.078911', 'https://www.facebook.com/dharankrishi'),
(24, 'Similarweb', 'similarwebdemo@gmail.com', '01828383838', 'bangladesh', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634913514/store-search/yhmacmtod4lxibhdrlm1.jpg', '2021-10-22 14:39:31.176173', '2021-10-22 14:39:31.176173', 'https://www.similarweb.com/website/amazon.com.br/'),
(25, 'Iferi', 'iferidemo@gmail.com', '018338398383', 'dhaka,bangladesh', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634913704/store-search/ur8wdh5c9ner2hxgzxzq.jpg', '2021-10-22 14:42:52.685119', '2021-10-22 14:42:52.685119', 'https://www.iferi.com/'),
(26, 'KhaasFood', 'KhaasFooddemo@gmail.com', '013898484949', 'khuril,dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634913847/store-search/kh5k77nuvozmmzy4zodt.png', '2021-10-22 14:44:30.647692', '2021-10-22 14:44:30.647692', 'https://www.facebook.com/khaasfood/'),
(27, 'Branoo', 'Branoodemo@gmail.com', '01838383838', 'kakrail,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634913943/store-search/sbt3lqfuecatwqvxz3ge.jpg', '2021-10-22 14:46:13.236413', '2021-10-22 14:46:13.236413', 'http://www.branoo.com/'),
(28, 'Sheba', 'Shebademo@gmail.com', '01384983984', 'Gulistan,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634914513/store-search/irdqt1vxgizfy7agzh1x.jpg', '2021-10-22 14:55:45.75658', '2021-10-22 14:55:45.75658', 'https://www.sheba.com/'),
(29, 'Kiksha', 'Kikshademo@gmail.com', '01287323838', 'dhanmodi,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634914842/store-search/c6fawyphegvmg2vtmrut.jpg', '2021-10-22 15:00:48.677619', '2021-10-22 15:00:48.677619', 'https://www.facebook.com/kikshadotcom/'),
(30, 'Shoparu', 'Shoparudemo@gmail.com', '01239033939', 'kolabagan,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634915631/store-search/kiu7nqvkfclgfaa0de4z.jpg', '2021-10-22 15:14:12.257615', '2021-10-22 15:14:12.257615', 'https://bdbusinessfinder.com/listing/shoparu-com/'),
(31, 'techland', 'techlanddemo@gmail.com', '01293444444', 'kakoli,Dhaka', 'https://res.cloudinary.com/tareqmahmud/image/upload/v1634915792/store-search/jdhhzrs67wg85uwatj6t.png', '2021-10-22 15:16:49.436824', '2021-10-22 15:16:49.436824', 'https://www.techlandbd.com/');

INSERT INTO "public"."shops_tags" ("shops", "tags") VALUES
(2, 1),
(2, 3),
(2, 5),
(2, 7),
(2, 8),
(3, 4),
(3, 6),
(3, 7),
(3, 8),
(4, 8),
(4, 9),
(4, 10),
(4, 11),
(5, 11),
(5, 12),
(5, 13),
(5, 14),
(6, 15),
(6, 16),
(6, 17),
(6, 18),
(6, 19),
(7, 21),
(7, 22),
(7, 26),
(7, 27),
(7, 28),
(8, 97),
(8, 98),
(8, 99),
(8, 100),
(9, 15),
(9, 18),
(9, 19),
(9, 28),
(10, 53),
(10, 55),
(10, 56),
(10, 60),
(11, 18),
(11, 27),
(11, 28),
(11, 35),
(12, 28),
(12, 43),
(12, 50),
(12, 56),
(13, 5),
(13, 60),
(13, 62),
(13, 63),
(13, 67),
(14, 26),
(14, 38),
(14, 44),
(14, 46),
(15, 28),
(15, 83),
(15, 84),
(15, 85),
(16, 40),
(16, 56),
(16, 72),
(16, 85),
(17, 93),
(17, 94),
(17, 97),
(17, 98),
(18, 16),
(18, 92),
(18, 95),
(18, 97),
(19, 11),
(19, 20),
(19, 35),
(19, 46),
(20, 5),
(20, 37),
(20, 44),
(20, 48),
(21, 20),
(21, 34),
(21, 50),
(21, 58),
(22, 16),
(22, 28),
(22, 39),
(22, 40),
(23, 2),
(23, 3),
(23, 4),
(23, 5),
(24, 18),
(24, 34),
(24, 47),
(24, 63),
(25, 7),
(25, 27),
(25, 63),
(25, 88),
(26, 36),
(26, 67),
(26, 88),
(26, 97),
(27, 61),
(27, 73),
(27, 86),
(27, 99),
(28, 31),
(28, 48),
(28, 61),
(28, 78),
(29, 21),
(29, 43),
(29, 59),
(29, 75),
(30, 8),
(30, 41),
(30, 79),
(30, 98),
(31, 38),
(31, 74),
(31, 99);

INSERT INTO "public"."tags" ("id", "title", "createdAt", "updatedAt") VALUES
(1, 'egg', '2021-10-20 17:24:39.534876', '2021-10-20 17:24:39.534876'),
(2, 'rice', '2021-10-20 17:24:44.87488', '2021-10-20 17:24:44.87488'),
(3, 'oil', '2021-10-20 17:40:10.339277', '2021-10-20 17:40:10.339277'),
(4, 'mobile', '2021-10-20 17:59:02.17434', '2021-10-20 17:59:02.17434'),
(5, 'Pepper', '2021-10-21 03:44:09.504232', '2021-10-21 03:44:09.504232'),
(6, 'Bashundhara Fortified Soyabean Oil', '2021-10-21 03:45:28.646421', '2021-10-21 03:45:28.646421'),
(7, 'Trimmed Young Coconut', '2021-10-21 03:45:55.276213', '2021-10-21 03:45:55.276213'),
(8, 'Chicken Eggs', '2021-10-21 03:46:17.361826', '2021-10-21 03:46:17.361826'),
(9, 'Malta', '2021-10-21 03:46:35.239841', '2021-10-21 03:46:35.239841'),
(10, 'Cherry Pineapple', '2021-10-21 03:46:49.2592', '2021-10-21 03:46:49.2592'),
(11, 'Broiler Chicken Skin', '2021-10-21 03:47:17.310996', '2021-10-21 03:47:17.310996'),
(12, 'Aarong Dairy Sour Yogurt', '2021-10-21 03:47:38.066618', '2021-10-21 03:47:38.066618'),
(13, 'Roast Chicken', '2021-10-21 03:48:00.886125', '2021-10-21 03:48:00.886125'),
(14, 'Duck Eggs (Deshi)', '2021-10-21 03:48:19.15875', '2021-10-21 03:48:19.15875'),
(15, 'Chola Boot Dal', '2021-10-21 03:48:30.892868', '2021-10-21 03:48:30.892868'),
(16, 'Dettol Handwash', '2021-10-21 03:48:52.866985', '2021-10-21 03:48:52.866985'),
(17, 'Vim Dishwashing', '2021-10-21 03:49:04.845718', '2021-10-21 03:49:04.845718'),
(18, ' Fresh Refined Sugar', '2021-10-21 03:49:18.820462', '2021-10-21 03:49:18.820462'),
(19, 'ACI Pure Salt', '2021-10-21 03:49:33.545477', '2021-10-21 03:49:33.545477'),
(20, ' Bombay Sweets Mr. Twist', '2021-10-21 03:49:44.779387', '2021-10-21 03:49:44.779387'),
(21, 'Chinigura Rice', '2021-10-21 03:50:17.464544', '2021-10-21 03:50:17.464544'),
(22, 'Cocola Egg Noodles', '2021-10-21 03:50:39.198861', '2021-10-21 03:50:39.198861'),
(26, 'Nazirshail Rice', '2021-10-21 03:51:25.729797', '2021-10-21 03:51:25.729797'),
(27, 'Moshur Dal', '2021-10-21 03:51:49.692772', '2021-10-21 03:51:49.692772'),
(28, 'Miniket Rice', '2021-10-21 03:52:10.472286', '2021-10-21 03:52:10.472286'),
(29, 'Olympic Premium Energy Plus Biscuit', '2021-10-21 03:52:21.672459', '2021-10-21 03:52:21.672459'),
(30, 'Cumin Seed (Jira)', '2021-10-21 03:52:38.557038', '2021-10-21 03:52:38.557038'),
(31, 'Aarong Dairy Butter', '2021-10-21 03:52:54.771', '2021-10-21 03:52:54.771'),
(32, 'Teer Maida Flour', '2021-10-21 03:53:07.623268', '2021-10-21 03:53:07.623268'),
(33, 'Goodlife Mozzarella Cheese', '2021-10-21 03:53:21.614323', '2021-10-21 03:53:21.614323'),
(34, ' Ispahani Mirzapore Best Leaf Tea', '2021-10-21 03:53:37.138227', '2021-10-21 03:53:37.138227'),
(35, 'Cinnamon (Daruchini)', '2021-10-21 03:53:46.897638', '2021-10-21 03:53:46.897638'),
(36, 'Almonds (Kath Badam)', '2021-10-21 03:54:03.108327', '2021-10-21 03:54:03.108327'),
(37, 'Goalini Full Cream Milk Powder', '2021-10-21 03:54:14.329616', '2021-10-21 03:54:14.329616'),
(38, 'Raisins (Kishmish', '2021-10-21 03:54:30.847569', '2021-10-21 03:54:30.847569'),
(39, 'Kaju Badam', '2021-10-21 03:54:42.562606', '2021-10-21 03:54:42.562606'),
(40, 'Danish', '2021-10-21 03:54:53.877258', '2021-10-21 03:54:53.877258'),
(41, 'Goalini Full Cream Milk', '2021-10-21 03:55:06.733029', '2021-10-21 03:55:06.733029'),
(42, 'Cardamom', '2021-10-21 03:55:19.987876', '2021-10-21 03:55:19.987876'),
(43, 'Radhuni Turmeric', '2021-10-21 03:55:39.478802', '2021-10-21 03:55:39.478802'),
(44, 'Radhuni Chilli', '2021-10-21 03:55:51.291934', '2021-10-21 03:55:51.291934'),
(46, ' Dishwashing', '2021-10-21 03:56:09.884651', '2021-10-21 03:56:09.884651'),
(47, 'Bay Leaves', '2021-10-21 03:56:20.916107', '2021-10-21 03:56:20.916107'),
(48, 'Cock Vermicelli', '2021-10-21 03:56:32.103576', '2021-10-21 03:56:32.103576'),
(49, ' Snickers Chocolate', '2021-10-21 03:56:45.553558', '2021-10-21 03:56:45.553558'),
(50, 'Nestle Maggi Masala Blast', '2021-10-21 03:56:56.718463', '2021-10-21 03:56:56.718463'),
(51, 'Nutella Hazelnut', '2021-10-21 03:57:10.641363', '2021-10-21 03:57:10.641363'),
(52, 'Harpic Toilet', '2021-10-21 03:57:23.024518', '2021-10-21 03:57:23.024518'),
(53, 'Ifad Suji', '2021-10-21 03:57:31.79741', '2021-10-21 03:57:31.79741'),
(54, 'Parachute Coconut Oil', '2021-10-21 03:57:42.662842', '2021-10-21 03:57:42.662842'),
(55, 'Coca-Cola', '2021-10-21 03:57:50.824203', '2021-10-21 03:57:50.824203'),
(56, ' ACI Savlon Liquid Antiseptic', '2021-10-21 03:58:05.856374', '2021-10-21 03:58:05.856374'),
(57, ' Aquafina Drinking Water', '2021-10-21 03:58:14.969853', '2021-10-21 03:58:14.969853'),
(58, 'Lizol Disinfectant Surface', '2021-10-21 03:58:24.178901', '2021-10-21 03:58:24.178901'),
(59, 'Godrej New Hit Cockroaches Spray', '2021-10-21 03:58:35.470336', '2021-10-21 03:58:35.470336'),
(60, 'Radhuni Pure Mustard Oil', '2021-10-21 03:58:55.044226', '2021-10-21 03:58:55.044226'),
(61, ' Aarong Dairy Pure Ghee', '2021-10-21 03:59:06.06835', '2021-10-21 03:59:06.06835'),
(62, 'Sprite', '2021-10-21 03:59:16.990312', '2021-10-21 03:59:16.990312'),
(63, 'Dabur Honey', '2021-10-21 03:59:26.266778', '2021-10-21 03:59:26.266778'),
(64, 'Ahmed Chilli Sauce', '2021-10-21 03:59:36.283154', '2021-10-21 03:59:36.283154'),
(65, 'Trix Dishwashing Liquid Lemon Bottle', '2021-10-21 03:59:46.483451', '2021-10-21 03:59:46.483451'),
(66, 'Nestlé Nescafé Classic Instant Coffee Jar', '2021-10-21 03:59:56.090766', '2021-10-21 03:59:56.090766'),
(67, 'Saffola Active Plus Edible Oil', '2021-10-21 04:00:08.599009', '2021-10-21 04:00:08.599009'),
(68, 'Mediker SafeLife Veggie Wash', '2021-10-21 04:00:22.970994', '2021-10-21 04:00:22.970994'),
(69, ' White Bread', '2021-10-21 04:01:14.385916', '2021-10-21 04:01:14.385916'),
(70, ' Brown Bread', '2021-10-21 04:01:24.045615', '2021-10-21 04:01:24.045615'),
(71, 'Golden Harvest', '2021-10-21 04:01:34.934489', '2021-10-21 04:01:34.934489'),
(72, 'Pran Puffed Rice', '2021-10-21 04:01:46.258992', '2021-10-21 04:01:46.258992'),
(73, 'Pran Flattened Rice', '2021-10-21 04:01:58.747051', '2021-10-21 04:01:58.747051'),
(74, 'Golden Harvest Mega', '2021-10-21 04:02:09.458988', '2021-10-21 04:02:09.458988'),
(75, 'Ispahani Bakery Fresh Dry Cake', '2021-10-21 04:02:18.974546', '2021-10-21 04:02:18.974546'),
(76, ' Flattened Rice', '2021-10-21 04:02:29.710654', '2021-10-21 04:02:29.710654'),
(77, 'Ruchi Puffed Rice', '2021-10-21 04:02:40.911406', '2021-10-21 04:02:40.911406'),
(78, 'Naan Bread 4pcs', '2021-10-21 04:02:53.993164', '2021-10-21 04:02:53.993164'),
(79, 'Queen''s Multigrain Bread', '2021-10-21 04:03:04.683031', '2021-10-21 04:03:04.683031'),
(80, ' Hexisol Hand Rub', '2021-10-21 04:03:33.098788', '2021-10-21 04:03:33.098788'),
(81, 'Sepnil Disinfectant Spray', '2021-10-21 04:03:42.784519', '2021-10-21 04:03:42.784519'),
(82, 'Dettol Disinfectant', '2021-10-21 04:04:00.404465', '2021-10-21 04:04:00.404465'),
(83, 'Alcohol Pads', '2021-10-21 04:04:09.101631', '2021-10-21 04:04:09.101631'),
(84, ' Savlon', '2021-10-21 04:04:18.889623', '2021-10-21 04:04:18.889623'),
(85, 'ACI Savlon', '2021-10-21 04:05:30.628968', '2021-10-21 04:05:30.628968'),
(86, ' Special Sanitizing Combo Pack', '2021-10-21 04:05:38.5762', '2021-10-21 04:05:38.5762'),
(87, 'Dr. Rhazes Ultra', '2021-10-21 04:05:50.536212', '2021-10-21 04:05:50.536212'),
(88, ' Sagudana', '2021-10-21 04:06:13.829515', '2021-10-21 04:06:13.829515'),
(89, 'Sajeeb Pure Isubgul Vushi', '2021-10-21 04:06:21.926129', '2021-10-21 04:06:21.926129'),
(90, 'Hajmola Imli ', '2021-10-21 04:06:30.259977', '2021-10-21 04:06:30.259977'),
(91, 'Isubgul Vushi', '2021-10-21 04:06:39.910977', '2021-10-21 04:06:39.910977'),
(92, 'Chirota', '2021-10-21 04:06:51.127023', '2021-10-21 04:06:51.127023'),
(93, 'Khusboo Sat', '2021-10-21 04:06:59.7054', '2021-10-21 04:06:59.7054'),
(94, ' Khaas Food Berry', '2021-10-21 04:07:09.031589', '2021-10-21 04:07:09.031589'),
(95, 'Horlicks Health And Nutrition Drink Jar', '2021-10-21 04:07:34.87413', '2021-10-21 04:07:34.87413'),
(96, 'Nestle Milo Activ-Go Powder Drink Pouch', '2021-10-21 04:07:42.85325', '2021-10-21 04:07:42.85325'),
(97, 'Vision Room Heater', '2021-10-21 04:08:08.299811', '2021-10-21 04:08:08.299811'),
(98, 'Transtec Ceiling Rose', '2021-10-21 04:08:17.122174', '2021-10-21 04:08:17.122174'),
(99, 'Transtec E27', '2021-10-21 04:08:25.600622', '2021-10-21 04:08:25.600622'),
(100, 'Sunlite Super Econo Flash Light', '2021-10-21 04:08:40.702601', '2021-10-21 04:08:40.702601');

INSERT INTO "public"."users" ("id", "firstName", "lastName", "email", "username", "password", "isActive", "activationToken", "activationExpiry", "passwordResetToken", "passwordResetExpiry") VALUES
(2, NULL, NULL, 'admin@demo.com', 'admin', '$2b$10$67R/Q4BLgfuxOid9mfUgyeewc9KT/suViiVf7V.Z1pXiSvGJhkr5.', 't', '4ee24bd19c842596ce6dd40255ed72d5', 1634836237, NULL, NULL);

ALTER TABLE "public"."shops_tags" ADD FOREIGN KEY ("tags") REFERENCES "public"."tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."shops_tags" ADD FOREIGN KEY ("shops") REFERENCES "public"."shops"("id") ON DELETE CASCADE ON UPDATE CASCADE;