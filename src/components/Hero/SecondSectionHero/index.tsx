import React from 'react'
import ChakraNextImage from "@/components/Image/Image";

const SecondSectionComponent = () => {
    return (
        <div className="flex flex-col w-full md:w-1/2 items-center justify-center h-full">
            <div className="w-full flex justify-center">
                <ChakraNextImage
                    src={"/images/manHero.png"}
                    width={600}
                    height={600}
                    alt={'manHero'}
                    objectFit={"contain"}
                    className="w-3/4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
                />
            </div>
        </div>
    )
}

export default SecondSectionComponent