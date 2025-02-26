import ProfileStat from "../ProfileStat/ProfileStat";
import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  const mappedStats = Object.keys(stats).map((key) => ({
    name: key,
    value: stats[key],
  }));

  return (
    <div className={css.profile}>
      <div className={css["main-user-info"]}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>

        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        {mappedStats.map((stat) => (
          <li className={css["stats-item"]} key={stat.name}>
            <ProfileStat name={stat.name} value={stat.value} />
          </li>
        ))}
      </ul>
    </div>
  );
}
