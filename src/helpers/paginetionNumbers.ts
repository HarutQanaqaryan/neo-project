const checkPaginationNumbers = (totalClaims: number, claimPerPage: number) => {
  const pageNums: Array<any> = [];

  for (let i = 1; i <= Math.ceil(totalClaims / claimPerPage); i++) {
    pageNums.push(i);
  }
  return pageNums;
};

export const paginationsNumberCells = (
  totalClaims: number,
  claimPerPage: number
) => {
  return checkPaginationNumbers(totalClaims, claimPerPage).map((num) => {
    return { num: num, current: num === 1 ? true : false };
  });
};
