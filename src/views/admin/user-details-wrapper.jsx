import React from "react";
import Button from "../../components/button";
import Modal from "../../components/popup-modal";
import Section from "../../components/section";
import Text from "../../components/text";
import AdminLayout from "../../layout/admin-layout";
import UserDetailsCard from "../components/admin-table/details-card";
import UserBankDetails from "../components/admin-table/user-bank-details";

export default function UserDetailsWrapper({ classname, children }) {
  const [activeTab, setActiveTab] = React.useState(1);
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [userDeleted, setUserDeleted]=React.useState(false)

  return (
    <AdminLayout>
      <div className='tw-bg-pink-light tw-min-h-full tw-pb-20'>
        <Section background='tw-h-full'>
          <div className='tw-w-fit tw-mx-auto tw-flex tw-items-center tw-justify-center tw-overflow-hidden tw-rounded-lg tw-border-[1px] tw-border-primary-main'>
            <div
              className={`tw-py-2 tw-font-medium hover:tw-bg-primary-main/50 tw-cursor-pointer tw-px-6 tw-font-poppins ${
                activeTab === 1 ? "tw-bg-primary-main" : "tw-bg-white"
              }`}
              onClick={() => setActiveTab(1)}
            >
              User Details
            </div>
            <div
              className={`tw-py-2 tw-font-medium hover:tw-bg-primary-main/50 tw-cursor-pointer tw-px-6 tw-font-poppins ${
                activeTab === 2 ? "tw-bg-primary-main" : "tw-bg-white"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Bank Details
            </div>
          </div>
        </Section>
        <Section classname='tw-pt-4'>
          {activeTab === 1 && (
            <div>
              <UserDetailsCard />
              <Button size='medium' classname='tw-w-fit tw-mx-auto tw-my-10' onclick={()=>setModalOpen(true)}>
                Delete User
              </Button>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <UserBankDetails />
            </div>
          )}
        </Section>
      </div>
      <Modal isOpen={isModalOpen}>
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
