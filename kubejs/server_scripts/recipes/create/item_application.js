ServerEvents.recipes((event) => {
  const id_prefix = 'mt:create/item_application/';

  const recipes = [
    {
      results: [{ id: 'create:railway_casing' }],
      ingredients: [{ item: 'minecraft:deepslate' }, { item: 'unify:gold_sheet' }],
      id: `${id_prefix}railway_casing`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:item_application';
    event.custom(recipe).id(recipe.id);
  });
});
