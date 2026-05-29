ServerEvents.recipes((event) => {
  const id_prefix = 'mt:malum/pressing/';

  const recipes = [
    {
      results: [{ id: 'malum:malignant_pewter_plating' }],
      ingredients: [{ item: 'malum:malignant_pewter_ingot' }],
      id: `${id_prefix}malignant_pewter_plating`,
    },
    {
      results: [{ id: 'malum:soul_stained_steel_plating' }],
      ingredients: [{ item: 'malum:soul_stained_steel_ingot' }],
      id: `${id_prefix}soul_stained_steel_plating`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:pressing';
    event.custom(recipe).id(recipe.id);
  });
});
