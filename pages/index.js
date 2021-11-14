import Contact from 'components/Contact';
import Projects from 'components/project/Projects';
import Skills from 'components/skills/Skills';
import Head from 'next/head';

export default function Home() {

	return (
		<div className='container has-top-margin'>
			<Head>
				<title>Frank Alvarez</title>
				<meta name="description" content="Desarrollador web" />
				<meta property="og:image" content="https://frankalvarez.dev/og.png" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className='iam'>
				<h1>Frank Alvarez</h1>
				<div className='iam-description'>
					Desarrollador frontend
				</div>
			</div>
			<div className='section' id='proyectos'>
				<h2 className='mg-bottom:lg'>
					Proyectos
				</h2>
				<Projects />
			</div>
			<div className='section' id='sobremi'>
				<h2>
					Sobre mi
				</h2>
				<p className='opacity:1'>
					Programador frontend, con un año de experiencia usando Vanilla JavaScript y tecnologías como Vue JS y React JS.
					Soy empático con los demás, también me gusta aprender y probar nuevas tecnologías.
				</p>
			</div>
			<div className='section' id='sobremi'>
				<h2>
					Habilidades
				</h2>
				<Skills/>
			</div>
			<div className='section' id='sobremi'>
				<h2>
					Contacto
				</h2>
				<Contact/>
			</div>
		</div>
	)
}
