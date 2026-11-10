import { links } from "../data/links";

export function LinkList() {
  return (
    <nav className="links" aria-label="Links">
      <ul className="links__list">
        {links.map((link) => (
          <li key={link.label}>
            <a
              className="link-button"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}