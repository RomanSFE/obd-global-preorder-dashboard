import React, { Component } from 'react'

export default class DashBannerActiveBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          SelectedImage: <img src={require('../../../assets/women-fas-cat-7.png')} alt=""/> || "All"
        };
        
        this.updateImage = this.updateImage.bind(this);
      }
      updateImage(image) {
        this.setState(function() {
          return {
            SelectedImage: image
          }
        });
      }
        
      render() {
        var images = [<img src={require('../../../assets/women-fas-cat-7.png')} alt=""/>, <img src={require('../../../assets/women-fas-cat-8.png')} alt=""/>, <img src={require('../../../assets/women-fas-cat-6.png')} alt=""/>];
    return (
      <>
      <div className="dash-banner-active-box">
        <ul>
            <p>Selected Item: {this.state.SelectedImage}</p>
            {images.map(function(image) {
            return <li
                        style={image === this.state.SelectedImage ? {color: 'red', border: '1px solid red',} : null}
                        onClick = {this.updateImage.bind(null, image)}
                        >{image}
                    </li> 
            },this)}
        </ul>
      </div>
      </>
    )
  }
}
