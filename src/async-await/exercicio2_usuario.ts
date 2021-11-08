import axios from "axios";

const buscaUsuario = (usuario: string) => {
    axios
        .get(`https://api.github.com/users/${usuario}`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log("Usuário não existe");
        });
};
buscaUsuario("pviniciusm");

const buscaUsuarioAwait = async (usuario: string) => {
    try {
        let response = await axios.get(
            `https://api.github.com/users/${usuario}`
        );
        console.log(response.data);
        console.log("Await");
    } catch (err) {
        console.log("Usuário não existe");
    }
};

buscaUsuarioAwait("pviniciusm");
buscaUsuarioAwait("sdsdasdasdadsads");
