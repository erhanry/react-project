
export const Year = new Date().getFullYear();

export const BGN = price => {
    return Number( price )
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')+ " лв.";
  };

export const Parser = str => {
  return str ? JSON.parse( str ) : true;
}