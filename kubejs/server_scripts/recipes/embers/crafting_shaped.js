ServerEvents.recipes((event) => {
  event.shaped(Item.of('embers:fluid_pipe', 4), ['SSS', 'IEI', 'SSS'], {
    I: 'minecraft:iron_ingot',
    S: 'create:iron_sheet',
    E: 'embers:ember_crystal',
  });
  event.shaped(Item.of('4xembers:item_pipe', 4), ['SSS', 'IEI', 'SSS'], {
    I: 'unify:lead_ingot',
    S: 'unify:lead_sheet',
    E: 'embers:ember_crystal',
  });
  event.shaped('embers:item_extractor', ['SSS', 'IEI', 'SSS'], {
    I: 'embers:item_pipe',
    S: 'unify:lead_sheet',
    E: 'create:item_hatch',
  });
  event.shaped('embers:fluid_extractor', ['SSS', 'IEI', 'SSS'], {
    I: 'embers:fluid_pipe',
    S: 'create:iron_sheet',
    E: 'create_dragons_plus:fluid_hatch',
  });
});
