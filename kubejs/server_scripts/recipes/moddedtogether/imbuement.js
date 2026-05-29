ServerEvents.recipes((event) => {
  const id_prefix = 'mt:kubejs/imbuement/';

  const recipes = [
    {
      output: { id: 'kubejs:ice_essence', count: 1 },
      input: { tag: 'c:gems/source' },
      pedestalItems: [
        { item: 'malum:aqueous_spirit' },
        { item: 'irons_spellbooks:icy_fang' },
        { item: 'irons_spellbooks:frozen_bone' },
      ],
      source: 2000,
      id: `${id_prefix}ice_essence`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'ars_nouveau:imbuement';
    event.custom(recipe).id(recipe.id);
  });
});
