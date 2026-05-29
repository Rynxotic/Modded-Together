ServerEvents.recipes((event) => {
  const id_prefix = 'mt:irons_spellbooks/runeworking/';

  const recipes = [
    {
      result: { id: 'irons_spellbooks:ender_rune', count: 1 },
      input: { count: 1, item: 'irons_spellbooks:blank_rune' },
      secondaryInput: { count: 16, item: 'irons_spellbooks:arcane_essence' },
      soundType: 'block.stone.break',
      id: `${id_prefix}ender_rune`,
    },
    {
      result: { id: 'irons_spellbooks:holy_rune', count: 1 },
      input: { count: 1, item: 'irons_spellbooks:blank_rune' },
      secondaryInput: { count: 16, item: 'ars_nouveau:abjuration_essence' },
      soundType: 'block.stone.break',
      id: `${id_prefix}holy_rune`,
    },
    {
      result: { id: 'irons_spellbooks:fire_rune', count: 1 },
      input: { count: 1, item: 'irons_spellbooks:blank_rune' },
      secondaryInput: { count: 16, item: 'ars_nouveau:fire_essence' },
      soundType: 'block.stone.break',
      id: `${id_prefix}fire_rune`,
    },
    {
      result: { id: 'irons_spellbooks:ice_rune', count: 1 },
      input: { count: 1, item: 'irons_spellbooks:blank_rune' },
      secondaryInput: { count: 16, item: 'kubejs:ice_essence' },
      soundType: 'block.stone.break',
      id: `${id_prefix}ice_rune`,
    },
    {
      result: { id: 'irons_spellbooks:evocation_rune', count: 1 },
      input: { count: 1, item: 'irons_spellbooks:blank_rune' },
      secondaryInput: { count: 16, item: 'ars_nouveau:manipulation_essence' },
      soundType: 'block.stone.break',
      id: `${id_prefix}evocation_rune`,
    },
    {
      result: { id: 'irons_spellbooks:lightning_rune', count: 1 },
      input: { count: 1, item: 'irons_spellbooks:blank_rune' },
      secondaryInput: { count: 16, item: 'ars_nouveau:air_essence' },
      soundType: 'block.stone.break',
      id: `${id_prefix}lightning_rune`,
    },
    {
      result: { id: 'irons_spellbooks:blood_rune', count: 1 },
      input: { count: 1, item: 'irons_spellbooks:blank_rune' },
      secondaryInput: { count: 16, item: 'ars_elemental:anima_essence' },
      soundType: 'block.stone.break',
      id: `${id_prefix}blood_rune`,
    },
    {
      result: { id: 'irons_spellbooks:nature_rune', count: 1 },
      input: { count: 1, item: 'irons_spellbooks:blank_rune' },
      secondaryInput: { count: 16, item: 'ars_nouveau:earth_essence' },
      soundType: 'block.stone.break',
      id: `${id_prefix}nature_rune`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'malum:runeworking';
    event.custom(recipe).id(recipe.id);
  });
});
