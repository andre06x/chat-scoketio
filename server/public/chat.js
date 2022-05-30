const socket = io();

const urlSearch = new URLSearchParams(window.location.search)
const username = urlSearch.get("username")
const room = urlSearch.get("select_room")

// emit => enviar alguma informação
// on => escutando alguma informação

const usernameDiv = document.getElementById("username");
usernameDiv.innerHTML = `Ola ${username} Você está na sala ${room}`

socket.emit("select_room", {
    username,
    room,
}, response => {
    console.log(response)
    response.forEach(message => createMessage(message))
})

socket.on("teste", data => {
    console.log(data)
})

document
.getElementById("message_input")
.addEventListener("keypress", (event) => {
    if(event.key === 'Enter'){
        const message = event.target.value;
        console.log(message);

        const data = {
            room,
            message,
            username
        }
        socket.emit("message", data);
        event.target.value = "";
    }
})

socket.on("message", (data) => {
    createMessage(data);
})
console.log(username, room)

function createMessage(data){
    const messageDiv = document.getElementById("messages");
    messageDiv.innerHTML += `
        <div class="new_message>
          <label class="form-label">
            <strong>${data.username}</strong> <span>${data.text} - ${dayjs(data.createdAt).format("DD/MM HH:mm")}</span>
          </label>
        </div>
    `
}