ServerEvents.recipes((event) => {
  const id_prefix = 'mt:extendedae/sequenced_assembly/';

  const recipes = [
    {
      results: [{ id: 'extendedae:concurrent_processor' }],
      ingredient: { item: 'create:precision_mechanism' },
      transitional_item: { id: 'extendedae:concurrent_processor_print' },
      loops: 1,
      sequence: [
        {
          type: 'create:deploying',
          ingredients: [
            { item: 'extendedae:concurrent_processor_print' },
            { item: 'extendedae:concurrent_processor_press' },
          ],
          results: [{ id: 'extendedae:concurrent_processor_print' }],
          keepHeldItem: true,
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'extendedae:concurrent_processor_print' }, { item: 'extendedae:entro_crystal' }],
          results: [{ id: 'extendedae:concurrent_processor_print' }],
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'extendedae:concurrent_processor_print' }, { item: 'minecraft:redstone' }],
          results: [{ id: 'extendedae:concurrent_processor_print' }],
        },
        {
          type: 'create:deploying',
          ingredients: [{ item: 'extendedae:concurrent_processor_print' }, { item: 'ae2:printed_silicon' }],
          results: [{ id: 'extendedae:concurrent_processor_print' }],
        },
        {
          type: 'create:pressing',
          ingredients: [{ item: 'extendedae:concurrent_processor_print' }],
          results: [{ id: 'extendedae:concurrent_processor_print' }],
        },
      ],
      id: `${id_prefix}concurrent_processor`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'create:sequenced_assembly';
    event.custom(recipe).id(recipe.id);
  });
});
