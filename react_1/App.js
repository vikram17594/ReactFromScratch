const childs = [React.createElement("h1" , {} , "I am an h1 tag") , React.createElement("h2" , {} , "I am an h2 tag")]
const parent = React.createElement("div", {id : "parent"} , [React.createElement("div" , {id : "child"} , childs) , React.createElement("div" , {id : "child"} , childs)]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    console.log(root);
    root.render(parent);