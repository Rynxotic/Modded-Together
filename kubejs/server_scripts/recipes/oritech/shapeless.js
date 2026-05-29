ServerEvents.recipes((event) => {
  const id_prefix = 'mt:oritech/shapeless/';

  const recipes = [
    {
      result: { id: 'oritech:adamant_ingot', count: 9 },
      ingredients: [{ item: 'oritech:adamant_block' }],
      id: `${id_prefix}adamant_ingot_from_block`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'minecraft:crafting_shapeless';
    event.custom(recipe).id(recipe.id);
  });
});
