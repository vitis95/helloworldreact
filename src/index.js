import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {formatName(user)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;   
// }

// const user = {
//     firstName: 'Ivan',
//     lastName: 'De Vita'
// };

// const element = (
//     <h1>
//         Hello, {formatName(user)}!
//     </h1>
// );



//const name = "Ivan De Vita"
//const element = <h1> Hello, {name}</h1>
/*ReactDOM.render(
    element,
    document.getElementById('root')
)*/

// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));

//  function tick() {
//      const element = (
//          <div>
//              <h1>HELLO WORLD!</h1>
//              <h2>It is {new Date().toLocaleTimeString()}.</h2>
//          </div>
//      );
//      ReactDOM.render(element, document.getElementById('root'));
//  }

// setInterval(tick, 1000); // ogni secondo viene chiamata la callback tick - che a sua volta chiama la funzione ReactDOM.render()



// function ComponenteEsempio(props) {
//     return <h1> CIAO, {props.nome}</h1>;
// }

// // const elemento = <Ciao nome="Ivan" />;
// // ReactDOM.render(
// //     elemento,
// //     document.getElementById('root')
// // );



// function Funzione() {
//     return (
//         <div>
//             <ComponenteEsempio nome="Ivan" />
//             <ComponenteEsempio nome="Luca" />
//             <ComponenteEsempio nome="Mirko" />
//         </div>
//     );
// }

// ReactDOM.render(
//     <Funzione />,
//     document.getElementById('root')
// );


// function formatDate(date) {
//     return date.toLocaleDateString();
// }

// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img
//                     className="Avatar"
//                     src={props.author.avatarUrl}
//                     alt={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">{props.text}</div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }

// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//         name: 'Hello Kitty',
//         avatarUrl: 'https://placekitten.com/g/64/64',
//     },
// };


// ReactDOM.render(
//     <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}
//     />,
//     document.getElementById('root')
// );



 function tick() {
     const element = (
         <div>
             <h1>HELLO WORLD!</h1>
             <h2>It is {new Date().toLocaleTimeString()}.</h2>
         </div>
     );
     ReactDOM.render(
        element, 
        document.getElementById('root')
    );
 }

setInterval(tick, 1000); // ogni secondo viene chiamata la callback tick - che a sua volta chiama la funzione ReactDOM.render()




function 




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
