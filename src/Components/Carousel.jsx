//IN FUNCTIONAL COMPONENT:
import React from 'react';


const Carousel = () => {
  return (
    <div>
      <div className="container">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="pizzaImages/Pizza 1.jpg" height="500vh" className="d-block w-100" alt="..."></img>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="pizzaImages/Pizza 2.jpg" height="500vh" className="d-block w-100" alt="..."></img>
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="pizzaImages/Pizza 3.jpg" height="500vh" className="d-block w-100" alt="..."></img>
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
};


export default  Carousel;




//IN CLASS COMPONENT:
// import React from 'react';


// class Carousel extends React.Component {
//   render() {
//     return (
//       <h1>Carousel<h1/>
//     )
//   }
// };


// export default  Carousel;