import { createSelector, createFeatureSelector } from '@ngrx/store';

import { UserState } from './user.reducer';

export const getUserState = createFeatureSelector<UserState>('user');

export const getUser = createSelector(
  getUserState,
  (state) => state.entity
);

export const getLoading = createSelector (
  getUserState,
  (state) => state.loading
);

export const isAuthorized = createSelector (
  getUserState,
  (state) => !!state.uid
);