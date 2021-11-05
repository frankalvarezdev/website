import { useEffect, useRef } from "react";
import useLazyImageLoad from "./Lazy";

const ImageRectangle = ({ src }) => {
    const svg = useRef();

    useLazyImageLoad({src, svg});

    return (
        <svg ref={svg} className="image is-square is-lazy" viewBox="-204.63833333333235 -40.999999999999886 1284.0000000000002 723.9999999999999">
            <defs>
                <path d="M-203.64 -40L1076.36 -40L1076.36 680L-203.64 680L-203.64 -40Z" />
            </defs>
        </svg>
    );
}

export default ImageRectangle;