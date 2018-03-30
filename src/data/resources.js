const constants = require('../constants.js');

const {
  CERES,
  DERELICT,
  EARTH,
  ERIS,
  EUROPA,
  JUPITER,
  KUVA_FORTRESS,
  LUA,
  MARS,
  MERCURY,
  NEPTUNE,
  PHOBOS,
  PLUTO,
  SATURN,
  SEDNA,
  URANUS,
  VENUS,
  VOID,
} = constants.planet;

// "Type" extends beyond rarity
module.exports = {
  resources: [
    {
      name: 'Alloy Plate',
      type: 'Common',
      acquisition: {
        planets: [
          VENUS,
          JUPITER,
          CERES,
          SEDNA,
          PLUTO,
          PHOBOS,
        ],
      },
    },
    {
      name: 'Argon Crystal',
      type: 'Rare',
      acquisition: {
        planets: [
          VOID,
        ],
        // Corrupted Vor,
        // Stalker,
        // Alerts,
        // Recovery (http://warframe.wikia.com/wiki/Recovery),
      },
    },
  ],
};
