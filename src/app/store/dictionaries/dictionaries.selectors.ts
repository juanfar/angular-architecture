import { createSelector, createFeatureSelector } from '@ngrx/store';

import { DictionariesState } from './dictionaries.reducer';

export const getDictionariesState = createFeatureSelector<DictionariesState>('dictionaries');

export const getDictionaries = createSelector(
  getDictionariesState,
  (state) => state.entities
);

export const getLoading = createSelector(
  getDictionariesState,
  (state) => state.loading
);

export const getisReady = createSelector(
  getDictionariesState,
  (state) => state.entities && !state.loading
);

export const getRoles = createSelector(
  getDictionaries,
  (state) => state.roles
);

export const getQualifications = createSelector(
  getDictionaries,
  (state) => state.qualifications
);

export const getSpecializations = createSelector(
  getDictionaries,
  (state) => state.specializations
);

export const getSkills = createSelector(
  getDictionaries,
  (state) => state.skills
);