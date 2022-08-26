type StringifiedPropValues<Type extends Object> = {
  [Key in keyof Type]: string
};

const stringifyPropValues = <Type extends Object>(object: Type): StringifiedPropValues<Type> => {
  const objectLikeArray = Object.entries(object);

  const objectWithPropsStringified = objectLikeArray
    .reduce<Partial<StringifiedPropValues<Type>>>((prevObj, [key, value]) => ({
      ...prevObj,
      [key]: String(value),
    }), {});

  return objectWithPropsStringified as StringifiedPropValues<Type>;
};

export default stringifyPropValues;
