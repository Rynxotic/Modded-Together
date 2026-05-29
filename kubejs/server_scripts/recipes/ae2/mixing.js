ServerEvents.recipes((event) => {
  const id_prefix = 'mt:ae2/mixing/';

  const recipes = [
    {
      results: [{ id: 'ae2:quartz_glass', count: 1 }],
      ingredients: [
        { item: 'ae2:certus_quartz_dust', count: 5 },
        { item: 'minecraft:glass', count: 4 },
      ],
      heat_requirement: 'heated',
      id: `${id_prefix}quartz_glass`,
    },
    {
      results: [{ id: 'ae2:quartz_vibrant_glass', count: 1 }],
      ingredients: [{ item: 'minecraft:glowstone_dust', count: 2 }, { item: 'ae2:quartz_glass' }],
      heat_requirement: 'none',
      id: `${id_prefix}quartz_vibrant_glass`,
    },
    {
      results: [{ id: 'ae2:quartz_fiber', count: 1 }],
      ingredients: [
        { item: 'ae2:certus_quartz_dust', count: 3 },
        { item: 'minecraft:glass', count: 6 },
      ],
      heat_requirement: 'none',
      id: `${id_prefix}quartz_fiber`,
    },
    {
      results: [{ id: 'ae2:fluix_glass_cable', count: 1 }],
      ingredients: [{ item: 'ae2:quartz_fiber' }, { item: 'ae2:fluix_crystal', count: 2 }],
      heat_requirement: 'none',
      id: `${id_prefix}fluix_glass_cable`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:mixing';
    event.custom(recipe).id(recipe.id);
  });
});
