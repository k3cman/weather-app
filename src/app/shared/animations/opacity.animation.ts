import { animate, style, transition, trigger } from '@angular/animations';

/**
 * Animation for opacity
 */
export const opacityAnimation = trigger('opacity', [
	transition(':enter', [style({ opacity: 0 }), animate('400ms ease-in', style({ opacity: 1 }))]),
	transition(':leave', [animate('200ms ease-in', style({ opacity: 0 }))]),
]);
