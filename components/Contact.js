import { useForm } from '@formcarry/react';
import TextareaAutosize from 'react-textarea-autosize';

const Contact = () => {
    // Call the `useForm` hook in your function component
    const { state, submit } = useForm({
        id: 'pGhgfyOQA3D'
    });

    // Success message
    if (state.submitted) {
        return <div>¡Gracias! Recibimos tu envío.</div>;
    }

    return (
        <form onSubmit={submit} className='mg-top:lg' className='contact-form'>
            <div className='grid:2 gap'>
                <div>
                    <label className='label' htmlFor="name">Nombre</label>
                    <input id="email" type="text" name="name" className='input is-text' />
                </div>
                <div>
                    <label className='label' htmlFor="email">Correo electrónico</label>
                    <input id="email" type="email" name="email" className='input is-text' />
                </div>

            </div>
            <div className='field mg-top:lg'>
                <label className='label' htmlFor="message">Mensage</label>
                <TextareaAutosize id="message" name="message" className='textarea' minRows={2} />
            </div>

            <button className='button is-primary' type="submit">Enviar</button>
        </form>
    );
}

export default Contact;