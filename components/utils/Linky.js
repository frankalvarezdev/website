import Link from 'next/link';

const Linky = ({ children, to, className }) => {

    return (
        <Link href={to}>
            <a className={className}>
                {children}
            </a>
        </Link>
    )
}

export default Linky;