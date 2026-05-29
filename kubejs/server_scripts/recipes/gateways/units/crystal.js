// crystal_units.js

global.crystalStalker = (count) => ({
  entity: 'irons_spellbooks:ice_spider',
  count,
  nbt: name('Crystal Stalker', 'white', true),
});

global.crystalStalkerElite = (count) => ({
  entity: 'irons_spellbooks:ice_spider',
  count,
  nbt: name('Crystal Stalker Elite', 'white', true),
  modifiers: [hp(50)],
});

global.crystalWarrior = (count) => ({
  entity: 'minecraft:wither_skeleton',
  count,
  nbt: name('Crystal Warrior', 'light_purple'),
  modifiers: [...CrystalGear],
});

global.crystalWarriorVeteran = (count) => ({
  entity: 'minecraft:wither_skeleton',
  count,
  nbt: name('Crystal Warrior', 'light_purple'),

  modifiers: [...CrystalGear, hp(50)],
});

global.crystalWarriorElite = (count) => ({
  entity: 'minecraft:wither_skeleton',
  count,
  nbt: name('Crystal Warrior', 'light_purple'),
  modifiers: [...CrystalGear, hp(100)],
});
