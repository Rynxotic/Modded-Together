ServerEvents.recipes((event) => {
  const id_prefix = 'mt:ars_nouveau/worktable/';

  const recipes = [
    {
      result: { id: 'ars_nouveau:ring_of_potential', count: 1 },
      pattern: ['   ', 'IGI', ' I '],
      reagents: ['SSSS'],
      key: {
        S: { item: 'create:iron_sheet' },
        G: { item: 'ars_nouveau:source_gem' },
        I: { item: 'minecraft:iron_nugget' },
        A: { item: 'irons_spellbooks:arcane_essence' },
      },
      id: `${id_prefix}ring_of_potential`,
    },
    {
      result: { id: 'ars_nouveau:imbuement_chamber', count: 1 },
      pattern: [' P ', 'PSP', ' P '],
      reagents: ['HHHH'],
      key: {
        S: { item: 'unify:gold_sheet' },
        P: { item: 'ars_nouveau:archwood_planks' },
        H: { item: 'malum:hallowed_gold_ingot' },
      },
      id: `${id_prefix}imbuement_chamber`,
    },
    {
      result: { id: 'ars_nouveau:arcane_pedestal', count: 1 },
      pattern: ['BGB', 'IBI', 'IBI'],
      reagents: ['SSSS'],
      key: {
        S: { item: 'create:golden_sheet' },
        G: { item: 'ars_nouveau:source_gem' },
        I: { item: 'malum:hallowed_gold_ingot' },
        B: { item: 'ars_nouveau:sourcestone' },
      },
      id: `${id_prefix}arcane_pedestal`,
    },
    {
      result: { id: 'ars_nouveau:arcane_core', count: 1 },
      pattern: ['BGB', 'B B', 'BGB'],
      reagents: ['IIII'],
      key: {
        G: { item: 'ars_nouveau:source_gem' },
        I: { item: 'malum:hallowed_gold_ingot' },
        B: { item: 'ars_nouveau:sourcestone' },
      },
      id: `${id_prefix}arcane_core`,
    },
    {
      result: { id: 'ars_nouveau:enchanting_apparatus', count: 1 },
      pattern: [' H ', 'HBH', ' H '],
      reagents: ['SSSS'],
      key: {
        S: { item: 'create:golden_sheet' },
        B: { item: 'ars_nouveau:source_gem_block' },
        H: { item: 'malum:hallowed_gold_ingot' },
      },
      id: `${id_prefix}enchanting_apparatus`,
    },
    {
      result: { id: 'ars_nouveau:warp_scroll', count: 8 },
      pattern: ['PPP', 'PEP', 'PPP'],
      reagents: ['AAAA'],
      key: {
        P: { item: 'minecraft:map' },
        E: { item: 'royalvariations:royal_ender_pearl' },
        A: { item: 'irons_spellbooks:arcane_essence' },
      },
      id: `${id_prefix}warp_scroll`,
    },
    {
      result: { id: 'ars_nouveau:dull_trinket', count: 1 },
      pattern: [' L ', 'LBL', 'IGI'],
      reagents: ['AAAA'],
      key: {
        L: { item: 'minecraft:leather' },
        B: { item: 'create:brass_ingot' },
        I: { item: 'iceandfire:silver_nugget' },
        G: { item: 'ars_nouveau:source_gem' },
        A: { item: 'irons_spellbooks:arcane_essence' },
      },
      id: `${id_prefix}dull_trinket`,
    },
    {
      result: { id: 'ars_nouveau:novice_spell_book', count: 1 },
      pattern: ['   ', 'SBS', '   '],
      reagents: ['AAAA'],
      key: {
        S: { item: 'unify:gold_sheet' },
        B: { item: 'minecraft:book' },
        A: { item: 'irons_spellbooks:arcane_essence' },
      },
      id: `${id_prefix}novice_spell_book`,
    },
    {
      result: { id: 'ars_nouveau:source_jar', count: 1 },
      pattern: ['SNS', 'IJI', 'III'],
      reagents: ['AAAA'],
      key: {
        S: { item: 'ars_nouveau:archwood_slab' },
        N: { item: 'malum:hallowed_gold_nugget' },
        I: { item: 'malum:hallowed_gold_ingot' },
        J: { item: 'supplementaries:jar' },
        A: { item: 'irons_spellbooks:arcane_essence' },
      },
      id: `${id_prefix}source_jar`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'eidolon_repraised:worktable';
    event.custom(recipe).id(recipe.id);
  });
});
