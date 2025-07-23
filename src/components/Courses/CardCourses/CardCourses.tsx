"use client"
import { useEffect, useState } from "react"
import {
  Box,
  Text,
  Button,
  Badge,
  Flex,
  Grid,
  VStack,
  HStack,
  Image,
  List,
  ListItem,
  ListIcon,
  IconButton,
  useColorModeValue,
  Container,
  Heading,
  Stack,
} from "@chakra-ui/react"
import {
  FaClock,
  FaUsers,
  FaAward,
  FaWhatsapp,
  FaEnvelope,
  FaStar,
  FaCalendarAlt,
  FaCircle,
} from "react-icons/fa"

const courses = [
  {
    id: 1,
    name: "Operador de Software Administrativo e Internet",
    images: [
      "/placeholder.svg?height=200&width=300&text=HTML+CSS+JS",
      "/placeholder.svg?height=200&width=300&text=React+Node",
      "/placeholder.svg?height=200&width=300&text=MongoDB+API",
    ],
    category: "Programación",
    duration: "12 meses",
    students: 50,
    rating: 4.8,
    price: "$600", //Precio a quitar
    description:
      "Aprende a crear aplicaciones web completas desde cero con las tecnologías más demandadas del mercado.",
    highlights: [
      "React, Node.js y MongoDB",
      "Proyectos reales en tu portafolio",
      "Mentorías personalizadas",
      "Certificación oficial",
    ],
    instructor: "Alejandro Arevalo Peña",
    nextStart: "15 Enero 2025",
    level: "Principiante a Intermedio",
  },
  {
    id: 2,
    name: "Estilista Profesional",
    images: [
      "/placeholder.svg?height=200&width=300&text=Figma+Design",
      "/placeholder.svg?height=200&width=300&text=User+Research",
      "/placeholder.svg?height=200&width=300&text=Prototyping",
    ],
    category: "Diseño",
    duration: "14 meses",
    students: 50,
    rating: 4.9,
    price: "$249", //Precio a quitar
    description: "Domina el arte del diseño de experiencias digitales y crea interfaces que enamoren a los usuarios.",
    highlights: [
      "Figma y Adobe Creative Suite",
      "Metodologías de Design Thinking",
      "Portfolio profesional",
      "Prácticas en empresas reales",
    ],
    instructor: "Fabiola Varela",
    nextStart: "22 Enero 2025",
    level: "Principiante a Avanzado",
  },
  {
    id: 3,
    name: "Asistente Educativo con Ingles",
    images: [
      "/placeholder.svg?height=200&width=300&text=Google+Ads",
      "/placeholder.svg?height=200&width=300&text=Social+Media",
      "/placeholder.svg?height=200&width=300&text=Analytics",
    ],
    category: "Marketing",
    duration: "13 meses",
    students: 45,
    rating: 4.7,
    price: "$199",
    description: "Conviértete en un experto en marketing digital y aprende a hacer crecer cualquier negocio online.",
    highlights: [ //plan de estuduos
      "Google Ads y Facebook Ads",
      "SEO y Content Marketing",
      "Analytics y métricas",
      "Estrategias de conversión",
    ],
    instructor: "Jaqueline ", //por poner
    nextStart: "8 Febrero 2025",
    level: "Principiante a Avanzado",
  },
  {
    id: 4,
    name: "Barberia",
    images: [
      "/placeholder.svg?height=200&width=300&text=Python+Data",
      "/placeholder.svg?height=200&width=300&text=Machine+Learning",
      "/placeholder.svg?height=200&width=300&text=Data+Viz",
    ],
    category: "Tecnología",
    duration: " 4 meses",
    students: 10,
    rating: 4.9,
    price: "$399",
    description: "Descubre el poder de los datos y aprende a extraer insights valiosos para la toma de decisiones.",
    highlights: [
      "Python y R para análisis",
      "Machine Learning aplicado",
      "Visualización de datos",
      "Proyectos con datos reales",
    ],
    instructor: "Maritza", //por poner
    nextStart: "1 Febrero 2025",
    level: "Principiante a Avanzado",
  },
  {
    id: 5,
    name: "Diplomado Office 2019 (Junior)",
    images: [
      "/placeholder.svg?height=200&width=300&text=Camera+Basics",
      "/placeholder.svg?height=200&width=300&text=Composition",
      "/placeholder.svg?height=200&width=300&text=Post+Processing",
    ],
    category: "Arte",
    duration: "12 meses",
    students: 25,
    rating: 4.6,
    price: "$149",
    description: "Captura momentos únicos y aprende las técnicas profesionales de fotografía digital y edición.",
    highlights: [
      "Técnicas de composición",
      "Lightroom y Photoshop",
      "Fotografía de retrato y paisaje",
      "Montaje de exposición final",
    ],
    instructor: "Alejandro Arevalo Peña",
    nextStart: "12 Enero 2025",
    level: "Principiante a Intermedio",
  },
  {
    id: 6,
    name: "Curso de uñas acrílicas",
    images: [
      "/placeholder.svg?height=200&width=300&text=Business+Model",
      "/placeholder.svg?height=200&width=300&text=Startup+Growth",
      "/placeholder.svg?height=200&width=300&text=Investment",
    ],
    category: "Negocios",
    duration: "2 meses",
    students: 20,
    rating: 4.8,
    price: "$279",
    description: "Aprende a crear y escalar tu propio negocio digital desde la idea hasta la ejecución exitosa.",
    highlights: [
      "Validación de ideas de negocio",
      "Modelos de monetización",
      "Estrategias de crecimiento",
      "Networking con inversores",
    ],
    instructor: "Fabiola Varela",
    nextStart: "29 Enero 2025",
    level: "Todos los niveles",
  },
]

