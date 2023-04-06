import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import {
  getUsers,
  getNextPage,
  getPage,
  getLastPage,
} from "../../redux/users/selectors";
import { getThunkData } from "../../redux/users/thunks";
import { Button } from "../button/Button";
import { getStatus } from "../../redux/users/selectors";
import { GetCard } from "./GetCard";
import s from "./GetRequest.module.scss";

export const GetRequest = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const nextPage = useSelector(getNextPage);
  const page = useSelector(getPage);
  const currentPage = page.page;
  const lastPage = useSelector(getLastPage);
  const status = useSelector(getStatus);

  useEffect(() => {
    dispatch(getThunkData({ count: 6, page: nextPage }));
  }, [dispatch, nextPage]);

  const onClickPage = useCallback(
    (nextPage) => {
      dispatch(getThunkData({ count: 6, page: Number(nextPage) }));
    },
    [dispatch]
  );

  return (
    <>
      <section className={s.Container}>
        <h2 className={s.Title}>Working with GET request</h2>

        <ul className={s.List} id="users">
          {status === "pending" ? (
            <ColorRing
              visible={true}
              height="48"
              width="48"
              ariaLabel="blocks-loading"
              wrapperStyle={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
              }}
              wrapperClass="blocks-wrapper"
              colors={["#00BDD3", "#00BDD3", "#00BDD3", "#00BDD3", "#00BDD3"]}
            />
          ) : (
            users.map((item) => <GetCard key={item.id} item={item} />)
          )}
        </ul>
        {currentPage === lastPage ? null : (
          <div className={s.Btn}>
            <Button
              type="button"
              currentPage={currentPage}
              onClickPage={onClickPage}
              style={{ width: 120 }}
            >
              Show more
            </Button>
          </div>
        )}
      </section>
    </>
  );
};
