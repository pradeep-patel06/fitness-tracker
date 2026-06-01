const calculateCalories = (type, duration) => {
  const MET = {
    running: 10,
    walking: 4,
    cycling: 8
  };

  return MET[type] * duration;
};

module.exports = calculateCalories;