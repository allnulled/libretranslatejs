const libretranslatejs = require(__dirname + "/../src/libretranslate.js");
const translator = libretranslatejs(); // defaults to: { host: "127.0.0.1" , port: 5000 }
const main = async function() {
    const translation = await translator.translate("Esto es un texto de ejemplo");
    console.log(translation); // This is an example text
    if(translation !== "This is an example text") {
        throw new Error("Se esperaba una traducción concreta en test2.js")
    }
};
main();