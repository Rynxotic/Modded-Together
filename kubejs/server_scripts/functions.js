function getID(name) {
  return name
    .toLowerCase()
    .replace(/'/, '')
    .replace(/[^a-z]+/g, '_');
}
