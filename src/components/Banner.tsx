import { Box, Button, Container, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import { BsLinkedin } from 'react-icons/bs'

const Banner = () => {
    return (
        <Box py={8}>
            <Container maxW='6xl'>
                <Grid gridTemplateColumns={{
                    base: '1fr',
                    md: '1fr 1fr'
                }} gap={8}>
                    <Flex alignItems='center' w='full'>
                        <Box textAlign={{ base: 'center', md: 'left' }} w='full'>
                            <Heading fontWeight='black' as='h1' lineHeight='1em'
                                fontSize={{ base: '5xl', md: '6xl' }}
                            >
                                Frank Alvarez
                            </Heading>

                            <Text mb={2} fontWeight={300}
                                fontSize={{ base: '2xl', md: '3xl' }}
                            >
                                Desarrollador web
                            </Text>

                            <a href='https://www.linkedin.com/in/frankalvarezdev/' target='_blank' rel='noreferrer'>
                                <Button leftIcon={<BsLinkedin />}>
                                    Contáctame
                                </Button>
                            </a>
                        </Box>
                    </Flex>

                    <Flex justifyContent={{ base: 'center', md: 'flex-end' }} alignItems='center'>
                        <Image
                            alt='Foto de perfil'
                            src='https://cdn.frankalvarez.dev/profile.jpg'
                            borderRadius='57% 43% 58% 42% / 44% 47% 53% 56%'
                            boxSize='320px'
                            maxW='full'
                        />
                    </Flex>
                </Grid>
            </Container>
        </Box >
    )
}

export default Banner