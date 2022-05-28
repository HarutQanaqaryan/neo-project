import { mockData } from "../helpers/mockData";

export const TableBody = () => {
  return (
    <tbody>
      {mockData.map(({ title, created, type, status, actions }) => (
        <tr>
          <td>{title}</td>
          <td>{created}</td>
          <td>{type}</td>
          <td>{status}</td>
          <td>{actions}</td>
        </tr>
      ))}
    </tbody>
  );
};
