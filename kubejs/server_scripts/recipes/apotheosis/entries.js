// recipes/apotheosis/affix_loot_entry.js

ServerEvents.generateData('after_mods', (event) => {
  const idPrefix = 'apotheosis:affix_loot_entry/';

  const tiers = [
    {
      weight: 100,

      items: ['minecraft:leather_helmet'],
    },
    {
      weight: 0,

      items: [
        'minecraft:iron_helmet',
        'minecraft:iron_chestplate',
        'minecraft:iron_leggings',
        'minecraft:iron_boots',
        'minecraft:iron_sword',
        'minecraft:iron_pickaxe',
        'minecraft:iron_axe',
        'minecraft:iron_shovel',
        'minecraft:iron_hoe',

        'simplyswords:iron_longsword',
        'simplyswords:iron_rapier',
        'simplyswords:iron_katana',
        'simplyswords:iron_sai',
        'simplyswords:iron_spear',
        'simplyswords:iron_glaive',
        'simplyswords:iron_warglaive',
        'simplyswords:iron_cutlass',
        'simplyswords:iron_claymore',
        'simplyswords:iron_greataxe',
        'simplyswords:iron_scythe',
        'simplyswords:iron_greathammer',
      ],
    },

    {
      weight: 0,

      items: [
        'minecraft:golden_helmet',
        'minecraft:golden_chestplate',
        'minecraft:golden_leggings',
        'minecraft:golden_boots',
        'minecraft:golden_sword',
        'minecraft:golden_pickaxe',
        'minecraft:golden_axe',
        'minecraft:golden_shovel',
        'minecraft:golden_hoe',

        'simplyswords:gold_longsword',
        'simplyswords:gold_rapier',
        'simplyswords:gold_katana',
        'simplyswords:gold_sai',
        'simplyswords:gold_spear',
        'simplyswords:gold_glaive',
        'simplyswords:gold_warglaive',
        'simplyswords:gold_cutlass',
        'simplyswords:gold_claymore',
        'simplyswords:gold_greataxe',
        'simplyswords:gold_scythe',
        'simplyswords:gold_greathammer',
      ],
    },

    {
      weight: 0,

      items: [
        'minecraft:diamond_helmet',
        'minecraft:diamond_chestplate',
        'minecraft:diamond_leggings',
        'minecraft:diamond_boots',
        'minecraft:diamond_sword',
        'minecraft:diamond_pickaxe',
        'minecraft:diamond_axe',
        'minecraft:diamond_shovel',
        'minecraft:diamond_hoe',

        'simplyswords:diamond_longsword',
        'simplyswords:diamond_rapier',
        'simplyswords:diamond_katana',
        'simplyswords:diamond_sai',
        'simplyswords:diamond_spear',
        'simplyswords:diamond_glaive',
        'simplyswords:diamond_warglaive',
        'simplyswords:diamond_cutlass',
        'simplyswords:diamond_claymore',
        'simplyswords:diamond_greataxe',
        'simplyswords:diamond_scythe',
        'simplyswords:diamond_greathammer',
      ],
    },

    {
      weight: 0,

      items: [
        'minecraft:netherite_helmet',
        'minecraft:netherite_chestplate',
        'minecraft:netherite_leggings',
        'minecraft:netherite_boots',
        'minecraft:netherite_sword',
        'minecraft:netherite_pickaxe',
        'minecraft:netherite_axe',
        'minecraft:netherite_shovel',
        'minecraft:netherite_hoe',

        'simplyswords:netherite_longsword',
        'simplyswords:netherite_rapier',
        'simplyswords:netherite_katana',
        'simplyswords:netherite_sai',
        'simplyswords:netherite_spear',
        'simplyswords:netherite_glaive',
        'simplyswords:netherite_warglaive',
        'simplyswords:netherite_cutlass',
        'simplyswords:netherite_claymore',
        'simplyswords:netherite_greataxe',
        'simplyswords:netherite_scythe',
        'simplyswords:netherite_greathammer',
      ],
    },
  ];

  tiers.forEach((tier) => {
    tier.items.forEach((item) => {
      const path = item.replace(':', '/');

      event.json(`${idPrefix}${path}`, {
        type: 'apotheosis:affix_loot_entry',

        stack: {
          count: 1,
          id: item,
        },

        weights: {
          pinnacle: {
            weight: tier.weight,
          },
        },
      });
    });
  });
});
