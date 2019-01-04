-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Ven 04 Janvier 2019 à 16:49
-- Version du serveur :  5.7.24-0ubuntu0.18.04.1
-- Version de PHP :  7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Loire_en_Vert`
--

-- --------------------------------------------------------

--
-- Structure de la table `eventLoire`
--

CREATE TABLE `eventLoire` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `event_date_start` date NOT NULL,
  `event_date_finish` date NOT NULL,
  `event_time` varchar(255) DEFAULT NULL,
  `event_where` varchar(255) NOT NULL,
  `place` varchar(255) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `who` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `free` varchar(255) NOT NULL,
  `urlSite` varchar(255) DEFAULT NULL,
  `description` varchar(50000) NOT NULL,
  `lat` decimal(10,6) NOT NULL,
  `lng` decimal(10,6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `eventLoire`
--

INSERT INTO `eventLoire` (`id`, `name`, `image`, `event_date_start`, `event_date_finish`, `event_time`, `event_where`, `place`, `city`, `who`, `type`, `free`, `urlSite`, `description`, `lat`, `lng`) VALUES
(7, 'La mer et son immensité', 'http://fonds-ecran.widewallpapershd.info/file/28384/728x410/16:9/%C3%89t%C3%A9-plage-bord-de-la-mer-paradis-tropical_1634096795.jpg', '2019-01-02', '2019-01-31', '9 h 00 - 13 h 00', 'Stéphanois-Pilat', 'Maison de la Nature', 'Saint-Etienne', 'Famille', 'exposition', 'true', 'https://loireenvert.fr/events/la-mer-et-son-immensite-janvier/', 'Hissez les voiles et prenez le large La mer… Elle fait partie de la vie de chacun, en vacances, en voyage, lors d’activités sportives ou encore par l’intermédiaire de quantités de produits que nous consommons. Mais connaissons-nous vraiment cette immensité et tous les trésors qu’elle recèle ? Quel rôle joue-t-elle sur notre planète ?', '45.750000', '4.850000'),
(8, 'Les poissons migrateurs', 'https://biosphere-bassin-dordogne.fr/wp-content/uploads/2018/08/Saumon-atlantique-%C2%A9-Hans-Petter-Fjeld.jpg', '2018-12-01', '2018-12-31', '13 h 30 - 18 h 00', 'Forez', 'Ecopôle du Forez', NULL, 'Public en situation de handicap', 'exposition', 'false', NULL, 'L’exposition itinérante « Grands Migrateurs de Loire » créée par LOGRAMI dans le cadre du Plan Loire Grandeur Nature présente les poissons migrateurs du bassin de la Loire et leur gestion. L’objectif est de sensibiliser le plus grand nombre aux poissons migrateurs, à leurs problématiques ainsi qu’à l’état des populations sur la Loire.', '45.744839', '4.825602'),
(9, 'L’Afrique noire et ses symboles', 'https://s-media-cache-ak0.pinimg.com/originals/ef/7e/54/ef7e54f3cddc6348136c0ab123e571ca.jpg', '2019-02-01', '2019-02-28', '14 h 00 - 18 h 0', 'Stéphanois-Pilat', 'Maison de la Réserve', NULL, 'Public en situation de handicap', 'exposition', 'true', NULL, 'Du légendaire désert du Sahara aux méandres du Congo, du majestueux  massif de l’Atlas aux neiges éternelles du Kilimandjaro, le continent africain révèle un patrimoine sans égal. Partez à la découverte de ce vaste continent contrasté qu’est l’Afrique. Il y sera question de ses habitants, de leurs coutumes, de sa faune et de sa flore mais aussi des maux qui la tourmentent. Parler de l’Afrique c’est également aborder sa culture ancestrale, son patrimoine oral et ses contes, ainsi que les grands écrivains qu’elle a vu naître.', '45.760573', '4.857305'),
(10, 'Raid pédestre Thiers / Roanne', 'http://monweekendasaint-etienne.com/var/ezflow_site/storage/images/media/images/loisirs/balade-dans-la-reserve-des-gorges-de-la-loire-du-nord-au-sud/502907-1-fre-FR/balade-dans-la-reserve-des-gorges-de-la-loire-du-nord-au-sud1_format_626x331.jpg', '2018-12-20', '2018-12-20', NULL, 'Roannais', 'Salle Fontalon', NULL, 'Passionnés', 'Randonnées', 'false', 'null', 'Rando-campagnarde® FFRandonnée (réduction aux licenciés) Thiers / Roanne : Raid pédestre. 4 parcours en ligne de 16 à 57 km. Marche de nuit. Inscription préalable.Plus d’infos sur  http://rando-loire.org Consultez la rubrique « Prochaines randos » : détails sur cette rando, numéro de téléphone, etc', '45.730425', '4.839938'),
(11, 'La biodiversité et les corridors biologiques', 'https://www.reforestaction.com/sites/default/files/field/image/corridor-biologique.jpg', '2019-01-02', '2019-01-31', '13 h 30 - 18 h 00', 'Forez', 'Ecopôle du Forez', NULL, 'Public en situation de handicap', 'Expositions', 'false', 'https://loireenvert.fr/events/la-biodiversite-et-les-corridors-biologiques/', 'La biodiversité, ou diversité biologique, constitue le tissu vivant de la planète. Elle recouvre l’ensemble des formes de vie sur Terre, les relations qui existent entre elles et avec leurs milieux depuis l’origine commune de la vie. Un ensemble de panneaux vous présenteront la biodiversité sur le territoire de Saint-Etienne La Métropole et les actions menées en faveur des corridors biologiques.\r\n\r\nSans inscription\r\n\r\nOuverture :\r\nMercredis,samedis, dimanches et tous les jours des vacances scolaires de 13 h 30 à 18 h.\r\n\r\nTarif :\r\nPlein tarif : 3 €\r\nTarif réduit* : 1,60 €\r\n*Tarif réduit : demandeurs d’emploi, étudiants, enfants de 7 à 14 ans sur justificatif\r\nGratuit (sur justificatif) : enfants de moins de 7 ans, adhérents de la FNE Loire et de ses associations membres', '45.730420', '4.839933'),
(12, 'Abritons les insectes', 'https://media.cooperation.ch/images/2015/06/15/main_1046x570_1533584537583.jpg', '2019-01-23', '2019-01-23', '14 h 00 - 16 h 00', 'Stéphanois-Pilat', 'Réserve Naturelle Régionale des gorges de la Loire', NULL, 'Enfants', 'Ateliers', 'false', 'https://loireenvert.fr/events/abritons-les-insectes/', 'Préparons d’ores et déjà l’arrivée du printemps et aménageons une maison pour les insectes que nous installerons dans notre jardin.\r\n\r\nDès 4 ans\r\nSur inscription (de 5 à 20 places) jusqu’au 23 janvier 12 h.\r\nTarif \r\nAdultes accompagnant : 3 €\r\nEnfants (7-14 ans) : 2 €\r\nGratuit moins de 7 ans', '43.042912', '1.903884'),
(13, 'Construis ton nichoir', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Birdhouse_aka.jpg/1200px-Birdhouse_aka.jpg', '2019-02-18', '2019-02-18', '14 h 30 - 16 h 30', 'Forez', 'Ecopôle du Forez', NULL, 'Enfants', 'Ateliers', 'false', 'https://loireenvert.fr/events/construis-ton-nichoir-18-fevrier/', 'Après avoir parcouru le sentier de l’Ecopôle du Forez pour retrouver les différents nichoirs et ses espèces occupantes, tu construiras un nichoir de tes propres mains et tu repartiras avec pour l’installer chez toi.\r\n\r\nA partir de 6 ans\r\nLes enfants doivent être accompagnés d’un adulte.\r\nSur inscription (de 5 à 15 places) jusqu’au vendredi 15 février 12h.\r\n\r\nPrévoir : tenue confortable, vêtements chauds.\r\n\r\nTarif (comprend le coût du nichoir)\r\nEnfant : 10 €\r\nAdulte accompagnant : 5 €', '45.726843', '4.815220'),
(14, 'Croq’ Paysage', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM72XN6HdIcNGP5_Z0rmpuk2vzPNG9sp70UQ1DXpilFta79r_2gQ', '2019-02-27', '2019-02-27', '14 h 00 - 16 h 00', 'Stéphanois-Pilat', 'Réserve Naturelle Régionale des gorges de la Loire', NULL, 'Enfants', 'Sorties découvertes', 'false', 'https://loireenvert.fr/events/croq-paysage-2019-02-27/', 'Depuis le point de vue surplombant les gorges de la Loire, observons le paysage qui nous entoure et tentons d’y déceler les marques du passé. Tantôt façonné par le fleuve, tantôt par l’homme, découvrons l’histoire de ce site.\r\n\r\nSur inscription (de 5 à 25 places) jusqu’au 27 février midi\r\nAnimation annulée si moins de 5 inscrits ou,en cas de mauvais temps. Vous serez remboursé.\r\nEnfants bienvenus dès 6 ans.\r\nLes enfants doivent être accompagnés d’un adulte.\r\n\r\nTarif\r\nAdulte : 3 €\r\nEnfant de 7 à 14 ans : 2 €*\r\nEnfant de moins de 7 ans : gratuit*\r\n*Sur justificatif', '45.747711', '4.824100'),
(15, 'L’anniversaire d’Annie la fourmi', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGGa5ks4XggZhSqyCYD25RcmKcmW8gYZe47FR83nbOLnxYYDEIQ', '2019-04-15', '2019-04-15', '14 h 30 - 16 h 00', 'Forez', 'Ecopôle du Forez', NULL, 'Enfants', 'Ateliers', 'false', 'https://loireenvert.fr/events/annie-la-fourmi-2019-04-15/', 'Pour les enfants : Viens aider l’équipe de l’Ecopôle à organiser l’anniversaire d’Annie la fourmi. Tu découvriras tous ses amis autour d’une fête surprise !\r\n\r\nA partir de 4 ans\r\n\r\nLes enfants doivent être accompagnés d’un adulte.\r\n\r\nSur inscription jusqu’au: 15 avril 12 h (de 5 à 15 places)\r\n\r\nMerci d’inscrire le nombre exact de participants (adultes et enfants)\r\nAnimation annulée si moins de 5 inscrits. Vous serez remboursé.\r\n\r\nTarif : \r\nAdulte : 5 €\r\nEnfant : 2,50 €', '45.752744', '4.828400'),
(16, 'Marche des Papillottes\r\n', 'https://www.lamontagne.fr/photoSRC/Gw--/marche-pour-la-foret-a-neoux_4037388.jpeg', '2018-12-16', '2018-12-16', 'Toute la journée', 'Roannais', 'Maison des sociétés', NULL, 'Passionnés', 'Randonnées', 'false', 'https://loireenvert.fr/events/marche-des-papillottes/', 'Rando-campagnarde® FFRandonnée (réduction aux licenciés)\r\nRiorges (Roannais) : marche des papillottes.\r\n5 circuits de 6 à 29 km\r\nPlus d’infos sur  http://rando-loire.org\r\nConsultez la rubrique « Prochaines randos » : détails sur cette rando, numéro de téléphone, etc.', '45.778800', '4.825804'),
(18, 'Balade découverte à l’Ecopôle du Forez', 'https://cdn-s-www.leprogres.fr/images/80B1C0F5-3C65-41D6-93B9-11F74B81B2E7/LPR_v1_02/balade-crepusculaire-a-l-ecopole-du-forez-a-la-decouverte-de-la-faune-et-de-la-flore-ici-un-heron-cendre-photo-celik-erkul-1479278308.jpg', '2019-02-03', '2019-02-03', '14 h 30 - 16 h 00', 'Forez', 'Ecopôle du Forez', NULL, 'Famille', 'Passionnés', 'false', 'https://loireenvert.fr/events/balade-decouverte-ecopole-du-forez-2019-02-03/', 'Venez découvrir l’Ecopôle du Forez en compagnie d’un guide naturaliste de la Ligue pour la protection des oiseaux de la Loire.\r\n\r\nAu cours d’une balade commentée d’environ 1 h 30, vous observerez une multitude d’oiseaux d’eau et comprendrez l’histoire du site qui les a conduit à s’installer ici.\r\n\r\nSans inscription (de 5 à 15 places)\r\n\r\nTarif\r\nPlein tarif : 5 €\r\nTarif réduit* : 2,50 €\r\nGratuit : adhérents LPO et enfants de moins de 7 ans sur justificatif\r\n* Tarif réduit : demandeurs d’emploi, étudiants, enfants de 7 à 14 ans, adhérents de FNE Loire et de ses associations membres', '43.658497', '4.115656'),
(19, 'Fête du sol et de la terre', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGSl9A7Y5xf5Wz6uxpzWYOFu0_u2gswAdTvRo_-mr6qsFyh3ITg', '2019-03-17', '2019-03-17', '10 h 00 - 18 h 00', 'Forez', 'Ecopôle du Forez', NULL, 'Famille', 'Evénements', 'false', 'https://loireenvert.fr/events/fete-du-sol-terre/', 'Dans le cadre de la journée internationale de la forêt (21 mars), venez fêter avec nous un arbre commun des bords de Loire que nous utilisons tous sous différentes formes depuis des millénaires.\r\n\r\nProgramme\r\nTressage de saule vivant,\r\nInitiation à la vannerie,\r\nExpo-vente de maîtres vanniers,\r\nBalade nature,\r\nAteliers enfants,\r\nConstruction de nichoirs\r\n\r\nSans inscription\r\n\r\nTarif \r\n1€ par personne (adulte ou enfant)', '45.691999', '4.792768');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `eventLoire`
--
ALTER TABLE `eventLoire`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `eventLoire`
--
ALTER TABLE `eventLoire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
