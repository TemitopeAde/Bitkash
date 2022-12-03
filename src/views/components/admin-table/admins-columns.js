import { DeleteProfile, EditProfile, ViewProfile } from "../../../utils/admin-table-utils";


export const AdminTableColumns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "View Profile",
    Cell:ViewProfile
    // accessor: "id",
  },
  {
    Header: "Edit",
    Cell:EditProfile
    // accessor: "id",
  },
  {
    Header: "Delete",
    // accessor: "id",
    Cell:DeleteProfile
  },
];
