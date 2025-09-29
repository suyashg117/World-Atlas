import { CiMail, CiPhone } from "react-icons/ci";
import { FaUsersViewfinder } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import footerContact from "../../api/footerApi.json";
export const Footers = () => {
  const footerIcon = {
    phone: <CiPhone />,
    email: <CiMail />,
    users: <FaUsersViewfinder />,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink to="/" target="_blank"></NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul className="footer-item">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.instagram.com/suyash_gupta_official/"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://github.com/suyashg117" target="_blank">
                    Source Code
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
