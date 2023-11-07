import React from "react";

class ListComponent extends React.Component {

    generateRandomNumber(){
        return Math.random();
    }

    render(){
        return(
            <ul>
                <li>List item 1{this.generateRandomNumber()}</li>
                <li>List item 2{this.generateRandomNumber()}</li>
                <li>List item 3{this.generateRandomNumber()}</li>
            </ul>
        )
    }
}

export default ListComponent;
