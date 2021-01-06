import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';



export const fetchData = async (country) => {
    let changeableUrl = url;

    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const {data} = await axios.get(changeableUrl);
        
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }
        console.log(modifiedData);
        return modifiedData;
    }
    catch (error) {
        console.log(error);
    }
}


export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        console.log(modifiedData);
        return modifiedData;
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries},} = await axios.get(`${url}/countries`);
        const covidCountries = countries.map((country) => country.name);
        console.log(covidCountries);
        return covidCountries;
    }
    catch (error) {
        console.log(error);
    }
}



