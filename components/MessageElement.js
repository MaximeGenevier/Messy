var React = require("react");

function MessageElement(props){

    if(props.user.id == props.message.user_id){
        return(
            <div id={props.message.id} class="media">
                <div class="media-left">
                    <img src={props.message.user.image} height="80" width="80" class="img-rounded"/>
                </div>
                <div class="media-body">
                    <div class="media-heading">
                        <h4>{props.message.user.name} {props.message.date}</h4>
                    </div>
                    <p>{props.message.message}</p>
                </div>
                <div class="media-right">
                    <button class="btn btn-danger" onClick={()=>props.onDelete(props.message.id)}>Supprimer</button>
                </div>
            </div>
        );
    }else{
        return(
            <div id={props.message.id} class="media">
                <div class="media-left">
                    <img src={props.message.user.image} height="80" width="80" class="img-rounded"/>
                </div>
                <div class="media-body">
                    <div class="media-heading">
                        <h4>{props.message.user.name} {props.message.date}</h4>
                    </div>
                    <p>{props.message.message}</p>
                </div>
            </div>
        );
    }
}

module.exports = MessageElement;
