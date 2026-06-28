ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'embers:ember_bore' },
    { id: 'embers:crystal_cell' },
    { id: 'embers:item_pipe' },
    { id: 'embers:fluid_pipe' },
    { id: 'embers:item_extractor' },
    { id: 'embers:fluid_extractor' },
    { id: 'embers:inferno_forge' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
