import { Box, Button, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const CallToAction = () => {
    return (
        <div
            style={{
                background: "linear-gradient(180deg, #E1EEF6 50%, #074273 50%)",
            }}
            className="lg:flex lg:flex-row lg:justify-center lg:px-8 w-full"
        >
            <div className="relative flex justify-center items-center bg-white shadow-lg mx-auto p-4 sm:p-6 md:p-8 lg:p-24 rounded-lg w-full max-w-4xl">
                {/* Fondo cuadriculado */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "white",
                        backgroundImage: `
                  linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
                `,
                        backgroundSize: "30px 30px",
                        borderRadius: "12px",
                    }}
                ></div>

                {/* Contenido principal */}
                <div className="relative z-20 w-full text-center">
                    <Text size="lg" mb={{ base: 3, md: 4, lg: 4 }} className="mb-4 font-bold text-2xl text-indigo-900 sm:text-3xl md:text-4xl lg:text-5xl">
                        ¡Instituto Incorporado a la SEP!
                    </Text>
                    <Text size="lg" mb={{ base: 3, md: 4, lg: 4 }} className="mb-4 font-bold text-2xl text-indigo-900 sm:text-3xl md:text-4xl lg:text-5xl">
                        Clave: 16PBT0459J
                    </Text>
                    <Stack spacing={{ base: 3, md: 4, lg: 1 }} className="mb-4">

                        <Text size="lg" className="mb-8 md:mb-9 text-gray-600 lg:text-2xl lg:mb-8">
                            Tu educación con validez oficial.
                        </Text>
                        <Text size="lg" className="mb-8 md:mb-9 text-gray-600 lg:text-2xl lg:mb-8">
                            <Text as='u'>¡No te dejes engañar!</Text> Verifica siempre la validez de la institución.
                        </Text>
                    </Stack>
                    <Box as='button'bg='#f5f6f7' color='#4b4f56' className="bg-[#074273] text-white px-6 py-3 rounded-lg hover:bg-[#062f4c] transition-colors duration-300">
                        <Link href="https://www.polycell.tech/#" isExternal textDecoration="none">
                            ¡Contáctanos hoy mismo!
                        </Link>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default CallToAction