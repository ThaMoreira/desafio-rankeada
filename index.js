const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function askHowManyVictories() {
    return new Promise((resolve) => {
        rl.question('Digite a quantidade de vitórias: ', (victory) => {
            resolve(victory);
        })
    })
}

function askHowManyDefeats() {
    return new Promise((resolve) => {
        rl.question('Digite o a quantidade de derrotas: ', (defeat) => {
            resolve(defeat);
        })
    })
}

function getLevel(level) {
    if (level <=10){
        return'Ferro';
    } else if (level >= 11 && level <= 20) {
        return'Bronze';
    } else if (level >= 21 && level <= 50) {
        return'Prata';
    } else if (level >= 51 && level <= 80) {
        return'Ouro';
    } else if (level >= 81 && level <= 90){
        return'Diamante';
    } else if (level >= 91 && level <= 100) {
        return'Lendário';
    } else if (level >= 101) {
        return 'Imortal';
    }
}

async function rankedLevel(){
    const victories = await askHowManyVictories();
    const defeats = await askHowManyDefeats();
    const victoryAmount = victories - defeats
    const rankedLevel = getLevel(victoryAmount);
    console.log(`O Herói tem de saldo de ${victoryAmount} está no nível de ${rankedLevel}`);
    rl.close()
}


rankedLevel();