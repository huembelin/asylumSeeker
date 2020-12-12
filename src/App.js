import React from 'react';
import './App.css';
import data from './data/data.json';
import Select from 'react-select';
import profile from './data/profile.png';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Button} from 'react-bootstrap';

let options = [];

for (let i = 0; i < data.length; i++) {
  options.push({ value: data[i]['Dokument'], label: data[i]['Dokument'] })
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidate: '-',
      name: '-',
      birth: '-',
      einreise: '-',
      status: '-',
      availability: '-',
      summary: '-',
      end: '-',
      prog_1: 0,
      prog_2: 0,
      prog_3: 0,
      prog_4: 0
    };
  }

  randomNumber() {
    return Math.floor(Math.random() * 101)
  }

  candidateChangeHandler(candidate) {
    let document;
    for (let i = 0; i < data.length; i++) {
      if (data[i]['Dokument'] == candidate.label) {
        document = data[i]
      }
    }

    this.setState({
      candidate: document['Dokument'],
      birth: document['Geburtsdatum'],
      einreise: document['Einreise'],
      status: document['Aufenthaltsstatus'],
      availability: document['Verfügbarkeit'],
      summary: document['Kurzzusammen- fassung der Si- tuation (Ist-Zu- stand)'],
      stand: document['Zivilstand'],
      kids: document['Kinder (Anzahl, Alter)'],
      end: document['Ende Zuständigkeit'],
      prog_1: this.randomNumber(),
      prog_2: this.randomNumber(),
      prog_3: this.randomNumber(),
      prog_4: this.randomNumber()
    });
    console.log(this.state.end)
  }

  render() {
    return (
      <div className="container">
        <div className="row marg">
          <div className="col-md-1"></div>
          <div className="col-md-10 center-bar">
            <div className="text-center title-container-big">
              <h1>Asylum Seekers' Profile Visualization</h1>
            </div>
            <div className="selector">
              <Select className="input-select" placeholder="Wähle Kandidat*in aus" onChange={this.candidateChangeHandler.bind(this)} options={options} />
            </div>
            <div className="container">
              <div className="row marg">
                <div className="title-container"><h5>Aktuellste Zusammenfassung</h5></div>
                <div className="col-md-12">
                  {this.state.summary}
                </div>
              </div>
              <div className="row marg">
                <div className="title-container"><h5>Persönliche Daten</h5></div>

                <div className="col-md-5">
                  <div className="col-md-12 box not-known">
                    <p>N-Nr.:</p>
                    <p className="no-marg"><b>-</b></p>
                  </div>
                  <div className="col-md-12 box">
                    <p>Geburtsdatum:</p>
                    <p className="no-marg">{this.state.birth}</p></div>
                  <div className="col-md-12 box not-known">
                    <p>Name Vorname</p>
                    <p className="no-marg">-</p>
                  </div>
                  <div className="col-md-12 box not-known">
                    <p>Adresse:</p>
                    <p className="no-marg">-</p>
                  </div>
                  <div className="col-md-12 box not-known">
                    <p>Mail:</p>
                    <p className="no-marg">-</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col-md-12 box">
                    <p>Einreisedatum:</p>
                    <p className="no-marg">{this.state.einreise}</p>
                  </div>
                  <div className="col-md-12 box">
                    <p>Aufenthaltsstatus:</p>
                    <p className="no-marg">{this.state.status}</p>
                  </div>
                  <div className="col-md-12 box not-known">
                    <p>Ende Zuständigkeit:</p>
                    <p className="no-marg">{this.state.end}</p>
                  </div>
                  <div className="col-md-12 box">
                    <p>Verfügbarkeit:</p>
                    <p className="no-marg">{this.state.availability}</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className='col-md-12'>
                    <img src={profile} alt="profile" />
                  </div>
                  <div className='col-md-12 text-center'>
                    <p>Zivilstand: {this.state.stand}</p>
                    <p>Kinder: {this.state.kids}</p>
                  </div>
                </div>
              </div>
              <div className="row marg">
                <div className="title-container"><h5>Integrationsmodell</h5></div>
                <div className="col-md-12 text-center">
                  <span className="badge badge-secondary spa"><h4>Ausbildung</h4></span>
                  <span className="badge badge-secondary spa"><h4>Arbeit</h4></span>
                  <span className="badge badge-success spa"><h4>Soziale Integration</h4></span>
                </div>
              </div>
              <div className="row marg">
                <div className="title-container"><h5>Individuelle Integrationsziele</h5></div>
                <div className="col-md-12">

                  <div className="row marg">
                    <div className="col-md-3"><Button onClick={() => {alert('Weiterleitung zu Details bzgl. Sprache noch nicht implementiert');}} variant="success" size="lg" block><h6>Sprache</h6></Button></div>
                    <div className="col-md-7"><ProgressBar striped variant="success" now={this.state.prog_1} /></div>
                  </div>
                  <div className="row marg">
                    <div className="col-md-3"><Button onClick={() => {alert('Weiterleitung zu Details bzgl. Bildung noch nicht implementiert');}} variant="info" size="lg" block><h6>Bildung</h6></Button></div>
                    <div className="col-md-7"><ProgressBar striped variant="info" now={this.state.prog_2} /></div>
                  </div>
                  <div className="row marg">
                    <div className="col-md-3"><Button onClick={() => {alert('Weiterleitung zu Details bzgl. Arbeit/Beschäftigung noch nicht implementiert');}}variant="warning" size="lg" block><h6>Arbeit/Beschäftigung</h6></Button></div>
                    <div className="col-md-7"><ProgressBar striped variant="warning" now={this.state.prog_3} /></div>
                  </div>
                  <div className="row marg">
                    <div className="col-md-3"><Button onClick={() => {alert('Weiterleitung zu Details bzgl. Soziales noch nicht implementiert');}} variant="danger" size="lg" block><h6>Soziales</h6></Button></div>
                    <div className="col-md-7"><ProgressBar striped variant="danger" now={this.state.prog_4} /></div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <Dashboard />
  );
}

export default App;