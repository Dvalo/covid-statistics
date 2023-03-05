const formatNumber = (number) => {
  return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
};

const formatDate = (date) => {
  return new Date(date).toLocaleString("en-GB");
};

export { formatNumber, formatDate };
