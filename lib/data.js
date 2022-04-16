const projects = [
    {
        name: 'Xpend Music',
        url: 'https://xpendmusic.com',
        repository: 'https://github.com/xpendmusic/website',
        image: 'https://i.imgur.com/mATUXZI.png',
        description: 'Sitio web de Xpend Music'
    },
    {
        name: 'Pupilo TV',
        url: 'https://pupiloxthesbestchava.netlify.app/',
        repository: 'https://github.com/frankalvarezdev/pupiloxthesbestchava',
        image: 'https://i.imgur.com/ONpLxoH.png',
        description: 'Sitio web Pupilo TV desarrolado con VueJS'
    },
    {
        name: 'Feedback App',
        url: 'https://feedback.xpendmusic.com',
        repository: 'https://github.com/frankalvarezdev/feedback-app',
        image: 'https://i.imgur.com/yrPlUum.png',
        description: 'Aplicacion web desarrollado con ReactJS'
    },
    {
        name: 'Worlkontrol System',
        url: 'https://worlkontrol.com',
        repository: 'https://frankalvarez.dev',
        image: 'https://i.imgur.com/EhCO92f.png',
        description: 'Sitio web de Worlkontrol'
    }
];

// https://devicon.dev/
const skills = [
    {
        icon: 'devicon-javascript-plain',
        name: 'JavaScript'
    },
    {
        icon: 'devicon-nodejs-plain',
        name: 'Nodejs'
    },
    {
        icon: 'devicon-denojs-original',
        name: 'Deno'
    },
    {
        icon: 'devicon-react-original',
        name: 'ReactJS'
    },
    {
        icon: 'devicon-vuejs-plain',
        name: 'Vuejs'
    },
    {
        icon: 'devicon-firebase-plain',
        name: 'Firebase'
    },
    {
        icon: 'devicon-graphql-plain',
        name: 'GraphQl'
    },
    {
        icon: 'devicon-sass-original',
        name: 'Sass'
    },
    {
        icon: 'devicon-php-plain',
        name: 'Php'
    },
    {
        icon: 'devicon-git-plain',
        name: 'Git'
    }
]

const getPosts = async (setPosts) => {
    try {
        const response = await fetch('https://api.hashnode.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: '321fe39f-f3e9-4957-8b28-52ef677ec988',
            },
            body: JSON.stringify({
                query: `{
                    user(username: "frankalvarez") {
                      publication {
                        posts {
                          _id
                          title
                          slug
                          totalReactions
                          dateFeatured
                          isActive
                          coverImage
                        }
                      }
                    }
                  }`
            }),
        }).then(res => res.json())

        console.log(response.data.user.publication.posts)

        setPosts(response.data.user.publication.posts)
    } catch (error) {
        console.log(error)
    }
}

export { projects, skills, getPosts };