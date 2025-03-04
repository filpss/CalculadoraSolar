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

function economia_anual() {

}

function comparativo(poupanca, cdi, sis_fotovoltaico) {
}
