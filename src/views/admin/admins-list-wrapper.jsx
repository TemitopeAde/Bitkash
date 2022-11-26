import React from "react";
import Section from "../../components/section";
import Text from "../../components/text";
import AdminLayout from "../../layout/admin-layout";
import TableData from "../../json/admins.json";
import { AdminTableColumns } from "../components/admin-table/admins-columns";
import Search from "../../components/search";
import { useGlobalFilter, usePagination, useTable } from "react-table";
import AdminsTable from "../components/admins-table";
import Modal from "../../components/popup-modal";
import Button from "../../components/button";
import { FiPlusCircle } from "react-icons/fi";

export default function AdminsListWrapper() {
  const columns = React.useMemo(() => AdminTableColumns, []);
  const data = React.useMemo(() => TableData, []);
  const [isModalOpen, setModalOpen] = React.useState(false);
      const [userDeleted, setUserDeleted] = React.useState(false);

  const tableInstance = useTable(
    { data: data, columns: columns },
    useGlobalFilter,
    usePagination
  );

  const { state, setGlobalFilter } = tableInstance;

  return (
    <AdminLayout>
      <ModalContext.Provider value={setModalOpen}>
        <div className='tw-bg-pink-light'>
          <Section classname='tw-pb-1'>
            <div className='tw-flex tw-justify-between'>
              <Text as='h4'>Admins</Text>
              <div className='tw-w-[60%] tw-flex tw-items-center tw-gap-3'>
                <Search
                  value={state.globalFilter}
                  onchange={({ target }) => setGlobalFilter(target.value)}
                  placeholder='Search here'
                  classname='tw-bg-white tw-flex-1 tw-border-primary-main tw-border-[0.7px]'
                />
                <Button
                  iconLeft={<FiPlusCircle />}
                  classname='tw-min-h-full'
                  href='/admin/add-admin'
                >
                  Add Admin
                </Button>
              </div>
            </div>
          </Section>
          <Section classname='tw-py-0'>
            <AdminsTable tableInstance={tableInstance} />
          </Section>
        </div>
      </ModalContext.Provider>

      <Modal isOpen={isModalOpen} setOpen={setModalOpen}>
        {!userDeleted ? (
          <div className='tw-w-[70%]'>
            <Text as='p' weight='semi-bold' classname='tw-text-center'>
              Are you sure you want to delete this admin{" "}
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
                Admin Deleted Successfully
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
                  admins
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
