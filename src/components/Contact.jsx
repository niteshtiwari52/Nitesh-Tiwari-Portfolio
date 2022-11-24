import React, {useState} from 'react'


const Contact = () => {

  const [formData , setFormData] = useState({
    name : "",
    email : "",
    message : ""
  })

  const handleChange = (e) =>{
    console.log(e.target.name , e.target.value)
    setFormData({...formData , [e.target.name] : e.target.value})
  } 
  const handleSubmit = (e) =>{
    if(formData.name ==="" || formData.email === "" || formData.message === ""){
      e.preventDefault();
      alert("Please fill all the Details.");
    }
  
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
            Cotact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action={process.env.REACT_APP_BACKEND_URL}
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
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
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact