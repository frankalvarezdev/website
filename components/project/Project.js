import ImageRectangle from "components/image/ImageRectangle";
import Icon from "components/utils/Icon";
import ProjectModal from 'components/project/ProjectModal';
import { useState } from 'react';

const Project = ({ name, url, repository, image, description }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <div>
            <ProjectModal open={modalIsOpen} close={closeModal} project={{ name, url, repository, image, description }} />

            <div className='project'>
                <div className='content'>
                    <div onClick={openModal} className='cursor:pointer'>
                        <h3>
                            {name}
                        </h3>
                        <ImageRectangle src={image} />
                    </div>


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
        </div>
    )
}

export default Project;