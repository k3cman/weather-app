import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app.state';
import { setSelected } from '../actions/user-interface.actions';

@Injectable()
export class UserInterfaceEffect {
	constructor(private actions$: Actions, private store: Store<AppState>) {}
}
