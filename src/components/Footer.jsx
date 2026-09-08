import statsifylogo from "../assets/bar-chart.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import Socials from "./Socials";

export const Footer = () => {
  return (
    <>
      <footer className="footer  bg-green-100 flex justify-around items-center mt-15 p-10">
        <div className="flex items-center gap-2">
          <img src={statsifylogo} alt="Statsify Logo" />
          <p className="text-2xl">Statsify</p>
        </div>

        <div>
          <ul>
            <li>Home</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-5">
          <Socials
            src={github}
            alt="Github"
            href="https://github.com/D-Uribe"
          />
          <Socials
            src={linkedin}
            alt="Linkedin"
            href="https://www.linkedin.com/in/diego-joaquin-uribe-sandoval/"
          />
        </div>
      </footer>
    </>
  );
};
