import { Container } from "@chakra-ui/react"

const ContainerApp: React.FC<any> = (props) => {
    return (
        <Container mt={5} maxW={'7xl'} {...props} />
    )
}

export default ContainerApp