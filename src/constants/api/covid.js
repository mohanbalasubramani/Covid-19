const DOMAIN = 'https://coronavirus-19-api.herokuapp.com/';
const TIMELINE_DOMAIN = 'https://thevirustracker.com/';
const TIMELINE_DOMAIN_COUNTRY = 'https://api.thevirustracker.com/';

export const COVID_SUMMARY = DOMAIN + 'countries';

export const COVID_COUNTRY_NAME = DOMAIN + 'countries/{id}';

export const COVID_TIMELINE = TIMELINE_DOMAIN + 'timeline/map-data.json';

export const COVID_TIMELINE_COUNTRY = TIMELINE_DOMAIN_COUNTRY + 'free-api?countryTimeline={countryCode}';