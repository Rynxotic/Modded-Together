ServerEvents.recipes((event) => {
  const id_prefix = 'mt:extendedae/assembler/';

  const recipes = [
    {
      results: [{ id: 'extendedae:concurrent_processor', count: 1 }],
      ingredients: [
        { item: 'extendedae:concurrent_processor_print' },
        { item: 'ae2:printed_silicon' },
        { item: 'minecraft:redstone' },
        { item: 'minecraft:redstone' },
      ],
      time: 100,
      id: `${id_prfix}concurrent_processor`,
    },
    {
      results: [{ id: 'minecraft:golden_apple', count: 1 }],
      ingredients: [
        { item: 'minecraft:apple' },
        { item: 'minecraft:cake' },
        { item: 'minecraft:pumpkin_pie' },
        { item: 'supplementaries:pancake' },
      ],
      time: 100,
      id: `${id_prefix}concurrent_processor`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'oritech:assembler';
    event.custom(recipe).id(recipe.id);
  });
});
