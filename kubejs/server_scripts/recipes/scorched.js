ServerEvents.recipes((event) => {
  // Niter Dust -> Saltpeter Powder
  event.replaceOutput({ mod: 'scguns' }, 'scguns:niter_dust', 'eternal_starlight:saltpeter_powder');
  event.replaceInput({ mod: 'scguns' }, 'scguns:niter_dust', 'eternal_starlight:saltpeter_powder');
  event.shapeless(
    Item.of('eternal_starlight:saltpeter_powder'), // arg 1: output
    ['scguns:niter_dust'],
  );
});
