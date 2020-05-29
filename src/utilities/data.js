export const topTenCountry = [
    { country: 'USA', code: 'US' },
    { country: 'Brazil', code: 'BR' },
    { country: 'Russia', code: 'RU' }, 
    { country: 'UK', code: 'UK' },
    { country: 'Italy', code: 'IT' },
    { country: 'France', code: 'FR' },
    { country: 'Germany', code: 'DE' },
    { country: 'India', code: 'IN' },
    { country: 'Iran', code: 'IR' },
    { country: 'Peru', code: 'PE' },
    { country: 'Cananda', code: 'CA' },
    { country: 'China', code: 'CN' },
    { country: 'Mexico', code: 'MX' }
];

export const cases = ['new_daily_cases', 'new_daily_deaths', 'total_recoveries', 'total_deaths', 'total_cases'];

export const randomColor = () => ("#"+((1<<24)*Math.random()|0).toString(16));