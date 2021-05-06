export const parseDateToStringDateHour = (date: Date) => {
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}:${
    date.getSeconds
  }`;
};
export const parseDateToStringDate = (date: Date) => {
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

export default { parseDateToStringDateHour, parseDateToStringDate };
