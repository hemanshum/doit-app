export const formatedDate = (date) => {
  const newDate = new Date(date);
  let dt = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return `${dt}-${month}-${year}`;
}