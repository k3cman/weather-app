import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounce, debounceTime, delay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class LoadingService {
	private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public loading$ = this._loading.asObservable();

	private loadingMap: Map<string, boolean> = new Map<string, boolean>();

	public setLoading(loading: boolean, url: string): void {
		if (!url) {
			// tslint:disable-next-line: no-console
			console.error('Request URL must be provided');
		}

		if (loading) {
			this.loadingMap.set(url, loading);
			this._loading.next(true);
		} else if (!loading && this.loadingMap.has(url)) {
			this.loadingMap.delete(url);
		}

		if (this.loadingMap.size === 0) {
			this._loading.next(false);
		}
	}
}
