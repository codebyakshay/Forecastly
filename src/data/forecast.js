const forecast = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1733238000,
      main: {
        temp: 297.22,
        feels_like: 297.72,
        temp_min: 296.73,
        temp_max: 297.22,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 980,
        humidity: 78,
        temp_kf: 0.49,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 2.69,
        deg: 109,
        gust: 3.95,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-03 15:00:00',
    },
  ],
};
