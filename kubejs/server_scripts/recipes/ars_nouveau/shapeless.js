ServerEvents.recipes((event) => {
  const id_prefix = 'mt:ars_nouveau/shapeless/';

  const recipes = [
    {
      result: { id: 'ars_nouveau:arcane_pedestal', count: 1 },
      ingredients: [{ item: 'ars_nouveau:arcane_platform' }],
      id: `${id_prefix}arcane_pedestal_from_platform`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'minecraft:crafting_shapeless';
    event.custom(recipe).id(recipe.id);
  });
});
