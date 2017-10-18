const constants = require('../constants.js');

const {
  CHEM_LAB, MARKET, VAULTED, RELICS, UNOBTAINABLE, ENERGY_LAB, INVASIONS, BARO_KITEER,
  RAZORBACK_ARMADA, BIO_LAB, TENNO_LAB, LOGIN_REWARD, STALKER, CEPHALON_SIMARIS, GRUSTRAG_THREE,
  ANNIVERSARY, ALERTS, CETUS_TIER_5,
} = constants.acquisition;

const {
  THE_SECOND_DREAM, THE_WAR_WITHIN,
} = constants.acquisitionQuests;

const {
  ARBITERS_OF_HEXIS, STEEL_MERIDIAN, NEW_LOKA, RED_VEIL, THE_PERRIN_SEQUENCE, CEPHALON_SUDA,
} = constants.acquisitionFactions;

const {
  HEAVY_GUNNERS, DREKAR_TROOPERS, VOR_AND_KRILL, VOR, KELA_DE_THAYM,
} = constants.acquisitionEnemies;

const {
  RIFLE, SHOTGUN, SNIPER, BOW, LAUNCHER, SPEARGUN,
} = constants.primaryType;

const {
  SINGLE_PISTOL, DUAL_PISTOLS, THROWN,
} = constants.secondaryType;

const {
  SWORD, DUAL_SWORDS, DAGGER, MACHETE, DUAL_DAGGERS, FIST, SWORD_SHEILD, SPARRING, POLEARM, STAFF,
  GLAIVE, WHIP, HEAVY_BLADE, HAMMER, NIKANA, CLAWS, SCYTHE, TONFA, GUNBLADE, NUNCHAKU, BLADE_WHIP,
  HYBRID, RAPIER,
} = constants.meleeType;

