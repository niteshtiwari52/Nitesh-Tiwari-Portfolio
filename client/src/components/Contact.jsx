import React, {useState} from 'react'
import axios from "axios";

const Contact = () => {

  const [formData , setFormData] = useState({
    name : "",
    email : "",
    message : ""
  })

  const handleChange = (e) =>{
    // console.log(e.target.name , e.target.value)
    setFormData({...formData , [e.target.name] : e.target.value})
  } 
  const handleSubmit = async (e) =>{
    if(formData.name ==="" || formData.email === "" || formData.message === ""){
      e.preventDefault();
      return alert("Please fill all the Details.");
    }
    // console.log(formData)
    const data  = {
      name : formData.name,
      email : formData.email,
      message : formData.message
    }
    const res = await axios.post(`{process.env.REACT_APP_BACKEND_URL}/api/v1/contact`, data);
    // console.log(res.data.success)
    if(res.data.success === true){
      alert("Your query has been submitted. A confirmation mail has been sent to your email.")
    }

    setFormData(
      formData.name = "",
      formData.email ="",
      formData.message = ""
    )
  } 


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
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
         
            <div className=" flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={handleChange}
              value = {formData.name}              
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={handleChange}
              value = {formData.email}
            />
            <textarea
              type = "text"
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={handleChange}
              value = {formData.message}
            />

            <button onClick={handleSubmit} className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
             Submit
            </button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact