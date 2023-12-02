import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }

  // function openModal() {
  //   setIsOpen(true);
  // }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center font-bold leading-6 text-black-900"
                  >
                    <div className="text-right flex justify-end">
                      <IoMdClose
                        className="cursor-pointer"
                        size={30}
                        onClick={closeModal}
                      />
                    </div>
                    NOTICE
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-lg font-bold text-black-500">
                      This Portfolio is under development. Some Features and
                      Content might be not working or missing.
                    </p>
                    <p className="text-lg font-bold text-black-500">
                      A New Desgin of the Portfolio will be release very Soon.
                    </p>
                    <p className="text-lg font-bold text-red-500">
                      Expected Time & Date of release of new version: 3PM on
                      15/12/2023
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
