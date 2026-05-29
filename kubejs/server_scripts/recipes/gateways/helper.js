// helpers.js

global.attr = (attribute, operation, value) => ({
  type: 'gateways:attribute',
  attribute,
  operation,
  value,
});

global.hp = (value) => attr('minecraft:generic.max_health', 'add_value', value);

global.hpMulti = (value) => attr('minecraft:generic.max_health', 'add_multiplied_total', value);

global.dmg = (value) => attr('minecraft:generic.attack_damage', 'add_value', value);

global.dmgMulti = (value) => attr('minecraft:generic.attack_damage', 'add_multiplied_total', value);

global.armor = (value) => attr('minecraft:generic.armor', 'add_value', value);

global.toughness = (value) => attr('minecraft:generic.armor_toughness', 'add_value', value);

global.scale = (value) => attr('minecraft:generic.scale', 'add_value', value);

global.kbRes = (value) => attr('minecraft:generic.knockback_resistance', 'add_value', value);

global.spellResist = (value) => attr('irons_spellbooks:spell_resist', 'add_value', value);

global.gear = (set) => ({
  type: 'gateways:gear_set',
  gear_set: set.includes(':') ? set : `gateways:${set}`,
});

global.name = (text, color = 'white', bold = false) => ({
  CustomNameVisible: 1,
  CustomName: JSON.stringify({
    text,
    color,
    bold,
  }),
});

global.stack = (id, count) => ({
  type: 'gateways:stack',
  stack: { id, count },
});

global.xp = (experience, orbSize = 20) => ({
  type: 'gateways:experience',
  experience,
  orb_size: orbSize,
});
