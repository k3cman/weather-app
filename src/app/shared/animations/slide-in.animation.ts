import { animate, style, transition, trigger } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
	transition(':enter', [style({ opacity: 0 }), animate('400ms ease-in', style({ opacity: 1 }))]),
	transition(':leave', [animate('200ms ease-in', style({ opacity: 0 }))]),
]);
