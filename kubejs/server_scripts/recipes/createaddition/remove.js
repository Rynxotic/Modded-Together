ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'createaddition:liquid_burning/biofuel' },
    { id: 'createaddition:mixing/bioethanol' },
    { id: 'createaddition:charging/electrify_gold_ingot' },
    { id: 'createaddition:crushing/tuff_recycling' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
