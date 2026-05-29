// crystal_hive.js

ServerEvents.generateData('before_mods', (event) => {
  const crystalWaveMods = (tier) => [
    hpMulti(1 + tier * 0.1),
    dmg(2 + tier),
    dmgMulti(0.4 + tier * 0.1),
    armor(3 + tier),
    toughness(3 + tier),
    spellResist(0.27 + tier * 0.03),
  ];

  const wave = (tier, entities, rewards) => ({
    entities,
    modifiers: crystalWaveMods(tier),
    rewards,
    max_wave_time: 2500 + tier * 700,
    setup_time: 200,
  });

  event.json('gateways:gateways/crystal_hive', {
    size: 'large',
    color: '#C77DFF',
    name: 'Crystal Arachnid Hive',
    soundtrack: 'apothic_enchanting:music_disc.arcana',

    waves: [
      wave(
        1,
        [crystalStalker(2), crystalWarrior(4)],
        [xp(600), stack('minecraft:string', 8), stack('minecraft:spider_eye', 4)],
      ),

      wave(
        2,
        [crystalStalker(3), crystalWarriorVeteran(6)],
        [xp(900), stack('minecraft:string', 12), stack('minecraft:spider_eye', 6)],
      ),

      wave(
        3,
        [crystalStalker(4), crystalWarriorElite(8), crystalKnight(2)],
        [
          xp(1300),
          stack('apotheosis:rare_material', 1),
          stack('minecraft:string', 10),
          stack('minecraft:spider_eye', 8),
        ],
      ),

      wave(
        4,
        [crystalStalkerElite(5), crystalWarriorElite(10), crystalKnight(3), crystalCaptain(1)],
        [
          xp(1800),
          stack('apotheosis:epic_material', 1),
          stack('minecraft:string', 15),
          stack('minecraft:spider_eye', 10),
        ],
      ),

      wave(
        5,
        [crystalStalkerElite(6), crystalWarriorElite(12), crystalKnight(4), crystalCaptain(2), crystalQueen()],
        [
          xp(3000),
          stack('apotheosis:mythic_material', 2),
          stack('apotheosis:epic_material', 4),
          stack('minecraft:string', 20),
          stack('minecraft:spider_eye', 16),
        ],
      ),
    ],

    rewards: [
      stack('apotheosis:mythic_material', 4),
      stack('apotheosis:sigil_of_socketing', 3),
      stack('minecraft:string', 32),
      stack('minecraft:spider_eye', 24),
      stack('hazennstuff:crystal_arachnid_helmet', 1),
    ],

    failures: [
      {
        type: 'gateways:explosion',
        strength: 3,
        fire: false,
        block_damage: true,
      },
    ],

    rules: {
      lives: 3,
      requires_nearby_player: true,
    },
  });
});
