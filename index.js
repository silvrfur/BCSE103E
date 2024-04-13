//pat5- functions and class and props only
import React from 'react';
import ReactDOM from 'react-dom/client';

const x=5;
// let text="Goodbye";
// if(x<10){
//     text="hello";
// }
// const myFirstElement=<h1>{text}</h1>;
const myFirstElement=<h1>{x<10?"Hello":"Goodbye"}</h1>;
// ReactDOM.render(myFirstElement, document.getElementById('root'));

function Car(props){
    // return <h2>Hi, I am a Car.</h2>
    return <h2>I am a {props.color} Car.</h2>
}

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const myArray=['apple','banana','orange'];
// const myList=myArray.map((item)=><p>{item}</p>);
const container=document.getElementById('root');
const root=ReactDOM.createRoot(container);
// root.render(myFirstElement);
root.render(<Car color='red'/>);

// const myFirstElement=<h1> React is {5+5} times better than JSX. (addition)</h1>;
// const mySecondElement=<h1> React is {15-5} times better than JSX. (subtraction)</h1>;
// const myThirdElement=<h1> React is {2*5} times better than JSX. (multiplication)</h1>;
// const myFourthElement=<h1> React is {100/10} times better than JSX. (quotient)</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <div>
//     {myFirstElement}
//     {mySecondElement}
//     {myThirdElement}
//     {myFourthElement}
//     </div>
// );

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
