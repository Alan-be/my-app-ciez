import React from 'react'
import CardCourses from './CardCourses/CardCourses'

const Courses = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full h-full bg-[#074273] px-4 md:px-6 lg:px-8">
            <CardCourses
                // images={[
                //     'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                //     'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                // ]}
                // title="Living room Sofa"
                // description="This sofa is perfect for modern tropical spaces, baroque inspired spaces."
                // price="$450"
            />
        </section>
            
    )
}

export default Courses