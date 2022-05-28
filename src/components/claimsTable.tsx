import { TableBody } from "./claimsTableBody";
import { TableHeader } from "./claimsTableHeader";
import "../styles/claims-table.scss"

export const ClaimsTable = () => {
  return (
    <table className="claims-table">
      <TableHeader />
      <TableBody />
    </table>
  );
};
