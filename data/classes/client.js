import uuid from 'uuid';

// TODO: Add the ability to sort clients into groups

export default class Client {
  constructor(params = {}) {
    this.id = params.id || uuid.v4();
    this.flightId = params.flightId || null;
    this.simulatorId = params.simulatorId || null;
    this.station = params.station || null;
    this.loginName = params.loginName || null;
    this.loginState = params.loginState || 'logout';
    this.sentPing = null;
    this.ping = null;
    this.connected = params.connected || false;
    this.class = 'Client';
  }
  connect() {
    this.connected = true;
  }
  disconnect() {
    this.connected = false;
  }
  setPing(ping) {
    this.sentPing = ping;
  }
  setFlight(flightId) {
    this.flightId = flightId;
  }
  setSimulator(simulatorId) {
    this.simulatorId = simulatorId;
  }
  setStation(station) {
    this.station = station;
  }
  login(name) {
    this.loginName = name;
    this.loginState = 'login';
  }
  logout() {
    this.loginName = null;
    this.loginState = 'logout';
  }
  diagnostic() {

  }
  reset() {

  }
  lockScreen() {

  }
  unlockScreen() {

  }
}
