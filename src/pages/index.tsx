import { Container, Heading, Text } from '@chakra-ui/react'
import Banner from 'src/components/Banner'
import Projects from 'src/components/Projects'
import Skills from 'src/components/Skills'

const Home = () => {
	return (
		<>
			<Banner />

			<Container maxW='6xl' mb={10}>
				<Skills />

				<Heading mt='3rem' id='sobre-mi'>
					Sobre mi
				</Heading>

				<Text mt={2}>
					Soy programador frontend con más de dos años de experiencia en desarrollo de aplicaciones web. Tengo conocimientos en HTML, CSS, JavaScript, React, Git, entre otros. Además, sigo aprendiendo y actualizándome en estas tecnologías y mejorando mis soft skills.
				</Text>

				<Heading mt={8} id='proyectos'>
					Proyectos
				</Heading>

				<Text mt={2} opacity={.5}>
					Estos son algunos de los proyectos en los que colaboré o trabajé en solitario.
				</Text>

				<Projects />
			</Container>
		</>
	)
}

export default Home