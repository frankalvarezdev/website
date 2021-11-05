import { projects } from 'lib/data';
import Project from './Project';

const Projects = () => {

    return (
        <div className='grid:4 gap mg-top'>
            {projects.map((project, i) => ( 
                <Project {...project} key={i} />
            ))}
        </div>
    )
}

export default Projects;