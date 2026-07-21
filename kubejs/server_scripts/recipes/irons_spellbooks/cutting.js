ServerEvents.recipes((event) => {
  const id_prefix = 'mt:farmersdelight/cutting/';

  const recipes = [
    {
      ingredients: [{ item: 'mynethersdelight:hoglin_hide' }],
      result: [
        {
          item: {
            count: 1,
            id: 'irons_spellbooks:hogskin',
          },
        },
      ],
      tool: [
        {
          type: 'farmersdelight:item_ability',
          action: 'knife_dig',
        },
        {
          tag: 'c:tools/knife',
        },
      ],
      id: `${id_prefix}hogskin`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'farmersdelight:cutting';
    event.custom(recipe).id(recipe.id);
  });
});
