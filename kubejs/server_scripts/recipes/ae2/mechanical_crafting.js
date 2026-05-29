ServerEvents.recipes((event) => {
  const id_prefix = 'mt:ae2/mechanical_crafting/';

  const recipes = [
    {
      result: { id: 'ae2:cell_component_1k', count: 1 },
      pattern: ['DSD', 'SCS', 'DSD'],
      key: {
        D: { item: 'minecraft:redstone' },
        S: { item: 'ae2:certus_quartz_crystal' },
        C: { item: 'ae2:logic_processor' },
      },
      id: `${id_prefix}cell_component_1k`,
    },
    {
      result: { id: 'ae2:cell_component_4k', count: 1 },
      pattern: ['DED', 'SCS', 'DSD'],
      key: {
        D: { item: 'minecraft:redstone' },
        S: { item: 'ae2:cell_component_1k' },
        E: { item: 'ae2:calculation_processor' },
        C: { item: 'ae2:quartz_glass' },
      },
      id: `${id_prefix}cell_component_4k`,
    },
    {
      result: { id: 'ae2:cell_component_16k', count: 1 },
      pattern: ['DED', 'SCS', 'DSD'],
      key: {
        D: { item: 'minecraft:glowstone_dust' },
        S: { item: 'ae2:cell_component_4k' },
        E: { item: 'ae2:calculation_processor' },
        C: { item: 'ae2:quartz_glass' },
      },
      id: `${id_prefix}cell_component_16k`,
    },
    {
      result: { id: 'ae2:cell_component_64k', count: 1 },
      pattern: ['DED', 'SCS', 'DSD'],
      key: {
        D: { item: 'minecraft:glowstone_dust' },
        S: { item: 'ae2:cell_component_16k' },
        E: { item: 'ae2:calculation_processor' },
        C: { item: 'ae2:quartz_glass' },
      },
      id: `${id_prefix}cell_component_64k`,
    },
    {
      result: { id: 'ae2:cell_component_256k', count: 1 },
      pattern: ['DED', 'SCS', 'DSD'],
      key: {
        D: { item: 'ae2:sky_dust' },
        S: { item: 'ae2:cell_component_64k' },
        E: { item: 'ae2:calculation_processor' },
        C: { item: 'ae2:quartz_glass' },
      },
      id: `${id_prefix}cell_component_256k`,
    },
    {
      result: { id: 'ae2:spatial_cell_component_2', count: 1 },
      pattern: [' DFD ', 'DSLSD', 'FOCEF', 'DSLSD', ' DFD '],
      key: {
        D: { item: 'minecraft:glowstone_dust' },
        S: { item: 'ae2:fluix_pearl' },
        C: { item: 'ae2:engineering_processor' },
        L: { item: 'ae2:quartz_glass' },
        O: { item: 'ae2:formation_core' },
        E: { item: 'ae2:annihilation_core' },
        F: { item: 'ae2:fluix_crystal' },
      },
      id: `${id_prefix}spatial_cell_component_2`,
    },
    {
      result: { id: 'ae2:spatial_cell_component_16', count: 1 },
      pattern: [' DFD ', 'DSLSD', 'FOCEF', 'DSLSD', ' DFD '],
      key: {
        D: { item: 'minecraft:glowstone_dust' },
        S: { item: 'ae2:fluix_pearl' },
        C: { item: 'ae2:engineering_processor' },
        L: { item: 'ae2:spatial_cell_component_2' },
        O: { item: 'ae2:formation_core' },
        E: { item: 'ae2:annihilation_core' },
        F: { item: 'ae2:fluix_crystal' },
      },
      id: `${id_prefix}spatial_cell_component_16`,
    },
    {
      result: { id: 'ae2:spatial_cell_component_128', count: 1 },
      pattern: [' DFD ', 'DSLSD', 'FOCEF', 'DSLSD', ' DFD '],
      key: {
        D: { item: 'minecraft:glowstone_dust' },
        S: { item: 'ae2:fluix_pearl' },
        C: { item: 'ae2:engineering_processor' },
        L: { item: 'ae2:spatial_cell_component_16' },
        O: { item: 'ae2:formation_core' },
        E: { item: 'ae2:annihilation_core' },
        F: { item: 'ae2:fluix_crystal' },
      },
      id: `${id_prefix}spatial_cell_component_128`,
    },
    {
      result: { id: 'ae2:controller', count: 1 },
      pattern: [' DDD ', 'DSLSD', 'DOCED', 'DSLSD', ' DDD '],
      key: {
        D: { item: 'ae2:printed_silicon' },
        S: { item: 'eternal_starlight:unrealium_ingot' },
        C: { item: 'irons_spellbooks:energized_core' },
        L: { item: 'ae2:fluix_crystal' },
        O: { item: 'ae2:formation_core' },
        E: { item: 'ae2:annihilation_core' },
      },
      id: `${id_prefix}controller`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:mechanical_crafting';
    event.custom(recipe).id(recipe.id);
  });
});
