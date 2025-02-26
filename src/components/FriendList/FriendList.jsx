import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={css["friend-list"]}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.item}>
          <FriendListItem data={friend} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
