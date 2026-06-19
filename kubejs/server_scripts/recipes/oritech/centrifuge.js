ServerEvents.recipes((event) => {
  event.recipes.oritech
    .centrifuge()
    .itemInputs('createaddition:biomass_pellet_block')
    .itemOutputs('oritech:raw_biopolymer')
    .time(400);
});
