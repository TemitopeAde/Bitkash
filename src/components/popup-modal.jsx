import React from 'react'
import ReactDOM from 'react-dom'
import clx from '../utils/clx'

export default function Modal({ isOpen, setOpen, classname, children }) {
      const classes = clx(
        "tw-absolute tw-inset-0 tw-bg-black/30 tw-h-full tw-w-full tw-flex tw-items-center tw-justify-center tw-duration-500",
        !isOpen ? "tw-opacity-0" : "tw-opacity-1",
        classname
      );
      return(
            ReactDOM.createPortal(
                  isOpen &&
                  <div className={classes}>
                        <Modal.Container>
                              {children}
                        </Modal.Container>
                  </div>,
                  document.getElementById('modal')
            )
      )
}

export function Container({
      classname,
      children
}) {
      const classes = clx(
        "tw-p-4 tw-flex tw-items-center tw-justify-center tw-min-h-[250px] tw-w-[450px] tw-bg-[#FFF9F1] tw-rounded-xl tw-border-[1px] tw-border-primary-main",
        classname
      );
      return (
            <div className={classes}>{children}</div>
      )
}

Modal.Container = Container