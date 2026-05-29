ServerEvents.recipes((event) => {
  const id_prefix = 'mt:iceandfire/enchanting_apparatus/';

  const recipes = [
    {
      result: { id: 'iceandfire:summoning_crystal_fire', count: 1 },
      reagent: { item: 'eternal_starlight:starfire' },
      pedestalItems: [
        { item: 'iceandfire:fire_dragon_blood' },
        { item: 'malum:warp_flux' },
        { item: 'eternal_starlight:starlit_diamond' },
      ],
      sourceCost: 1000,
      id: `${id_prefix}summoning_crystal_fire`,
    },
    {
      result: { id: 'iceandfire:summoning_crystal_ice', count: 1 },
      reagent: { item: 'iceandfire:sapphire_gem' },
      pedestalItems: [
        { item: 'iceandfire:ice_dragon_blood' },
        { item: 'malum:warp_flux' },
        { item: 'eternal_starlight:starlit_diamond' },
      ],
      sourceCost: 1000,
      id: `${id_prefix}summoning_crystal_ice`,
    },
    {
      result: { id: 'iceandfire:summoning_crystal_lightning', count: 1 },
      reagent: { item: 'minecraft:amethyst_shard' },
      pedestalItems: [
        { item: 'iceandfire:lightning_dragon_blood' },
        { item: 'malum:warp_flux' },
        { item: 'eternal_starlight:starlit_diamond' },
      ],
      sourceCost: 1000,
      id: `${id_prefix}summoning_crystal_lightning`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'ars_nouveau:enchanting_apparatus';
    event.custom(recipe).id(recipe.id);
  });
});
