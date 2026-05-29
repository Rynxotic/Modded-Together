ServerEvents.recipes((event) => {
  const id_prefix = 'mt:oritech/mixing/';

  const recipes = [
    {
      results: [{ id: 'oritech:adamant_ingot', count: 1 }],
      ingredients: [{ item: 'eternal_starlight:deepsilver_ingot' }, { item: 'ae2:certus_quartz_dust' }],
      heat_requirement: 'superheated',
      id: `${id_prefix}adamant_ingot`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:mixing';
    event.custom(recipe).id(recipe.id);
  });
});
