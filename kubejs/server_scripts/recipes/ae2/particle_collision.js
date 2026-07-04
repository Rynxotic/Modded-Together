ServerEvents.recipes((event) => {
  event.recipes.oritech
    .particle_collision()
    .itemInputs(['ae2:singularity', 'ae2:singularity'])
    .itemOutputs('2x ae2:quantum_entangled_singularity')
    .time(20000);
});
