ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'tempad:time_steel_shaped' },
    { id: 'tempad:time_steel_create' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
