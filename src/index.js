let List = [{type: "car", name: "car"}, {type: "train", name: "train"}];
debugger;
      for (let i = List.length - 1; i >= 0; i--) {
        const {type} = List[i];
        if (type === "car") {
          List.splice(i, 1);
        }
      }
      console.log(List, "List");
// const price = 300;
// const rooms = [
//   {
//     price: 600
//   },
//   {
//     price: 400
//   },
//   {
//     price: 500
//   }
// ]
// if (rooms.every(item => price < item.price)) {
//   console.log("is the lowest price");
// } else {
//   console.log("not")
// }
// const element = <h1>Hello, world</h1>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// 'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// const domContainer = document.querySelector('#root');
// ReactDOM.render(e(LikeButton), domContainer);
