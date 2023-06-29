import { profileDetails, socialMediaList } from "../const/details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    const loggedInUserId = "12345"; // example
    console.log(window.CommandBar);
    // window.CommandBar.boot(loggedInUserId);
  }, []);

  const redirectToLink = (link: string) => {
    window.location.href = link;
  };

  return (
    <div className="header">
      <div className="header-details">
        <div>
          <h2>TEST</h2>
          <h2>HEHEHEHE</h2>
        </div>
        <div>
          <p>asasdasasdasdsadsa dasdsa</p>
        </div>
      </div>
      <div className="header-img-container">
        <div className="header-img">
          <div className="social-media">
            {socialMediaList.map((socialMedia, index) => {
              return (
                <div
                  className="social-media-content"
                  key={index}
                  onClick={() => redirectToLink(socialMedia.link)}
                >
                  <FontAwesomeIcon icon={socialMedia.icon}></FontAwesomeIcon>
                </div>
              );
            })}
          </div>
        </div>
        <div className="header-bg-circle"></div>
      </div>
    </div>
  );
};
