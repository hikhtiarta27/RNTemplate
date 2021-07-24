export const stringToCurrency = s => {
  s = s.toString().replace(/[^\d]/g, '');
  return s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export const stringToPhoneNumber = s => {
  s = s.toString().replace(/[^\d]/g, '');
  return s
    .toString()
    .replace(/(\d{4})(\d{4})(\d{2,4})/, '$1-$2-$3');
};

export const returnNumberFromString = s =>{
  return s.toString().replace(/[^\d]/g, '');
}
