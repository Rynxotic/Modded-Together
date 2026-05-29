// recipes/global/remove.js
ServerEvents.recipes((event) => {
  const recipes = [
    // ae2
    { output: 'ae2:printed_silicon' },
    { output: 'ae2:logic_processor' },
    { output: 'ae2:calculation_processor' },
    { output: 'ae2:engineering_processor' },
    { output: 'ae2:controller' },
    { output: 'ae2:energy_acceptor' },
    { output: 'ae2:quartz_glass' },
    { output: 'ae2:cell_component_1k' },
    { output: 'ae2:cell_component_4k' },
    { output: 'ae2:cell_component_16k' },
    { output: 'ae2:cell_component_64k' },
    { output: 'ae2:cell_component_256k' },
    { output: 'ae2:spatial_cell_component_2' },
    { output: 'ae2:spatial_cell_component_16' },
    { output: 'ae2:spatial_cell_component_128' },
    { output: 'ae2:inscriber' },
    { output: 'ae2:annihilation_core' },
    { output: 'ae2:formation_core' },
    { output: 'ae2:fluix_glass_cable' },
    { output: 'ae2:quartz_fiber' },
    { output: 'ae2:quartz_vibrant_glass' },
    { output: 'ae2:engineering_processor_press' },

    // aeinfinitybooster
    { output: 'aeinfinitybooster:infinity_card' },

    // arseng
    { output: 'arseng:source_cell_housing' },

    // extendedae
    { output: 'extendedae:concurrent_processor_print' },
    { output: 'extendedae:concurrent_processor' },
    { output: 'extendedae:crystal_assembler' },
    { output: 'extendedae:assembler_matrix_frame' },
    { output: 'extendedae:entro_seed' },

    // oritech
    { output: 'oritech:processing_unit' },
    { output: 'oritech:adamant_ingot' },
    { id: 'oritech:assembler/processingunit' },
    { id: 'oritech:foundry/alloy/adamant' },

    // ars_nouveau
    { output: 'ars_elemental:anima_essence' },
    { output: 'ars_nouveau:water_essence' },
    { output: 'ars_nouveau:manipulation_essence' },
    { output: 'ars_nouveau:abjuration_essence' },
    { output: 'ars_nouveau:conjuration_essence' },
    { output: 'ars_nouveau:fire_essence' },
    { output: 'ars_nouveau:air_essence' },
    { output: 'ars_nouveau:earth_essence' },
    { output: 'ars_nouveau:arcane_pedestal' },
    { output: 'ars_nouveau:arcane_core' },
    { output: 'ars_nouveau:enchanting_apparatus' },
    { output: 'ars_nouveau:imbuement_chamber' },
    { output: 'ars_nouveau:source_jar' },
    { output: 'ars_nouveau:warp_scroll' },
    { output: 'ars_nouveau:stable_warp_scroll' },
    { output: 'ars_nouveau:enchanters_fishing_rod' },
    { output: 'ars_nouveau:dull_trinket' },
    { output: 'ars_nouveau:amulet_of_mana_boost' },
    { output: 'ars_nouveau:amulet_of_mana_regen' },
    { output: 'ars_nouveau:mundane_belt' },
    { output: 'ars_nouveau:ring_of_potential' },
    { output: 'ars_nouveau:drygmy_charm' },
    { output: 'ars_nouveau:novice_spell_book' },
    { output: 'ars_nouveau:archmage_spell_book' },

    // irons_spellbooks
    { output: 'irons_spellbooks:ender_rune' },
    { output: 'irons_spellbooks:evocation_rune' },
    { output: 'irons_spellbooks:fire_rune' },
    { output: 'irons_spellbooks:holy_rune' },
    { output: 'irons_spellbooks:ice_rune' },
    { output: 'irons_spellbooks:lightning_rune' },
    { output: 'irons_spellbooks:nature_rune' },
    { output: 'irons_spellbooks:blood_rune' },
    { output: 'irons_spellbooks:shriving_stone' },
    { output: 'irons_spellbooks:iron_spell_book' },
    { output: 'irons_spellbooks:portal_frame' },
    { output: 'irons_spellbooks:inscription_table' },

    // apotheosis
    { output: 'apotheosis:simple_reforging_table' },
    { output: 'apotheosis:reforging_table' },

    // hazennstuff
    { output: 'hazennstuff:starkissed_zenalite' },
    { output: 'hazennstuff:deus_essence' },
    { output: 'hazennstuff:zenalite_ingot' },
    { output: 'hazennstuff:miner_helmet' },
    { output: 'hazennstuff:miner_chestplate' },
    { output: 'hazennstuff:miner_leggings' },
    { output: 'hazennstuff:miner_boots' },
    { output: 'hazennstuff:blazeborne_helmet' },
    { output: 'hazennstuff:blazeborne_chestplate' },
    { output: 'hazennstuff:blazeborne_leggings' },
    { output: 'hazennstuff:blazeborne_boots' },
    { output: 'hazennstuff:seraph_helmet' },
    { output: 'hazennstuff:seraph_chestplate' },
    { output: 'hazennstuff:seraph_leggings' },
    { output: 'hazennstuff:seraph_boots' },
    { output: 'hazennstuff:cryogenic_ruler_helmet' },
    { output: 'hazennstuff:cryogenic_ruler_chestplate' },
    { output: 'hazennstuff:cryogenic_ruler_leggings' },
    { output: 'hazennstuff:cryogenic_ruler_boots' },
    { output: 'hazennstuff:charged_scourge_helmet' },
    { output: 'hazennstuff:charged_scourge_chestplate' },
    { output: 'hazennstuff:charged_scourge_leggings' },
    { output: 'hazennstuff:charged_scourge_boots' },
    { output: 'hazennstuff:flesh_mass_helmet' },
    { output: 'hazennstuff:flesh_mass_chestplate' },
    { output: 'hazennstuff:flesh_mass_leggings' },
    { output: 'hazennstuff:flesh_mass_boots' },
    { output: 'hazennstuff:creaking_helmet' },
    { output: 'hazennstuff:creaking_chestplate' },
    { output: 'hazennstuff:creaking_leggings' },
    { output: 'hazennstuff:creaking_boots' },
    { output: 'hazennstuff:ender_dragon_helmet' },
    { output: 'hazennstuff:ender_dragon_chestplate' },
    { output: 'hazennstuff:ender_dragon_leggings' },
    { output: 'hazennstuff:ender_dragon_boots' },
    { output: 'hazennstuff:alchemist_supreme_helmet' },
    { output: 'hazennstuff:alchemist_supreme_chestplate' },
    { output: 'hazennstuff:alchemist_supreme_leggings' },
    { output: 'hazennstuff:alchemist_supreme_boots' },

    // crystal_chronicles
    { output: 'crystal_chronicles:paladin_helmet' },
    { output: 'crystal_chronicles:paladin_chestplate' },
    { output: 'crystal_chronicles:paladin_leggings' },
    { output: 'crystal_chronicles:paladin_boots' },
    { output: 'crystal_chronicles:tank_helmet' },
    { output: 'crystal_chronicles:tank_chestplate' },
    { output: 'crystal_chronicles:tank_leggings' },
    { output: 'crystal_chronicles:tank_boots' },
    { output: 'crystal_chronicles:pyromancer_helmet' },
    { output: 'crystal_chronicles:pyromancer_chestplate' },
    { output: 'crystal_chronicles:pyromancer_leggings' },
    { output: 'crystal_chronicles:pyromancer_boots' },
    { output: 'crystal_chronicles:mage_helmet' },
    { output: 'crystal_chronicles:mage_chestplate' },
    { output: 'crystal_chronicles:mage_leggings' },
    { output: 'crystal_chronicles:mage_boots' },
    { output: 'crystal_chronicles:toxic_helmet' },
    { output: 'crystal_chronicles:toxic_chestplate' },
    { output: 'crystal_chronicles:toxic_leggings' },
    { output: 'crystal_chronicles:toxic_boots' },
    { output: 'crystal_chronicles:electromancer_helmet' },
    { output: 'crystal_chronicles:electromancer_chestplate' },
    { output: 'crystal_chronicles:electromancer_leggings' },
    { output: 'crystal_chronicles:electromancer_boots' },
    { output: 'crystal_chronicles:rogue_helmet' },
    { output: 'crystal_chronicles:rogue_chestplate' },
    { output: 'crystal_chronicles:rogue_leggings' },
    { output: 'crystal_chronicles:rogue_boots' },
    { output: 'crystal_chronicles:paladin_sword' },
    { output: 'crystal_chronicles:ice_hammer' },
    { output: 'crystal_chronicles:staff' },
    { output: 'crystal_chronicles:blood_scythe' },
    { output: 'crystal_chronicles:spear' },
    { output: 'crystal_chronicles:lightning_bident' },
    { output: 'crystal_chronicles:chakram' },
    { output: 'crystal_chronicles:paladin_shield' },
    { output: 'crystal_chronicles:evocation_twinblade' },
    { output: 'crystal_chronicles:hemalite_shard' },
    { output: 'crystal_chronicles:ice_shard' },
    { output: 'crystal_chronicles:floralite_shard' },
    { output: 'crystal_chronicles:divinite_shard' },
    { output: 'crystal_chronicles:voidstone_shard' },
    { output: 'crystal_chronicles:voltite_shard' },
    { output: 'crystal_chronicles:volcanite_shard' },

    // cataclysm
    { output: 'cataclysm:ignitium_helmet' },
    { output: 'cataclysm:ignitium_chestplate' },
    { output: 'cataclysm:ignitium_leggings' },
    { output: 'cataclysm:ignitium_boots' },
    { output: 'cataclysm:cursium_helmet' },
    { output: 'cataclysm:cursium_chestplate' },
    { output: 'cataclysm:cursium_leggings' },
    { output: 'cataclysm:cursium_boots' },

    // simplyswords
    { output: 'simplyswords:runic_longsword' },
    { output: 'simplyswords:runic_twinblade' },
    { output: 'simplyswords:runic_rapier' },
    { output: 'simplyswords:runic_cutlass' },
    { output: 'simplyswords:runic_greataxe' },
    { output: 'simplyswords:runic_chakram' },
    { output: 'simplyswords:runic_greathammer' },
    { output: 'simplyswords:runic_scythe' },
    { output: 'simplyswords:runic_sai' },
    { output: 'simplyswords:runic_glaive' },
    { output: 'simplyswords:runic_warglaive' },
    { output: 'simplyswords:runic_halberd' },
    { output: 'simplyswords:runic_spear' },
    { output: 'simplyswords:runic_katana' },
    { output: 'simplyswords:runic_claymore' },
    { output: 'simplyswords:tainted_relic' },
    { output: 'simplyswords:righteous_relic' },
    { output: 'simplyswords:sunfire' },
    { output: 'simplyswords:harbinger' },
    { output: 'simplyswords:waking_lichblade' },
    { output: 'simplyswords:awakened_lichblade' },
    { output: 'simplyswords:runefused_gem' },
    { output: 'simplyswords:netherfused_gem' },

    // eidolon_repraised
    { output: 'eidolon_repraised:worktable' },
    { output: 'eidolon_repraised:arcane_gold_ingot' },
    { output: 'eidolon_repraised:arcane_gold_nugget' },
    { output: 'eidolon_repraised:arcane_gold_block' },

    // iceandfire
    { output: 'iceandfire:dragonforge_lightning_core_disabled' },
    { output: 'iceandfire:dragonforge_ice_core_disabled' },
    { output: 'iceandfire:dragonforge_fire_core_disabled' },
    { output: 'iceandfire:dragonforge_lightning_input' },
    { output: 'iceandfire:dragonforge_fire_input' },
    { output: 'iceandfire:dragonforge_ice_input' },
    { output: 'iceandfire:summoning_crystal_ice' },
    { output: 'iceandfire:summoning_crystal_fire' },
    { output: 'iceandfire:summoning_crystal_lightning' },
    { id: 'iceandfire:dragonforge/dragonsteel_lightning_ingot' },
    { id: 'iceandfire:dragonforge/dragonsteel_fire_ingot' },
    { id: 'iceandfire:dragonforge/dragonsteel_ice_ingot' },

    // immersive_aircraft
    { output: 'immersive_aircraft:gyrodyne' },
    { output: 'immersive_aircraft:airship' },
    { output: 'immersive_aircraft:biplane' },
    { output: 'immersive_aircraft:warship' },
    { output: 'immersive_aircraft:propeller' },
    { output: 'immersive_aircraft:enhanced_propeller' },
    { output: 'immersive_aircraft:steel_boiler' },
    { output: 'immersive_aircraft:gyroscope' },
    { output: 'immersive_aircraft:hull' },
    { output: 'immersive_aircraft:sail' },
    { output: 'immersive_aircraft:engine' },
    { output: 'immersive_aircraft:quadrocopter' },
    { output: 'immersive_aircraft:nether_engine' },
    { output: 'immersive_aircraft:eco_engine' },
    { output: 'immersive_aircraft:industrial_gears' },

    // eternal_starlight
    { output: 'eternal_starlight:terra_crystal' },
    { output: 'eternal_starlight:wind_crystal' },
    { output: 'eternal_starlight:water_crystal' },
    { output: 'eternal_starlight:lunar_crystal' },
    { output: 'eternal_starlight:blaze_crystal' },
    { output: 'eternal_starlight:light_crystal' },

    // mynethersdelight
    { output: 'mynethersdelight:hoglin_trophy' },
    { output: 'mynethersdelight:hoglin_hide' },

    // naturescompass
    { output: 'naturescompass:naturescompass' },

    // malum
    { output: 'malum:malignant_pewter_plating' },
    { output: 'malum:soul_stained_steel_plating' },

    // unify
    { output: 'unify:steel_ingot' },

    // minecraft
    { output: 'minecraft:suspicious_sand' },
    { output: 'minecraft:copper_trapdoor' },

    // transmog
    { output: 'transmog:transmogrification_table' },

    // create
    { id: 'createaddition:crushing/tuff_recycling' },
    { id: 'create:item_application/railway_casing' },

    // sophisticatedstorage
    { id: 'sophisticatedstorage:controller' },

    // hazennstuff smithing
    { mod: 'hazennstuff', type: 'minecraft:smithing_transform' },

    // crystal_chronicles smithing
    { mod: 'crystal_chronicles', type: 'minecraft:smithing_transform' },

    // by other mods, not mine
    { id: 'ends_delight:food/ender_noodle' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
