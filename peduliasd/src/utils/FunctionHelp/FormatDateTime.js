const padTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
};

const formatDateTime = (date) => {
  return `
    ${[
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('-')} ${[padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes())].join(
        ':'
      )} `;
};

export default formatDateTime;
