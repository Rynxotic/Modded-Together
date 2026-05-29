ServerEvents.recipes((event) => {
  const id_prefix = 'mt:apotheosis/shaped/';

  const recipes = [
    {
      result: { id: 'apothic_enchanting:scrap_tome', count: 4 },
      pattern: ['IBI', 'BAB', 'IBI'],
      key: {
        B: { item: 'minecraft:book' },
        I: { item: 'minecraft:netherite_ingot' },
        A: { item: 'minecraft:anvil' },
      },
      id: `${id_prefix}scrap_tome`,
    },
    {
      result: { id: 'apotheosis:simple_reforging_table', count: 1 },
      pattern: [' H ', 'SCS', 'PPP'],
      key: {
        H: { item: 'createdieselgenerators:hammer' },
        C: { item: 'cataclysm:storm_eye' },
        S: { item: 'minecraft:stone' },
        P: { item: 'malum:runewood_planks' },
      },
      id: `${id_prefix}simple_reforging_table`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'minecraft:crafting_shaped';
    event.custom(recipe).id(recipe.id);
  });
});
