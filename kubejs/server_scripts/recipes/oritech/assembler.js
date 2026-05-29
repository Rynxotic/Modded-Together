ServerEvents.recipes((event) => {
  const id_prefix = 'mt:oritech/assembler/';

  const recipes = [
    {
      results: [{ id: 'oritech:processing_unit', count: 1 }],
      ingredients: [
        { item: 'ae2:engineering_processor' },
        { item: 'ae2:logic_processor' },
        { item: 'ae2:calculation_processor' },
        { item: 'extendedae:concurrent_processor' },
      ],
      time: 200,
      id: `${id_prefix}processing_unit`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'oritech:assembler';
    event.custom(recipe).id(recipe.id);
  });
});
