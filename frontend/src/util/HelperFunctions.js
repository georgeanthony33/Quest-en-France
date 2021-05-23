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

const dateLongToShort = (longDate) => {
  const day =
    new Date(longDate).getDate().toString().length === 1
      ? `0${new Date(longDate).getDate()}`
      : new Date(longDate).getDate();
  const month =
    ((new Date(longDate).getMonth() + 1) % 12).toString().length === 1
      ? `0${(new Date(longDate).getMonth() + 1) % 12}`
      : (new Date(longDate).getMonth() + 1) % 12;
  const year = new Date(longDate).getFullYear();
  return `${day}/${month}/${year}`;
};

const dateLongToISO = (longDate) => {
  return new Date(longDate).toISOString().slice(0, 10);
};

const getDaysArray = (start, end) => {
  const endDate = new Date(end);
  var currentDate = new Date(start);
  var arr = [];
  while (currentDate <= endDate) {
    if (currentDate.getDay() !== 2 && currentDate.getDay() !== 4) {
      arr.push(new Date(currentDate));
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return arr;
};

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const dateDiffInDays = (a, b) => {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

const helperFunctions = {
  compare,
  dateLongToShort,
  dateLongToISO,
  getDaysArray,
  dateDiffInDays,
};

export default helperFunctions;
