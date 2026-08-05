const Socials = ({ src, alt, href }) => (
  <a
      target="_blank"
      rel="noreferrer"
      href={href}
    >
    <img
      src={src}
      alt={alt}
      className="bg-white rounded-lg w-8 h-8"
    />
    </a>
);

export default Socials;
