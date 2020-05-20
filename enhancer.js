module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item }, item.enhancement < 20 && item.enhancement++;
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability = item.durability - 5;
    return { ...item };
  } else if (item.enhancement >= 15) {
    item.durability = item.durability - 10;
    if (item.enhancement > 16) {
      item.enhancement = item.enhancement - 1;
    }
    return { ...item };
  } else {
    return { ...item };
  }
}

function repair(item) {
  return { ...item }, (item.durability = 100);
}

function get(item) {
  return { ...item };
}
