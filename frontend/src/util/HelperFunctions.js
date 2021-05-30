import config from "./Config";

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

const getDaysArray = (start, end, skip) => {
  const endDate = new Date(end);
  var currentDate = new Date(start);
  var arr = [];
  if (skip) {
    while (currentDate <= endDate) {
      if (currentDate.getDay() !== 2 && currentDate.getDay() !== 4) {
        arr.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  } else {
    while (currentDate <= endDate) {
      arr.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
  return arr;
};

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const dateDiffInDays = (a, b) => {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

const defaultCheckin = () => {
  const today = new Date();
  const todayDay = today.getDay();
  if (todayDay === 1 || todayDay === 3) {
    return new Date().setDate(new Date().getDate() + 2);
  } else {
    return new Date().setDate(new Date().getDate() + 1);
  }
};

const weekAfterDate = (date) => {
  return new Date(date).setDate(new Date(date).getDate() + 7);
};

const backendDateToDateObject = (date) => {
  const dateArray = date.split("-");
  const day = dateArray[2];
  const month = dateArray[1] - 1;
  const year = dateArray[0];
  return new Date(year, month, day);
};

const addDays = (date, days) => {
  const copy = new Date(Number(date));
  copy.setDate(date.getDate() + days);
  return copy;
};

const calculateTotalPrice = (checkin, checkout) => {
  var priceInfoForAllDays = [];
  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  const checkinYear = checkinDate.getFullYear();
  const chosenYearPrices = config.prices.map((el) => {
    const updatedDate = new Date(el.weekCommencing.setFullYear(checkinYear));
    return { ...el, weekCommencing: updatedDate };
  });

  for (
    let date = checkinDate;
    date <= checkoutDate;
    date.setDate(date.getDate() + 1)
  ) {
    const allPriceInfoForDay = chosenYearPrices
      .filter((el) => el.weekCommencing <= date)
      .slice(-1)[0];
    priceInfoForAllDays.push(allPriceInfoForDay);
  }
  priceInfoForAllDays.pop();

  const totalPrices = {
    2: priceInfoForAllDays.reduce(
      (totalPrice, day) => totalPrice + day[2] / 7,
      0,
    ),
    3: priceInfoForAllDays.reduce(
      (totalPrice, day) => totalPrice + day[3] / 7,
      0,
    ),
  };
  return totalPrices;
};

const helperFunctions = {
  compare,
  dateLongToShort,
  dateLongToISO,
  getDaysArray,
  dateDiffInDays,
  defaultCheckin,
  weekAfterDate,
  backendDateToDateObject,
  addDays,
  calculateTotalPrice,
};

export default helperFunctions;
