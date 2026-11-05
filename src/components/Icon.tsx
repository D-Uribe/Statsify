type IconProps = {
    src: string;
    alt: string;
}

const Icon = ({src, alt} : IconProps) => (
    <img
        src={src}
        alt={alt}
        className="w-20 h-20 md:w-40 md:h-40 transition hover:scale-110"
    />      
)

export default Icon;