/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div> */

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         React.createElement(
//             "h1",
//             {},"I am in h1 tag")
//     )
// );

// -----------------------------------------------------------//

/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},[
//         React.createElement("h1",{},"I am in h1 tag"),
//         React.createElement("h2",{},"I am in h2 tag"),
//         ]
//     )
// );
// ---------------------------------
/* <div id="parent">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */

const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement("div",{id: "child1"},[
        React.createElement("h1",{},"I am in h1 tag c1"),
        React.createElement("h2",{},"I am in h2 tag c1"),
        ]
    ),
    React.createElement("div",{id: "child"},[
        React.createElement("h1",{},"I am in h1 tag c2"),
        React.createElement("h2",{},"I am in h2 tag c2"),
        ]
    )
    ]
);

// ---------------------------------


// const heading = React.createElement(
//     "h1",
//     {id:"heading",xyz: "abc"},
//     "Hello World from react!!");


const root = ReactDOM.createRoot(document.getElementById("root"));
        

// root.render(heading);
root.render(parent);