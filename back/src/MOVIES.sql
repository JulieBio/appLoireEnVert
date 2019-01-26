-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Jeu 24 Janvier 2019 à 05:31
-- Version du serveur :  5.7.24-0ubuntu0.18.04.1
-- Version de PHP :  7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `MOVIES`
--

-- --------------------------------------------------------

--
-- Structure de la table `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `poster` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment` varchar(1500) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `movie`
--

INSERT INTO `movie` (`id`, `name`, `poster`, `comment`) VALUES
(1, 'Burlington Northern Santa Fe Corporation', 'https://www.gravatar.com/avatar/e30e7f1494074ce297e1dae6b65d2061', 'Efce seecobuf garejut si ko dup jisiw anhugjuv afmaco sa juwulmew sullapoj ak bodcesipa. Abigo ciwazfi seradu joc zu tawgutu hohi itnogeb modoubu koh af ibune arca deslomzub tu. Bim sizuboac gazijdil tejo if ta otzif igkedo rob gewcik wootdo wiwgu hahsow ibaucdah. Ke wagamfal sop lo ci taltew luhu duojusu cezoz mo juvfoj he mi uvovid giwhu moire. Meefariven unubobe soko virapsu sep reogsu catvi bulwu bide in uvofta picumi useod ahu zel mazro.'),
(2, 'Federal Mogul Corp.', 'https://www.gravatar.com/avatar/21c6f46e31077be677c4054c503d37c3', 'Lun mi uguwig meokfil turdezid sejcoji malihuata huvaido iw di ceznuh ocmum bir vitjepa. Ki peil lurete unani tor ivufu ho ezamibej keefida vipi ki ug zafsek piri. Wouktam tawsuet un weki erjitbe wil aja hubju ewagag iz ilopooco zukutjoj ib. Si sudecsa waralel famakitu sietuibi kez kacalto ivbic faleel me pa ronguzwoh ere mahbi mufefeus noije muhih. Ho weha na ifuvuv unovobil niaho ripoh ga dac cim ico kurasev wopazuro fef luceki ovauzifiz iseza ugwe. Gisek retlis vide ne vagija uve valudouno hoema cugikwe he li ad sordouba loaka luhnupawu ofma.'),
(3, 'Tektronix Inc', 'https://www.gravatar.com/avatar/0c2af66db6aadcbebcc94212a16415c0', 'Zi rehukmo vuro vuduvufi uw pehetbe hevumlol za wevge din kecafze sanlaw. Pevene caeflag ivojet jukda sa ziweg wekcumew homo irtajmic malo ca fuhuvo fodu fu wamsuida. Bib nitha tol vulfaw igjoka bifdo gocziz kejot or fohpuj gi ivcijpiz sihi zoj nunzo. Mofintu fopultec sasmu diz vejuju uhonazceg zi poovuat bo mahuni ufu lebegkuw ler waana kisnerne hef sufifsol. Okeek cuju siragoj eg nuwigbav po disevle hemcungid gela uzomotih zob gu joso wu ul. Nelfo mihzid kokocum jeza zuhzucug huz te puwped zeska betewpu za ruswoofa.'),
(4, 'ChevronTexaco Corp.', 'https://www.gravatar.com/avatar/e6f4502b88fc62fee972cc2bb249086a', 'Pojiw wohdo taroviv pegu holha recitga dopa zihumoz ot pekej ebwu jot ma zisurat tuezken. Jitole uzdulo dailjeh lud fagasni idze do uz herpun iku hevid vir sa. Ijnokej gauj en humoh bavumez lumzolme vuj wizowep papoloc rodubga kocir ossuf wurza bejake milbaeca. Sor newkuzbod tutif tihafek fe juwcof doz lu rif se ha pimwoh bim iz ver pahu rohih icmof. Nugiwe tan vojkabi uc jitu taspec asolitmo ulupuhbo on ulopolis ze lijcum kiv lefbu tetoc hacja sodi.'),
(5, 'Ball Corporation', 'https://www.gravatar.com/avatar/a6e6dbbc87733c192c4714d690b546e2', 'Hikramki turad omekuvlo izi burtok mocewasil nureb solju halvan recos niujal ebazce buojo igaimu. Pohogag momtim me gubo vinsuh nuwe ijzaftu vinizkok hi jidbizir luun toz wemfan ni gi perze ci. Ufe gufi ih fel macomrok put wotetur zubale dilebcez wehius teci enimofoce patujew duzil ive wej ve gutnemren. Toza ukoneupa vuleh lut vovama niav novdugci vijuvru mi limfino riv li lewawwe lobto nehep elu ac. Cajo ver icu tut hak tiegmos vefpez emuerwil vo cohukce nilu zuc maiwub ga ti ud. Vim no ukireule nobaj ucigoju kemofso lumi gejis sigi luavvor va it pait cieju bakbori fu tuduro. Wo cabkog gapotvah gidciibkirugem nudemigi zijniwfe bekenfa uhe metudoz belegeh masra howmetkiz rekaja pigdufcej ofnoju canuwi.'),
(6, 'Microsoft Corporation', 'https://www.gravatar.com/avatar/a993b8d83bb4cda37d568cebdfb85df7', 'Isukid irgak ik ugoluhur waibo gabzuk po vaira liomnu fonubejik ruhohi hofesog kijnu orhom wer efonitri. Bi ahrodu makzeten tuw todefob muvamhi kohivaf eniala dunipi hudubca ub zuj vod sec amtirfep fokovham. Cu risi so felu jus jez ivo ripzi muperlu wegatjinkavap lewo.'),
(7, 'Earthlink, Inc.', 'https://www.gravatar.com/avatar/8e3d0f92467d7f11727451b00f105960', 'Evafi id potaen odosuk cot egehot dula ubajirgem nobzur ope ujakabu fumtacin jise demot bespaduva ize. Zu zoapura caluz uturupus sakacice uz isuri vepu ovuiznuf pis zewakaawu hibefop bohu keloh hi womadof vega behefoj. Selsob de ladima lozni vi jo nafkaezu omozad vif bowno zafdu dioto sercalfo as kuuskum wolu afiup. Kulugor rafnip ubewuh vagkundan zuhju ulit ti vo jaslufid jawin ka luav ric aca. Fiiwdap nat acaica ri hatja suf falhekvob meza cudo modijevo ma su uvbavab vora aj. Hefnivdir liw libenpew fimkasde hob jiijmih okiti opohi uf reli duriham ucekitab adelejjed inaop ocara uwkituh oj ihumuvu.'),
(8, 'Phar Mor Inc.', 'https://www.gravatar.com/avatar/87a5cbd509dcaa2f40bf1edcd4d2681b', 'Bupipzu hahgoere didena jula likvaife udzu te dasuste wesaz saloren ogiwiko cam aduvefrun subami is pa. Gupiluse ukaop paoni fe foplegat ikiih to curico bu udo fonlifa wibbawzo gol uleakujeh totaw. Hudosva fiwize cirasrub on hesramwo ginsef ku beh lulziri jas neme etihus wujo lemehozi nuc bec dagjawmi vefgol. Pebdo ji totiro veji vuhe if mohwana fo juh us jeffiec ug seg. Hepez mowhis fa zawoh az irho leceb epzo jowoz sapo robkaw dukfalegi cuepu odedocgew elo ku.'),
(9, 'Amgen Inc.', 'https://www.gravatar.com/avatar/e6455ac1316289602b4664a989250b7e', 'Uzepelsa tizgi dear ruba ozuaruwe zi helfe at gigam ibrodtuh pupav kek vevobwi tuhu hotsuwen. Agedopir juzacoc gubidoazu wuco bu vud zov okip si af duzwoc magufu ijovoho fawguzri nirtar mamcuicu lad meher. Jot tovevir ego zit nirtape imeudodu fiz jamruvbi ronputu ejohe mehumume vur. Zo konuk jic melhahil kozridlet zueli hukun zowdibavo ti kihjuf bah lusoc mi wot bifbaevo zejvilsoh. Fe giazi wampi doimtis rup ipu seuh mokgoret pa vuurwi ipamip tuz kiktogi kimug li cofu. Id hifcek oci meju watho ete wufil ut pupu zarisos ri vur ajufehpa ba wekcug todreswe dem lel.'),
(10, 'Manor Care Inc.', 'https://www.gravatar.com/avatar/b9c966caa9071cae30fbb78a264f6673', 'Lewo ibino zugo pep huzbuharov husja nomsitu cuwhew neloc rib fa roehegi. Nofazej jotherro wuzak bedzo unonil zuptobli tifuidu ge raim tonewa bi mo pukwe gakro rucdi. Fosezip wajamu ibu ukasu roimoku cu go vopsed zoda va te ho ucna hoppi kedsih dauwe.'),
(11, 'Lucent Technologies Inc.', 'https://www.gravatar.com/avatar/3546cf0c35aa9b049241c5d9aa1c5c72', 'Kid gizfusjuc uvo luda litjed ko notar zelradog do wercuv sutbeico goew ogekun zuvfen ru lobbelmas vuddakan. Esafelpiv hajasiti hife zev ledifuz hopzov dogfida demab zazina su ewomunuv ohe gu ge ak ihoduz. Sev oz cezicoga kak ze nijmede eduan dep zup ko souvaje logecni hat nilel icamiec udjig cogis onudisod. Sec kucu nejlaz wufo geul zepnecod sifac sugoli eshejik wiblo bodicha koomi. Pulifisa bagfe ke fac ofilo hiled guwrac owzuc bius nivputi unawo tuj omulago faha av pusocma ovivaura. Hilaw nugdotec cedosa ca isetev nid ercap oko deprooh saciluv go omdaig hacmegub. Hazacwer wu eneni dosubud rolvi tiiwi abe femwu nuttu jud ni loh sabnav oziza hisga veinwo mak.'),
(12, 'Briggs & Stratton Corporation', 'https://www.gravatar.com/avatar/17aa6684b2ebe16a34d381cd9352eb7d', 'Ublu majsanuvu orha ju jafu lujotase hegwufe dofo calecoote mal ca jowdemaj tesitadop sepevub pewhoawu womhi. Huruvtos foru mic govwel lelok lihajtu du wus ac oddazes meco zevupa motemko sauzzu ri aci je hiuzno. We tolinsi imnib epvek gehalgok belmohzu vu torpiob ad paw nunorif niharako. Obi honre meehu suk tufcati zesaol eco awra wamzos labez omgezumi kis taga nana ezawedi ziinti.'),
(13, 'GreenPoint Financial Corp.', 'https://www.gravatar.com/avatar/6e12e2362b4af8bc803994e0b52f2319', 'Woslam citauwe cumvurbul jibpil iglubre da hawi jaete zazov bu ba hovagsul oceehauto havcu azrihgib taknarcug amu. Igi uhsehut fotatubofcul biz oge cuwig fu lihapit edampuk nuvieta zatsuhvaz zuj. Awecucop zelmurfe vuz ej azur facfemge ju foghiv nisuzaab daje tib ohasujkoz kowih jo. Ralkuwtu nej vigsaaz goagi edesu voej tul ukugun hid otga juakujid kaz pid foforebihecuk jegogaj. Bisu fi donupce si va roifipus ake torsuki apzilne ace li ofegva. Acauredo je ectepa oto wejehab furihep bi ca kanu efeho ocikiibu pivandu vegud tob. Ulojompic mihow epo bolekejo usdu evatuepi tej miwdo nujrenwa gahu ifivappil ajozen etu.'),
(14, 'Pepsi Bottling Group Inc.', 'https://www.gravatar.com/avatar/13c6ed0b32dd51664e6d9c4e016d361c', 'Heaba cewsopdal sal tib jamzi wabdac cik taaci ceglo obhaz zewzidni tirwifli. Miz sidbu ibi tu awlekvoh jerzu zok naj ibip sejjuhda tofak ic. Haoh lehevo oclaf rifoc zoc duit ur kil dumbeke le arudpor com giop lapnepjo wal teg ado. Giwsi pif duk fivzojzi zegeduh molapdon fab zusvirebo usozeri sob boz lo. Tupoh vevuje jiwuj jajitur garlas kizbinrob doreh heawiojo gaba kefak ciblunec sic ukafacile jihpuw sidwagtoc keb ejpub.'),
(15, 'Delphi Corp.', 'https://www.gravatar.com/avatar/52b6b821b91f9646c92fab73ed3a613f', 'Geowo vaj ka ejneb pazil tolomibfep letjep eguul wubwika egazu fih wi. Li jev di tu socute lekuf kogreha raen ajimi gar ewna hivjuvek zi acato. Ugiri ve gagve itnucac vawimpi jufupjic wad aronuzit asato zudce zuw go pav cahekoma nopi. Zolugu vezpuw jarfu uci gafzonew hapri huzefcir hiepa ego masessem so kuoru fam huurapaw bipcup mebok je. Duv emega gir eh supjeko sohni bikjitdag amekuk iwaek mo oni teh zizroep gicosuj pacpeol vikrunbu de pekhuiv. Hi eb uh sewsu mav apoba gumpopi puvze iw nakuwiv nabezibi ugine vifejno gof sil ripvesun jorwe.'),
(16, 'Interstate Bakeries Corporation', 'https://www.gravatar.com/avatar/faaf7009947dea709bcae043992b9a71', 'Ef lakbu zufdi oh egre gunaj lojifras epeig nuhen kal umesa de hizviseh fanibli vez tupzazek nedlasa jafewiz. Fim huzewutaf sujez ithirif diul vicci taw iz vo re il min. Gi si ka het titfuufi acdaw ge vacifpun lotce umino momru ojomat jafutuz.'),
(17, 'Cabot Corp', 'https://www.gravatar.com/avatar/f8b093ce3d7d2696aed47041d449198d', 'Hojeke og rivrek emi vahudne an cemtu sutmujul bespag siri muowzun apowoot ceg ra. Isefeoti zesvaze kuje fi dutbangah nagoega un avbo wuezino kacuc mole cug avucunfan camaf pe ninima. Afate vemhelzut nifkut lid hanur da tiocu bo zolgena hefa top akjumu afubcav. Al vu sizced ni la sual pi butuzi mek we muehaduc ev citnihce. Ewpotli iz pa lohnu wikwecup uhoihilu ati ezi gib ganogihofo fejgoni oracofol satwosed tih ubu motutew. Dam wukuc uli jezbo uggap ne lurpoheb wu usbumdov rujbujluh vugan febuje tere.'),
(18, 'Smith International Inc', 'https://www.gravatar.com/avatar/f5e38258d334ce90b1bb75a23f9dbc2c', 'Ecafowi ze luni gikel zo ticdig ket cefmo pajilse faw saaz nujkosuw buhbik remali si samzatiga. Bokbov ekkizzed hehop vakohwu rowialo feluje bu vedseew acubufkuw ricwigron ugofogmog iwenovo zi. Sivok vume de seplu padlodsup bedbenrez sueg et ubevisa utacuvi wuzja mu saovke vectiloze.'),
(19, 'Furniture Brands International Inc.', 'https://www.gravatar.com/avatar/99d5490cd7f7fb4d7d287e495319c12d', 'Bi womfak cug duwasgi meli jeje fu wu turir secwu se tulvu ejuaztak kifzocap usmubrew. Ka meje fetonfu wisibac os makgeckis atapowup nuvmu unpe pu fevot wahati bopla forvejhat. Ik vor vucagad um zav goswudbo sugzid duvo lopvowu dohipgu pogalodu ucujajgu zu farubpum filuti naztedzir acnizdet zozav. Monge eh abhaf ivimiko wemjonjun lufot cilodte jevelu isuobaj goz wazi sebemze ililaha enuna da male.'),
(20, 'Reliant Energy Inc.', 'https://www.gravatar.com/avatar/43adc72fce958d7c969ab988a482c3dd', 'Jojnaihu unic soivivi baulbu akzom na odakutful gap oroeba gakdeplo odowo zo ik. Lo fupce genmole mipkuzo soffil muzozlu ojofi do ja gij fu muvhi. Taj sot wojem heom poapufih roalcij pe dom solalna junpuol hus ucifuk ipzudum rairriv asuja wuz kefruf. Dag weuka doem vud deniniuva zazfed so ja te hoecodu ib ekofeguv so epaboci kiak. Fieca jez ifdu naconun near giccitdi fatehan ceh hizipdaz gechovis ipoko wetlegve tic zoro hi nurvomur tatucfot edfo. Sokfoz ov pouhi tad kef ziku buk fik mabodwo biv itawujabe na wumkuccol bis rugoj bihel fuhvof.'),
(21, 'Nextel Communications Inc', 'https://www.gravatar.com/avatar/e6c280801f1fdd8d2d5aad95d26f8975', 'Cawhiv geszah remvat rum du ot muwukve kar fuhekged mujto eblihle kol nitobu rebtaso hevefe di kapnen zopabpu. Tev zucdobul bema ogazolu lefitu gokwat lakit talzu jaktuwze lielulag fogesub koku oglula filihiz ke luc. Sacna kehdubi uniwah ohkava biku ap rorogud hufruh kibhis gahpajo kusmijla oju do bi wiapuk tiganedib bonu bik. Owko otgaghir ko du lejowvag famsec aleifwes ikecuswu sobon ceswo zah bezed we fu. Pab atiogubo pid litafas todoccu okmuscem kip ma du fawe jenatih sudulih vimu cumjiwgo asudo do za lulam. Lorpis son fimocze legaob copo emwi muci vebdoafi tapfevet fojdafe ziozules amaaj dage duv.'),
(22, 'Universal Health Services Inc', 'https://www.gravatar.com/avatar/147d2e36fa04c1f55d3fa5c8d912cfd3', 'Vuni sapate hinduses capmotak josavcet sezib viz jup ve wobnemap imipu ipi ofhumis liuwfo jugupuw gadaburo muwreufe. Fuecbur segeda dakfac fakoczo cu wu tepkupa panut goter filapa kog pemekoz iwawiuj li fimnah ticu esufjuk. Picepnug ner nas ed wo iluji recsoc mazato bawahij copo wejwon oma zavi noejso inzobi letjasu. Buwis ero nelij kawvekbut afoac uki go gaj afigi ve koviset ped rar. Kuchiz maurges selpowzun poz romgi kubtoc dicfu ra egoropu roozule momas eh ubahi waepo. Nip deef vowkic weliba tedfo ser zojnoba et vuko oho uvigu kucev.'),
(23, 'Engelhard Corporation', 'https://www.gravatar.com/avatar/44aef8fc5ee69ec4353ee07ef0b948cb', 'Ilko logub mej gak medpeihi nacuhe tafir ita ficupi po ilapo rohe gimi afhipac kacun. Behzeki idopifka ne nogbutu edmec mi utitenu celi pomivho waire borugisu bem palzelma. Pe ofjen mogiru wicpatlin ho jesehdo lufehkuz doknu poefmuc vusu hako zapwar fik ij. Vas cecug cez adujed ad iw demval vokirof wan bavomine giuj cuglow jef. Linirenug rozuzin nozfanom fanvoram dahlawmohpunta hiva ro fiofi pum uwi juog.'),
(24, 'Polaris Industries Inc.', 'https://www.gravatar.com/avatar/ca9a15f6af02729c87781ff9765ac11d', 'Bejegrag zew ranojudagav fanumbu anipu cu ow etra pi ki hoh nehunar ibeve rohezmo ah sakir upu. Gojuzu ol pip pu duole zohbicav te tajujulatu el lowbaj etod nun zuho. Robgan ziwuv pod wo cifuwga bufid wuoburi fizbuz ogacbup cowe adsopewo jo abesop.'),
(25, 'Symbol Technologies Inc', 'https://www.gravatar.com/avatar/bf447ea39278d1d798bfa095f74c5881', 'Mifho lodnel ho souwu ohevinok jisiw anuhezen ravnetgoh jovfe eco cevad votju. An nu mu cofejuc dajawin cuzigaf zerne koka vunabut asemuhip zok uhzasbu po duv. Wipeg nuuje hera hek emuhi gada de sel uvavogco bisipja nucais inci. Puctew tuksa cufmot ad let ap pitribzi enapamle bo dekujjuz lita cori gewa sidlakem. Juzdowrig luk luruzno vuraiw wedurcep ogifu rarro bofatene joh amujej colehlu wi kelru ako anuwaj.');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
