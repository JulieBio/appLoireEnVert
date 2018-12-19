-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Lun 10 Décembre 2018 à 10:17
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
  `event_date` varchar(255) NOT NULL,
  `event_time` date (255) DEFAULT NULL,
  `event_where` date (255) NOT NULL,
  `place` varchar(255) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `who` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `free` varchar(255) NOT NULL,
  `urlSite` varchar(255) DEFAULT NULL,
  `description` varchar(50000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `eventLoire`
--

INSERT INTO `eventLoire` (`id`, `name`, `image`, `event_date`, `event_time`, `event_where`, `place`, `city`, `who`, `type`, `free`, `urlSite`, `description`) VALUES
(7, 'La mer et son immensité', 'http://fonds-ecran.widewallpapershd.info/file/28384/728x410/16:9/%C3%89t%C3%A9-plage-bord-de-la-mer-paradis-tropical_1634096795.jpg', 'tout le mois', '9 h 00 - 13 h 00', 'Stéphanois-Pilat', 'Maison de la Nature', 'Saint-Etienne', 'Famille', 'exposition', 'true', 'https://loireenvert.fr/events/la-mer-et-son-immensite-janvier/', 'Hissez les voiles et prenez le large La mer… Elle fait partie de la vie de chacun, en vacances, en voyage, lors d’activités sportives ou encore par l’intermédiaire de quantités de produits que nous consommons. Mais connaissons-nous vraiment cette immensité et tous les trésors qu’elle recèle ? Quel rôle joue-t-elle sur notre planète ?'),
(8, 'Les poissons migrateurs', 'https://biosphere-bassin-dordogne.fr/wp-content/uploads/2018/08/Saumon-atlantique-%C2%A9-Hans-Petter-Fjeld.jpg', 'samedi 01 décembre 2018 - dimanche 30 décembre 2018', '13 h 30 - 18 h 00', 'Forez', 'Ecopôle du Forez', NULL, 'Public en situation de handicap', 'exposition', 'false', NULL, 'L’exposition itinérante « Grands Migrateurs de Loire » créée par LOGRAMI dans le cadre du Plan Loire Grandeur Nature présente les poissons migrateurs du bassin de la Loire et leur gestion. L’objectif est de sensibiliser le plus grand nombre aux poissons migrateurs, à leurs problématiques ainsi qu’à l’état des populations sur la Loire.'),
(9, 'L’Afrique noire et ses symboles', 'https://s-media-cache-ak0.pinimg.com/originals/ef/7e/54/ef7e54f3cddc6348136c0ab123e571ca.jpg', 'vendredi 01 février 2019 - jeudi 28 février 2019', '14 h 00 - 18 h 0', 'Stéphanois-Pilat', 'Maison de la Réserve', NULL, 'Public en situation de handicap', 'exposition', 'true', NULL, 'Du légendaire désert du Sahara aux méandres du Congo, du majestueux  massif de l’Atlas aux neiges éternelles du Kilimandjaro, le continent africain révèle un patrimoine sans égal. Partez à la découverte de ce vaste continent contrasté qu’est l’Afrique. Il y sera question de ses habitants, de leurs coutumes, de sa faune et de sa flore mais aussi des maux qui la tourmentent. Parler de l’Afrique c’est également aborder sa culture ancestrale, son patrimoine oral et ses contes, ainsi que les grands écrivains qu’elle a vu naître.'),
(10, 'Raid pédestre Thiers / Roanne', 'http://monweekendasaint-etienne.com/var/ezflow_site/storage/images/media/images/loisirs/balade-dans-la-reserve-des-gorges-de-la-loire-du-nord-au-sud/502907-1-fre-FR/balade-dans-la-reserve-des-gorges-de-la-loire-du-nord-au-sud1_format_626x331.jpg', 'dimanche 02 décembre 2018', NULL, 'Roannais', 'Salle Fontalon', NULL, 'Passionnés', 'Randonnées', 'false', 'null', 'Rando-campagnarde® FFRandonnée (réduction aux licenciés) Thiers / Roanne : Raid pédestre. 4 parcours en ligne de 16 à 57 km. Marche de nuit. Inscription préalable.Plus d’infos sur  http://rando-loire.org Consultez la rubrique « Prochaines randos » : détails sur cette rando, numéro de téléphone, etc');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
