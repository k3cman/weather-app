import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Component for displaying erros or not found pages
 */
@Component({
	selector: 'error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {}
