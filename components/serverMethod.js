function createAccount(body){

    return fetch("https://messy.now.sh/join",
        { headers: {
                "Content-Type": "application/json"
            }, method:"POST", body:JSON.stringify(body)
        }
    )
    .then(response => response.json())
    .then((response) => { console.log(response.user); return response;})
    .catch((error) =>{ console.log("Request failed: ", error) ;})

}

function login(body, token){

    return fetch("https://messy.now.sh/authenticate",
        { headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer:" + token
            }, method:"POST", body:body
        }
    )
    .then(response => response.json())
    .then((response) => { return response;})
    .catch((error) =>{ console.log("Request failed: ", error) ;})

}

function getTimeLine(token, id){

    return fetch("https://messy.now.sh/" + id + "/timeline",
        { headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer:" + token
            }, method:"GET"
        }
    )
    .then(response => response.json())
    .then((response) => { return response;})
    .catch((error) =>{ console.log("Request failed: ", error) ;})

}

function createMessage(body, token, id){

    return fetch("https://messy.now.sh/" + id + "/timeline",
        { headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer:" + token
            }, method:"POST", body:body
        }
    )
    .then(response => response.json())
    .then((response) => { return response;})
    .catch((error) =>{ console.log("Request failed: ", error) ;})

}

function deleteMessage(token, id, idMsg){

    return fetch("https://messy.now.sh/" + id + "/timeline/" + idMsg,
        { headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer:" + token
            }, method:"DELETE"
        }
    ).then((response) => { return response;})
    .catch((error) =>{ console.log("Request failed: ", error) ;})

}

module.exports = {
    createAccount: createAccount,
    login: login,
    getTimeLine: getTimeLine,
    createMessage: createMessage,
    deleteMessage: deleteMessage
};
