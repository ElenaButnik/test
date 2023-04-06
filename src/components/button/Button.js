import s from "./Button.module.scss";

export const Button = ({ style, children }) => {
  return (
    <button type="button" className={s.Button} style={style}>
      {children}
    </button>
  );
};
