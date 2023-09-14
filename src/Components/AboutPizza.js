//IN CLASS COMPONENT:
import React from 'react';


class AboutPizza extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <h1 className="text-center">About Page</h1>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <img src="pizzaImages/pizza6.jpeg" className="img-fluid" alt="" />
              </div>
              <div className="col-md-6 col-sm-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptates ipsa unde
                    nostrum optio earum alias sint, dolores, pariatur odit dicta cupiditate aperiam vero
                    doloremque, architecto beatae. Et, eos quaerat.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, ducimus asperiores
                    hic perferendis corrupti esse? Facilis animi sequi incidunt, reiciendis distinctio
                    nihil, quasi ducimus beatae eaque ea eos voluptate nesciunt.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ratione itaque
                    eum quisquam, cupiditate non iste, similique culpa excepturi modi eveniet incidunt?
                    Recusandae ex ducimus tempore odio repellendus ut consectetur.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi saepe mollitia
                    repellendus doloribus, dolores at facilis debitis nobis reiciendis repellat, beatae,
                    fugit adipisci corporis ipsam? Unde minima similique quae rerum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eos esse tempora
                    consequuntur similique accusantium reiciendis mollitia est suscipit.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
};


export default  AboutPizza;




//IN FUNCTIONAL COMPONENT:
// import React from 'react';


// const AboutPizza = () => {
//   return (
//     <h1>AboutPizza</h1>
//   )
// };


// export default  AboutPizza;
