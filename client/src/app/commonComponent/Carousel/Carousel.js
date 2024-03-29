// import React from 'react';
// import ReactDOM from "react-dom";
// import './Carousel.css'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import Item from './Item';

// class Carousel extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             items: this.props.items,
//             active: this.props.active,
//             direction: ''
//         }
//         this.rightClick = this.moveRight.bind(this)
//         this.leftClick = this.moveLeft.bind(this)
//     }

//     generateItems() {
//         var items = []
//         var level

//         for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
//             var index = i
//             if (i < 0) {
//                 index = this.state.items.length + i
//             } else if (i >= this.state.items.length) {
//                 index = i % this.state.items.length
//             }
//             level = this.state.active - i
//             items.push(<Item key={index} id={this.state.items[index]} level={level} />)
//         }
//         return items
//     }

//     moveLeft() {
//         var newActive = this.state.active
//         newActive--
//         this.setState({
//             active: newActive < 0 ? this.state.items.length - 1 : newActive,
//             direction: 'left'
//         })
//     }

//     moveRight() {
//         var newActive = this.state.active
//         this.setState({
//             active: (newActive + 1) % this.state.items.length,
//             direction: 'right'
//         })
//     }

//     render() {
//         return(
//             <div id="carousel" className="noselect">
//                 <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
//                 <ReactCSSTransitionGroup
//                     transitionName={this.state.direction}>
//                     {this.generateItems()}
//                 </ReactCSSTransitionGroup>
//                 <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
//             </div>
//         )
//     }
// }

// export default Carousel;

import React from "react";
import Coverflow from "react-coverflow";
import { ImageUrl, VideoUrl } from "../../utils/url";

const Carousel = () => {
  const fn = function() {
    /* do your action */
  };
  return (
    <Coverflow
      width="1100"
      height="500"
      displayQuantityOfSide={2}
      enableScroll={false}
      clickable={true}
      active={0}
  
    >
      <div
        onClick={() => fn()}
        onKeyDown={() => fn()}
        role="menuitem"
        tabIndex="0"
      >
        <img
          src={`${ImageUrl("photo(2).jpg")}`}
          alt="title or description"
          style={{
            display: "block",
            width: "100%"
          }}
        />
      </div>
      <img
        src={`${ImageUrl("photo(2).jpg")}`}
        alt="title or description"
      
      />
      <img
        src={`${ImageUrl("photo(2).jpg")}`}
        alt="title or description"
      
      />
      <img
        src={`${ImageUrl("photo(2).jpg")}`}
        alt="title or description"
      
      />
      <img
        src={`${ImageUrl("photo(2).jpg")}`}
        alt="title or description"
      
      />
      <img
        src={`${ImageUrl("photo(2).jpg")}`}
        alt="title or description"
      
      />
    </Coverflow>
  );
};

export default Carousel;
