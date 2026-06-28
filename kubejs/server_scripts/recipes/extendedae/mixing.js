ServerEvents.recipes((event) => {
  event.recipes.create.mixing('extendedae:entro_seed', [
    '3x minecraft:redstone',
    '3x oritech:platinum_dust',
    '3x ae2:ender_dust',
    'ae2:sky_dust',
  ]);
  event.recipes.create.mixing('appflux:insulating_resin', [
    'minecraft:cactus',
    'minecraft:slime_ball',
    '500xrubberworks:resin',
  ]);
});
