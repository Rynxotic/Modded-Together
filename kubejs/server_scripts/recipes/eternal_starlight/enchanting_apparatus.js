ServerEvents.recipes((event) => {
  const id_prefix = 'mt:eternal_starlight/enchanting_apparatus/';

  const recipes = [
    {
      result: { id: 'eternal_starlight:blaze_crystal', count: 1 },
      reagent: { item: 'eternal_starlight:red_starlight_crystal_shard' },
      pedestalItems: [
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:blaze_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:blaze_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:blaze_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:blaze_crystal_ingredients' },
      ],
      sourceCost: 10000,
      id: `${id_prefix}blaze_crystal`,
    },
    {
      result: { id: 'eternal_starlight:wind_crystal', count: 1 },
      reagent: { item: 'eternal_starlight:red_starlight_crystal_shard' },
      pedestalItems: [
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:wind_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:wind_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:wind_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:wind_crystal_ingredients' },
      ],
      sourceCost: 10000,
      id: `${id_prefix}wind_crystal`,
    },
    {
      result: { id: 'eternal_starlight:terra_crystal', count: 1 },
      reagent: { item: 'eternal_starlight:red_starlight_crystal_shard' },
      pedestalItems: [
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:terra_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:terra_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:terra_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:terra_crystal_ingredients' },
      ],
      sourceCost: 10000,
      id: `${id_prefix}terra_crystal`,
    },
    {
      result: { id: 'eternal_starlight:lunar_crystal', count: 1 },
      reagent: { item: 'eternal_starlight:red_starlight_crystal_shard' },
      pedestalItems: [
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:lunar_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:lunar_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:lunar_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:lunar_crystal_ingredients' },
      ],
      sourceCost: 10000,
      id: `${id_prefix}lunar_crystal`,
    },
    {
      result: { id: 'eternal_starlight:water_crystal', count: 1 },
      reagent: { item: 'eternal_starlight:red_starlight_crystal_shard' },
      pedestalItems: [
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:water_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:water_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:water_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:water_crystal_ingredients' },
      ],
      sourceCost: 10000,
      id: `${id_prefix}water_crystal`,
    },
    {
      result: { id: 'eternal_starlight:light_crystal', count: 1 },
      reagent: { item: 'eternal_starlight:red_starlight_crystal_shard' },
      pedestalItems: [
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:light_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:light_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:light_crystal_ingredients' },
        { item: 'eternal_starlight:red_starlight_crystal_shard' },
        { tag: 'eternal_starlight:light_crystal_ingredients' },
      ],
      sourceCost: 10000,
      id: `${id_prefix}light_crystal`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'ars_nouveau:enchanting_apparatus';
    event.custom(recipe).id(recipe.id);
  });
});
