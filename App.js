import React from "react";
import ReactDOM from "react-dom/client";

// Nested Header using React.CreateElement
const heading1 = React.createElement("h1", {}, "Heading 1");
const heading2 = React.createElement("h2", {}, "Heading 2");
const heading3 = React.createElement("h3", {}, "Heading 3");

const container = React.createElement("div", { class: "title" }, [
  heading1,
  heading2,
  heading3,
]);

//h1,h2,h3 using JSX
const headingJSX = (
  <div>
    <h1>Heading 1 coming from JSX</h1>
    <h2>Heding 2 coming from JSX</h2>
    <h3>Heading 3 coming from JSX</h3>
  </div>
);

//react element
const Title=()=>(
  <div>
    <h1>Title Tag</h1>
  </div>
);

 //functional component with passing attribute 
const Headingfunctional=()=>{
    return(
    <div>
    <Title/>
    <h1 className="heading">Heading 1 from functional component</h1>
    <h2>Heading 2 from functional component</h2>
    <h3>Heading 3 from functional component</h3>
    </div>
)}

// Create a Header Component from scratch using Functional Components with JSX

const Header=()=>{
  return(
    <div className="navbar">
      <p className="logo"><img className="logo-img" width="100" height="100" src="https://st.depositphotos.com/1202217/2063/i/950/depositphotos_20638759-stock-photo-logo-text-with-shadow-word.jpg"/></p>
      <p className="search"><input type="search"/></p>
      <p className="icon">Icon</p>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);

// root.render(headingJSX);

// root.render(<Headingfunctional/>)

root.render(<Header/>)