//IN FUNCTIONAL COMPONENT:
import React from 'react';


const Items = (props) => {
  return (
    <div>
      {/* <div className="row flex"> */}
        <div className="col-md-3 col-sm-6 ">
          <div className="card " style={{width: '17rem'}}>
            <img src={props.imgSrc} height="200vh" className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title">{props.heading}</h5>
              <p className="card-text">{props.paragraph1}</p>
              <p>{props.paragraph2}</p>
            </div>
          </div>
        </div>
      </div>
    // </div>
  )
};


export default  Items;




//IN CLASS COMPONENT:
// import React from 'react';


// class Items extends React.Component {
//   render() {
//     return (
//       <h1>Items<h1/>
//     )
//   }
// };


// export default  Items;