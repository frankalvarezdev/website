import ImageRectangle from "components/image/ImageRectangle";
import Icon from "components/utils/Icon";

const Project = ({ name, url, repository, image }) => {

    return (
        <div className='project'>
            <div className='content'>
                <h3>
                    {name}
                </h3>

                <a href={url} target='_blank' rel='noreferrer'>
                    <ImageRectangle src={image} />
                </a>


                <div className='gap:sm project-links'>
                    <a href={repository} target='_blank' rel='noreferrer' title='repositorio'>
                        <i className='brand-github' />
                    </a>
                    <a href={url} target='_blank' rel='noreferrer' title='Enlace'>
                        <Icon icon='open_in_new' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;