import { createSelector } from "@reduxjs/toolkit";

const usersState = (state) => state.usersList;

export const getUsers = createSelector(usersState, (users) => users.users);
export const getPage = createSelector(usersState, (page) => page?.page);
export const getNextPage = createSelector(
  usersState,
  (page) => page?.links?.next_url
);
export const getLastPage = createSelector(
  usersState,
  (page) => page?.page?.total_pages
);

export const getStatus = createSelector(usersState, (page) => page?.status);
