ServerEvents.recipes((event) => {
  const id_prefix = 'mt:extendedae/mechanical_crafting/';

  const recipes = [
    {
      result: { id: 'extendedae:crystal_assembler', count: 1 },
      pattern: [' DFD ', 'DSPSD', 'FOCOF', 'DSLSD', ' DFD '],
      key: {
        D: { item: 'ae2:printed_silicon' },
        S: { item: 'ae2:fluix_glass_cable' },
        C: { item: 'extendedae:machine_frame' },
        L: { item: 'ae2:sky_stone_tank' },
        O: { item: 'ae2:logic_processor' },
        F: { item: 'extendedae:entro_ingot' },
        P: { item: 'ae2:crafting_terminal' },
      },
      id: `${id_prefix}crystal_assembler`,
    },
    {
      result: { id: 'extendedae:assembler_matrix_frame', count: 1 },
      pattern: [' DFD ', 'DSLSD', 'FLCLF', 'DSLSD', ' DFD '],
      key: {
        D: { item: 'minecraft:quartz' },
        S: { item: 'ae2:sky_stone_block' },
        C: { item: 'extendedae:machine_frame' },
        L: { item: 'minecraft:lapis_lazuli' },
        F: { item: 'eternal_starlight:unrealium_ingot' },
      },
      id: `${id_prefix}assembler_matrix_frame`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:mechanical_crafting';
    event.custom(recipe).id(recipe.id);
  });
});
