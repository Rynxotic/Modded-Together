ServerEvents.recipes((event) => {
  const id_prefix = 'mt:ars_nouveau/enchanting_apparatus/';

  const recipes = [
    {
      result: { id: 'ars_nouveau:drygmy_charm', count: 1 },
      reagent: { item: 'ars_nouveau:drygmy_shard' },
      pedestalItems: [
        { item: 'malum:cthonic_gold' },
        { item: 'hazennstuff:deus_essence' },
        { item: 'malum:cthonic_gold' },
        { item: 'hazennstuff:deus_essence' },
        { item: 'malum:cthonic_gold' },
        { item: 'hazennstuff:deus_essence' },
        { item: 'malum:cthonic_gold' },
        { item: 'hazennstuff:deus_essence' },
      ],
      sourceCost: 20000,
      id: `${id_prefix}drygmy_charm`,
    },
    {
      result: { id: 'ars_nouveau:splash_flask_cannon', count: 1 },
      reagent: { item: 'create:potato_cannon' },
      pedestalItems: [
        { item: 'create:golden_sheet' },
        { item: 'create:golden_sheet' },
        { item: 'ars_nouveau:source_gem_block' },
        { item: 'createaddition:iron_rod' },
        { item: 'create:golden_sheet' },
        { item: 'createaddition:iron_rod' },
        { item: 'ars_nouveau:source_gem_block' },
        { item: 'create:golden_sheet' },
      ],
      sourceCost: 2000,
      id: `${id_prefix}splash_flask_cannon`,
    },
    {
      result: { id: 'ars_nouveau:stable_warp_scroll', count: 1 },
      reagent: { item: 'ars_nouveau:warp_scroll' },
      pedestalItems: [
        { item: 'malum:warp_flux' },
        { item: 'royalvariations:royal_ender_pearl' },
        { item: 'malum:warp_flux' },
        { item: 'royalvariations:royal_ender_pearl' },
        { item: 'malum:warp_flux' },
        { item: 'royalvariations:royal_ender_pearl' },
        { item: 'malum:warp_flux' },
        { item: 'royalvariations:royal_ender_pearl' },
      ],
      sourceCost: 10000,
      id: `${id_prefix}stable_warp_scroll`,
    },
    {
      result: { id: 'ars_nouveau:archmage_spell_book', count: 1 },
      reagent: { item: 'ars_nouveau:apprentice_spell_book' },
      pedestalItems: [
        { item: 'ars_elemental:mark_of_mastery' },
        { item: 'ars_elemental:mark_of_mastery' },
        { item: 'eternal_starlight:wind_crystal' },
        { item: 'eternal_starlight:terra_crystal' },
        { item: 'irons_spellbooks:divine_soulshard' },
        { item: 'eternal_starlight:blaze_crystal' },
        { item: 'eternal_starlight:water_crystal' },
        { item: 'ars_elemental:mark_of_mastery' },
      ],
      sourceCost: 20000,
      id: `${id_prefix}archmage_spell_book`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'ars_nouveau:enchanting_apparatus';
    event.custom(recipe).id(recipe.id);
  });
});
