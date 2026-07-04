ServerEvents.recipes((event) => {
  const recipes = [{ id: 'tempad:time_steel_shaped' }, { id: 'tempad:chronon_battery' }];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
