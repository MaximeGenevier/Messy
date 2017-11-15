var React = require("react");

function LoginForm(props){

    return(
        <div>
            <form onSubmit={props.onFormSubmitted} class="form-inline">
                <label>Nom: </label>
                <input type="text" name="name" onInput={props.onUserChange}/>
                <label>Mot de passe: </label>
                <input type="password" name="password" onInput={props.onUserChange}/>
                <button class="btn btn-default" type="submit">Connexion</button>
            </form>
        </div>
    );

}

module.exports = LoginForm;
