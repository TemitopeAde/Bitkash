import React from 'react'
import Button from '../components/button'
import { HiOutlineTrash } from "react-icons/hi2";
import { ModalContext } from '../views/admin/users-list-wrapper';


export default function TableUtils({value}) {
      const setModalOpen = React.useContext(ModalContext)
      return (
        <div className='tw-flex tw-gap-4 tw-justify-end tw-items-center'>
          <Button size='medium' classname='tw-px-[30px]' href='/admin/user-details'>
            View
          </Button>
          <div className='tw-min-w-[30px] tw-min-h-[30px]' onClick={()=>setModalOpen(true)}>
            <HiOutlineTrash size={20} className='tw-min-w-[100%] tw-min-h-[100%] tw-text-[rgb(255,2,2)]' />
          </div>
        </div>
      );
}