interface ImageSliderProps {
  images: string[]
  courseName: string
}

function ImageSlider({ images, courseName }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <Box position="relative" overflow="hidden" borderRadius="lg">
      <Box display="flex" transform={`translateX(-${currentIndex * 100}%)`} transition="transform 0.5s ease-in-out">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image || "/placeholder.svg"}
            alt={`${courseName} - Imagen ${index + 1}`}
            w="100%"
            h="200px"
            objectFit="cover"
            flexShrink={0}
          />
        ))}
      </Box>
      <HStack position="absolute" bottom="2" left="50%" transform="translateX(-50%)" spacing={1}>
        {images.map((_, index) => (
          <IconButton
            key={index}
            aria-label={`Ir a imagen ${index + 1}`}
            icon={<FaCircle />}
            size="xs"
            variant="ghost"
            color={currentIndex === index ? "white" : "whiteAlpha.600"}
            onClick={() => goToSlide(index)}
            minW="auto"
            h="auto"
            p={1}
          />
        ))}
      </HStack>
    </Box>
  )
}

export default function CoursesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const cardBg = useColorModeValue("white", "gray.800")
  const textColor = useColorModeValue("gray.600", "gray.300")

  const handleWhatsApp = (courseName: string) => {
    const message = `Hola! Me interesa el curso de ${courseName}. ¿Podrían darme más información?`
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleContact = (courseName: string) => {
    console.log(`Contacto para curso: ${courseName}`)
  }

  return (
    <Box py={16} px={4}  minH="100vh" width={"100%"} >
      <Container maxW="7xl">
        {/* Header */}
        <VStack spacing={6} textAlign="center" mb={12}>
          <Badge backgroundColor={"#76caff"} px={4} py={2} borderRadius="full" fontSize="sm" >
            Cursos Destacados
          </Badge>
          <Heading as="h2" size="2xl" color="white">
            Transforma tu futuro con nuestros cursos
          </Heading>
          <Text fontSize="xl" color={"white"} maxW="3xl" fontWeight={"medium"}>
            Descubre nuestra selección de cursos diseñados para impulsar tu carrera profesional con las habilidades más
            demandadas del mercado actual.
          </Text>
        </VStack>

        {/* Courses Grid */}
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8} mb={12}>
          {courses.map((course) => (
            <Box
              key={course.id}
              role="group"
              bg={cardBg}
              borderRadius="2xl"
              shadow="lg"
              overflow="hidden"
              position="relative"
              transition="all 0.5s ease"
              _hover={{
                shadow: "2xl",
                transform: "translateY(-8px)",
              }}
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Slider */}
              <Box position="relative">
                <ImageSlider images={course.images} courseName={course.name} />
                <Badge
                  position="absolute"
                  top={4}
                  left={4}
                  bg="whiteAlpha.900"
                  color="gray.800"
                  px={3}
                  py={1}
                  borderRadius="md"
                >
                  {course.category}
                </Badge>
                <HStack
                  position="absolute"
                  top={4}
                  right={4}
                  bg="whiteAlpha.900"
                  borderRadius="full"
                  px={2}
                  py={1}
                  spacing={1}
                >
                  <FaStar color="gold" size={14} />
                  <Text fontSize="sm" fontWeight="medium" color="gray.800">
                    {course.rating}
                  </Text>
                </HStack>
              </Box>

              {/* Basic Info */}
              <Box p={6}>
                <Heading
                  as="h3"
                  size="md"
                  mb={3}
                  color="gray.900"
                  transition="color 0.3s"
                  _groupHover={{ color: "blue.600" }}
                >
                  {course.name}
                </Heading>

                <HStack spacing={4} fontSize="sm" color={textColor} mb={3}>
                  <HStack spacing={1}>
                    <FaClock />
                    <Text>{course.duration}</Text>
                  </HStack>
                  <HStack spacing={1}>
                    <FaUsers />
                    <Text>{course.students} estudiantes</Text>
                  </HStack>
                </HStack>

                <Text color={textColor} fontSize="sm" mb={4} noOfLines={2}>
                  {course.description}
                </Text>

                <Flex justify="space-between" align="center">
                  <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                    {course.price}
                  </Text>
                  <Badge variant="outline" colorScheme="gray" fontSize="xs">
                    {course.level}
                  </Badge>
                </Flex>
              </Box>

              {/* Expanded Info (Hover Overlay) */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg={cardBg}
                p={6}
                opacity={hoveredCard === course.id ? 1 : 0}
                transform={hoveredCard === course.id ? "translateY(0)" : "translateY(100%)"}
                transition="all 0.5s ease"
                pointerEvents={hoveredCard === course.id ? "auto" : "none"}
              >
                <VStack spacing={4} align="stretch" h="100%">
                  <Flex justify="space-between" align="center">
                    <Heading as="h3" size="md" color="gray.900">
                      {course.name}
                    </Heading>
                    <Badge colorScheme="blue">{course.category}</Badge>
                  </Flex>

                  <Text color={textColor} fontSize="sm">
                    {course.description}
                  </Text>

                  <VStack spacing={3} align="stretch" flex={1}>
                    <HStack spacing={2} fontSize="sm">
                      <FaAward color="blue" />
                      <Text>
                        <Text as="span" fontWeight="bold">
                          Instructor:
                        </Text>{" "}
                        {course.instructor}
                      </Text>
                    </HStack>
                    <HStack spacing={2} fontSize="sm">
                      <FaCalendarAlt color="green" />
                      <Text>
                        <Text as="span" fontWeight="bold">
                          Próximo inicio:
                        </Text>{" "}
                        {course.nextStart}
                      </Text>
                    </HStack>

                    <Box>
                      <Text fontWeight="semibold" fontSize="sm" mb={2}>
                        Lo que aprenderás:
                      </Text>
                      <List spacing={1}>
                        {course.highlights.map((highlight, index) => (
                          <ListItem key={index} fontSize="xs" color={textColor}>
                            <ListIcon as={FaCircle} color="blue.600" boxSize={2} />
                            {highlight}
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </VStack>

                  <VStack spacing={3}>
                    <Flex justify="space-between" align="center" w="100%">
                      <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                        {course.price}
                      </Text>
                      <HStack spacing={1}>
                        <FaStar color="gold" size={14} />
                        <Text fontSize="sm" fontWeight="medium">
                          {course.rating}
                        </Text>
                        <Text fontSize="xs" color={textColor}>
                          ({course.students})
                        </Text>
                      </HStack>
                    </Flex>

                    <Stack direction={{ base: "column", sm: "row" }} spacing={2} w="100%">
                      <Button
                        leftIcon={<FaWhatsapp />}
                        colorScheme="green"
                        size="sm"
                        flex={1}
                        onClick={() => handleWhatsApp(course.name)}
                      >
                        WhatsApp
                      </Button>
                      <Button
                        leftIcon={<FaEnvelope />}
                        variant="outline"
                        size="sm"
                        flex={1}
                        onClick={() => handleContact(course.name)}
                      >
                        Contacto
                      </Button>
                    </Stack>
                  </VStack>
                </VStack>
              </Box>
            </Box>
          ))}
        </Grid>

        {/* CTA Section */}
        <VStack spacing={6} textAlign="center">
          <Text color={textColor}>¿No encuentras el curso que buscas? Tenemos más opciones disponibles</Text>
          <Button size="lg" colorScheme="blue">
            Ver todos los cursos
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}
