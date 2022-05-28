export const tableHeaders = ["Title", "Created", "Type", "Status", "Actions"];

export const TableHeader = () => {
  return (
    <thead>
      <tr>
        {tableHeaders.map((el) => (
          <th>{el}</th>
        ))}
      </tr>
    </thead>
  );
};
