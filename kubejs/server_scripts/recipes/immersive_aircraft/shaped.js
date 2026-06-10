ServerEvents.recipes((event) => {
  const id_prefix = 'mt:immersive_aircraft/shaped/';

  const recipes = [
    {
      result: { id: 'immersive_aircraft:hull', count: 1 },
      pattern: ['   ', 'ABA', 'ABA'],
      key: {
        B: { item: 'minecraft:iron_ingot' },
        A: { item: 'create:andesite_casing' },
      },
      id: `${id_prefix}hull`,
    },
    {
      result: { id: 'immersive_aircraft:sail', count: 1 },
      pattern: ['   ', 'AAA', 'AAA'],
      key: { A: { item: 'create:white_sail' } },
      id: `${id_prefix}sail`,
    },
    {
      result: { id: 'immersive_aircraft:propeller', count: 1 },
      pattern: [' A ', 'ABA', ' A '],
      key: {
        A: { item: 'create:iron_sheet' },
        B: { item: 'create:propeller' },
      },
      id: `${id_prefix}propeller`,
    },
    {
      result: { id: 'immersive_aircraft:boiler', count: 1 },
      pattern: [' A ', ' B ', ' C '],
      key: {
        A: { item: 'create:steam_engine' },
        C: { item: 'create:blaze_burner' },
        B: { item: 'create:fluid_tank' },
      },
      id: `${id_prefix}boiler`,
    },
    {
      result: { id: 'immersive_aircraft:engine', count: 1 },
      pattern: ['   ', 'ABA', 'CDC'],
      key: {
        A: { item: 'create:brass_sheet' },
        C: { item: 'create:sturdy_sheet' },
        B: { item: 'create:precision_mechanism' },
        D: { item: 'immersive_aircraft:boiler' },
      },
      id: `${id_prefix}engine`,
    },
    {
      result: { id: 'immersive_aircraft:quadrocopter', count: 1 },
      pattern: ['ABA', ' C ', 'ADA'],
      key: {
        C: { tag: 'minecraft:wool' },
        B: { item: 'create:andesite_casing' },
        D: { item: 'immersive_aircraft:boiler' },
        A: { item: 'create:propeller' },
      },
      id: `${id_prefix}quadrocopter`,
    },
    {
      result: { id: 'immersive_aircraft:enhanced_propeller', count: 1 },
      pattern: [' A ', 'ABA', ' A '],
      key: {
        A: { item: 'create:brass_sheet' },
        B: { item: 'create:brass_ingot' },
      },
      id: `${id_prefix}enhanced_propeller`,
    },
    {
      result: { id: 'immersive_aircraft:steel_boiler', count: 1 },
      pattern: ['ABA', 'ABA', 'ABA'],
      key: {
        A: { item: 'create:iron_sheet' },
        B: { item: 'create:fluid_tank' },
      },
      id: `${id_prefix}steel_boiler`,
    },
    {
      result: { id: 'immersive_aircraft:gyroscope', count: 1 },
      pattern: [' AA', ' B ', '   '],
      key: {
        A: { item: 'create:electron_tube' },
        B: { item: 'minecraft:compass' },
      },
      id: `${id_prefix}gyroscope`,
    },
    {
      result: { id: 'immersive_aircraft:hull_reinforcement', count: 1 },
      pattern: ['   ', 'ABA', '   '],
      key: {
        B: { item: 'immersive_aircraft:hull' },
        A: { item: 'create:iron_sheet' },
      },
      id: `${id_prefix}hull_reinforcement`,
    },
    {
      result: { id: 'immersive_aircraft:improved_landing_gear', count: 1 },
      pattern: ['AB ', 'C  ', '   '],
      key: {
        B: { item: 'minecraft:iron_ingot' },
        A: { item: 'create:iron_sheet' },
        C: { item: 'create:belt_connector' },
      },
      id: `${id_prefix}improved_landing_gear`,
    },
    {
      result: { id: 'immersive_aircraft:sturdy_pipes', count: 1 },
      pattern: ['AAB', 'BBB', 'BAA'],
      key: {
        B: { item: 'create:fluid_pipe' },
        A: { item: 'create:iron_sheet' },
      },
      id: `${id_prefix}sturdy_pipes`,
    },
    {
      result: { id: 'immersive_aircraft:nether_engine', count: 1 },
      pattern: ['   ', 'ABA', 'CDC'],
      key: {
        C: { item: 'create:sturdy_sheet' },
        A: { item: 'create:iron_sheet' },
        D: { item: 'immersive_aircraft:boiler' },
        B: { item: 'minecraft:lava_bucket' },
      },
      id: `${id_prefix}nether_engine`,
    },
    {
      result: { id: 'immersive_aircraft:eco_engine', count: 1 },
      pattern: ['   ', 'ABA', 'CDC'],
      key: {
        A: { item: 'create:iron_sheet' },
        C: { item: 'create:copper_sheet' },
        D: { item: 'immersive_aircraft:boiler' },
        B: { item: 'minecraft:water_bucket' },
      },
      id: `${id_prefix}eco_engine`,
    },
    {
      result: { id: 'immersive_aircraft:industrial_gears', count: 1 },
      pattern: [' AB', 'C A', 'BC '],
      key: {
        C: { item: 'create:iron_sheet' },
        A: { item: 'create:copper_sheet' },
        B: { item: 'create:cogwheel' },
      },
      id: `${id_prefix}industrial_gears`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'minecraft:crafting_shaped';
    event.custom(recipe).id(recipe.id);
  });
});
