import { createSelector } from "@reduxjs/toolkit";

const positionsState = (state) => state.positions;

export const getPositions = createSelector(
  positionsState,
  (positions) => positions.positions
);
