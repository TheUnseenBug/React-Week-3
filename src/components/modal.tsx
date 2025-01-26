import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React, { FC } from "react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const Modal: FC<Props> = ({ open, setOpen, children }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        className="fixed inset-0 transition-opacity bg-gray-500/75"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="relative p-6 bg-black rounded-lg shadow-xl sm:max-w-lg sm:w-full">
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
