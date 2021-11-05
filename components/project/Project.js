import ImageRectangle from "components/image/ImageRectangle";
import Icon from "components/utils/Icon";

const Project = ({ name, url, repository, image }) => {

    return (
        <div className='project'>
            <h3>
                {name}
            </h3>

            <ImageRectangle src={image} />            

            <div className='gap:sm project-links'>
                <a href={repository} target='_blank' rel='noreferrer' title='repositorio'>
                    <i className='brand-github' />
                </a>
                <a href={url} target='_blank' rel='noreferrer' title='Enlace'>
                    <Icon icon='open_in_new' />
                </a>
            </div>
        </div>
    )
}

export default Project;