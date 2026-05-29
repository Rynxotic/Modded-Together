ServerEvents.recipes((event) => {
  const id_prefix = 'mt:sophisticatedstorage/item_application/';

  const recipes = [
    {
      results: [{ id: 'sophisticatedstorage:controller' }],
      ingredients: [{ item: 'create:andesite_casing' }, { item: 'sophisticatedstorage:basic_tier_upgrade' }],
      id: `${id_prefix}controller`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:item_application';
    event.custom(recipe).id(recipe.id);
  });
});
