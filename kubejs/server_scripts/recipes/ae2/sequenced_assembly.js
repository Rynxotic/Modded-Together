ServerEvents.recipes((event) => {
  const id_prefix = 'mt:ae2/sequenced_assembly/';

  const recipes = [
    {
      results: [{ id: 'ae2:annihilation_core' }],
      ingredient: { item: 'ae2:logic_processor' },
      transitional_item: { id: 'ae2:annihilation_core' },
      loops: 1,
      sequence: [
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:annihilation_core' }, { item: 'eternal_starlight:aethersent_ingot' }],
          results: [{ id: 'ae2:annihilation_core' }],
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:annihilation_core' }, { item: 'minecraft:quartz' }],
          results: [{ id: 'ae2:annihilation_core' }],
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:annihilation_core' }, { item: 'ae2:fluix_dust' }],
          results: [{ id: 'ae2:annihilation_core' }],
        },
        {
          type: 'create:pressing',
          ingredients: [{ item: 'ae2:annihilation_core' }],
          results: [{ id: 'ae2:annihilation_core' }],
        },
      ],
      id: `${id_prefix}annihilation_core`,
    },
    {
      results: [{ id: 'ae2:formation_core' }],
      ingredient: { item: 'ae2:logic_processor' },
      transitional_item: { id: 'ae2:formation_core' },
      loops: 1,
      sequence: [
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:formation_core' }, { item: 'eternal_starlight:golem_steel_ingot' }],
          results: [{ id: 'ae2:formation_core' }],
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:formation_core' }, { item: 'ae2:certus_quartz_crystal' }],
          results: [{ id: 'ae2:formation_core' }],
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:formation_core' }, { item: 'ae2:fluix_dust' }],
          results: [{ id: 'ae2:formation_core' }],
        },
        {
          type: 'create:pressing',
          ingredients: [{ item: 'ae2:formation_core' }],
          results: [{ id: 'ae2:formation_core' }],
        },
      ],
      id: `${id_prefix}formation_core`,
    },
    {
      results: [{ id: 'ae2:logic_processor' }],
      ingredient: { item: 'create:precision_mechanism' },
      transitional_item: { id: 'ae2:printed_logic_processor' },
      loops: 1,
      sequence: [
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:printed_logic_processor' }, { item: 'ae2:logic_processor_press' }],
          results: [{ id: 'ae2:printed_logic_processor' }],
          keepHeldItem: true,
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:printed_logic_processor' }, { item: 'create:golden_sheet' }],
          results: [{ id: 'ae2:printed_logic_processor' }],
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:printed_logic_processor' }, { item: 'minecraft:redstone' }],
          results: [{ id: 'ae2:printed_logic_processor' }],
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:printed_logic_processor' }, { item: 'ae2:printed_silicon' }],
          results: [{ id: 'ae2:printed_logic_processor' }],
        },
        {
          type: 'create:pressing',
          ingredients: [{ item: 'ae2:printed_logic_processor' }],
          results: [{ id: 'ae2:printed_logic_processor' }],
        },
      ],
      id: `${id_prefix}logic_processor`,
    },
    {
      results: [{ id: 'ae2:calculation_processor' }],
      ingredient: { item: 'create:precision_mechanism' },
      transitional_item: { id: 'ae2:printed_calculation_processor' },
      loops: 1,
      sequence: [
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:printed_calculation_processor' }, { item: 'ae2:calculation_processor_press' }],
          results: [{ id: 'ae2:printed_calculation_processor' }],
          keepHeldItem: true,
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:printed_calculation_processor' }, { item: 'ae2:certus_quartz_crystal' }],
          results: [{ id: 'ae2:printed_calculation_processor' }],
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:printed_calculation_processor' }, { item: 'minecraft:redstone' }],
          results: [{ id: 'ae2:printed_calculation_processor' }],
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:printed_calculation_processor' }, { item: 'ae2:printed_silicon' }],
          results: [{ id: 'ae2:printed_calculation_processor' }],
        },
        {
          type: 'create:pressing',
          ingredients: [{ item: 'ae2:printed_calculation_processor' }],
          results: [{ id: 'ae2:printed_calculation_processor' }],
        },
      ],
      id: `${id_prefix}calculation_processor`,
    },
    {
      results: [{ id: 'ae2:engineering_processor' }],
      ingredient: { item: 'create:precision_mechanism' },
      transitional_item: { id: 'ae2:printed_engineering_processor' },
      loops: 1,
      sequence: [
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:printed_engineering_processor' }, { item: 'ae2:engineering_processor_press' }],
          results: [{ id: 'ae2:printed_engineering_processor' }],
          keepHeldItem: true,
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:printed_engineering_processor' }, { item: 'minecraft:diamond' }],
          results: [{ id: 'ae2:printed_engineering_processor' }],
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:printed_engineering_processor' }, { item: 'minecraft:redstone' }],
          results: [{ id: 'ae2:printed_engineering_processor' }],
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'ae2:printed_engineering_processor' }, { item: 'ae2:printed_silicon' }],
          results: [{ id: 'ae2:printed_engineering_processor' }],
        },
        {
          type: 'create:pressing',
          ingredients: [{ item: 'ae2:printed_engineering_processor' }],
          results: [{ id: 'ae2:printed_engineering_processor' }],
        },
      ],
      id: `${id_prefix}engineering_processor`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:sequenced_assembly';
    event.custom(recipe).id(recipe.id);
  });
});
