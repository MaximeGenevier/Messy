var React = require("react");

function AddMessageForm(props){

    return(
        <div>
            <form onSubmit={props.onFormSubmitted} class="form-inline">
                <div class="form-group">
                    <label>Message:</label>
                    <textarea name="message" maxlenght='250' style={{height:"150px", width:"900px"}}
                        onInput={props.onMessageChange}
                        class="form-control">
                        Saisissez votre message...
                    </textarea>
                </div>
                <button class="btn btn-default" type="submit">Envoyer</button>
            </form>
        </div>
    );

}

module.exports = AddMessageForm;
