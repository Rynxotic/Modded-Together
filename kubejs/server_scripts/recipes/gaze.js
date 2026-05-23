
ServerEvents.recipes((event) => {
  // REMOVALS

  event.remove({
    output: ["gaze:rune_of_out_of_phase"],
});
});
//ServerEvents.recipes((event) => {
  // RECIPES
//  event.recipes.createSequencedAssembly([
//    Item.of('gaze:run_of_out_of_phase')
//  ], 'minecraft:nether_star', [
//    event.recipes.createDeploying('gaze:run_of_out_of_phase', ['minecraft:nether_star', 'minecraft:nether_star']),
//    event.recipes.createPressing('gaze:run_of_out_of_phase', 'gaze:run_of_out_of_phase'),
//   event.recipes.createCutting('gaze:run_of_out_of_phase', 'gaze:run_of_out_of_phase'),
//    event.recipes.createPressing('gaze:run_of_out_of_phase', 'gaze:run_of_out_of_phase')