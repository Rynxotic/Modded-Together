ServerEvents.generateData('after_mods', (event) => {
  const id_prefix = 'apotheosis:advancement/progression/';

  const recipes = [
    { id: 'root' },
    { id: 'haven' },
    { id: 'frontier' },
    { id: 'summit' },
    { id: 'pinnacle' },
    { id: 'ascent' },
  ];

  recipes.forEach((recipe) => {
    event.json(`${id_prefix}${getID(recipe.id)}`, never_load);
  });
});
