ServerEvents.recipes((event) => {
  const recipes = [
    {
      filter: { mod: 'eidolon_repraised' },
      to_replace: 'eidolon_repraised:arcane_gold_ingot',
      replace_with: 'malum:hallowed_gold_ingot',
    },
    {
      filter: { mod: 'eidolon_repraised' },
      to_replace: 'eidolon_repraised:arcane_gold_nugget',
      replace_with: 'malum:hallowed_gold_nugget',
    },
    {
      filter: { mod: 'eidolon_repraised' },
      to_replace: 'eidolon_repraised:arcane_gold_block',
      replace_with: 'malum:block_of_hallowed_gold',
    },
    {
      filter: { mod: 'scguns' },
      to_replace: 'scguns:niter_dust',
      replace_with: 'eternal_starlight:saltpeter_powder',
    },
  ];

  recipes.forEach((recipe) => {
    event.replaceOutput(recipe.filter, recipe.to_replace, recipe.replace_with);
  });
});
