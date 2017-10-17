var React = require("react");

function AddMessageForm(props){

    return(
        <div>
            <form onSubmit={props.onFormSubmitted}>
                <label>Message:</label>
                <textarea name="message" maxlenght='250'
                    onInput={props.onMessageChange}>
                    Saisissez votre message...
                </textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );

}

module.exports = AddMessageForm;
