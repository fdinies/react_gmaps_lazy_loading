import React, { Component } from 'react'

class Map extends Component {
  constructor(props) {
    super(props)
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const { id, options, onMapLoad } = this.props

    const map = new window.google.maps.Map(
      document.getElementById(id),
      options
    )
    onMapLoad(map)
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script')
      s.type = 'text/javascript'
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo`
      var x = document.getElementsByTagName('script')[0]
      x.parentNode.insertBefore(s, x)
      // Below is important.
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    const { id } = this.props
    return <div style={{ width: 1200, height: 900 }} id={id} />
  }
}

export default Map
