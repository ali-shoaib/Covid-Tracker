import React from 'react';
import Cards from './components/cards/card'
import Chart from './components/chart/chart'
import CountryPicker from './components/countryPicker/countryPicker'
import styles from './App.module.css';
import {FetchData} from './api/index'
import covid from './images/image.png'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }
  async componentDidMount(){
    const fetchedData = await FetchData();
    this.setState({data: fetchedData})
    console.log(fetchedData);
  }

  handleCountryChange = async (country) => {
    const data = await FetchData(country);

    this.setState({ data: data, country: country });
  }

  render() {
    const {data, country} = this.state;
    return (
      <div className={styles.container}>
      <img className={styles.image} src={covid} alt="COVID-19" />
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country}/>
      <footer>Ali Shoaib © 2020</footer>
    </div>
    );
  }
}

export default App;
