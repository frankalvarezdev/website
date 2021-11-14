import Modal from 'react-modal';
import { useState } from 'react';
import Icon from 'components/utils/Icon';
import ImageRectangle from 'components/image/ImageRectangle';

const ProjectModal = ({ open, close, project }) => {
    return (
        <div>
            <Modal
                className='modal'
                isOpen={open}
                onRequestClose={close}
                contentLabel="Datos de proyecto"
            >
                <div className="modal-close" onClick={close}>
                    <Icon icon='cancel' />
                </div>

                <div className='modal-content'>
                    <h2>{project.name}</h2>
                    <div className='line'></div>
                    <p className='opacity:1'>
                        {project.description}
                    </p>
                    <ImageRectangle src={project.image} />

                    <div className='modal-actions'>
                        <a href={project.repository} target='_blank' rel='noreferrer' title='repositorio' className='button is-info'>
                            Repositorio <i className='brand-github' />
                        </a>
                        <a href={project.url} target='_blank' rel='noreferrer' title='Enlace' className='button is-info'>
                            Enlace <Icon icon='open_in_new' />
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ProjectModal;