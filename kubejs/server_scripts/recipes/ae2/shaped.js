ServerEvents.recipes((event) => {
  const id_prefix = 'mt:ae2/shaped/';

  const recipes = [
    {
      result: { id: 'ae2:energy_acceptor', count: 1 },
      pattern: ['AAA', 'ABA', 'AAA'],
      key: {
        A: { item: 'create:sturdy_sheet' },
        B: { item: 'createaddition:alternator' },
      },
      id: `${id_prefix}energy_acceptor`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'minecraft:crafting_shaped';
    event.custom(recipe).id(recipe.id);
  });
});
