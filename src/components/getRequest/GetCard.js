import EllipsisText from "react-ellipsis-text";
import Vector from "../../images/vector.jpg";
import s from "./GetRequest.module.scss";

export const GetCard = ({
  item: { id, name, email, phone, photo, position },
}) => {
  return (
    <li key={id} className={s.Item} id="users">
      {
        <img
          src={photo}
          onError={(e) => {
            if (e.target.src !== Vector) e.target.src = Vector;
          }}
          alt="face"
          className={s.Img}
        />
      }

      <EllipsisText text={name} className={s.Name} length={25} />
      <EllipsisText className={s.Name} text={position} length={25} />
      <EllipsisText className={s.Name} text={email} length={25} />
      <EllipsisText className={s.Name} text={phone} length={25} />
    </li>
  );
};
