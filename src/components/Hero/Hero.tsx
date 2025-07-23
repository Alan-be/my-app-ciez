
import React from 'react'
import FirstSectionComponent from './FirstSectionHero'
import SecondSectionComponent from './SecondSectionHero'

const Hero = () => {
    return (

        <div className='bg-[url("/images/backgroundHeroCiez.png")] bg-cover bg-center h-screen flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col w-full h-full md:flex-row justify-center items-center'>
                <FirstSectionComponent />
                <SecondSectionComponent/>
            </div>


        </div>

    )
}

export default Hero