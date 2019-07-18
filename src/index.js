import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import Map from './map'
import InfoWindow from './InfoWindow'

import './styles.css'

function App() {
  const createInfoWindow = (e, map) => {
    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div id="infoWindow" />',
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    })
    infoWindow.addListener('domready', e => {
      render(<InfoWindow />, document.getElementById('infoWindow'))
    })
    infoWindow.open(map)
  }

  return (
    <Map
      id="myMap"
      options={{
        center: { lat: 41.0082, lng: 28.9784 },
        zoom: 8
      }}
      onMapLoad={map => {
        const marker = new window.google.maps.Marker({
          position: { lat: 41.0082, lng: 28.9784 },
          map: map,
          title: 'Hello Istanbul!'
        })
        marker.addListener('click', e => {
          createInfoWindow(e, map)
        })
      }}
    />
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
