ServerEvents.recipes((event) => {
  const id_prefix = 'mt:hazennstuff/alloy/';
  const recipes = [
    {
      results: [{ amount: 2, item: { count: 1, id: 'hazennstuff:zenalite_ingot' } }],
      ingredients: [
        { item: 'irons_spellbooks:arcane_ingot' },
        { item: 'eternal_starlight:deepsilver_ingot' },
        { item: 'eternal_starlight:deepsilver_ingot' },
        { item: 'unify:lead_ingot' },
        { item: 'hazennstuff:starkissed_zenalite' },
      ],
      burn_time: 400,
      id: `${id_prefix}zenalite_ingot`,
    },
  ];
  recipes.forEach((recipe) => {
    recipe.type = 'eternal_starlight:alloy';
    event.custom(recipe).id(recipe.id);
  });
});
