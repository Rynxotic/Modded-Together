ServerEvents.recipes((event) => {
  const id_prefix = 'mt:ae2/pressing/';

  const recipes = [
    {
      results: [{ id: 'ae2:printed_silicon' }],
      ingredients: [{ item: 'ae2:silicon' }],
      id: `${id_prefix}printed_silicon`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:pressing';
    event.custom(recipe).id(recipe.id);
  });
});
