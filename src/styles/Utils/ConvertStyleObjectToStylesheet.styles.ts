import { toRem } from './ToRem.styles';
import { camelToKebab } from './CamelToKebab.styles';

export const convertStyleObjectToStylesheet = (value: Record<string, number>): string => {
  const stylesKeys = Object.keys(value);
  const stylesheet = Object.fromEntries(stylesKeys.map((key) => [camelToKebab(key), `${toRem(value[key])};`]));

  return JSON.stringify(stylesheet).replace(/[ ",{|}]/g, '');
};
