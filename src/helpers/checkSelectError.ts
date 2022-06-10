import { claimTypes } from "./claimTypes";

export const checkSelectError = (type: string) => {
 return claimTypes.some((el) => el === type);
};
