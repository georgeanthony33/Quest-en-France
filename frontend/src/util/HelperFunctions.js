const compare = (a, b) => {
  const siteA = a.id;
  const siteB = b.id;

  let comparison = 0;
  if (siteA > siteB) {
    comparison = 1;
  } else if (siteA < siteB) {
    comparison = -1;
  }
  return comparison;
};

const helperFunctions = {
  compare,
};

export default helperFunctions;
