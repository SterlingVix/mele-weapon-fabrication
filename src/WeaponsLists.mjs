const weaponsBases: [
  // TODO: find these.
  'SFXWeaponStats_SFXWeaponStats_AssaultRifleBase',
];

const weaponClasses = [
  {
    ManufacturerID: 326,
    StatsClass: 27563,
    WeaponStatsClassName: 'SFXWeaponStats_AvengerAssaultRifle',
  }, {
    ManufacturerID: 326,
    StatsClass: 27646,
    WeaponStatsClassName: 'SFXWeaponStats_Reaper',
  }, {
    ManufacturerID: 326,
    StatsClass: 27648,
    WeaponStatsClassName: 'SFXWeaponStats_Scimitar',
  }, {
    ManufacturerID: 326,
    StatsClass: 27612,
    WeaponStatsClassName: 'SFXWeaponStats_Edge',
  }, {
    ManufacturerID: 412,
    StatsClass: 27598,
    WeaponStatsClassName: 'SFXWeaponStats_Banshee',
  }, {
    ManufacturerID: 412,
    StatsClass: 27620,
    WeaponStatsClassName: 'SFXWeaponStats_Hammer',
  }, {
    ManufacturerID: 412,
    StatsClass: 27624,
    WeaponStatsClassName: 'SFXWeaponStats_Hurricane',
  }, {
    ManufacturerID: 412,
    StatsClass: 27666,
    WeaponStatsClassName: 'SFXWeaponStats_StrikerPistol',
  }, {
    ManufacturerID: 327,
    StatsClass: 27634,
    WeaponStatsClassName: 'SFXWeaponStats_Lancer',
  }, {
    ManufacturerID: 327,
    StatsClass: 27596,
    WeaponStatsClassName: 'SFXWeaponStats_AvengerSniperRifle',
  }, {
    ManufacturerID: 327,
    StatsClass: 27664,
    WeaponStatsClassName: 'SFXWeaponStats_Storm',
  }, {
    ManufacturerID: 327,
    StatsClass: 27630,
    WeaponStatsClassName: 'SFXWeaponStats_Kessler',
  }, {
    ManufacturerID: 598,
    StatsClass: 27670,
    WeaponStatsClassName: 'SFXWeaponStats_Terminator',
  }, {
    ManufacturerID: 525,
    StatsClass: 27672,
    WeaponStatsClassName: 'SFXWeaponStats_Thunder',
  }, {
    ManufacturerID: 525,
    StatsClass: 27614,
    WeaponStatsClassName: 'SFXWeaponStats_Equalizer',
  }, {
    ManufacturerID: 525,
    StatsClass: 27674,
    WeaponStatsClassName: 'SFXWeaponStats_Tornado',
  }, {
    ManufacturerID: 525,
    StatsClass: 27660,
    WeaponStatsClassName: 'SFXWeaponStats_Stiletto',
  }, {
    ManufacturerID: 325,
    StatsClass: 27642,
    WeaponStatsClassName: 'SFXWeaponStats_Raptor',
  }, {
    ManufacturerID: 325,
    StatsClass: 27668,
    WeaponStatsClassName: 'SFXWeaponStats_StrikerSniperRifle',
  }, {
    ManufacturerID: 325,
    StatsClass: 27616,
    WeaponStatsClassName: 'SFXWeaponStats_Firestorm',
  }, {
    ManufacturerID: 325,
    StatsClass: 27662,
    WeaponStatsClassName: 'SFXWeaponStats_Stinger',
  }, {
    ManufacturerID: 582,
    StatsClass: 27676,
    WeaponStatsClassName: 'SFXWeaponStats_Tsunami',
  }, {
    ManufacturerID: 582,
    StatsClass: 27636,
    WeaponStatsClassName: 'SFXWeaponStats_Naginata',
  }, {
    ManufacturerID: 582,
    StatsClass: 27628,
    WeaponStatsClassName: 'SFXWeaponStats_Katana',
  }, {
    ManufacturerID: 582,
    StatsClass: 27640,
    WeaponStatsClassName: 'SFXWeaponStats_Raikou',
  }, {
    ManufacturerID: 584,
    StatsClass: 27608,
    WeaponStatsClassName: 'SFXWeaponStats_Breaker',
  }, {
    ManufacturerID: 584,
    StatsClass: 27622,
    WeaponStatsClassName: 'SFXWeaponStats_Harpoon',
  }, {
    ManufacturerID: 584,
    StatsClass: 27553,
    WeaponStatsClassName: 'SFXWeaponStats_Armageddon',
  }, {
    ManufacturerID: 584,
    StatsClass: 27644,
    WeaponStatsClassName: 'SFXWeaponStats_Razer',
  }, {
    ManufacturerID: 324,
    StatsClass: 27610,
    WeaponStatsClassName: 'SFXWeaponStats_Crossfire',
  }, {
    ManufacturerID: 324,
    StatsClass: 27638,
    WeaponStatsClassName: 'SFXWeaponStats_Punisher',
  }, {
    ManufacturerID: 324,
    StatsClass: 27557,
    WeaponStatsClassName: 'SFXWeaponStats_Avalanche',
  }, {
    ManufacturerID: 324,
    StatsClass: 27606,
    WeaponStatsClassName: 'SFXWeaponStats_Brawler',
  }, {
    ManufacturerID: 502,
    StatsClass: 27652,
    WeaponStatsClassName: 'SFXWeaponStats_SpectreAssaultRifle',
  }, {
    ManufacturerID: 502,
    StatsClass: 27658,
    WeaponStatsClassName: 'SFXWeaponStats_SpectreSniperRifle',
  }, {
    ManufacturerID: 502,
    StatsClass: 27656,
    WeaponStatsClassName: 'SFXWeaponStats_SpectreShotgun',
  }, {
    ManufacturerID: 502,
    StatsClass: 27654,
    WeaponStatsClassName: 'SFXWeaponStats_SpectrePistol',
  }, {
    ManufacturerID: 503,
    StatsClass: 27652,
    WeaponStatsClassName: 'SFXWeaponStats_SpectreAssaultRifle',
  }, {
    ManufacturerID: 503,
    StatsClass: 27658,
    WeaponStatsClassName: 'SFXWeaponStats_SpectreSniperRifle',
  }, {
    ManufacturerID: 503,
    StatsClass: 27656,
    WeaponStatsClassName: 'SFXWeaponStats_SpectreShotgun',
  }, {
    ManufacturerID: 503,
    StatsClass: 27654,
    WeaponStatsClassName: 'SFXWeaponStats_SpectrePistol',
  }, {
    ManufacturerID: 504,
    StatsClass: 27652,
    WeaponStatsClassName: 'SFXWeaponStats_SpectreAssaultRifle',
  }, {
    ManufacturerID: 504,
    StatsClass: 27658,
    WeaponStatsClassName: 'SFXWeaponStats_SpectreSniperRifle',
  }, {
    ManufacturerID: 504,
    StatsClass: 27656,
    WeaponStatsClassName: 'SFXWeaponStats_SpectreShotgun',
  }, {
    ManufacturerID: 504,
    StatsClass: 27654,
    WeaponStatsClassName: 'SFXWeaponStats_SpectrePistol',
  }, {
    ManufacturerID: 583,
    StatsClass: 27632,
    WeaponStatsClassName: 'SFXWeaponStats_Kovalyov',
  }, {
    ManufacturerID: 583,
    StatsClass: 27678,
    WeaponStatsClassName: 'SFXWeaponStats_Volkov',
  }, {
    ManufacturerID: 583,
    StatsClass: 27650,
    WeaponStatsClassName: 'SFXWeaponStats_Sokolov',
  }, {
    ManufacturerID: 583,
    StatsClass: 27626,
    WeaponStatsClassName: 'SFXWeaponStats_Karpov',
  }, {
    ManufacturerID: 436,
    StatsClass: 27618,
    WeaponStatsClassName: 'SFXWeaponStats_Geth',
  }, {
    ManufacturerID: 598,
    StatsClass: 35386,
    WeaponStatsClassName: 'SFXWeaponStats_Judgement',
  }, {
    ManufacturerID: 599,
    StatsClass: 35392,
    WeaponStatsClassName: 'SFXWeaponStats_Harpy',
  }, {
    ManufacturerID: 600,
    StatsClass: 35398,
    WeaponStatsClassName: 'SFXWeaponStats_Pinnacle',
  }, {
    ManufacturerID: 601,
    StatsClass: 35404,
    WeaponStatsClassName: 'SFXWeaponStats_Cobra',
  }, {
    ManufacturerID: 599,
    StatsClass: 35410,
    WeaponStatsClassName: 'SFXWeaponStats_Gorgon',
  }, {
    ManufacturerID: 600,
    StatsClass: 35416,
    WeaponStatsClassName: 'SFXWeaponStats_Torrent',
  }, {
    ManufacturerID: 601,
    StatsClass: 35422,
    WeaponStatsClassName: 'SFXWeaponStats_DiamondBack',
  }, {
    ManufacturerID: 598,
    StatsClass: 35428,
    WeaponStatsClassName: 'SFXWeaponStats_Executioner',
  }, {
    ManufacturerID: 599,
    StatsClass: 35434,
    WeaponStatsClassName: 'SFXWeaponStats_Hydra',
  }, {
    ManufacturerID: 600,
    StatsClass: 35440,
    WeaponStatsClassName: 'SFXWeaponStats_Savage',
  }, {
    ManufacturerID: 601,
    StatsClass: 35446,
    WeaponStatsClassName: 'SFXWeaponStats_Viper',
  }, {
    ManufacturerID: 598,
    StatsClass: 35452,
    WeaponStatsClassName: 'SFXWeaponStats_LightningStrike',
  }, {
    ManufacturerID: 599,
    StatsClass: 35483,
    WeaponStatsClassName: 'SFXWeaponStats_Titan',
  }, {
    ManufacturerID: 600,
    StatsClass: 35514,
    WeaponStatsClassName: 'SFXWeaponStats_Helix',
  }, {
    ManufacturerID: 601,
    StatsClass: 35545,
    WeaponStatsClassName: 'SFXWeaponStats_Python',
  },
];

