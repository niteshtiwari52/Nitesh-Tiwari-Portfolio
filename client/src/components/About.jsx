import React from 'react'

const About = () => {
  return (
    <>
        <div name = "About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w--full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nulla tempora ducimus voluptatibus nemo esse dolore a quo qui eum ea, corrupti aspernatur, delectus molestias amet odio odit earum. Quisquam corrupti, at nemo expedita dolorum fuga, exercitationem, assumenda quam quae optio sit esse debitis explicabo nisi quaerat quidem libero neque.</p>

            <br />

            <p className='text-xl '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quidem libero ad magni assumenda eum nam est tenetur, beatae, harum inventore ullam aspernatur rem voluptatibus. Repudiandae est incidunt autem maiores, consequuntur dolore magnam perferendis. Dolorum minus, qui ea fuga blanditiis beatae, expedita iusto dolore explicabo animi impedit exercitationem doloribus corporis.</p>
        </div>
        </div>
    </>
  )
}

export default About