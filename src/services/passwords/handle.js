import permitedCharacters from "./utils/permitted-Characters.js";

async function handle() {
    let characters = []
    let password = "";

    const passwordlength = process.env.PASSWORD_LENTGH;
    characters = await permitedCharacters();
    

    for(let i = 0; i < passwordlength; i++){
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    };

    return password
}

export default handle