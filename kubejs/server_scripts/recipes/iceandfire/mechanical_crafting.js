ServerEvents.recipes((event) => {
  const id_prefix = 'mt:iceandfire/mechanical_crafting/';

  const recipes = [
    {
      result: { id: 'iceandfire:dragonforge_lightning_core_disabled', count: 1 },
      pattern: [' B B ', 'BSFSB', ' AHA ', 'BSDSB', ' B B '],
      key: {
        H: { item: 'iceandfire:lightning_dragon_heart' },
        B: { item: 'iceandfire:dragonforge_lightning_brick' },
        F: { item: 'cataclysm:void_core' },
        S: { item: 'create:sturdy_sheet' },
        A: { item: 'malum:soul_stained_steel_plating' },
        D: { item: 'malum:paracausal_flame' },
      },
      id: `${id_prefix}dragonforge_lightning_core`,
    },
    {
      result: { id: 'iceandfire:dragonforge_ice_core_disabled', count: 1 },
      pattern: [' B B ', 'BSFSB', ' AHA ', 'BSDSB', ' B B '],
      key: {
        H: { item: 'iceandfire:ice_dragon_heart' },
        B: { item: 'iceandfire:dragonforge_ice_brick' },
        F: { item: 'cataclysm:void_core' },
        S: { item: 'create:sturdy_sheet' },
        A: { item: 'malum:soul_stained_steel_plating' },
        D: { item: 'malum:paracausal_flame' },
      },
      id: `${id_prefix}dragonforge_ice_core`,
    },
    {
      result: { id: 'iceandfire:dragonforge_fire_core_disabled', count: 1 },
      pattern: [' B B ', 'BSFSB', ' AHA ', 'BSDSB', ' B B '],
      key: {
        H: { item: 'iceandfire:fire_dragon_heart' },
        B: { item: 'iceandfire:dragonforge_fire_brick' },
        F: { item: 'cataclysm:void_core' },
        S: { item: 'create:sturdy_sheet' },
        A: { item: 'malum:soul_stained_steel_plating' },
        D: { item: 'malum:paracausal_flame' },
      },
      id: `${id_prefix}dragonforge_fire_core`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:mechanical_crafting';
    event.custom(recipe).id(recipe.id);
  });
});
