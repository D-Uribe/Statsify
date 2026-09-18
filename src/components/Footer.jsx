import statsifylogo from "../assets/bar-chart.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import Socials from "./Socials";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <footer className=" bg-green-100 flex justify-around items-center mt-15 p-10">
        <div className="flex items-center gap-2">
          <img className="w-5 h-5 xs:w-10 xs:h-10" src={statsifylogo} alt="Statsify Logo" />
          <p className="text-xl xs:text-2xl">Statsify</p>
        </div>

        <div>
          <ul>
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/");
              }}
              type="button"
              className="font-poppins"
            >
              Home
            </button>
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
