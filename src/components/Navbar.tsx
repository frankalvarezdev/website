import { Box, Container, Flex, Grid } from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs'
import { cssSheet } from 'src/utils/styles'

const Navbar = () => {
    return (
        <Box>
            <Container maxW='6xl'>
                <Grid templateColumns='1fr auto' fontWeight={600} gap={5} py={4} alignItems='center'>
                    <Flex gap={5}>
                        <Box
                            as='a'
                            href='/#proyectos'
                        >
                            PROYECTOS
                        </Box>

                        <Box
                            as='a'
                            href='/#sobre-mi'
                        >
                            SOBRE MI
                        </Box>

                        <Box
                            as='a'
                            href='https://dev.to/frankalvarez'
                        >
                            BLOG
                        </Box>
                    </Flex>

                    <Box
                        as='a'
                        href='https://github.com/frankalvarezdev'
                    >
                        <BsGithub size={18} />
                    </Box>
                </Grid>
            </Container>
            <Box css={s.line} />
        </Box>
    )
}

const s = cssSheet({
    line: {
        height: '2px',
        width: '100%',
        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        bgSize: 'background-size',
        animation: '6s ease infinite',
        marginBottom: '.5rem'
    }
})

export default Navbar