ServerEvents.recipes((event) => {
  // AE2 Circuits in assembler
  event.recipes.oritech.assembler().itemInputs(['ae2:printed_engineering_processor', 'ae2:printed_silicon', 'minecraft:redstone', 'minecraft:redstone']).itemOutputs('ae2:engineering_processor');
  event.recipes.oritech.assembler().itemInputs(['ae2:printed_logic_processor', 'ae2:printed_silicon', 'minecraft:redstone', 'minecraft:redstone']).itemOutputs('ae2:logic_processor');
  event.recipes.oritech.assembler().itemInputs(['ae2:printed_calculation_processor', 'ae2:printed_silicon', 'minecraft:redstone', 'minecraft:redstone']).itemOutputs('ae2:calculation_processor');
  event.recipes.oritech.assembler().itemInputs(['extendedae:concurrent_processor_print', 'ae2:printed_silicon', 'minecraft:redstone', 'minecraft:redstone']).itemOutputs('extendedae:concurrent_processor');

  //Oritech stuff
  event.recipes.oritech.assembler().itemInputs(['ae2:engineering_processor', 'ae2:logic_processor', 'ae2:calculation_processor', 'extendedae:concurrent_processor']).itemOutputs('oritech:processing_unit').time(200);
});
