app = {
    teste(x) {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(x);
            }, 2500);
        });
    }
};

console.log("iniciando...");

async function f1(x){
    let num = await app.teste(x);
    console.log(num);
    return num;
};

try {
    let y = f1("testando");
    console.log(y);
} catch(ex){
    console.log(ex);
}

console.log("finalizando...");
