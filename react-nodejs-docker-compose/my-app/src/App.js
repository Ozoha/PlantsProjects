import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Samples } from './components/Samples'
import { DisplayBoard } from './components/DisplayBoard'
import CreateSample from './components/CreateSample'
import { getAllSamples, createSample } from './services/UserService'

class App extends Component {

  state = {
    sample: {},
    samples: [],
    numberOfSamples: 0
  }

  createSample = (e) => {
      createSample(this.state.sample)
        .then(response => {
          console.log(response);
          this.setState({numberOfSamples: this.state.numberOfSamples + 1})
      });
  }

  getAllSamples = () => {
    getAllSamples()
      .then(samples => {
        console.log(samples)
        this.setState({samples: samples, numberOfSamples: samples.length})
      });
  }

  onChangeForm = (e) => {
      let sample = this.state.sample
      if (e.target.name === 'firstname') {
          sample.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          sample.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          sample.email = e.target.value;
      } else if (e.target.name === 'plantname') {
          sample.plantName = e.target.value;
      } else if (e.target.name === 'date') {
          sample.date = e.target.value;
      } else if (e.target.name === 'setnumber') {
          sample.setNumber = e.target.value;
      } else if (e.target.name === 'plantphoto') {
          sample.plantPhoto = e.target.value;
      } else if (e.target.name === 'airtemperator') {
          sample.airTemperator = e.target.value;
      } else if (e.target.name === 'googlemapphoto') {
          sample.googleMapPhoto = e.target.value;
      } else if (e.target.name === 'longitude') {
          sample.longitude = e.target.value;
      } else if (e.target.name === 'latitude') {
          sample.latitude = e.target.value;
      } else if (e.target.name === 'userinfo') {
          sample.userInfo = e.target.value;
      }


      this.setState({sample})
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateSample
                  sample={this.state.sample}
                  onChangeForm={this.onChangeForm}
                  createSample={this.createSample}
                  >
                </CreateSample>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfSamples={this.state.numberOfSamples}
                  getAllSamples={this.getAllSamples}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Samples samples={this.state.samples}></Samples>
        </div>
      </div>
    );
  }
}

export default App;
