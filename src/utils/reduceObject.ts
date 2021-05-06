const reduceObject = (obj: Object) => {
  const newObj = {};

  for (const prop of Object.keys(obj)) {
    if (obj[prop]) {
      newObj[prop] = obj[prop];
    }
  }

  return newObj;
};

export default reduceObject;
