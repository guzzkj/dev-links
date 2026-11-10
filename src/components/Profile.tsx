import { profile } from "../data/links";

type ProfileProps = {
  name?: string;
  avatarSrc?: string;
};

export function Profile({ name = profile.name, avatarSrc = profile.avatarSrc }: ProfileProps) {
  return (
    <section className="profile" aria-label="Perfil">
      <img
        className="profile__avatar"
        src={avatarSrc}
        alt={profile.avatarAlt}
        width={104}
        height={104}
      />
      <p className="profile__name">{name}</p>
    </section>
  );
}