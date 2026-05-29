ServerEvents.recipes((event) => {
  const id_prefix = 'mt:eternal_starlight/shapeless/';

  const recipes = [
    {
      result: { id: 'eternal_starlight:saltpeter_powder', count: 1 },
      ingredients: [{ item: 'scguns:niter_dust' }],
      id: `${id_prefix}saltpeter_powder`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'minecraft:crafting_shapeless';
    event.custom(recipe).id(recipe.id);
  });
});
