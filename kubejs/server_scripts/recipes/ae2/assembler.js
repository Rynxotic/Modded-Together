ServerEvents.recipes((event) => {
  const id_prefix = 'mt:ae2/assembler/';

  const recipes = [
    {
      results: [{ id: 'ae2:engineering_processor', count: 1 }],
      ingredients: [{ item: 'ae2:printed_engineering_processor' }, { item: 'ae2:printed_silicon' }, { item: 'minecraft:redstone' }, { item: 'minecraft:redstone' }],
      time: 100,
      id: `${id_prefix}engineering_processor`,
    },
    {
      results: [{ id: 'ae2:logic_processor', count: 1 }],
      ingredients: [{ item: 'ae2:printed_logic_processor' }, { item: 'ae2:printed_silicon' }, { item: 'minecraft:redstone' }, { item: 'minecraft:redstone' }],
      time: 100,
      id: `${id_prefix}logic_processor`,
    },
    {
      results: [{ id: 'ae2:calculation_processor', count: 1 }],
      ingredients: [{ item: 'ae2:printed_calculation_processor' }, { item: 'ae2:printed_silicon' }, { item: 'minecraft:redstone' }, { item: 'minecraft:redstone' }],
      time: 100,
      id: `${id_prefix}calculation_processor`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'oritech:assembler';
    event.custom(recipe).id(recipe.id);
  });
});
