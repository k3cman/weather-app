/**
 * CardState Enum
 * for manipulating what part of the data is show
 * CLOSED = small card with only a name and temperature
 * STANDARD = standard card with all the current weather data
 * EXPANDED = standard card and card-details with chart in it
 */
export enum CardState {
	CLOSED = 'closed',
	STANDARD = 'standard',
	EXPANDED = 'expanded',
}
