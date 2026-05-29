ServerEvents.recipes((event) => {
  const recipes = [
    {
      filter: { id: 'create:crafting/materials/sand_paper' },
      to_replace: 'minecraft:sand',
      replace_with: 'minecraft:sandstone',
    },
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
      filter: { mod: 'farmersdelight' },
      to_replace: 'minecraft:egg',
      replace_with: '#c:eggs',
    },
    {
      filter: { mod: 'mynethersdelight' },
      to_replace: 'minecraft:egg',
      replace_with: '#c:eggs',
    },
    {
      filter: { id: 'malum:malignant_pewter_ingot' },
      to_replace: '#c:ingots/iron',
      replace_with: 'eidolon_repraised:pewter_ingot',
    },
    {
      filter: { mod: 'scguns' },
      to_replace: 'scguns:niter_dust',
      replace_with: 'eternal_starlight:saltpeter_powder',
    },
    {
      filter: {},
      to_replace: 'create:dough',
      replace_with: '#c:doughs/wheat',
    },
    {
      filter: [{ output: 'sophisticatedstorage:storage_link' }],
      to_replace: `minecraft:ender_pearl`,
      replace_with: 'create:transmitter',
    },
  ];

  recipes.forEach((recipe) => {
    event.replaceInput(recipe.filter, recipe.to_replace, recipe.replace_with);
  });
});
