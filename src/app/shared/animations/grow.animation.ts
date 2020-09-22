import { animate, style, transition, trigger } from '@angular/animations';

/**
 * Animation for growing width
 */
export const growAnimation = trigger('grow', [
	transition(':enter', [style({ width: 0 }), animate('400ms ease-in', style({ width: '920px' }))]),
	transition(':leave', [animate('400ms ease-in', style({ width: 0 }))]),
]);
