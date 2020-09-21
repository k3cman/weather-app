import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor(public loadingService: LoadingService) {
		this.loadingService.loading$.subscribe((val) => console.log(val));
	}
}
