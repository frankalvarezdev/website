import { useEffect } from "react";

const useLazyImageLoad = ({ src, svg }) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {

            // si el elemento esta en la viewport carga la imagen
            if (entries[0].isIntersecting) {
                let element = entries[0].target;

                let img = new Image();

                img.src = src;

                img.onload = () => {
                    element.style.backgroundImage = `url("${src}")`;

                    element.classList.add('is-loaded');
                }
            }
        });

        // observa el elemento
        observer.observe(svg.current);
    }, [src, svg]);

    return null;
}

export default useLazyImageLoad;