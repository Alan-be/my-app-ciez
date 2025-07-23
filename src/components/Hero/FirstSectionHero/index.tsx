import { TypingEffect } from '@/components/FramerMotionComponents/TypingEffect'
import { Text } from '@chakra-ui/react'
import React from 'react'

const FirstSectionComponent = () => {

  return (
    <div className="flex flex-col w-full md:w-1/2 items-center justify-center h-full px-4 md:px-8 lg:px-16">
      <TypingEffect
        text="CIEZ"
        className="text-center font-extrabold tracking-tighter text-9xl sm:text-9xl md:text-9xl lg:text-9xl  text-white drop-shadow-lg"
        elementType="heading"
        size="4xl"
      />
      <Text
        className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl text-center font-semibold"
        mt={4}
      >
        Centro de capacitación para el trabajo. Podemos poner otro texto
      </Text>
      <Text
        className="text-white text-xs sm:text-base md:text-lg lg:text-xl mt-4 text-center"
        mt={2}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
      </Text>
    </div>
  )
}

export default FirstSectionComponent