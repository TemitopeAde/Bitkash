import FormatStatus from "../../../utils/format-status";
import FormatTransaction from "../../../utils/format-transaction";
import TableUtils from "../../../utils/table-utils";
import { format } from "date-fns";

export const UserTableColumns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Registration Date",
    accessor: "registration_date",
    // Cell:({value})=> format(new Date(value), 'dd/MM/yyyy')
  },
  {
    Header: "Registration Status",
    accessor: "registration_status",
    Cell: FormatStatus,
  },
  {
    Header: "Total Transactions",
    accessor: "total_transactions",
    Cell: FormatTransaction,
  },
  {
    Header: " ",
    accessor: "id",
    Cell: TableUtils,
  },
];
