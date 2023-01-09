import { Box, Flex } from '@chakra-ui/react'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <Box>
            <Flex justify='center' gap={8} py={8}>
                <Box
                    as='a'
                    href='https://www.instagram.com/frankalvarezdev'
                >
                    <BsInstagram size={20} />
                </Box>

                <Box
                    as='a'
                    href='https://twitter.com/frankalvarezdev'
                >
                    <BsTwitter size={20} />
                </Box>

                <Box
                    as='a'
                    href='https://github.com/frankalvarezdev'
                >
                    <BsGithub size={20} />
                </Box>
            </Flex>
        </Box>
    )
}

export default Footer