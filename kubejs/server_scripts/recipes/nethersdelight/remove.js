ServerEvents.recipes((event) => {
  const recipes = [{ id: 'mynethersdelight:cutting/hoglin_hide' }];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
