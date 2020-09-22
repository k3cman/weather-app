/**
 * Saves data for forecast if there is no saved forecast for selected location
 * @param state
 * @param props
 */

export const handleSavedState = (state, props) => {
	if (!props.save) {
		return [...state.saved];
	} else {
		let savedState = [...state.saved];
		const savedIndex = state.saved.findIndex((el) => el.id === props.data.id);
		if (savedIndex >= 0) {
			savedState[savedIndex] = { ...props.data };
		} else {
			savedState = [...savedState, props.data];
		}

		return savedState;
	}
};
