ServerEvents.recipes((event) => {
  event.recipes.create.mechanical_crafting('embers:ember_bore', ['BBBBB', 'BBCBB', 'BBBBB', 'SSSSS'], {
    B: 'embers:caminite_bricks',
    C: 'embers:mechanical_core',
    S: 'create:sturdy_sheet',
  });
  event.recipes.create.mechanical_crafting('embers:crystal_cell', ['BB BB', 'BCECB', ' CDC ', 'BCECB', 'BB BB'], {
    B: 'embers:dawnstone_plate',
    C: 'minecraft:copper_block',
    E: 'embers:ember_crystal',
    D: 'embers:dawnstone_block',
  });
  event.recipes.create.mechanical_crafting('embers:inferno_forge', ['BBBBB', 'BDCDB', 'BCWCB', 'BDCDB', 'BBBBB'], {
    B: 'embers:caminite_bricks',
    D: 'embers:dawnstone_block',
    C: 'minecraft:copper_block',
    W: 'embers:wildfire_core',
  });
});
