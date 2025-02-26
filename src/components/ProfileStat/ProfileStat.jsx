import css from "./ProfileStat.module.css";
import { capitalizeFirstLetter } from "../../js/utils";

export default function ProfileStat({ name, value }) {
  return (
    <>
      <span className={css.name}>{capitalizeFirstLetter(name)}</span>
      <span className={css.value}>{value}</span>
    </>
  );
}
