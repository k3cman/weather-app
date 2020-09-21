import {
	faBolt,
	faCloud,
	faCloudRain,
	faCloudSun,
	faSmog,
	faSnowflake,
	faSun,
	IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

export const getIcon = (icon: string): IconDefinition => {
	switch (icon) {
		case '01d':
		case '01n':
			return faSun;
		case '02d':
		case '02n':
			return faCloudSun;
		case '03d':
		case '03n':
		case '04d':
		case '04n':
			return faCloud;
		case '09d':
		case '09n':
		case '10d':
		case '10n':
			return faCloudRain;
		case '11d':
		case '11n':
			return faBolt;
		case '13d':
		case '13n':
			return faSnowflake;
		case '50d':
		case '50n':
			return faSmog;
	}
};
