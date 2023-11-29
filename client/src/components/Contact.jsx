import React, { useState, Fragment } from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

const Contact = () => {
  const InitialFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(InitialFormData);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (e) => {
    // console.log(e.target.name , e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    setIsFormSubmitting(true);
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      e.preventDefault();
      return alert("Please fill all the Details.");
    }
    // console.log(formData)
    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    const result = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/contact`,
      data
    );

    // console.log(result);
    if (result.data.success === true) {
      // alert(
      //   "Your query has been submitted. A confirmation mail has been sent to your email."
      // );
      openModal();
    }
    setFormData(InitialFormData);
    setIsFormSubmitting(false);
  };

  return (
    <>
      <div
        name="Contact"
        className="w-full h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className="py-6">
              Submit the form below to get in touch with me
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <div className=" flex flex-col w-full md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                onChange={handleChange}
                value={formData.name}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                onChange={handleChange}
                value={formData.email}
              />
              <textarea
                type="text"
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                onChange={handleChange}
                value={formData.message}
              />

              <button
                onClick={handleSubmit}
                disabled={isFormSubmitting}
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              >
                {isFormSubmitting === true ? "Submitting...." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Code  */}
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
                    className="text-xl text-center font-bold leading-6 text-green-900"
                  >
                    <div className="text-right flex justify-end">
                      <IoMdClose
                        className="cursor-pointer"
                        size={30}
                        onClick={closeModal}
                      />
                    </div>
                    SUCCESSFULL
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-lg font-bold text-black-500">
                      Your Request has been noted. A confirmation mail also sent
                      to you for your future reference. I will contact you as
                      soon as possible.
                    </p>
                    <p className="text-lg font-bold text-red-500">
                      Expected Time for response within 24 Hour
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

export default Contact;
