ServerEvents.recipes((event) => {
  const id_prefix = 'mt:transmog/item_application/';

  const recipes = [
    {
      results: [{ id: 'transmog:transmogrification_table' }],
      ingredients: [{ item: 'minecraft:amethyst_block' }, { item: 'royalvariations:royal_ender_pearl' }],
      id: `${id_prefix}transmogrification_table`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:item_application';
    event.custom(recipe).id(recipe.id);
  });
});
