var React = require("react");

function MessageElement(props){

    return(
        <div id={props.message.id}>
            <img src={props.message.user.image}/>
            <p>{props.message.user.name}</p>
            <p>{props.message.message}</p>
        </div>
    );

}

module.exports = MessageElement;
