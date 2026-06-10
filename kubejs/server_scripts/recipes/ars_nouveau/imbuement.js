ServerEvents.recipes((event) => {
  const id_prefix = 'mt:ars_nouveau/imbuement/';

  const recipes = [
    {
      output: { id: 'ars_nouveau:abjuration_essence', count: 1 },
      input: { tag: 'c:gems/source' },
      pedestalItems: [
        { item: 'malum:sacred_spirit' },
        { item: 'minecraft:fermented_spider_eye' },
        { item: 'supplementaries:soap' },
      ],
      source: 2000,
      id: `${id_prefix}abjuration_essence`,
    },

    {
      output: { id: 'ars_nouveau:conjuration_essence', count: 1 },
      input: { tag: 'c:gems/source' },
      pedestalItems: [
        { item: 'malum:wicked_spirit' },
        { item: 'ars_nouveau:wilden_horn' },
        { item: 'eidolon_repraised:offering_incense' },
      ],
      source: 2000,
      id: `${id_prefix}conjuration_essence`,
    },

    {
      output: { id: 'ars_nouveau:manipulation_essence', count: 1 },
      input: { tag: 'c:gems/source' },
      pedestalItems: [{ item: 'malum:arcane_spirit' }, { item: 'minecraft:stone_button' }, { item: 'minecraft:clock' }],
      source: 2000,
      id: `${id_prefix}manipulation_essence`,
    },

    {
      output: { id: 'ars_nouveau:water_essence', count: 1 },
      input: { tag: 'c:gems/source' },
      pedestalItems: [
        { item: 'malum:aqueous_spirit' },
        { item: 'minecraft:water_bucket' },
        { item: 'minecraft:seagrass' },
      ],
      source: 2000,
      id: `${id_prefix}water_essence`,
    },

    {
      output: { id: 'ars_nouveau:fire_essence', count: 1 },
      input: { tag: 'c:gems/source' },
      pedestalItems: [
        { item: 'malum:infernal_spirit' },
        { item: 'mythsandlegends:fire_heart' },
        { item: 'minecraft:gunpowder' },
      ],
      source: 2000,
      id: `${id_prefix}fire_essence`,
    },

    {
      output: { id: 'ars_nouveau:earth_essence', count: 1 },
      input: { tag: 'c:gems/source' },
      pedestalItems: [{ item: 'malum:earthen_spirit' }, { tag: 'c:ingots/iron' }, { item: 'minecraft:dirt' }],
      source: 2000,
      id: `${id_prefix}earth_essence`,
    },

    {
      output: { id: 'ars_nouveau:air_essence', count: 1 },
      input: { tag: 'c:gems/source' },
      pedestalItems: [{ item: 'malum:aerial_spirit' }, { item: 'minecraft:feather' }, { tag: 'minecraft:arrows' }],
      source: 2000,
      id: `${id_prefix}air_essence`,
    },

    {
      output: { id: 'ars_elemental:anima_essence', count: 1 },
      input: { tag: 'c:gems/source' },
      pedestalItems: [
        { item: 'malum:eldritch_spirit' },
        { item: 'eidolon_repraised:bloodlust_incense' },
        { item: 'irons_spellbooks:blood_vial' },
      ],
      source: 3000,
      id: `${id_prefix}anima_essence`,
    },

    {
      output: { id: 'irons_spellbooks:arcane_essence', count: 1 },
      input: { tag: 'c:gems/source' },
      pedestalItems: [
        { item: 'minecraft:nether_star' },
        { item: 'malum:arcane_spirit' },
        { item: 'malum:eldritch_spirit' },
      ],
      source: 3000,
      id: `${id_prefix}arcane_essence`,
    },

    {
      output: { id: 'irons_spellbooks:cinder_essence', count: 1 },
      input: { tag: 'c:gems/source' },
      pedestalItems: [
        { item: 'minecraft:netherite_ingot' },
        { item: 'malum:wicked_spirit' },
        { item: 'malum:infernal_spirit' },
      ],
      source: 3000,
      id: `${id_prefix}cinder_essence`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'ars_nouveau:imbuement';
    event.custom(recipe).id(recipe.id);
  });
});
