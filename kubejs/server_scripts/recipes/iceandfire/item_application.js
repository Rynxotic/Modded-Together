ServerEvents.recipes((event) => {
  const id_prefix = 'mt:iceandfire/item_application/';

  const recipes = [
    {
      results: [{ id: 'iceandfire:dragonforge_fire_input' }],
      ingredients: [{ item: 'iceandfire:dragonforge_fire_brick' }, { item: 'malum:anomalous_design' }],
      id: `${id_prefix}dragonforge_fire_input`,
    },
    {
      results: [{ id: 'iceandfire:dragonforge_ice_input' }],
      ingredients: [{ item: 'iceandfire:dragonforge_ice_brick' }, { item: 'malum:anomalous_design' }],
      id: `${id_prefix}dragonforge_ice_input`,
    },
    {
      results: [{ id: 'iceandfire:dragonforge_lightning_input' }],
      ingredients: [{ item: 'iceandfire:dragonforge_lightning_brick' }, { item: 'malum:anomalous_design' }],
      id: `${id_prefix}dragonforge_lightning_input`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:item_application';
    event.custom(recipe).id(recipe.id);
  });
});
