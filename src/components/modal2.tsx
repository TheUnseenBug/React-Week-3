import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React, { FC } from "react";

interface props {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const Modal2: FC<props> = ({
  open,
  setOpen,

  children,
}) => {
  //Modal där children är det som ska visas i modalen
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <div className="fixed inset-0 z-10 flex items-end justify-center w-screen min-h-full p-4 overflow-y-auto text-center sm:items-center sm:p-0">
        <DialogPanel
          transition
          className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform rounded-lg shadow-xl data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
        >
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal2;
