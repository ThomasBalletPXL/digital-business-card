import facebookIcon from "../images/facebook.svg"
import instagramIcon from "../images/instagram.svg";
import githubIcon from "../images/github.svg"

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <button className="footer--facebook">
                    <img src={facebookIcon} alt="" className="footer--facebookIcon"/>
                </button>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <button className="footer--instagram">
                    <img src={instagramIcon} alt="" className="footer--instagramIcon"/>
                </button>
            </a>
            <a href="https://github.com/ThomasBalletPXL" target="_blank" rel="noreferrer">
                <button className="footer--github">
                    <img src={githubIcon} alt="" className="footer--githubIcon" />
                </button>
            </a>
        </footer>
    )
}