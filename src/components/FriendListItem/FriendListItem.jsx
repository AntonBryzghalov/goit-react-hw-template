import css from "./FriendListItem.module.css";

function FriendListItem({ data: { avatar, name, isOnline } }) {
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
