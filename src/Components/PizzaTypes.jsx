//IN FUNCTIONAL COMPONENT:
import React from 'react';
import Items from './Items';


const PizzaTypes = () => {
  return (
    <div>
      <section>
        <div className="container">
          <h1 className="text-center">Pizza Types</h1>
        </div>
      </section>
      {/* <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="card" style={{width: '17rem'}}>
                <img src="pizzaImages/pizza5.jpeg" height="200vh" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Cheezy Pizza</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum aliquid voluptas, distinctio dolore praesentium commodi, eveniet dolor labore modi, eaque dolorum veritatis? Quo at commodi, harum suscipit quibusdam voluptates.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card" style={{width: "17rem"}}>
                <img src="pizzaImages/pizza7.jpeg" height="200vh" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Pepperoni Pizza</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, minus? Praesentium maiores consectetur accusantium dolorum quasi sunt perspiciatis quibusdam adipisci iste, pariatur quisquam, minima tenetur maxime dolore</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card" style={{width:" 17rem"}}>
                <img src="pizzaImages/pizza8.jpeg" height="200vh" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Vegetable Pizza</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo corrupti necessitatibus sapiente ipsam accusantium animi dolores rem explicabo! Explicabo quam dolorum ut possimus delectus porro atque saepe eos iure?</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card" style={{width: '17rem'}}>
                <img src="pizzaImages/pizza9.jpeg" height="200vh" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Family Pizza</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad soluta suscipit eaque itaque excepturi. Aliquid sapiente mollitia similique nobis voluptate odit sunt autem? Deleniti assumenda veniam, consequuntur tempora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div id='food' className='container'>
        < Items imgSrc="pizzaImages/pizza5.jpeg" heading="Cheezy Pizza" paragraph1="Some quick example text to build on the card title and make up the bulk of the card's content." paragraph2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad soluta suscipit eaque itaque excepturi. Aliquid sapiente mollitia similique nobis voluptate odit sunt autem? Deleniti assumenda veniam, consequuntur tempora"/>
        < Items imgSrc="pizzaImages/pizza7.jpeg" heading="Pepperoni Pizza" paragraph1="Some quick example text to build on the card title and make up the bulk of the card's content." paragraph2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad soluta suscipit eaque itaque excepturi. Aliquid sapiente mollitia similique nobis voluptate odit sunt autem? Deleniti assumenda veniam, consequuntur tempora"/>
        < Items imgSrc="pizzaImages/pizza8.jpeg" heading="Vegetable Pizza" paragraph1="Some quick example text to build on the card title and make up the bulk of the card's content." paragraph2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad soluta suscipit eaque itaque excepturi. Aliquid sapiente mollitia similique nobis voluptate odit sunt autem? Deleniti assumenda veniam, consequuntur tempora"/>
        < Items imgSrc="pizzaImages/pizza9.jpeg" heading="Family Pizza" paragraph1="Some quick example text to build on the card title and make up the bulk of the card's content." paragraph2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad soluta suscipit eaque itaque excepturi. Aliquid sapiente mollitia similique nobis voluptate odit sunt autem? Deleniti assumenda veniam, consequuntur tempora"/>
      </div>
    </div>
  )
};


export default  PizzaTypes;




//IN CLASS COMPONENT:
// import React from 'react';
// import Items from './Items';


// class PizzaTypes extends React.Component {
//   render() {
//     return (
//       <div>
            // <h1>PizzaTypes</h1>
            // < Items />
            // < Items />
            // < Items />
            // < Items />
//       </div>
//     )
//   }
// };


// export default  PizzaTypes;