module.exports = {
  weapons: {
    primary: [
      { name: 'Argonak', acquisition: CHEM_LAB, type: RIFLE, masteryRank: 7 },
      { name: 'Boltor', acquisition: MARKET, type: RIFLE, masteryRank: 2 },
      { name: 'Boltor Prime', acquisition: VAULTED, type: RIFLE, masteryRank: 2 },
      { name: 'Telos Boltor', acquisition: ARBITERS_OF_HEXIS, type: RIFLE, masteryRank: 12 },
      { name: 'Braton', acquisition: MARKET, type: RIFLE },
      { name: 'MK1-Braton', acquisition: MARKET, type: RIFLE },
      { name: 'Braton Prime', acquisition: RELICS, type: RIFLE },
      { name: 'Braton Vandal', acquisition: UNOBTAINABLE, type: RIFLE },
      { name: 'Burston', acquisition: MARKET, type: RIFLE },
      { name: 'Burston Prime', acquisition: RELICS, type: RIFLE },
      { name: 'Buzlok', acquisition: CHEM_LAB, type: RIFLE, masteryRank: 9 },
      { name: 'Dera', acquisition: ENERGY_LAB, type: RIFLE, masteryRank: 4 },
      { name: 'Dera Vandal', acquisition: INVASIONS, type: RIFLE, masteryRank: 4 },
      { name: 'Gorgon', acquisition: HEAVY_GUNNERS, type: RIFLE, masteryRank: 3 },
      { name: 'Prisma Gorgon', acquisition: BARO_KITEER, type: RIFLE, masteryRank: 3 },
      { name: 'Gorgon Wraith', acquisition: RAZORBACK_ARMADA, type: RIFLE, masteryRank: 3 },
      { name: 'Grakata', acquisition: MARKET, type: RIFLE },
      { name: 'Prisma Grakata', acquisition: BARO_KITEER, type: RIFLE },
      { name: 'Grinlok', acquisition: CHEM_LAB, type: RIFLE, masteryRank: 5 },
      { name: 'Harpak', acquisition: MARKET, type: RIFLE, masteryRank: 3 },
      { name: 'Hema', acquisition: BIO_LAB, type: RIFLE, masteryRank: 7 },
      { name: 'Hind', acquisition: MARKET, type: RIFLE },
      { name: 'Karak', acquisition: MARKET, type: RIFLE },
      { name: 'Karak Wraith', acquisition: INVASIONS, type: RIFLE },
      { name: 'Latron', acquisition: MARKET, type: RIFLE },
      { name: 'Latron Prime', acquisition: VAULTED, type: RIFLE },
      { name: 'Latron Wraith', acquisition: INVASIONS, type: RIFLE },
      { name: 'Mutalist Quanta', acquisition: BIO_LAB, type: RIFLE, masteryRank: 2 },
      { name: 'Opticor', acquisition: ENERGY_LAB, type: RIFLE, masteryRank: 6 },
      { name: 'Paracyst', acquisition: BIO_LAB, type: RIFLE, masteryRank: 5 },
      { name: 'Soma', acquisition: MARKET, type: RIFLE, masteryRank: 6 },
      { name: 'Soma Prime', acquisition: VAULTED, type: RIFLE, masteryRank: 6 },
      { name: 'Stradavar', acquisition: MARKET, type: RIFLE, masteryRank: 8 },
      { name: 'Supra', acquisition: ENERGY_LAB, type: RIFLE, masteryRank: 7 },
      { name: 'Supra Vandal', acquisition: UNOBTAINABLE, type: RIFLE, masteryRank: 10 },
      { name: 'Sybaris', acquisition: TENNO_LAB, type: RIFLE, masteryRank: 5 },
      { name: 'Sybaris Prime', acquisition: RELICS, type: RIFLE, masteryRank: 12 },
      { name: 'Dex Sybaris', acquisition: UNOBTAINABLE, type: RIFLE },
      { name: 'Tenora', acquisition: TENNO_LAB, type: RIFLE, masteryRank: 10 },
      { name: 'Tetra', acquisition: MARKET, type: RIFLE, masteryRank: 3 },
      { name: 'Prisma Tetra', acquisition: BARO_KITEER, type: RIFLE, masteryRank: 4 },
      { name: 'Tiberon', acquisition: MARKET, type: RIFLE, masteryRank: 4 },
      { name: 'Zenith', acquisition: LOGIN_REWARD, type: RIFLE, masteryRank: 5 },
      { name: 'Amprex', acquisition: ENERGY_LAB, type: RIFLE, masteryRank: 5 },
      { name: 'Flux Rifle', acquisition: ENERGY_LAB, type: RIFLE, masteryRank: 6 },
      { name: 'Glaxion', acquisition: ENERGY_LAB, type: RIFLE, masteryRank: 6 },
      { name: 'Ignis', acquisition: CHEM_LAB, type: RIFLE, masteryRank: 4 },
      { name: 'Ignis Wraith', acquisition: `${CHEM_LAB} [Limited]`, type: RIFLE, masteryRank: 6 },
      { name: 'Quanta', acquisition: ENERGY_LAB, type: RIFLE, masteryRank: 4 },
      { name: 'Quanta Vandal', acquisition: BARO_KITEER, type: RIFLE, masteryRank: 4 },
      { name: 'Synapse', acquisition: BIO_LAB, type: RIFLE, masteryRank: 6 },
      { name: 'Arca Plasmor', acquisition: ENERGY_LAB, type: SHOTGUN, masteryRank: 10 },
      { name: 'Astilla', acquisition: MARKET, type: SHOTGUN, masteryRank: 7 },
      { name: 'Boar', acquisition: DREKAR_TROOPERS, type: SHOTGUN, masteryRank: 2 },
      { name: 'Boar Prime', acquisition: VAULTED, type: SHOTGUN, masteryRank: 2 },
      { name: 'Convectrix', acquisition: ENERGY_LAB, type: SHOTGUN, masteryRank: 2 },
      { name: 'Drakgoon', acquisition: MARKET, type: SHOTGUN, masteryRank: 3 },
      { name: 'Hek', acquisition: MARKET, type: SHOTGUN, masteryRank: 4 },
      { name: 'Vaykor Hek', acquisition: STEEL_MERIDIAN, type: SHOTGUN, masteryRank: 12 },
      { name: 'Kohm', acquisition: MARKET, type: SHOTGUN, masteryRank: 2 },
      { name: 'Phage', acquisition: BIO_LAB, type: SHOTGUN, masteryRank: 6 },
      { name: 'Sobek', acquisition: MARKET, type: SHOTGUN, masteryRank: 4 },
      { name: 'Strun', acquisition: MARKET, type: SHOTGUN, masteryRank: 1 },
      { name: 'MK1-Strun', acquisition: MARKET, type: SHOTGUN },
      { name: 'Strun Wraith', acquisition: INVASIONS, type: SHOTGUN },
      { name: 'Tigris', acquisition: MARKET, type: SHOTGUN, masteryRank: 4 },
      { name: 'Tigris Prime', acquisition: RELICS, type: SHOTGUN, masteryRank: 13 },
      { name: 'Sancti Tigris', acquisition: NEW_LOKA, type: SHOTGUN, masteryRank: 12 },
      { name: 'Lanka', acquisition: ENERGY_LAB, type: SNIPER, masteryRank: 7 },
      { name: 'Rubico', acquisition: MARKET, type: SNIPER, masteryRank: 5 },
      { name: 'Snipetron', acquisition: UNOBTAINABLE, type: SNIPER },
      { name: 'Snipetron Vandal', acquisition: INVASIONS, type: SNIPER },
      { name: 'Vectis', acquisition: MARKET, type: SNIPER, masteryRank: 3 },
      { name: 'Vectis Prime', acquisition: VAULTED, type: SNIPER },
      { name: 'Vulkar', acquisition: MARKET, type: SNIPER },
      { name: 'Vulkar Wraith', acquisition: BARO_KITEER, type: SNIPER },
      { name: 'Attica', acquisition: TENNO_LAB, type: BOW },
      { name: 'Cernos', acquisition: MARKET, type: BOW },
      { name: 'Cernos Prime', acquisition: RELICS, type: BOW },
      { name: 'Rakta Cernos', acquisition: RED_VEIL, type: BOW, masteryRank: 12 },
      { name: 'Daikyu', acquisition: TENNO_LAB, type: BOW },
      { name: 'Dread', acquisition: STALKER, type: BOW },
      { name: 'Lenz', acquisition: ENERGY_LAB, type: BOW, masteryRank: 8 },
      { name: 'Mutalist Cernos', acquisition: MARKET, type: BOW, masteryRank: 5 },
      { name: 'Paris', acquisition: MARKET, type: BOW },
      { name: 'MK1-Paris', acquisition: MARKET, type: BOW },
      { name: 'Paris Prime', acquisition: RELICS, type: BOW, masteryRank: 4 },
      { name: 'Zhuge', acquisition: MARKET, type: BOW },
      { name: 'Miter', acquisition: VOR_AND_KRILL, type: LAUNCHER, masteryRank: 6 },
      { name: 'Ogris', acquisition: CHEM_LAB, type: LAUNCHER, masteryRank: 8 },
      { name: 'Panthera', acquisition: MARKET, type: LAUNCHER, masteryRank: 7 },
      { name: 'Penta', acquisition: MARKET, type: LAUNCHER, masteryRank: 6 },
      { name: 'Secura Penta', acquisition: THE_PERRIN_SEQUENCE, type: LAUNCHER, masteryRank: 12 },
      { name: 'Simulor', acquisition: CEPHALON_SIMARIS, type: LAUNCHER, masteryRank: 5 },
      { name: 'Synoid Simulor', acquisition: CEPHALON_SUDA, type: LAUNCHER, masteryRank: 12 },
      { name: 'Tonkor', acquisition: MARKET, type: LAUNCHER, masteryRank: 5 },
      { name: 'Torid', acquisition: BIO_LAB, type: LAUNCHER, masteryRank: 4 },
      { name: 'Zarr', acquisition: MARKET, type: LAUNCHER, masteryRank: 7 },
      { name: 'Ferrox', acquisition: ENERGY_LAB, type: SPEARGUN, masteryRank: 7 },
      { name: 'Javlok', acquisition: CHEM_LAB, type: SPEARGUN, masteryRank: 6 },
      { name: 'Scourge', acquisition: TENNO_LAB, type: SPEARGUN, masteryRank: 6 },
    ],
    secondary: [
      { name: 'Acrid', acquisition: BIO_LAB, type: SINGLE_PISTOL, masteryRank: 7 },
      { name: 'Angstrum', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 4 },
      { name: 'Prisma Angstrum', acquisition: BARO_KITEER, type: SINGLE_PISTOL, masteryRank: 4 },
      { name: 'Arca Scisco', acquisition: ENERGY_LAB, type: SINGLE_PISTOL, masteryRank: 10 },
      { name: 'Azima', acquisition: LOGIN_REWARD, type: SINGLE_PISTOL, masteryRank: 5 },
      { name: 'Ballistica', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 2 },
      { name: 'Ballistica Prime', acquisition: RELICS, type: SINGLE_PISTOL, masteryRank: 7 },
      { name: 'Rakta Ballistica', acquisition: RED_VEIL, type: SINGLE_PISTOL, masteryRank: 6 },
      { name: 'Bolto', acquisition: MARKET, type: SINGLE_PISTOL },
      { name: 'Cestra', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 4 },
      { name: 'Furis', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 2 },
      { name: 'MK1-Furis', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 2 },
      { name: 'Knell', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 10 },
      { name: 'Kraken', acquisition: MARKET, type: SINGLE_PISTOL },
      { name: 'Kulstar', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 4 },
      { name: 'Lato', acquisition: MARKET, type: SINGLE_PISTOL },
      { name: 'Lato Prime', acquisition: UNOBTAINABLE, type: SINGLE_PISTOL, masteryRank: 6 },
      { name: 'Lato Vandal', acquisition: UNOBTAINABLE, type: SINGLE_PISTOL, masteryRank: 4 },
      { name: 'Lex', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 3 },
      { name: 'Lex Prime', acquisition: RELICS, type: SINGLE_PISTOL, masteryRank: 5 },
      { name: 'Magnus', acquisition: MARKET, type: SINGLE_PISTOL },
      { name: 'Marelok', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 5 },
      { name: 'Vaykor Marelok', acquisition: STEEL_MERIDIAN, type: SINGLE_PISTOL, masteryRank: 6 },
      { name: 'Pandero', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 7 },
      { name: 'Seer', acquisition: VOR, type: SINGLE_PISTOL },
      { name: 'Sicarus', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 3 },
      { name: 'Sicarus Prime', acquisition: VAULTED, type: SINGLE_PISTOL, masteryRank: 7 },
      { name: 'Sonicor', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 2 },
      { name: 'Stug', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 2 },
      { name: 'Tysis', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 4 },
      { name: 'Vasto', acquisition: MARKET, type: SINGLE_PISTOL },
      { name: 'Vasto Prime', acquisition: RELICS, type: SINGLE_PISTOL, masteryRank: 3 },
      { name: 'Viper', acquisition: MARKET, type: SINGLE_PISTOL },
      { name: 'Zakti', acquisition: TENNO_LAB, type: SINGLE_PISTOL, masteryRank: 6 },
      { name: 'Atomos', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 4 },
      { name: 'Cycron', acquisition: ENERGY_LAB, type: SINGLE_PISTOL, masteryRank: 9 },
      { name: 'Embolist', acquisition: BIO_LAB, type: SINGLE_PISTOL, masteryRank: 8 },
      { name: 'Gammacor', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 2 },
      { name: 'Synoid Gammacor', acquisition: CEPHALON_SUDA, type: SINGLE_PISTOL, masteryRank: 6 },
      { name: 'Nukor', acquisition: CHEM_LAB, type: SINGLE_PISTOL, masteryRank: 4 },
      { name: 'Spectra', acquisition: ENERGY_LAB, type: SINGLE_PISTOL, masteryRank: 4 },
      { name: 'Brakk', acquisition: GRUSTRAG_THREE, type: SINGLE_PISTOL, masteryRank: 6 },
      { name: 'Bronco', acquisition: MARKET, type: SINGLE_PISTOL },
      { name: 'Bronco Prime', acquisition: RELICS, type: SINGLE_PISTOL, masteryRank: 10 },
      { name: 'Detron', acquisition: MARKET, type: SINGLE_PISTOL, masteryRank: 6 },
      { name: 'Mara Detron', acquisition: BARO_KITEER, type: SINGLE_PISTOL, masteryRank: 9 },
      { name: 'Euphona Prime', acquisition: RELICS, type: SINGLE_PISTOL, masteryRank: 14 },
      { name: 'Kohmak', acquisition: CHEM_LAB, type: SINGLE_PISTOL, masteryRank: 10 },
      { name: 'Pyrana', acquisition: TENNO_LAB, type: SINGLE_PISTOL, masteryRank: 12 },
      { name: 'Afuris', acquisition: MARKET, type: DUAL_PISTOLS, masteryRank: 4 },
      { name: 'Dex Furis', acquisition: ANNIVERSARY, type: DUAL_PISTOLS, masteryRank: 5 },
      { name: 'Akbolto', acquisition: MARKET, type: DUAL_PISTOLS },
      { name: 'Telos Akbolto', acquisition: ARBITERS_OF_HEXIS, type: DUAL_PISTOLS, masteryRank: 6 },
      { name: 'Akbronco', acquisition: MARKET, type: DUAL_PISTOLS, masteryRank: 2 },
      { name: 'Akbronco Prime', acquisition: RELICS, type: DUAL_PISTOLS, masteryRank: 11 },
      { name: 'Akjagara', acquisition: MARKET, type: DUAL_PISTOLS, masteryRank: 3 },
      { name: 'Aklato', acquisition: MARKET, type: DUAL_PISTOLS, masteryRank: 1 },
      { name: 'Aklex', acquisition: MARKET, type: DUAL_PISTOLS, masteryRank: 4 },
      { name: 'Aklex Prime', acquisition: VAULTED, type: DUAL_PISTOLS, masteryRank: 8 },
      { name: 'Akmagnus', acquisition: MARKET, type: DUAL_PISTOLS },
      { name: 'Aksomati', acquisition: MARKET, type: DUAL_PISTOLS, masteryRank: 6 },
      { name: 'Akstiletto', acquisition: TENNO_LAB, type: DUAL_PISTOLS, masteryRank: 2 },
      { name: 'Akstiletto Prime', acquisition: RELICS, type: DUAL_PISTOLS, masteryRank: 5 },
      { name: 'Akvasto', acquisition: MARKET, type: DUAL_PISTOLS },
      { name: 'Akzani', acquisition: MARKET, type: DUAL_PISTOLS },
      { name: 'Dual Cestra', acquisition: ENERGY_LAB, type: DUAL_PISTOLS, masteryRank: 4 },
      { name: 'Secura Dual Cestra', acquisition: THE_PERRIN_SEQUENCE, type: DUAL_PISTOLS, masteryRank: 6 },
      { name: 'Dual Toxocyst', acquisition: BIO_LAB, type: DUAL_PISTOLS, masteryRank: 8 },
      { name: 'Staticor', acquisition: ENERGY_LAB, type: DUAL_PISTOLS, masteryRank: 5 },
      { name: 'Twin Grakatas', acquisition: MARKET, type: DUAL_PISTOLS },
      { name: 'Twin Gremlins', acquisition: VOR_AND_KRILL, type: DUAL_PISTOLS },
      { name: 'Twin Kohmak', acquisition: KELA_DE_THAYM, type: DUAL_PISTOLS, masteryRank: 6 },
      { name: 'Twin Rogga', acquisition: MARKET, type: DUAL_PISTOLS, masteryRank: 8 },
      { name: 'Twin Vipers', acquisition: MARKET, type: DUAL_PISTOLS },
      { name: 'Twin Vipers Wraith', acquisition: INVASIONS, type: DUAL_PISTOLS },
      { name: 'Castanas', acquisition: TENNO_LAB, type: THROWN, masteryRank: 3 },
      { name: 'Sancti Castanas', acquisition: NEW_LOKA, type: THROWN, masteryRank: 6 },
      { name: 'Despair', acquisition: STALKER, type: THROWN },
      { name: 'Fusilai', acquisition: MARKET, type: THROWN, masteryRank: 5 },
      { name: 'Hikou', acquisition: MARKET, type: THROWN, masteryRank: 2 },
      { name: 'Hikou Prime', acquisition: VAULTED, type: THROWN, masteryRank: 2 },
      { name: 'Kunai', acquisition: MARKET, type: THROWN, masteryRank: 2 },
      { name: 'MK1-Kunai', acquisition: MARKET, type: THROWN },
      { name: 'Pox', acquisition: BIO_LAB, type: THROWN, masteryRank: 6 },
      { name: 'Spira', acquisition: MARKET, type: THROWN, masteryRank: 1 },
      { name: 'Spira Prime', acquisition: RELICS, type: THROWN, masteryRank: 3 },
      { name: 'Talons', acquisition: TENNO_LAB, type: THROWN, masteryRank: 5 },
    ],
    melee: [
      { name: 'Broken War', acquisition: THE_SECOND_DREAM, type: SWORD, masteryRank: 10 },
      { name: 'Cronus', acquisition: VOR, type: SWORD },
      { name: 'Dakra Prime', acquisition: VAULTED, type: SWORD, masteryRank: 6 },
      { name: 'Dark Sword', acquisition: ALERTS, type: SWORD },
      { name: 'Ether Sword', acquisition: MARKET, type: SWORD },
      { name: 'Heat Sword', acquisition: MARKET, type: SWORD },
      { name: 'Jaw Sword', acquisition: ALERTS, type: SWORD, masteryRank: 1 },
      { name: 'Krohkur', acquisition: MARKET, type: SWORD, masteryRank: 5 },
      { name: 'Mire', acquisition: MARKET, type: SWORD },
      { name: 'Pangolin Sword', acquisition: ALERTS, type: SWORD, masteryRank: 2 },
      { name: 'Plasma Sword', acquisition: MARKET, type: SWORD },
      { name: 'Skana', acquisition: MARKET, type: SWORD },
      { name: 'Skana Prime', acquisition: UNOBTAINABLE, type: SWORD },
      { name: 'Prisma Skana', acquisition: BARO_KITEER, type: SWORD },
      { name: 'Dex Dakra', acquisition: ANNIVERSARY, type: DUAL_SWORDS },
      { name: 'Dual Cleavers', acquisition: MARKET, type: DUAL_SWORDS, mastery_Rank: 3 },
      { name: 'Prisma Dual Cleavers', acquisition: BARO_KITEER, type: DUAL_SWORDS, mastery_Rank: 3 },
      { name: 'Dual Ether', acquisition: MARKET, type: DUAL_SWORDS },
      { name: 'Dual Heat Swords', acquisition: MARKET, type: DUAL_SWORDS },
      { name: 'Twin Krohkur', acquisition: MARKET, type: DUAL_SWORDS, mastery_Rank: 6 },
      { name: 'Dual Ichor', acquisition: BIO_LAB, type: DUAL_SWORDS, mastery_Rank: 6 },
      { name: 'Dual Kamas', acquisition: MARKET, type: DUAL_SWORDS, mastery_Rank: 1 },
      { name: 'Dual Kamas Prime', acquisition: VAULTED, type: DUAL_SWORDS, mastery_Rank: 6 },
      { name: 'Dual Raza', acquisition: TENNO_LAB, type: DUAL_SWORDS, mastery_Rank: 6 },
      { name: 'Dual Skana', acquisition: MARKET, type: DUAL_SWORDS },
      { name: 'Dual Zoren', acquisition: MARKET, type: DUAL_SWORDS, mastery_Rank: 2 },
      { name: 'Nami Skyla', acquisition: TENNO_LAB, type: DUAL_SWORDS },
      { name: 'Nami Skyla Prime', acquisition: RELICS, type: DUAL_SWORDS, mastery_Rank: 11 },
      { name: 'Twin Basolk', acquisition: MARKET, type: DUAL_SWORDS, mastery_Rank: 3 },
      { name: 'Ceramic Dagger', acquisition: MARKET, type: DAGGER, mastery_Rank: 3 },
      { name: 'Dark Dagger', acquisition: ALERTS, type: DAGGER },
      { name: 'Rakta Dark Dagger', acquisition: RED_VEIL, type: DAGGER, mastery_Rank: 8 },
      { name: 'Heat Dagger', acquisition: MARKET, type: DAGGER },
      { name: 'Karyst', acquisition: MARKET, type: DAGGER },
      { name: 'Sheev', acquisition: MARKET, type: DAGGER },
      { name: 'Kama', acquisition: MARKET, type: MACHETE, mastery_Rank: 1 },
      { name: 'Gazal Machete', acquisition: TENNO_LAB, type: MACHETE, mastery_Rank: 5 },
      { name: 'Machete', acquisition: LOGIN_REWARD, type: MACHETE, mastery_Rank: 1 },
      { name: 'Machete Wraith', acquisition: BARO_KITEER, type: MACHETE, mastery_Rank: 1 },
      { name: 'Nami Solo', acquisition: MARKET, type: MACHETE },
      { name: 'Prova', acquisition: ENERGY_LAB, type: MACHETE, mastery_Rank: 3 },
      { name: 'Prova Vandal', acquisition: BARO_KITEER, type: MACHETE },
      { name: 'Ether Daggers', acquisition: MARKET, type: DUAL_DAGGERS },
      { name: 'Fang', acquisition: MARKET, type: DUAL_DAGGERS },
      { name: 'Fang Prime', acquisition: RELICS, type: DUAL_DAGGERS },
      { name: 'Okina', acquisition: TENNO_LAB, type: DUAL_DAGGERS, mastery_Rank: 5 },
      { name: 'Ankyros', acquisition: MARKET, type: FIST },
      { name: 'Ankyros Prime', acquisition: VAULTED, type: FIST },
      { name: 'Furax', acquisition: MARKET, type: FIST },
      { name: 'MK1-Furax', acquisition: MARKET, type: FIST },
      { name: 'Furax Wraith', acquisition: CETUS_TIER_5, type: FIST },
      { name: 'Tekko', acquisition: MARKET, type: FIST, mastery_Rank: 2 },
      { name: 'Ack & Brunt', acquisition: CHEM_LAB, type: SWORD_SHEILD, mastery_Rank: 3 },
      { name: 'Silva & Aegis', acquisition: TENNO_LAB, type: SWORD_SHEILD },
      { name: 'Silva & Aegis Prime', acquisition: RELICS, type: SWORD_SHEILD, mastery_Rank: 12 },
      { name: 'Hirudo', acquisition: MARKET, type: SPARRING, mastery_Rank: 7 },
      { name: 'Kogake', acquisition: MARKET, type: SPARRING },
      { name: 'Obex', acquisition: MARKET, type: SPARRING },
      { name: 'Prisma Obex', acquisition: BARO_KITEER, type: SPARRING },
      { name: 'Guandao', acquisition: TENNO_LAB, type: POLEARM, mastery_Rank: 4 },
      { name: 'Kesheg', acquisition: CHEM_LAB, type: POLEARM, mastery_Rank: 7 },
      { name: 'Lesion', acquisition: MARKET, type: POLEARM, mastery_Rank: 7 },
      { name: 'Orthos', acquisition: MARKET, type: POLEARM, mastery_Rank: 2 },
      { name: 'Orthos Prime', acquisition: RELICS, type: POLEARM, mastery_Rank: 2 },
      { name: 'Serro', acquisition: ENERGY_LAB, type: POLEARM, mastery_Rank: 2 },
      { name: 'Sydon', acquisition: CHEM_LAB, type: POLEARM, mastery_Rank: 2 },
      { name: 'Vaykor Sydon', acquisition: STEEL_MERIDIAN, type: POLEARM, mastery_Rank: 8 },
      { name: 'Tonbo', acquisition: TENNO_LAB, type: POLEARM, mastery_Rank: 3 },
      { name: 'Amphis', acquisition: MARKET, type: STAFF },
      { name: 'Bo', acquisition: MARKET, type: STAFF },
      { name: 'MK1-Bo', acquisition: MARKET, type: STAFF },
      { name: 'Bo Prime', acquisition: VAULTED, type: STAFF, mastery_Rank: 5 },
      { name: 'Broken Scepter', acquisition: THE_WAR_WITHIN, type: STAFF, mastery_Rank: 5 },
      { name: 'Tipedo', acquisition: MARKET, type: STAFF, mastery_Rank: 3 },
      { name: 'Cerata', acquisition: BIO_LAB, type: GLAIVE, mastery_Rank: 3 },
      { name: 'Glaive', acquisition: MARKET, type: GLAIVE, mastery_Rank: 1 },
      { name: 'Glaive Prime', acquisition: VAULTED, type: GLAIVE, mastery_Rank: 10 },
      { name: 'Halikar', acquisition: MARKET, type: GLAIVE, mastery_Rank: 7 },
      { name: 'Kestrel', acquisition: MARKET, type: GLAIVE },
      { name: 'Orvius', acquisition: THE_WAR_WITHIN, type: GLAIVE, mastery_Rank: 6 },
      { name: 'Atterax', acquisition: MARKET, type: WHIP, mastery_Rank: 2 },
      { name: 'Lecta', acquisition: MARKET, type: WHIP },
      { name: 'Secura Lecta', acquisition: THE_PERRIN_SEQUENCE, type: WHIP, mastery_Rank: 8 },
      { name: 'Scoliac', acquisition: BIO_LAB, type: WHIP, mastery_Rank: 6 },
      { name: 'Galatine', acquisition: MARKET, type: HEAVY_BLADE, mastery_Rank: 3 },
      { name: 'Galatine Prime', acquisition: RELICS, type: HEAVY_BLADE, mastery_Rank: 13 },
      { name: 'Gram', acquisition: MARKET, type: HEAVY_BLADE, mastery_Rank: 2 },
      { name: 'Scindo', acquisition: MARKET, type: HEAVY_BLADE, mastery_Rank: 2 },
      { name: 'Scindo Prime', acquisition: VAULTED, type: HEAVY_BLADE, mastery_Rank: 4 },
      { name: 'War', acquisition: THE_SECOND_DREAM, type: HEAVY_BLADE, mastery_Rank: 10 },
      { name: 'Zenistar', acquisition: LOGIN_REWARD, type: HEAVY_BLADE, mastery_Rank: 6 },
      { name: 'Arca Titron', acquisition: MARKET, type: HAMMER, mastery_Rank: 10 },
      { name: 'Fragor', acquisition: MARKET, type: HAMMER, mastery_Rank: 2 },
      { name: 'Fragor Prime', acquisition: RELICS, type: HAMMER, mastery_Rank: 7 },
      { name: 'Heliocor', acquisition: MARKET, type: HAMMER, mastery_Rank: 9 },
      { name: 'Synoid Heliocor', acquisition: CEPHALON_SUDA, type: HAMMER, mastery_Rank: 8 },
      { name: 'Jat Kittag', acquisition: CHEM_LAB, type: HAMMER, mastery_Rank: 5 },
      { name: 'Magistar', acquisition: MARKET, type: HAMMER, mastery_Rank: 1 },
      { name: 'Sancti Magistar', acquisition: NEW_LOKA, type: HAMMER, mastery_Rank: 8 },
      { name: 'Sibear', acquisition: MARKET, type: HAMMER, mastery_Rank: 6 },
      { name: 'Volnus', acquisition: MARKET, type: HAMMER, mastery_Rank: 4 },
      { name: 'Nikana', acquisition: TENNO_LAB, type: NIKANA, mastery_Rank: 4 },
      { name: 'Dragon Nikana', acquisition: MARKET, type: NIKANA, mastery_Rank: 8 },
      { name: 'Nikana Prime', acquisition: RELICS, type: NIKANA },
      { name: 'Ripkas', acquisition: MARKET, type: CLAWS, mastery_Rank: 3 },
      { name: 'Venka', acquisition: TENNO_LAB, type: CLAWS, mastery_Rank: 3 },
      { name: 'Venka Prime', acquisition: RELICS, type: CLAWS, mastery_Rank: 8 },
      { name: 'Anku', acquisition: TENNO_LAB, type: SCYTHE, mastery_Rank: 3 },
      { name: 'Caustacyst', acquisition: BIO_LAB, type: SCYTHE, mastery_Rank: 7 },
      { name: 'Ether Reaper', acquisition: MARKET, type: SCYTHE, mastery_Rank: 3 },
      { name: 'Hate', acquisition: STALKER, type: SCYTHE, mastery_Rank: 2 },
      { name: 'Reaper Prime', acquisition: VAULTED, type: SCYTHE, mastery_Rank: 2 },
      { name: 'Boltace', acquisition: MARKET, type: TONFA, mastery_Rank: 2 },
      { name: 'Telos Boltace', acquisition: ARBITERS_OF_HEXIS, type: TONFA, mastery_Rank: 8 },
      { name: 'Kronen', acquisition: MARKET, type: TONFA, mastery_Rank: 3 },
      { name: 'Ohma', acquisition: MARKET, type: TONFA, mastery_Rank: 8 },
      { name: 'Redeemer', acquisition: MARKET, type: GUNBLADE, mastery_Rank: 4 },
      { name: 'Sarpa', acquisition: MARKET, type: GUNBLADE, mastery_Rank: 8 },
      { name: 'Ninkondi', acquisition: MARKET, type: NUNCHAKU },
      { name: 'Shaku', acquisition: TENNO_LAB, type: NUNCHAKU },
      { name: 'Jat Kusar', acquisition: CHEM_LAB, type: BLADE_WHIP, mastery_Rank: 10 },
      { name: 'Lacera', acquisition: TENNO_LAB, type: BLADE_WHIP, mastery_Rank: 7 },
      { name: 'Mios', acquisition: BIO_LAB, type: BLADE_WHIP, mastery_Rank: 8 },
      { name: 'Dark Split-Sword', acquisition: TENNO_LAB, type: HYBRID, mastery_Rank: 5 },
      { name: 'Destreza', acquisition: MARKET, type: RAPIER, mastery_Rank: 7 },
      { name: 'Endura', acquisition: TENNO_LAB, type: RAPIER, mastery_Rank: 7 },
    ],
  },
};
