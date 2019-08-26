app = {
    teste(x) {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                if(x == "r")
                    reject(x)
                else
                    resolve(x);
            }, 2500);
        });
    }
};

console.log("iniciando...");

async function f1(x){
    let num = await app.teste(x);
    console.log("after await....", num);
    return num;
};

try {
    let y = f1("testando");
    y.then(v => {
        console.log("then...",v)
        console.log("a var da promise é...", y);
    });
    console.log("a var da promise aqui é: ", y);

    let z = f1("r");
    console.log("var da promise que ser rejeitada:", z);

} catch(ex){
    console.log("exception...", ex);
}

console.log("finalizando...");
