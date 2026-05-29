ServerEvents.recipes((event) => {
  const id_prefix = 'mt:oritech/foundry/';
  const recipes = [
    {
      results: [{ count: 1, id: 'oritech:adamant_ingot' }],
      ingredients: [{ item: 'ae2:certus_quartz_dust' }, { item: 'eternal_starlight:deepsilver_ingot' }],
      time: 60,
      id: `${id_prefix}adamant_ingot`,
    },
  ];
  recipes.forEach((recipe) => {
    recipe.type = 'oritech:foundry';
    event.custom(recipe).id(recipe.id);
  });
});
