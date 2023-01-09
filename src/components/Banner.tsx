import { Box, Button, Container, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import { BsLinkedin } from 'react-icons/bs'

const Banner = () => {
    return (
        <Box py={8}>
            <Container maxW='6xl'>
                <Grid gridTemplateColumns={{
                    base: '1fr',
                    md: '1fr 1fr'
                }}>
                    <Flex alignItems='center'>
                        <Box>
                            <Heading fontWeight='black' as='h1' fontSize='6xl' lineHeight='1em'>
                                Frank Alvarez
                            </Heading>

                            <Text fontSize='3xl' mb={2} fontWeight={300}>
                                Desarrollador web
                            </Text>

                            <a href='https://www.linkedin.com/in/frankalvarezdev/' target='_blank' rel='noreferrer'>
                                <Button leftIcon={<BsLinkedin />}>
                                    Contáctame
                                </Button>
                            </a>
                        </Box>
                    </Flex>

                    <Flex justifyContent='flex-end' alignItems='center'>
                        <Image
                            alt='Foto de perfil'
                            src='https://cdn.frankalvarez.dev/profile.jpg'
                            borderRadius='57% 43% 58% 42% / 44% 47% 53% 56%'
                            boxSize='320px'
                        />
                    </Flex>
                </Grid>
            </Container>
        </Box>
    )
}

export default Banner