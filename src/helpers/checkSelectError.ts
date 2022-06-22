import { CLAIM_TYPES } from "./contstants";

export const checkSelectError = (type: string) => {
  return CLAIM_TYPES.some((el) => el === type);
};
