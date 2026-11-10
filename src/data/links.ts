export type LinkItem = {
  label: string;
  url: string;
};

export type SocialItem = {
  label: string;
  url: string;
  icon: "github" | "instagram" | "youtube" | "linkedin";
};

export const profile = {
  name: "@vitorcgo",
  avatarAlt: "Foto de perfil",
  avatarSrc: "/avatar.jpg",
};

export const links: LinkItem[] = [
  { label: "Inscreva-se no Curso", url: "https://example.com" },
  { label: "Baixe meu e-book", url: "https://example.com" },
  { label: "Veja meu portfólio", url: "https://example.com" },
  { label: "Conheça meu curso", url: "https://example.com" },
];

export const socials: SocialItem[] = [
  { label: "GitHub", url: "https://example.com", icon: "github" },
  { label: "Instagram", url: "https://example.com", icon: "instagram" },
  { label: "YouTube", url: "https://example.com", icon: "youtube" },
  { label: "LinkedIn", url: "https://example.com", icon: "linkedin" },
];