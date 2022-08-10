// from https://api.teleport.org/api/cities/geonameid:6324729
export const cityFactsData = {
  _links: {
    "city:admin1_division": {
      href: "https://api.teleport.org/api/countries/iso_alpha2:CA/admin1_divisions/geonames:07/",
      name: "Nova Scotia",
    },
    "city:alternate-names": {
      href: "https://api.teleport.org/api/cities/geonameid:6324729/alternate_names/",
    },
    "city:country": {
      href: "https://api.teleport.org/api/countries/iso_alpha2:CA/",
      name: "Canada",
    },
    "city:timezone": {
      href: "https://api.teleport.org/api/timezones/iana:America%2FHalifax/",
      name: "America/Halifax",
    },
    "city:urban_area": {
      href: "https://api.teleport.org/api/urban_areas/slug:halifax/",
      name: "Halifax",
    },
    curies: [
      {
        href: "https://developers.teleport.org/api/resources/Location/#!/relations/{rel}/",
        name: "location",
        templated: true,
      },
      {
        href: "https://developers.teleport.org/api/resources/City/#!/relations/{rel}/",
        name: "city",
        templated: true,
      },
      {
        href: "https://developers.teleport.org/api/resources/UrbanArea/#!/relations/{rel}/",
        name: "ua",
        templated: true,
      },
      {
        href: "https://developers.teleport.org/api/resources/Country/#!/relations/{rel}/",
        name: "country",
        templated: true,
      },
      {
        href: "https://developers.teleport.org/api/resources/Admin1Division/#!/relations/{rel}/",
        name: "a1",
        templated: true,
      },
      {
        href: "https://developers.teleport.org/api/resources/Timezone/#!/relations/{rel}/",
        name: "tz",
        templated: true,
      },
    ],
    self: {
      href: "https://api.teleport.org/api/cities/geonameid:6324729/",
    },
  },
  full_name: "Halifax, Nova Scotia, Canada",
  geoname_id: 6324729,
  location: {
    geohash: "dxfvcr7vzuwr11232jws",
    latlon: {
      latitude: 44.64533,
      longitude: -63.57239,
    },
  },
  name: "Halifax",
  population: 359111,
};

// from https://api.teleport.org/api/urban_areas/slug:halifax/scores/
export const QoLData = {
  _links: {
    curies: [
      {
        href: "https://developers.teleport.org/api/resources/Location/#!/relations/{rel}/",
        name: "location",
        templated: true,
      },
      {
        href: "https://developers.teleport.org/api/resources/City/#!/relations/{rel}/",
        name: "city",
        templated: true,
      },
      {
        href: "https://developers.teleport.org/api/resources/UrbanArea/#!/relations/{rel}/",
        name: "ua",
        templated: true,
      },
      {
        href: "https://developers.teleport.org/api/resources/Country/#!/relations/{rel}/",
        name: "country",
        templated: true,
      },
      {
        href: "https://developers.teleport.org/api/resources/Admin1Division/#!/relations/{rel}/",
        name: "a1",
        templated: true,
      },
      {
        href: "https://developers.teleport.org/api/resources/Timezone/#!/relations/{rel}/",
        name: "tz",
        templated: true,
      },
    ],
    self: {
      href: "https://api.teleport.org/api/urban_areas/slug:halifax/scores/",
    },
  },
  categories: [
    {
      color: "#f3c32c",
      name: "Housing",
      score_out_of_10: 6.895000000000001,
    },
    {
      color: "#f3d630",
      name: "Cost of Living",
      score_out_of_10: 4.9430000000000005,
    },
    {
      color: "#f4eb33",
      name: "Startups",
      score_out_of_10: 3.624,
    },
    {
      color: "#d2ed31",
      name: "Venture Capital",
      score_out_of_10: 2.2840000000000003,
    },
    {
      color: "#7adc29",
      name: "Travel Connectivity",
      score_out_of_10: 1.5699999999999998,
    },
    {
      color: "#36cc24",
      name: "Commute",
      score_out_of_10: 5.402750000000001,
    },
    {
      color: "#19ad51",
      name: "Business Freedom",
      score_out_of_10: 8.966,
    },
    {
      color: "#0d6999",
      name: "Safety",
      score_out_of_10: 7.188500000000001,
    },
    {
      color: "#051fa5",
      name: "Healthcare",
      score_out_of_10: 8.67,
    },
    {
      color: "#150e78",
      name: "Education",
      score_out_of_10: 5.42,
    },
    {
      color: "#3d14a4",
      name: "Environmental Quality",
      score_out_of_10: 7.618499999999999,
    },
    {
      color: "#5c14a1",
      name: "Economy",
      score_out_of_10: 5.8405000000000005,
    },
    {
      color: "#88149f",
      name: "Taxation",
      score_out_of_10: 7.2745000000000015,
    },
    {
      color: "#b9117d",
      name: "Internet Access",
      score_out_of_10: 6.123500000000001,
    },
    {
      color: "#d10d54",
      name: "Leisure & Culture",
      score_out_of_10: 3.942,
    },
    {
      color: "#e70c26",
      name: "Tolerance",
      score_out_of_10: 7.853499999999999,
    },
    {
      color: "#f1351b",
      name: "Outdoors",
      score_out_of_10: 4.023,
    },
  ],
  summary:
    "<p>Halifax, Canada, is among the top cities with a <b>free business environment</b>. According to our city rankings, this is a good place to live with high ratings in <b>housing</b>, <b>safety</b> and <b>healthcare</b>. </p> ",
  teleport_city_score: 60.742027027027035,
};

