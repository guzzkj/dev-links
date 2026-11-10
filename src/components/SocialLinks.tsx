import { socials } from "../data/links";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoLinkedin,
} from "react-icons/io5";

const iconMap = {
  github: IoLogoGithub,
  instagram: IoLogoInstagram,
  youtube: IoLogoYoutube,
  linkedin: IoLogoLinkedin,
} as const;

export function SocialLinks() {
  return (
    <nav className="socials" aria-label="Redes sociais">
      <ul className="socials__list">
        {socials.map((social) => {
          const Icon = iconMap[social.icon];
          return (
            <li key={social.label}>
              <a
                className="social-link"
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}