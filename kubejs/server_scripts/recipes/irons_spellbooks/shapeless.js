ServerEvents.recipes((event) => {
  const id_prefix = 'mt:irons_spellbooks/shapeless/';

  const recipes = [
    {
      result: { id: 'irons_spellbooks:shriving_stone', count: 1 },
      ingredients: [{ item: 'minecraft:raw_iron' }, { item: 'eternal_starlight:shivering_gel' }],
      id: `${id_prefix}shriving_stone`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'minecraft:crafting_shapeless';
    event.custom(recipe).id(recipe.id);
  });
});