// from Halifax search within app network response
export const eventsData = {
  _embedded: {
    events: [
      {
        name: "HFX Wanderers FC vs. Valour FC",
        date: "2022-08-13",
        image:
          "https://s1.ticketm.net/dam/a/a36/d81f3ba7-d2db-4fa9-8536-a2d6c18b3a36_978751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        url: "https://www.ticketmaster.ca/hfx-wanderers-fc-vs-valour-fc-halifax-nova-scotia-08-13-2022/event/31005C86AD371F96",
      },
      {
        name: "HFX Wanderers FC vs. Pacific FC",
        date: "2022-08-20",
        image:
          "https://s1.ticketm.net/dam/a/a36/d81f3ba7-d2db-4fa9-8536-a2d6c18b3a36_978751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        url: "https://www.ticketmaster.ca/hfx-wanderers-fc-vs-pacific-fc-halifax-nova-scotia-08-20-2022/event/31005C86AD401FCD",
      },
      {
        name: "Canada Women's v. Wales",
        date: "2022-08-27",
        image:
          "https://s1.ticketm.net/dam/c/09f/1e0da6a5-e815-4153-bc9d-31fb4acd009f_105691_RETINA_LANDSCAPE_16_9.jpg",
        url: "https://www.ticketmaster.ca/canada-womens-v-wales-halifax-nova-scotia-08-27-2022/event/31005CB9B08F3222",
      },
      {
        name: "Metric",
        date: "2022-09-01",
        image:
          "https://s1.ticketm.net/dam/a/e12/8bb2caba-afea-4b7e-b39c-7ca819c91e12_1741251_ARTIST_PAGE_3_2.jpg",
        url: "https://www.ticketmaster.com/event/Z7r9jZ1AdoS4A",
      },
      {
        name: "Metric - Official Platinum",
        date: "2022-09-01",
        image:
          "https://s1.ticketm.net/dam/a/e12/8bb2caba-afea-4b7e-b39c-7ca819c91e12_1741251_ARTIST_PAGE_3_2.jpg",
        url: "https://www.ticketmaster.ca/metric-official-platinum-halifax-nova-scotia-09-01-2022/event/31005CA21A184839",
      },
      {
        name: "Metric - The Doomscroller Tour",
        date: "2022-09-01",
        image:
          "https://s1.ticketm.net/dam/a/e12/8bb2caba-afea-4b7e-b39c-7ca819c91e12_1741251_ARTIST_PAGE_3_2.jpg",
        url: "https://tickets.artscentre.dal.ca/online/",
      },
      {
        name: "Metric",
        date: "2022-09-02",
        image:
          "https://s1.ticketm.net/dam/a/e12/8bb2caba-afea-4b7e-b39c-7ca819c91e12_1741251_ARTIST_PAGE_3_2.jpg",
        url: "https://www.ticketmaster.com/event/Z7r9jZ1AdoPpA",
      },
      {
        name: "Metric - Official Platinum",
        date: "2022-09-02",
        image:
          "https://s1.ticketm.net/dam/a/e12/8bb2caba-afea-4b7e-b39c-7ca819c91e12_1741251_ARTIST_PAGE_3_2.jpg",
        url: "https://www.ticketmaster.ca/metric-official-platinum-halifax-nova-scotia-09-02-2022/event/31005CA21D7E4909",
      },
    ],
  },
};

// Current weather for Raleigh
export const currentWeatherData = {
  data: [
    {
      wind_cdir: "S",
      rh: 79,
      pod: "d",
      lon: -78.64,
      pres: 1003.5,
      timezone: "America/New_York",
      ob_time: "2022-08-09 23:20",
      country_code: "US",
      clouds: 42,
      ts: 1660087200,
      solar_rad: 166.8,
      state_code: "NC",
      city_name: "Raleigh",
      wind_spd: 3.6,
      slp: 1015.2,
      wind_cdir_full: "south",
      sunrise: "10:29",
      app_temp: 32.5,
      dni: 537.93,
      vis: 16,
      sources: ["1327W"],
      h_angle: 77.1,
      dewpt: 24.2,
      snow: 0,
      aqi: 31,
      dhi: 59.91,
      wind_dir: 170,
      elev_angle: 13.08,
      ghi: 174.1,
      precip: 0,
      sunset: "00:11",
      lat: 35.78,
      uv: 1.34928,
      datetime: "2022-08-09:23",
      temp: 28.2,
      weather: { icon: "c02d", code: 802, description: "Scattered clouds" },
      station: "1327W",
    },
  ],
  count: 1,
};

module.exports = { eventsData, QoLData, currentWeatherData };
