import axios from "axios";

function getUserFromGithub(user: string) {
    axios
        .get(`https://api.github.com/users/${user}`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log("Usuário não existe");
        });
}
getUserFromGithub("pviniciusm");
getUserFromGithub("pviniciusasdasdsadm");

async function getUserFromGithubAwait(user: string) {
    try {
        let response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
        console.log("Await");
    } catch (err) {
        console.log("Usuário não existe - await");
    }
}

getUserFromGithubAwait("pviniciusm");
getUserFromGithubAwait("pviniciusasdasdsadm");
