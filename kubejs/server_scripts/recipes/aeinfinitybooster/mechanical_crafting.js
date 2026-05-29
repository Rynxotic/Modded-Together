ServerEvents.recipes((event) => {
  const id_prefix = 'mt:aeinfinitybooster/mechanical_crafting/';

  const recipes = [
    {
      result: { id: 'aeinfinitybooster:infinity_card', count: 1 },
      pattern: [' WWW ', 'WUUUW', 'WUBUW', 'WUUUW', ' WWW '],
      key: {
        W: { item: 'ae2:wireless_booster' },
        U: { item: 'eternal_starlight:unrealium_ingot' },
        B: { item: 'mcwholidays:standing_broomstick' },
      },
      id: `${id_prefix}infinity_card`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:mechanical_crafting';
    event.custom(recipe).id(recipe.id);
  });
});
