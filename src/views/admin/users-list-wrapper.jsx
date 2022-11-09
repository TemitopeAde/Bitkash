import React from "react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import Search from "../../components/search";
import Section from "../../components/section";
import SmallSelect from "../../components/small-select";
import Text from "../../components/text";
import AdminLayout from "../../layout/admin-layout";
import AdminTable from "../components/admin-table/users-table";
import { UserTableColumns } from "../components/admin-table/colums";
import TableData from "../../json/users.json";
import Modal from "../../components/popup-modal";
import Button from "../../components/button";
import UsersTable from "../components/admin-table/users-table";

export default function UsersListWrapper() {
  const columns = React.useMemo(() => UserTableColumns, []);
  const data = React.useMemo(() => TableData, []);
  const [selectedOption, setSelectedOption] = React.useState();
  const [filteredData, setFilteredData] = React.useState(data);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [userDeleted, setUserDeleted] = React.useState(false);

  // const ModalContext = React.createContext()

  React.useEffect(() => {
    switch (selectedOption) {
      case "All":
        return setFilteredData(data);
      case "Verified":
        return setFilteredData(
          data.filter((userData) => userData.registration_status === "Verified")
        );
      case "Unverified":
        return setFilteredData(
          data.filter(
            (userData) => userData.registration_status === "Unverified"
          )
        );
      default:
        return setFilteredData(data);
    }
  }, [selectedOption, isModalOpen]);

  const tableInstance = useTable(
    { data: filteredData, columns: columns },
    useGlobalFilter,
    usePagination
  );

  const { state, setGlobalFilter } = tableInstance;

  return (
    <AdminLayout>
      <ModalContext.Provider value={setModalOpen}>
        <div className='tw-bg-pink-light'>
          <div className='tw-pb-1 lg:tw-w-[90%] tw-mx-auto tw-py-10 tw-px-3 lg:tw-px-0'>
            <div className='tw-flex tw-justify-between'>
              <Text as='h4'>Users</Text>
              <div className='tw-w-[60%] tw-flex tw-items-center tw-gap-3'>
                <Search
                  value={state.globalFilter}
                  onChange={setGlobalFilter}
                  placeholder='Search here'
                  classname='tw-bg-white tw-flex-1 tw-border-primary-main tw-border-[0.7px]'
                />
                <SmallSelect
                  value={selectedOption}
                  setValue={setSelectedOption}
                />
              </div>
            </div>
          </div>
          <Section classname='tw-py-0'>
            <UsersTable tableInstance={tableInstance} />
          </Section>
        </div>
      </ModalContext.Provider>

      <Modal isOpen={isModalOpen} setOpen={setModalOpen}>
        {!userDeleted ? (
          <div className='tw-w-[70%]'>
            <Text as='p' weight='semi-bold' classname='tw-text-center'>
              Are you sure you want to delete this user{" "}
              <span className='tw-text-primary-main'> Olubanjo Oluseyi</span>
            </Text>
            <div className='tw-flex tw-items-center tw-justify-center tw-gap-6'>
              <Button
                variant='primary'
                classname='tw-px-[30px]'
                onclick={() => setUserDeleted(true)}
              >
                Yes
              </Button>
              <Button
                variant='primary'
                classname='tw-bg-white tw-px-[30px] tw-text-black tw-border-[1px] tw-border-primary-main'
                onclick={() => setModalOpen(false)}
              >
                No
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className='tw-w-[60px] tw-mx-auto'>
              <img src='/images/admin/success-tick.png' alt='' />
            </div>
            <div className='tw-text-center'>
              <Text as='p' weight='semi-bold' classname='tw-m-0'>
                User Deleted Successfully
              </Text>
              <Text as='p' classname='tw-m-0'>
                Go back to{" "}
                <span
                  className='tw-text-primary-main tw-cursor-pointer'
                  onClick={() => {
                    setModalOpen(false);
                    setUserDeleted(false);
                  }}
                >
                  users
                </span>
              </Text>
            </div>
          </div>
        )}
      </Modal>
    </AdminLayout>
  );
}

export const ModalContext = React.createContext();
