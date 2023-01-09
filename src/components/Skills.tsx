import { Box } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import { DiJavascript1 } from 'react-icons/di'
import { FaNodeJs, FaPhp, FaReact } from 'react-icons/fa'
import { SiDeno, SiGit, SiGraphql } from 'react-icons/si'
import { SiVuedotjs } from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'
import { IoLogoSass } from 'react-icons/io'

const Skills = () => {
    return (
        <Box className='skills' mt={8}>
            {skills.map((skill, i) => (
                <Tooltip label={skill.name} key={i}>
                    <span>
                        {skill.icon}
                    </span>
                </Tooltip>
            ))}
        </Box>
    )
}

const skills = [
    {
        icon: <DiJavascript1 />,
        name: 'JavaScript'
    },
    {
        icon: <FaNodeJs />,
        name: 'Node.js'
    },
    {
        icon: <SiDeno />,
        name: 'Deno'
    },
    {
        icon: <FaReact />,
        name: 'React'
    },
    {
        icon: <SiVuedotjs />,
        name: 'Vue.js'
    },
    {
        icon: <SiFirebase />,
        name: 'Firebase'
    },
    {
        icon: <SiGraphql />,
        name: 'GraphQl'
    },
    {
        icon: <IoLogoSass />,
        name: 'Sass'
    },
    {
        icon: <FaPhp />,
        name: 'PHP'
    },
    {
        icon: <SiGit />,
        name: 'Git'
    }
]

export default Skills