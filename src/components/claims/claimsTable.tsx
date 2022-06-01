import { TableBody } from "./claimsTableBody";
import { TableHeader } from "./claimsTableHeader";
import "../../styles/claims-table.scss";
import { YourClaimsTitle } from "./yourClaimsTitle";
import { useState } from "react";
import { Pagination } from "../pagination/pagination";

interface ClaimsTableType {
  claims: Array<any>;
}
export const ClaimsTable = (prop: ClaimsTableType) => {
  const [claimsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [claims] = useState(prop.claims);

  const lastPostIndex = currentPage * claimsPerPage;
  const firstPostIndex = lastPostIndex - claimsPerPage;
  const currentClaims = claims.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const nextPage = () => Number(sessionStorage.getItem("Pages")) > currentPage &&  setCurrentPage(currentPage + 1);

  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="your-claims-table-block">
      <YourClaimsTitle />
      <table className="claims-table">
        <TableHeader />
        <TableBody claims={currentClaims} />
      </table>
      <Pagination
        claimPerPage={claimsPerPage}
        totalClaims={claims.length}
        paginate={paginate}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};
