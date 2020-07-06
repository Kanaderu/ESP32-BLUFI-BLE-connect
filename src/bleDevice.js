import React from 'react';


class Welcome extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// class GenericDevice {
//
//   constructor() {
//     this.device = null;
//     this.onDisconnected = this.onDisconnected.bind(this);
//   }
//
//   request() {
//     let options = {
//       "filters": [{
//         "name": "BLUFI_DEVICE"
//       }],
//       "optionalServices": ["device_information"]
//     };
//     return navigator.bluetooth.requestDevice(options)
//     .then(device => {
//       this.device = device;
//       this.device.addEventListener('gattserverdisconnected', this.onDisconnected);
//     });
//   }
//
//   connect() {
//     if (!this.device) {
//       return Promise.reject('Device is not connected.');
//     }
//     return this.device.gatt.connect();
//   }
//
//   readManufacturername() {
//     return this.device.gatt.getPrimaryService("device_information")
//     .then(service => service.getCharacteristic("manufacturer_name_string"))
//     .then(characteristic => characteristic.readValue());
//   }
//
//   disconnect() {
//     if (!this.device) {
//       return Promise.reject('Device is not connected.');
//     }
//     return this.device.gatt.disconnect();
//   }
//
//   onDisconnected() {
//     console.log('Device is disconnected.');
//   }
// }
//
// var genericDevice = new GenericDevice();
//
// document.querySelector('button').addEventListener('click', event => {
//   genericDevice.request()
//   .then(_ => genericDevice.connect())
//   .then(_ => { /* Do something with genericDevice... */})
//   .catch(error => { console.log(error) });
// });
