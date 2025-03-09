export let fio_B = 0
export function verifica_fiob(tusd) {
    
    let ano_atual = new Date().getFullYear()

    if (ano_atual == "2025"){   
        console.log("Estamos em 2025");
        return fio_B = tusd*0.45
    }
    else if (ano_atual == "2026"){
        console.log("Estamos em 2026")
        return fio_B = tusd*0.60

    }
    else if (ano_atual == "2027"){
        console.log("Estamops em 2027")
        return fio_B = tusd*0.75
    }
    else if (ano_atual => "2028"){
        console.log("Estamops em 2028")
        return fio_B = tusd*0.90
    }
    else{
        return null;
    }
}

function tabela() {

    const G0 = 295.92
    const T0 = 1.08174591
    const decModulos = 0.0075; 
    const rt = 0.10;   
    const n = 25;      
    const invest = 11157.58

    let TarifaAno = []
    let GeracaoAno = []
    let EconomiaAno = []
    let Investimento = []
    let Saldo = []
    let planilha = []
    
    for (let t = 0; t < n; t++) {
        let Gt = (G0*12) * Math.pow(1 - decModulos, t); // Geração no ano t
        let Tt = T0 * Math.pow(1 + rt, t); // Tarifa no ano t
        TarifaAno[t] = Tt;
        GeracaoAno[t] = Gt;
        EconomiaAno[t] = Gt * Tt; 
    
        if (t === 0){
            Saldo[0] = EconomiaAno[0] - invest;
            Investimento[0] = - invest
        }
        else {
            Saldo[t] = EconomiaAno[t] + Saldo[t-1];
            Investimento[t] = 0
        }  
    
        planilha[t] = [
            t,
            TarifaAno[t].toFixed(2), 
            GeracaoAno[t].toFixed(2), 
            EconomiaAno[t].toFixed(2), 
            Investimento[t].toFixed(2), 
            Saldo[t].toFixed(2)
        ];
    
    }  
}

function comparativo(poupanca, cdi, sis_fotovoltaico) {
}

