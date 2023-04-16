
export const Year = new Date().getFullYear();

export const BGN = price => {
  return Number(price)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,') + " лв.";
};

export const serializedBoolean = str => {
  switch (str) {
    case true:
    case "true":
    case 1:
    case "1":
    case "on":
    case "yes":
      return true;
    default:
      return false;
  }
}

export const formatDate = (input) => {
  // 16 април 2023 г.
  const date = new Date(input);

  return date.toLocaleString('bg-BG', { month: 'long', day: 'numeric', year: 'numeric' , timeZone: 'Europe/Sofia'})
}