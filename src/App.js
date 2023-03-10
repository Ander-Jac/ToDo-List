import React from "react";
import ReactDOM from "react-dom";
import "./App.css"


/* Main React Component */
class App extends React.Component {
    render() {
      return (
        <div id="main-component-wrapper">
            <PageHeader />
            <AddToList />
            <ListDisplay />
        </div>
      );
    }
  };
/* Page Header */
const PageHeader = () => {
    return (
        <div id="header-wrapper">
            <h1 id="header">To Do.</h1>
        </div>
    );
};
/* Add To List */
const AddToList = () => {
    return (
        <div id="add-to-list-wrapper">
            <input id="add-input"></input>
            <button id="add-button">Add</button>
        </div>
    )
}
/* List Display */
const ListDisplay = () => {
    return (
        <div id="list-display-wrapper"></div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));


/* Retrieving HTML Elements */
const addButton = document.getElementById("add-button");
const input = document.getElementById("add-input");
const listDisplay = document.getElementById("list-display-wrapper")

/* Adding Event Listener for Add Button */
addButton.addEventListener("click", (event) => {
    if (input.value != "") {
        let itemName = document.createElement("div");
        itemName.classList.add("list-item-name");
        itemName.innerHTML = input.value;

        let removeItem = document.createElement("div");
        removeItem.classList.add("remove-item");
        removeItem.innerHTML = "X";
        removeItem.addEventListener("click", () => {
            newItem.remove();
        })

        let newItem = document.createElement("div")
        newItem.classList.add("list-item");
        newItem.append(itemName)
        newItem.append(removeItem)
        console.log(newItem)
        listDisplay.append(newItem)

        input.value = ""
    }  
})
/* Adding Event Listener for Enter Key */
document.addEventListener("keydown", (event) => {
    if (input.value != "" && event.key == "Enter") {
        let itemName = document.createElement("div");
        itemName.classList.add("list-item-name");
        itemName.innerHTML = input.value;

        let removeItem = document.createElement("div");
        removeItem.classList.add("remove-item");
        removeItem.innerHTML = "X";
        removeItem.addEventListener("click", () => {
            newItem.remove();
        })

        let newItem = document.createElement("div")
        newItem.classList.add("list-item");
        newItem.append(itemName)
        newItem.append(removeItem)
        console.log(newItem)
        listDisplay.append(newItem)

        input.value = ""
    }  
})