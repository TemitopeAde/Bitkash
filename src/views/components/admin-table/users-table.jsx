import React from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { UserTableColumns } from "./colums";

export default function UsersTable({ tableInstance, classname, children }) {
  const {
     getTableProps,
     getTableBodyProps,
     canNextPage,
     canPreviousPage,
     nextPage,
    state,
     previousPage,
     headerGroups,
     page,
     prepareRow,
   } =  tableInstance
  return (
    <div>
      <table
        {...getTableProps()}
        className='tw-w-full rounded-corners tw-border-collapse'
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className='tw-text-start tw-px-4 tw-py-3 tw-text-base tw-font-poppins tw-text-primary-main'>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className=''>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className='tw-bg-white'>
                {row.cells.map((cell) => (
                  <td className='tw-border-b-2 tw-max-w-[100px] tw-truncate tw-border-primary-main tw-px-4 tw-py-3 tw-font-poppins'>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='tw-flex tw-items-center tw-gap-4 tw-py-6'>
        <BsFillArrowLeftCircleFill
          size={30}
          className={
            canPreviousPage
              ? "tw-text-primary-main tw-cursor-pointer"
              : "tw-text-primary-main/50 tw-cursor-not-allowed"
          }
          onClick={canPreviousPage ? () => previousPage() : undefined}
        />
        <span className='tw-font-semibold tw-font-poppins'>
          Page ({state.pageIndex + 1})
        </span>
        <BsFillArrowRightCircleFill
          size={30}
          className={
            canNextPage
              ? "tw-text-primary-main tw-cursor-pointer"
              : "tw-text-primary-main/50 tw-cursor-not-allowed"
          }
          onClick={canNextPage ? () => nextPage() : undefined}
        />
      </div>
    </div>
  );
}
