// Data from this file is used for Unit tests only

export const hourlyDataForTests = [
	{
		dt: 1600779600,
		temp: 24.5,
		feels_like: 24.99,
		pressure: 1012,
		humidity: 55,
		dew_point: 14.88,
		clouds: 75,
		visibility: 10000,
		wind_speed: 1.53,
		wind_deg: 6,
		weather: [
			{
				id: 803,
				main: 'Clouds',
				description: 'broken clouds',
				icon: '04d',
			},
		],
		pop: 0.45,
	},
	{
		dt: 1600783200,
		temp: 23.53,
		feels_like: 23.7,
		pressure: 1011,
		humidity: 56,
		dew_point: 14.25,
		clouds: 78,
		visibility: 10000,
		wind_speed: 1.68,
		wind_deg: 21,
		weather: [
			{
				id: 803,
				main: 'Clouds',
				description: 'broken clouds',
				icon: '04d',
			},
		],
		pop: 0.46,
	},
	{
		dt: 1600786800,
		temp: 22.35,
		feels_like: 22.85,
		pressure: 1010,
		humidity: 63,
		dew_point: 14.97,
		clouds: 84,
		visibility: 10000,
		wind_speed: 1.57,
		wind_deg: 46,
		weather: [
			{
				id: 803,
				main: 'Clouds',
				description: 'broken clouds',
				icon: '04d',
			},
		],
		pop: 0.54,
	},
	{
		dt: 1600790400,
		temp: 20.53,
		feels_like: 21.37,
		pressure: 1010,
		humidity: 71,
		dew_point: 15.09,
		clouds: 90,
		visibility: 10000,
		wind_speed: 1.15,
		wind_deg: 57,
		weather: [
			{
				id: 804,
				main: 'Clouds',
				description: 'overcast clouds',
				icon: '04d',
			},
		],
		pop: 0.61,
	},
	{
		dt: 1600794000,
		temp: 18.11,
		feels_like: 18.63,
		pressure: 1010,
		humidity: 77,
		dew_point: 14.02,
		clouds: 90,
		visibility: 10000,
		wind_speed: 1.07,
		wind_deg: 67,
		weather: [
			{
				id: 500,
				main: 'Rain',
				description: 'light rain',
				icon: '10d',
			},
		],
		pop: 0.62,
		rain: {
			'1h': 0.23,
		},
	},
	{
		dt: 1600797600,
		temp: 16.86,
		feels_like: 17.42,
		pressure: 1011,
		humidity: 81,
		dew_point: 13.62,
		clouds: 90,
		visibility: 10000,
		wind_speed: 0.8,
		wind_deg: 107,
		weather: [
			{
				id: 500,
				main: 'Rain',
				description: 'light rain',
				icon: '10n',
			},
		],
		pop: 0.7,
		rain: {
			'1h': 0.61,
		},
	},
	{
		dt: 1600801200,
		temp: 16.68,
		feels_like: 16.94,
		pressure: 1011,
		humidity: 81,
		dew_point: 13.56,
		clouds: 100,
		visibility: 10000,
		wind_speed: 1.15,
		wind_deg: 152,
		weather: [
			{
				id: 500,
				main: 'Rain',
				description: 'light rain',
				icon: '10n',
			},
		],
		pop: 0.67,
		rain: {
			'1h': 0.3,
		},
	},
	{
		dt: 1600804800,
		temp: 16.3,
		feels_like: 16.39,
		pressure: 1010,
		humidity: 84,
		dew_point: 13.62,
		clouds: 100,
		visibility: 10000,
		wind_speed: 1.48,
		wind_deg: 203,
		weather: [
			{
				id: 500,
				main: 'Rain',
				description: 'light rain',
				icon: '10n',
			},
		],
		pop: 0.63,
		rain: {
			'1h': 0.25,
		},
	},
	{
		dt: 1600808400,
		temp: 15.74,
		feels_like: 15.29,
		pressure: 1010,
		humidity: 86,
		dew_point: 13.46,
		clouds: 100,
		visibility: 10000,
		wind_speed: 2.16,
		wind_deg: 231,
		weather: [
			{
				id: 500,
				main: 'Rain',
				description: 'light rain',
				icon: '10n',
			},
		],
		pop: 0.63,
		rain: {
			'1h': 0.14,
		},
	},
	{
		dt: 1600812000,
		temp: 15.36,
		feels_like: 14.63,
		pressure: 1010,
		humidity: 86,
		dew_point: 13.15,
		clouds: 100,
		visibility: 10000,
		wind_speed: 2.39,
		wind_deg: 237,
		weather: [
			{
				id: 804,
				main: 'Clouds',
				description: 'overcast clouds',
				icon: '04n',
			},
		],
		pop: 0.6,
	},
	{
		dt: 1600815600,
		temp: 14.95,
		feels_like: 14.08,
		pressure: 1010,
		humidity: 86,
		dew_point: 12.77,
		clouds: 100,
		visibility: 10000,
		wind_speed: 2.41,
		wind_deg: 242,
		weather: [
			{
				id: 804,
				main: 'Clouds',
				description: 'overcast clouds',
				icon: '04n',
			},
		],
		pop: 0.58,
	},
	{
		dt: 1600819200,
		temp: 14.7,
		feels_like: 13.93,
		pressure: 1010,
		humidity: 86,
		dew_point: 12.48,
		clouds: 100,
		visibility: 10000,
		wind_speed: 2.16,
		wind_deg: 245,
		weather: [
			{
				id: 804,
				main: 'Clouds',
				description: 'overcast clouds',
				icon: '04n',
			},
		],
		pop: 0.62,
	},
];

export const currentPlaceForTest = {
	cord: {
		lat: 48.14,
		lon: 11.58,
	},
	place: {
		id: '2867714',
		city: 'Munich',
	},
	weather: {
		temperature: {
			current: 24.49,
			max: 25,
			min: 23.33,
			feeling: 25.18,
		},
		wind: {
			deg: 21,
			speed: 1.68,
		},
		humidity: 58,
		pressure: 1012,
		status: 'Clouds',
		icon: '04d',
	},
	day: {
		sunrise: 1600750840,
		sunset: 1600794719,
	},
};
