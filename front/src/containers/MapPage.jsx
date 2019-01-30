import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Alert } from "reactstrap";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { updateEventsList } from "../actions/index";
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';
import Event from "../components/Event";
import { fetchEvents } from "../actions/index";
import L from "leaflet";
import Buttons from "./Buttons";
import HeadNoBack from "../components/headNoBack";


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

var myIcon = L.icon({
  iconUrl:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",
  iconSize: [25, 40],
  iconAnchor: [12.5, 40],
  popupAnchor: [0, -40]
});

var iconGreen = new L.Icon({
  iconUrl: require("../assets/map-default-green.png"),
  iconRetinaUrl: require("../assets/map-default-green.png"),
  iconSize: [45, 35],
  popupAnchor: [0, -10]
});

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location_latitude: 45.420986,
      location_longitude: 4.385753,
      zoom: 12,
      visible: true,
      alert: false,
      loader: false,
      currentEvent: null
    };
    // onDismiss pour fermeture du message d'erreur de non géolocalisation
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  componentDidMount() {
    // geolocalisation avec plugins de cordova pour autoriser la géolocalisation
    window.cordova.plugins.diagnostic.isLocationAuthorized((authorized) => {
      if (!authorized) {
        window.cordova.plugins.diagnostic.requestLocationAuthorization((status) => {
          this.getPosition();
        })
      } else {
        this.getPosition();
      }
    })
  }

  getPosition() {
    // récupère la localisation
    this.setState({ loader: true }) // spinner actif dès affichage de la map
    navigator.geolocation.getCurrentPosition(position => {
      // si les coordonnées sont trouvées le spinner passe en false
      this.setState({
        location_latitude: position.coords.latitude,
        location_longitude: position.coords.longitude,
        loader: false,
      });
    }, error => {
      // si les cordonnées Gps ne sont pas trouvées alors le spinner passe en false et alerte en true
      this.setState({
        loader: false,
        // Alerte prend ce message d'erreur
        alert: <div style={{ textAlign: 'center' }}> Impossible de récupérer votre position. Vérifier vos paramètres GPS!</div>
      })
    }, {
        // impose un temps de recherche de la géolocalisation
        timeout: 10000,
        enableHighAccuracy: false
      });
  }


  componentWillMount() {
    this.props.functionCallDispatchFetchEvents(this.props.activeEvents);
  }

  componentWillReceiveProps(newprops) {
    if (this.props.activeEvents !== newprops.activeEvents)
      this.props.functionCallDispatchFetchEvents(newprops.activeEvents);
  }

  render() {
    const position = [this.state.location_latitude, this.state.location_longitude];

    return (
      <div>
        <Container className="container-eventDetails">
          <HeadNoBack />
          <Buttons />
          {/*affiche le spinner suivant état de la condition et de son State */}
          {this.state.loader ?
            <div className='sweet-loading'>
              <ClipLoader
                css={override}
                sizeUnit={"px"}
                size={20}
                color={'#4b4b4b'}
                loading={this.state.loading}

              />
            </div>
            :
            " "}

          {/*affiche l'alerte suivant état de la condition et si la geolocalisation à été trouvée */}
          {this.state.alert ?
            <div>
              <Alert color="dark" style={{ height: '25vmin', width: '92vmin', marginTop: '40vmin', position: 'fixed', zIndex: '9999' }} isOpen={this.state.visible} toggle={this.onDismiss}>
                {this.state.alert}
              </Alert>
            </div> :
            " "}

          <Map className="map" center={position} zoom={this.state.zoom}>

            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position} icon={myIcon}>
              <Popup> vous êtes ici </Popup>
            </Marker>

            {this.props.activeEvents.events.map((event, index) => {
              if (event.location_latitude && event.location_longitude)
                return (
                  <Marker position={[event.location_latitude, event.location_longitude]} icon={iconGreen} onClick={() => this.setState({ currentEvent: event })}>
                  </Marker>
                );
              else return "";
            })}
          </Map>
        </Container>
        {this.state.currentEvent ?
          <div className="eventPopup">
            <button onClick={() => this.setState({ currentEvent: null })}>Fermer</button>
            <Event event={this.state.currentEvent} />
          </div>
          : ""
        }
      </div>
    );
  }
}

const mapStateToProps = ({ activeEvents, filterEvents }) => {
  return { activeEvents, filterEvents };
};

const mapDispatchToProps = dispatch => {
  return {
    functionCallDispatchFetchEvents: filter => dispatch(fetchEvents(filter)),
    addEvent: event => {
      dispatch(updateEventsList(event));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapPage);
