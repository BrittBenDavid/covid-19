// import bender
import React from 'react';
import {Component} from 'react';

// import component
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicer from './components/CountryPicer/CountryPicer';

// import api and styles
import styles from './App.module.css';
import {fetchData} from './api';

import coronaImage from './images/covid.png';

class App extends Component{

    state = {data:{},country: '',};

    async componentDidMount () {
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
    }

    //4    
    handleCountryChange = async (country) => {
        console.log(fetchData);
        console.log(country);
        //fetch the data
        const fetchedData = await fetchData(country);

        //set the state
        this.setState({data: fetchedData, country: country});
    }

    render () {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt='COVID-19'/>
                <br>
                <h4>Covid-19 Status in the world</h4>
                <h5>Britt Ben-David |  CoronaProject</h5>
                <Cards data={data} />
                <CountryPicer handleCountryChange={this.handleCountryChange}/>{/*4*/}
                <Chart data={data} confirmed={data.confirmed} recoverd={data.recoverd} deaths={data.deaths} lastUpdate={data.lastUpdate} country={country}/>
            </div>
        );
    }
}

export default App;