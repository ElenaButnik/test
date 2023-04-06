import { ReactComponent as SuccessIcon } from "../../images/success-image.svg";
import s from "./Success.module.scss";

export const Success = () => {
  return (
    <div className={s.Container}>
      <h2>User successfully registered</h2>
      <SuccessIcon />
    </div>
  );
};
