ServerEvents.recipes((event) => {
  const id_prefix = 'mt:extendedae/mixing/';

  const recipes = [
    {
      results: [{ id: 'extendedae:entro_seed', count: 1 }],
      ingredients: [
        { item: 'minecraft:redstone', count: 3 },
        { item: 'oritech:platinum_dust', count: 3 },
        { item: 'ae2:ender_dust', count: 3 },
        { item: 'ae2:sky_dust' },
      ],
      heat_requirement: 'none',
      id: `${id_prefix}entro_seed`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:mixing';
    event.custom(recipe).id(recipe.id);
  });
});
