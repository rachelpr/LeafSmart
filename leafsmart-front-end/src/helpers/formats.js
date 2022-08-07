const kebabCase = (string) => {
  return string.split(" ").join("-");
};

module.exports = {
  kebabCase
};
