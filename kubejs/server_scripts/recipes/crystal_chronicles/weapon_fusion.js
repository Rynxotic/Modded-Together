ServerEvents.recipes((event) => {
  const id_prefix = 'mt:crystal_chronicles/weapon_fusion/';

  const recipes = [
    {
      result: { id: 'crystal_chronicles:paladin_sword' },
      base: { item: 'simplyswords:runic_longsword' },
      addition: { item: 'crystal_chronicles:divinite_shard' },
      id: `${id_prefix}paladin_sword`,
    },
    {
      result: { id: 'crystal_chronicles:ice_hammer' },
      base: { item: 'simplyswords:runic_greataxe' },
      addition: { item: 'crystal_chronicles:ice_shard' },
      id: `${id_prefix}ice_hammer`,
    },
    {
      result: { id: 'crystal_chronicles:staff' },
      base: { item: 'simplyswords:runic_greathammer' },
      addition: { item: 'crystal_chronicles:voidstone_shard' },
      id: `${id_prefix}staff`,
    },
    {
      result: { id: 'crystal_chronicles:blood_scythe' },
      base: { item: 'simplyswords:runic_scythe' },
      addition: { item: 'crystal_chronicles:hemalite_shard' },
      id: `${id_prefix}blood_scythe`,
    },
    {
      result: { id: 'crystal_chronicles:spear' },
      base: { item: 'simplyswords:runic_claymore' },
      addition: { item: 'crystal_chronicles:floralite_shard' },
      id: `${id_prefix}spear`,
    },
    {
      result: { id: 'crystal_chronicles:lightning_bident' },
      base: { item: 'simplyswords:runic_spear' },
      addition: { item: 'crystal_chronicles:voltite_shard' },
      id: `${id_prefix}lightning_bident`,
    },
    {
      result: { id: 'crystal_chronicles:chakram' },
      base: { item: 'simplyswords:runic_chakram' },
      addition: { item: 'crystal_chronicles:volcanite_shard' },
      id: `${id_prefix}chakram`,
    },
    {
      result: { id: 'crystal_chronicles:paladin_shield' },
      base: { item: 'cataclysm:azure_sea_shield' },
      addition: { item: 'crystal_chronicles:divinite_shard' },
      id: `${id_prefix}paladin_shield`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'cataclysm:weapon_fusion';
    event.custom(recipe).id(recipe.id);
  });
});
