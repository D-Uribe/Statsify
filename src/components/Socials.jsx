const Socials = ({ src, alt, href }) => (
  <a
      target="_blank"
      rel="noreferrer"
      href={href}
    >
    <img
      src={src}
      alt={alt}
      className="w-5 h-5 xs:w-8 xs:h-8 bg-white rounded-lg "
    />
    </a>
);

export default Socials;
