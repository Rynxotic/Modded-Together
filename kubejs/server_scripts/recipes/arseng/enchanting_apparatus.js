ServerEvents.recipes((event) => {
  const id_prefix = 'mt:arseng/enchanting_apparatus/';

  const recipes = [
    {
      result: { id: 'arseng:source_cell_housing', count: 1 },
      reagent: { item: 'ae2:item_cell_housing' },
      pedestalItems: [
        { item: 'malum:hallowed_gold_ingot' },
        { item: 'malum:hallowed_gold_ingot' },
        { item: 'malum:hallowed_gold_ingot' },
        { item: 'malum:hallowed_gold_ingot' },
        { item: 'ars_nouveau:source_gem' },
        { item: 'ars_nouveau:source_gem' },
        { item: 'ars_nouveau:manipulation_essence' },
        { item: 'ars_nouveau:manipulation_essence' },
      ],
      sourceCost: 10000,
      id: `${id_prefix}source_cell_housing`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'ars_nouveau:enchanting_apparatus';
    event.custom(recipe).id(recipe.id);
  });
});
