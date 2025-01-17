"use client";

import { FC } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Todo } from "../types/todo";
import Button from "./button";

interface props {
  open: boolean;
  setOpen: (open: boolean) => void;
  editTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  text: string;
}

const Modal: FC<props> = ({ open, setOpen, editTodo, removeTodo, text }) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 transition-opacity bg-gray-500/75 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="mt-3 text-center sm:mt-5">
              <DialogTitle
                as="h3"
                className="text-base font-semibold text-gray-900"
              >
                Edit Todo
              </DialogTitle>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                aliquam laudantium explicabo pariatur iste dolorem animi vitae
                error totam. At sapiente aliquam accusamus facere veritatis.
              </p>
            </div>
            <section className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-3 sm:gap-3">
              <Button text="Edit" onClick={() => editTodo} />
              <Button text="Remove" onClick={() => removeTodo} />
              <Button text="Close" onClick={() => setOpen(false)} />
            </section>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
