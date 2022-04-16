import portrait from "../images/portrait.jpg";
import mailIcon from "../images/email.svg";
import linkedinIcon from "../images/linkedin.svg";

export default function Info() {
    return (
        <div className="info">
            <img src={portrait} alt="Portrait" className="info--portrait" />
            <h2 className="info--name">Thomas Ballet</h2>
            <h4 className="info--function">Developer</h4>
            <div className="info--buttons">
                <a href="mailto:someone@example.com">
                    <button className="info--buttons--mail">
                        <img src={mailIcon} alt="" className="info--mailIcon" />
                        Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/thomas-ballet" target="_blank" rel="noreferrer">
                    <button className="info--buttons--linkedin">
                        <img src={linkedinIcon} alt="" className="info--linkedinIcon" />
                        Linkedin
                    </button>
                </a>
            </div>
        </div>
    )
}