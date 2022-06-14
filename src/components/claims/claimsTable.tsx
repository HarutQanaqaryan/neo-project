import { TableBody } from "./claimsTableBody";
import { TableHeader } from "./claimsTableHeader";
import "../../styles/claims-table.scss";
import { YourClaimsTitle } from "./yourClaimsTitle";
import { useEffect, useState } from "react";
import { Pagination } from "../pagination/pagination";
import { Loading } from "../loading";
import { ErrorRequest } from "../error";

interface ClaimsTableType {
  claims: Array<any>;
  loading: boolean;
  error: boolean;
}
export const ClaimsTable = (prop: ClaimsTableType) => {
  const [claimsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentClaims, setCurrentClaims] = useState(prop.claims);
  const lastPostIndex = currentPage * claimsPerPage;
  const firstPostIndex = lastPostIndex - claimsPerPage;

  useEffect(() => {
    setCurrentClaims(prop.claims.slice(firstPostIndex, lastPostIndex));
  }, [firstPostIndex, lastPostIndex, prop.claims]);

  prop.claims.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const nextPage = () =>
    Number(sessionStorage.getItem("Pages")) > currentPage &&
    setCurrentPage(currentPage + 1);

  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="claims-block">
      <YourClaimsTitle />
      <table className="claims-table">
        <TableHeader />
        <TableBody claims={currentClaims} />
      </table>
      {prop.claims.length === 0 && !prop.loading && !prop.error && (
        <div className="claims-block-no-claims">No claims!</div>
      )}
      {prop.loading && (
        <Loading />
      )}
      {prop.error && (
        <ErrorRequest />
      )}
      {prop.claims.length > 10 && (
        <Pagination
          claimPerPage={claimsPerPage}
          totalClaims={prop.claims.length}
          paginate={paginate}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </div>
  );
};
