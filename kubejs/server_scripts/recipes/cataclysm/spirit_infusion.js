ServerEvents.recipes((event) => {
  const id_prefix = 'mt:cataclysm/spirit_infusion/';

  const recipes = [
    // Ignitium Armor (Infernal + Eldritch)
    {
      result: { id: 'cataclysm:ignitium_helmet', count: 1 },
      input: { item: 'iceandfire:dragonsteel_fire_helmet', count: 1 },
      extraInputs: [
        { item: 'cataclysm:ignitium_ingot' },
        { item: 'eternal_starlight:deepsilver_ingot', count: 3 },
        { item: 'create:sturdy_sheet', count: 16 },
        { item: 'eternal_starlight:thermal_springstone_ingot', count: 32 },
        { item: 'eternal_starlight:red_starlight_crystal_shard', count: 2 },
      ],
      spirits: [
        { type: 'malum:infernal', count: 48 },
        { type: 'malum:eldritch', count: 64 },
      ],
      id: `${id_prefix}ignitium_helmet`,
    },
    {
      result: { id: 'cataclysm:ignitium_chestplate', count: 1 },
      input: { item: 'iceandfire:dragonsteel_fire_chestplate', count: 1 },
      extraInputs: [
        { item: 'cataclysm:ignitium_ingot' },
        { item: 'eternal_starlight:deepsilver_ingot', count: 3 },
        { item: 'create:sturdy_sheet', count: 16 },
        { item: 'eternal_starlight:thermal_springstone_ingot', count: 32 },
        { item: 'eternal_starlight:red_starlight_crystal_shard', count: 2 },
      ],
      spirits: [
        { type: 'malum:infernal', count: 48 },
        { type: 'malum:eldritch', count: 64 },
      ],
      id: `${id_prefix}ignitium_chestplate`,
    },
    {
      result: { id: 'cataclysm:ignitium_leggings', count: 1 },
      input: { item: 'iceandfire:dragonsteel_fire_leggings', count: 1 },
      extraInputs: [
        { item: 'cataclysm:ignitium_ingot' },
        { item: 'eternal_starlight:deepsilver_ingot', count: 3 },
        { item: 'create:sturdy_sheet', count: 16 },
        { item: 'eternal_starlight:thermal_springstone_ingot', count: 32 },
        { item: 'eternal_starlight:red_starlight_crystal_shard', count: 2 },
      ],
      spirits: [
        { type: 'malum:infernal', count: 48 },
        { type: 'malum:eldritch', count: 64 },
      ],
      id: `${id_prefix}ignitium_leggings`,
    },
    {
      result: { id: 'cataclysm:ignitium_boots', count: 1 },
      input: { item: 'iceandfire:dragonsteel_fire_boots', count: 1 },
      extraInputs: [
        { item: 'cataclysm:ignitium_ingot' },
        { item: 'eternal_starlight:deepsilver_ingot', count: 3 },
        { item: 'create:sturdy_sheet', count: 16 },
        { item: 'eternal_starlight:thermal_springstone_ingot', count: 32 },
        { item: 'eternal_starlight:red_starlight_crystal_shard', count: 2 },
      ],
      spirits: [
        { type: 'malum:infernal', count: 48 },
        { type: 'malum:eldritch', count: 64 },
      ],
      id: `${id_prefix}ignitium_boots`,
    },
    // Cursium Armor (Aqueous + Aerial + Eldritch)
    {
      result: { id: 'cataclysm:cursium_helmet', count: 1 },
      input: { item: 'iceandfire:dragonsteel_ice_helmet', count: 1 },
      extraInputs: [
        { item: 'cataclysm:cursium_ingot' },
        { item: 'eternal_starlight:deepsilver_ingot', count: 3 },
        { item: 'create:sturdy_sheet', count: 16 },
        { item: 'eternal_starlight:glacite_shard', count: 32 },
        { item: 'cataclysm:cursed_eye', count: 4 },
      ],
      spirits: [
        { type: 'malum:aqueous', count: 32 },
        { type: 'malum:aerial', count: 32 },
        { type: 'malum:eldritch', count: 64 },
      ],
      id: `${id_prefix}cursium_helmet`,
    },
    {
      result: { id: 'cataclysm:cursium_chestplate', count: 1 },
      input: { item: 'iceandfire:dragonsteel_ice_chestplate', count: 1 },
      extraInputs: [
        { item: 'cataclysm:cursium_ingot' },
        { item: 'eternal_starlight:deepsilver_ingot', count: 3 },
        { item: 'create:sturdy_sheet', count: 16 },
        { item: 'eternal_starlight:glacite_shard', count: 32 },
        { item: 'cataclysm:cursed_eye', count: 4 },
      ],
      spirits: [
        { type: 'malum:aqueous', count: 32 },
        { type: 'malum:aerial', count: 32 },
        { type: 'malum:eldritch', count: 64 },
      ],
      id: `${id_prefix}cursium_chestplate`,
    },
    {
      result: { id: 'cataclysm:cursium_leggings', count: 1 },
      input: { item: 'iceandfire:dragonsteel_ice_leggings', count: 1 },
      extraInputs: [
        { item: 'cataclysm:cursium_ingot' },
        { item: 'eternal_starlight:deepsilver_ingot', count: 3 },
        { item: 'create:sturdy_sheet', count: 16 },
        { item: 'eternal_starlight:glacite_shard', count: 32 },
        { item: 'cataclysm:cursed_eye', count: 4 },
      ],
      spirits: [
        { type: 'malum:aqueous', count: 32 },
        { type: 'malum:aerial', count: 32 },
        { type: 'malum:eldritch', count: 64 },
      ],
      id: `${id_prefix}cursium_leggings`,
    },
    {
      result: { id: 'cataclysm:cursium_boots', count: 1 },
      input: { item: 'iceandfire:dragonsteel_ice_boots', count: 1 },
      extraInputs: [
        { item: 'cataclysm:cursium_ingot' },
        { item: 'eternal_starlight:deepsilver_ingot', count: 3 },
        { item: 'create:sturdy_sheet', count: 16 },
        { item: 'eternal_starlight:glacite_shard', count: 32 },
        { item: 'cataclysm:cursed_eye', count: 4 },
      ],
      spirits: [
        { type: 'malum:aqueous', count: 32 },
        { type: 'malum:aerial', count: 32 },
        { type: 'malum:eldritch', count: 64 },
      ],
      id: `${id_prefix}cursium_boots`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'malum:spirit_infusion';
    event.custom(recipe).id(recipe.id);
  });
});
