import React from 'react';
import './VerticalSlider.css';
import DetailsThumb from './DetailsThumb';

class VerticalSlider extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "src": [
            "https://lh3.googleusercontent.com/eeI2-wwf1kOi5mbGtgarrpOMaEV7qoLUdhND7n2PeLQFFgbHwJG7ycIzUCZyUVdE_yY8LA=s85",
            "https://lh3.googleusercontent.com/vG-ZAvnHR9A6qgdcJlczrQd5JsS4jhAUchahWh9JyOV6QjQMeWAdJLSpqDrNWeHwlwAtJw=s85",
            "https://lh3.googleusercontent.com/2KbFpxwbM6DhGsiiJ70B7wq3lnralpkp1ECUlfaw4Bh_K7LM_KHM0oVRgKuQOs0b-C5N=s85",
            "https://lh3.googleusercontent.com/vG-ZAvnHR9A6qgdcJlczrQd5JsS4jhAUchahWh9JyOV6QjQMeWAdJLSpqDrNWeHwlwAtJw=s85"
          ],
       
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="box">
                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
              </div>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default VerticalSlider;
