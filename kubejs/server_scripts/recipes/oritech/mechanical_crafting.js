ServerEvents.recipes((event) => {
  event.recipes.create.mechanical_crafting('oritech:assembler_block', ['PPPPP', 'PEMEP', 'PAAAP', 'PCBCP'], {
    P: 'unify:iron_sheet',
    E: 'unify:electrum_ingot',
    M: 'create:mechanical_arm',
    A: 'oritech:adamant_ingot',
    B: 'minecraft:blast_furnace',
    C: 'oritech:motor',
  });

  event.recipes.create.mechanical_crafting('oritech:foundry_block', ['PPPPP', 'PEMEP', 'PPJPP', 'PPPPP'], {
    P: 'unify:iron_sheet',
    E: 'unify:electrum_ingot',
    M: 'oritech:motor',
    J: 'supplementaries:jar',
  });

  event.recipes.create.mechanical_crafting('oritech:centrifuge_block', [' PPP ', 'BBPBB', ' PMP ', 'PPMPP', 'IIPII'], {
    P: 'unify:iron_sheet',
    B: 'minecraft:glass_bottle',
    M: 'oritech:motor',
    I: 'minecraft:iron_block',
  });

  event.recipes.create.mechanical_crafting(
    'oritech:atomic_forge_block',
    [' PPP ', ' IBI ', ' BMB ', ' IBI ', ' EEE '],
    {
      P: 'minecraft:glass',
      B: 'oritech:adamant_ingot',
      M: 'eternal_starlight:unrealium_block',
      I: 'oritech:motor',
      E: 'unify:electrum_ingot',
    },
  );
});
