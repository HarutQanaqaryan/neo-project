import { TableBody } from "./claimsTableBody";
import { TableHeader } from "./claimsTableHeader";
import "../../styles/claims-table.scss";
import { YourClaimsTitle } from "./yourClaimsTitle";
import { useState } from "react";
import { Pagination } from "../pagination/pagination";
import loadingIcon from "../../assets/icons/loading.svg";
import errorIcon from "../../assets/icons/error.svg";

interface ClaimsTableType {
  claims: Array<any>;
  loading: boolean;
  error: boolean;
  
}
export const ClaimsTable = (prop: ClaimsTableType) => {
  const [claimsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const lastPostIndex = currentPage * claimsPerPage;
  const firstPostIndex = lastPostIndex - claimsPerPage;
  const currentClaims = prop.claims.slice(firstPostIndex, lastPostIndex);

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
      {prop.claims.length === 0 && (
        <div className="claims-block-no-claims">You have no claims!</div>
      )}
      {prop.loading && (
        <div className="claims-block_loading">
          <img src={loadingIcon} alt="Loading" />
        </div>
      )}
      {prop.error && (
        <div className="claims-block_error">
          <img src={errorIcon} alt="Loading" />
          <span>Error!</span>
        </div>
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
