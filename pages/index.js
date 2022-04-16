import PostCard from 'components/blog/PostCard';
import Contact from 'components/Contact';
import Projects from 'components/project/Projects';
import Skills from 'components/skills/Skills';
import { getPosts } from 'lib/data';
import Head from 'next/head';
import { useEffect, useState } from 'react'

export default function Home() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		getPosts(setPosts)
	}, [])

	return (
		<div className='container has-top-margin'>
			<Head>
				<title>Frank Alvarez (Desarrollador web)</title>
				<meta name="description" content="Desarrollador web, Frank Boris Alvarez Quispe" />
				<meta property="og:image" content="https://frankalvarez.dev/og.png" />
				<meta property="og:title" content="Frank Alvarez (Desarrollador web)" />
				<meta property="og:description" content="Desarrollador web, Frank Boris Alvarez Quispe | Arequipa" />
				<meta property="og:url" content="https://frankalvarez.dev" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Frank Alvarez (Desarrollador web)" />
				<meta name="twitter:site" content="@frankalvarezdev" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className='iam'>
				<h1>Frank Alvarez</h1>
				<div className='iam-description'>
					DESARROLLADOR WEB
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
					Programador frontend, con mas de un año de experiencia usando Vanilla JavaScript y tecnologías como Vue JS y React JS.
					Soy empático con los demás, también me gusta aprender y probar nuevas tecnologías.
				</p>
			</div>
			<div className='section' id='sobremi'>
				<h2>
					Blog
				</h2>
				<p className='opacity:1'>
					últimos artículos de mi blog
				</p>
				<div className='grid:4'>
					{posts.map((post, i) => (
						<PostCard {...post} key={i} />
					))}
				</div>
			</div>
			<div className='section' id='sobremi'>
				<h2>
					Habilidades
				</h2>
				<Skills />
			</div>
			<div className='section' id='sobremi'>
				<h2>
					Contacto
				</h2>
				<Contact />
			</div>
		</div>
	)
}
