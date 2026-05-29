ServerEvents.recipes((event) => {
  const id_prefix = 'mt:iceandfire/dragonforge/';
  const recipes = [
    {
      result: { id: 'iceandfire:dragonsteel_ice_ingot', item: 'iceandfire:dragonsteel_ice_ingot' },
      dragonType: 'ice',
      cookTime: 1000,
      input: { item: 'irons_spellbooks:mithril_ingot' },
      blood: { item: 'iceandfire:ice_dragon_blood' },
      id: `${id_prefix}dragonsteel_ice_ingot`,
    },
    {
      result: { id: 'iceandfire:dragonsteel_fire_ingot', item: 'iceandfire:dragonsteel_fire_ingot' },
      dragonType: 'fire',
      cookTime: 1000,
      input: { item: 'irons_spellbooks:mithril_ingot' },
      blood: { item: 'iceandfire:fire_dragon_blood' },
      id: `${id_prefix}dragonsteel_fire_ingot`,
    },
    {
      result: { id: 'iceandfire:dragonsteel_lightning_ingot', item: 'iceandfire:dragonsteel_lightning_ingot' },
      dragonType: 'lightning',
      cookTime: 1000,
      input: { item: 'irons_spellbooks:mithril_ingot' },
      blood: { item: 'iceandfire:lightning_dragon_blood' },
      id: `${id_prefix}dragonsteel_lightning_ingot`,
    },
  ];
  recipes.forEach((recipe) => {
    recipe.type = 'iceandfire:dragonforge';
    event.custom(recipe).id(recipe.id);
  });
});
