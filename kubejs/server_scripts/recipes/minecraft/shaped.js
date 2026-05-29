ServerEvents.recipes((event) => {
  const id_prefix = 'mt:minecraft/shaped/';

  const recipes = [
    {
      result: { id: 'minecraft:copper_trapdoor', count: 1 },
      pattern: ['   ', ' AA', ' AA'],
      key: { A: { item: 'minecraft:copper_ingot' } },
      id: `${id_prefix}copper_trapdoor`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'minecraft:crafting_shaped';
    event.custom(recipe).id(recipe.id);
  });
});
