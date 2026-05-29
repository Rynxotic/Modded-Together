ServerEvents.recipes((event) => {
  const id_prefix = 'mt:oritech/blasting/';

  const recipes = [
    {
      result: { id: 'oritech:adamant_ingot' },
      ingredient: { item: 'oritech:adamant_dust' },
      experience: 0.1,
      cookingtime: 100,
      id: `${id_prefix}adamant_ingot_from_dust`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'minecraft:blasting';
    event.custom(recipe).id(recipe.id);
  });
});
