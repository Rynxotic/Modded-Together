ServerEvents.recipes((event) => {
  const id_prefix = 'mt:irons_spellbooks/shaped/';

  const recipes = [
    {
      result: { id: 'irons_spellbooks:inscription_table', count: 1 },
      pattern: ['  B', 'WWW', 'F F'],
      key: {
        B: { item: 'minecraft:enchanted_book' },
        W: { item: 'malum:runewood_planks_slab' },
        F: { item: 'malum:runewood_planks_fence' },
      },
      id: `${id_prefix}inscription_table`,
    },
    {
      result: { id: 'irons_spellbooks:iron_spell_book', count: 1 },
      pattern: [' S ', 'SBS', ' S '],
      key: {
        B: { item: 'irons_spellbooks:copper_spell_book' },
        S: { item: 'unify:iron_sheet' },
      },
      id: `${id_prefix}iron_spell_book`,
    },
    {
      result: { id: 'irons_spellbooks:portal_frame', count: 1 },
      pattern: ['ABA', 'C C', 'C C'],
      key: {
        C: { item: 'irons_spellbooks:arcane_ingot' },
        B: { item: 'waystones:warp_dust' },
        A: { item: 'irons_spellbooks:mithril_ingot' },
      },
      id: `${id_prefix}portal_frame`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'minecraft:crafting_shaped';
    event.custom(recipe).id(recipe.id);
  });
});
