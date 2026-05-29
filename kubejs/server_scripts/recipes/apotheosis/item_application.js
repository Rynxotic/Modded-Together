ServerEvents.recipes((event) => {
  const id_prefix = 'mt:apotheosis/item_application/';

  const recipes = [
    {
      results: [{ id: 'apotheosis:reforging_table' }],
      ingredients: [
        { item: 'apotheosis:simple_reforging_table' },
        { item: 'bosses_of_mass_destruction:obsidian_heart' },
      ],
      id: `${id_prefix}reforging_table`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:item_application';
    event.custom(recipe).id(recipe.id);
  });
});
