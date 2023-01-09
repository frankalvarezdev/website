import { Button, Card, CardBody, CardFooter, Image, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import { projects } from 'src/utils/projects'
import { FiExternalLink } from 'react-icons/fi'
import ImagePreview from './ImagePreview'
import { useState } from 'react'

const Projects = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedImage, setSelectedImage] = useState('')

    const handleImageClick = (url: string) => {
        setSelectedImage(url)
        onOpen()
    }

    return (
        <>
            <ImagePreview isOpen={isOpen} onClose={onClose} url={selectedImage} />

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={5} mt={5}>
                {projects.map((project, i) => (
                    <Card maxW='sm' key={i} variant='unstyled'>
                        <CardBody>
                            <Text size='md' mb={3}>
                                {project.name}
                            </Text>

                            <Image
                                src={project.image}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                cursor='pointer'
                                onClick={() => handleImageClick(project.image)}
                            />
                        </CardBody>

                        <CardFooter mt={5}>
                            <Button
                                leftIcon={<FiExternalLink />} size='sm' w='full'
                                as='a' href={project.url} target='_blank' rel='noreferrer'
                            >
                                Ver
                            </Button>
                        </CardFooter>
                    </Card>

                ))}
            </SimpleGrid>
        </>
    )
}

export default Projects