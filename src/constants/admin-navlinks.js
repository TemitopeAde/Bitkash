import { HiSquares2X2 } from "react-icons/hi2";
import { IoWalletOutline } from 'react-icons/io5'
import { BsBank2 } from 'react-icons/bs'
import { RiAdminLine } from "react-icons/ri";

const AdminNavLinks = [
  {
    id: 1,
    label: "Dashboard",
    route: "/admin",
    icon: <HiSquares2X2 size={18} />,
  },
  {
    id: 2,
    label: "Users",
    route: "/admin/users-list",
    icon: <IoWalletOutline />,
  },
  // {
  //   id: 3,
  //   label: "Banks",
  //   route: "/",
  //   icon: <BsBank2 />,
  // },
  {
    id: 4,
    label: "Admins",
    route: "/admin/admins-list",
    icon: <RiAdminLine />,
  },
];

export default AdminNavLinks