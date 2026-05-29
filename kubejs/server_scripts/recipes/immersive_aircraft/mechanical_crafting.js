ServerEvents.recipes((event) => {
  const id_prefix = 'mt:immersive_aircraft/mechanical_crafting/';

  const recipes = [
    {
      result: { id: 'immersive_aircraft:airship', count: 1 },
      pattern: ['SSSSS', ' W W ', ' HREP', ' HHH ', '     '],
      key: {
        S: { item: 'immersive_aircraft:sail' },
        W: { item: 'minecraft:string' },
        H: { item: 'immersive_aircraft:hull' },
        R: { item: 'create:red_seat' },
        E: { item: 'immersive_aircraft:engine' },
        P: { item: 'immersive_aircraft:propeller' },
      },
      id: `${id_prefix}airship`,
    },
    {
      result: { id: 'immersive_aircraft:biplane', count: 1 },
      pattern: ['   S ', 'S  S ', 'HHREP', 'S  S ', '   S '],
      key: {
        S: { item: 'immersive_aircraft:sail' },
        H: { item: 'immersive_aircraft:hull' },
        R: { item: 'create:red_seat' },
        E: { item: 'immersive_aircraft:engine' },
        P: { item: 'immersive_aircraft:propeller' },
      },
      id: `${id_prefix}biplane`,
    },
    {
      result: { id: 'immersive_aircraft:warship', count: 1 },
      pattern: ['SSSSS', 'SSSSS', 'GEGEG', 'HRHRH', 'HHHHH'],
      key: {
        S: { item: 'immersive_aircraft:sail' },
        H: { item: 'immersive_aircraft:hull' },
        R: { item: 'create:red_seat' },
        E: { item: 'immersive_aircraft:engine' },
        G: { item: 'immersive_aircraft:industrial_gears' },
      },
      id: `${id_prefix}warship`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:mechanical_crafting';
    event.custom(recipe).id(recipe.id);
  });
});
