import { Button } from "../button/Button";
import s from "./Heroy.module.scss";

export const Heroy = (params) => {
  return (
    <section className={s.Container}>
      <h1 className={s.Title}>Test assignment for front-end developer</h1>
      <p className={s.Text}>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <Button>
        <a href="#signUp">Sign up</a>
      </Button>
    </section>
  );
};
