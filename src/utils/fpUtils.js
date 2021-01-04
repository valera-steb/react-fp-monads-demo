import { uuidv4 } from "./utils";

// buildClass
export const classSymbol = Symbol("class");

export function buildClass(fn) {
  const id = uuidv4();
  return (...args) => {
    const ret = fn(...args);
    ret[classSymbol] = id;
    return ret;
  };
}

// fn wrapper
export const wrapWithNamedFn = (() => {
  const wrapper = (fn) => {
    return function FnToReName(...args) {
      return fn(...args);
    };
  };
  const wrapperProtoText = wrapper.toString();

  return (name, fn) => {
    const wrapFunctionText = wrapperProtoText.replace(
      " FnToReName",
      " " + name
    );
    const builderFunctionWrapper = new Function("return " + wrapFunctionText);
    return builderFunctionWrapper()(fn);
  };
})();
