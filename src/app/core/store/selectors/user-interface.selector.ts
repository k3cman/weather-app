import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserInterfaceState } from '../models/user-interface.state';

/**
 * UI state selector
 */

export const selectUIState = createFeatureSelector<UserInterfaceState>('userInterface');

export const getUISelected = createSelector(selectUIState, (state) => state?.selected);