const weaponNames = [
  'SFXWeaponStats_Armageddon',
  'SFXWeaponStats_Avalanche',
  'SFXWeaponStats_AvengerAssaultRifle',
  'SFXWeaponStats_AvengerSniperRifle',
  'SFXWeaponStats_Banshee',
  'SFXWeaponStats_Brawler',
  'SFXWeaponStats_Breaker',
  'SFXWeaponStats_Cobra',
  'SFXWeaponStats_Crossfire',
  'SFXWeaponStats_DiamondBack',
  'SFXWeaponStats_Edge',
  'SFXWeaponStats_Equalizer',
  'SFXWeaponStats_Executioner',
  'SFXWeaponStats_Firestorm',
  'SFXWeaponStats_Geth',
  'SFXWeaponStats_Gorgon',
  'SFXWeaponStats_Hammer',
  'SFXWeaponStats_Harpoon',
  'SFXWeaponStats_Harpy',
  'SFXWeaponStats_Helix',
  'SFXWeaponStats_Hurricane',
  'SFXWeaponStats_Hydra',
  'SFXWeaponStats_Judgement',
  'SFXWeaponStats_Karpov',
  'SFXWeaponStats_Katana',
  'SFXWeaponStats_Kessler',
  'SFXWeaponStats_Kovalyov',
  'SFXWeaponStats_Lancer',
  'SFXWeaponStats_LightningStrike',
  'SFXWeaponStats_Naginata',
  'SFXWeaponStats_Pinnacle',
  'SFXWeaponStats_Punisher',
  'SFXWeaponStats_Python',
  'SFXWeaponStats_Raikou',
  'SFXWeaponStats_Raptor',
  'SFXWeaponStats_Razer',
  'SFXWeaponStats_Reaper',
  'SFXWeaponStats_Savage',
  'SFXWeaponStats_Scimitar',
  'SFXWeaponStats_Sokolov',
  'SFXWeaponStats_SpectreAssaultRifle',
  'SFXWeaponStats_SpectreAssaultRifle',
  'SFXWeaponStats_SpectreAssaultRifle',
  'SFXWeaponStats_SpectrePistol',
  'SFXWeaponStats_SpectrePistol',
  'SFXWeaponStats_SpectrePistol',
  'SFXWeaponStats_SpectreShotgun',
  'SFXWeaponStats_SpectreShotgun',
  'SFXWeaponStats_SpectreShotgun',
  'SFXWeaponStats_SpectreSniperRifle',
  'SFXWeaponStats_SpectreSniperRifle',
  'SFXWeaponStats_SpectreSniperRifle',
  'SFXWeaponStats_Stiletto',
  'SFXWeaponStats_Stinger',
  'SFXWeaponStats_Storm',
  'SFXWeaponStats_StrikerPistol',
  'SFXWeaponStats_StrikerSniperRifle',
  'SFXWeaponStats_Terminator',
  'SFXWeaponStats_Thunder',
  'SFXWeaponStats_Titan',
  'SFXWeaponStats_Tornado',
  'SFXWeaponStats_Torrent',
  'SFXWeaponStats_Tsunami',
  'SFXWeaponStats_Viper',
  'SFXWeaponStats_Volkov',
];

