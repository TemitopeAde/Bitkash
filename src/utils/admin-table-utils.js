import React from 'react'
import Button from '../components/button'
import { HiOutlineTrash, HiOutlinePencilSquare } from "react-icons/hi2";
import { ModalContext } from '../views/admin/admins-list-wrapper';


export function ViewProfile({value}) {
      return (
            <Button classname='tw-px-[30px]'>View</Button>
      )
}

export function DeleteProfile({ value }) {
      const setModalOpen = React.useContext(ModalContext);

      return (
        <div className='tw-w-full tw-flex tw-items-center'>
          <div
            className='tw-w-[20px] tw-h-[20px] tw-cursor-pointer'
            onClick={() => setModalOpen(true)}
          >
            <HiOutlineTrash
              size={15}
              className='tw-min-w-[100%] tw-min-h-[100%] tw-text-[rgb(255,2,2)]'
            />
          </div>
        </div>
      );
}

export function EditProfile({ value }) {
      return (
        <div className='tw-w-full tw-flex tw-items-center'>
          <div
            className='tw-w-[20px] tw-h-[20px] tw-cursor-pointer'
          >
            <HiOutlinePencilSquare className='tw-min-w-[100%] tw-min-h-[100%]' />
          </div>
        </div>
      );
}