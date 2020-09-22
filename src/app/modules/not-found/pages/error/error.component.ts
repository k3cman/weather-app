import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorType } from '../../../../shared/models/enums/error-type.enum';

@Component({
	selector: 'error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
	public error: ErrorType;
	public errorTypes = ErrorType;
	constructor(private router: Router) {
		this.error = this.router.url === '/error' ? ErrorType.SERVER : ErrorType.ROUTE;
	}

	ngOnInit(): void {}
}
