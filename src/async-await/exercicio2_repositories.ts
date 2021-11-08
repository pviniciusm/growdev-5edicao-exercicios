import axios from "axios";

class Github {
    static getRepositories(repo: string) {
        axios
            .get(`https://api.github.com/repos/${repo}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log("Repositório não existe");
            });
    }

    static async getRepositoriesAwait(repo: string) {
        try {
            let response = await axios.get(
                `https://api.github.com/repos/${repo}`
            );
            console.log(response.data);
            console.log("Await");
        } catch (err) {
            console.log("Repositório não existe - await");
        }
    }
}
Github.getRepositories("pviniciusm/growdev-5edicao-exercicios");
Github.getRepositories("pviniciusm/uasdyuasd");

Github.getRepositoriesAwait("pviniciusm/growdev-5edicao-exercicios");
Github.getRepositoriesAwait("pviniciusm/uasdyuasd");
