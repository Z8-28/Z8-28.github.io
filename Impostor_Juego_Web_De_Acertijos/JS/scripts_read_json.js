/*function read_json(){
    fetch("../DATA/aa_jsons.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error en la respuesta de la red");
        }
        return response.json();
    })
    .then((data) => {
        let words = Math.floor(Math.random() * data.length);
        console.log(data[words]);
        get_random_word(data[words]);
    })
    .catch((error) => {
        console.error("Error al obtener el archivo JSON:", error);
    });
}

function get_random_word(word_list){
    fetch(`../DATA/${word_list}.json`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error en la respuesta de la red");
        }
        return response.json();
    })
    .then((data) => {
        let words = Math.floor(Math.random() * data.length);
        console.log(data[words]);
        localStorage.setItem('word', data[words]);
    })
    .catch((error) => {
        console.error("Error al obtener el archivo JSON:", error);
    });
}*/

async function read_json(){
    try {
        const response = await fetch("../DATA/aa_jsons.json");
        if (!response.ok) throw new Error("Error en la respuesta de la red");
        const data = await response.json();
        const idx = Math.floor(Math.random() * data.length);
        console.log(data[idx]);
        await get_random_word(data[idx]); // esperar a que termine
        return data[idx];
    } catch (error) {
        console.error("Error al obtener el archivo JSON:", error);
        throw error;
    }
}

async function get_random_word(word_list){
    try {
        const response = await fetch(`../DATA/${word_list}.json`);
        if (!response.ok) throw new Error("Error en la respuesta de la red");
        const data = await response.json();
        const idx = Math.floor(Math.random() * data.length);
        console.log(data[idx]);
        localStorage.setItem('word', data[idx]);
        return data[idx];
    } catch (error) {
        console.error("Error al obtener el archivo JSON:", error);
        throw error;
    }
}