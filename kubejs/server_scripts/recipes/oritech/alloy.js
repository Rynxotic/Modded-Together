ServerEvents.recipes((event) => {
  const id_prefix = 'mt:oritech/alloy/';
  const recipes = [
    {
      results: [{ amount: 1, item: { count: 1, id: 'oritech:steel_ingot' } }],
      ingredients: [
        { item: 'minecraft:iron_ingot' },
        { item: 'oritech:coal_dust' },
        { item: 'oritech:coal_dust' },
        { item: 'oritech:coal_dust' },
        { item: 'oritech:coal_dust' },
        { item: 'oritech:coal_dust' },
        { item: 'oritech:coal_dust' },
        { item: 'oritech:coal_dust' },
        { item: 'oritech:coal_dust' },
      ],
      burn_time: 400,
      id: `${id_prefix}steel_ingot`,
    },
  ];
  recipes.forEach((recipe) => {
    recipe.type = 'eternal_starlight:alloy';
    event.custom(recipe).id(recipe.id);
  });
});
