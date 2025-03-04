
/* Entrada de dados técnicos */
let con_med_mensal = 420
let hsp = 5
let rendimento = 0.8
let modulo = 550
let pot_modulo = modulo/1000

/* Entrada de dados financeiros */
/* Só vai rolar se tiver o valor total do investimento */
const invest = 11000.00
let te = 0.915
let tusd = 0.356  
let tarifa_energia = te + tusd
let taxa_cdi = 0.193
let taxa_poupanca = 0.006723

/*SESSÃO DE CALCULOS TÉCNICOS*/
let consumo_anual = con_med_mensal*12
let consumo_diario = con_med_mensal/30

let potencia_inicial = con_med_mensal / (hsp*30*rendimento) /* Lembrar de arrendondar essa budega para 2 casas decimais*/
let quant_modulos = Math.ceil(potencia_inicial / pot_modulo)
let potencia_final = quant_modulos*pot_modulo
let geracao_mensal = potencia_final*hsp*30*rendimento
let area_min = quant_modulos*2.58 
let compensacao_anual = (tarifa_energia * consumo_anual)


console.log(`Número de módulos ${quant_modulos.toFixed(2)}, 
potencia inicial: ${potencia_inicial.toFixed(2)}, 
Potencia Final: ${potencia_final.toFixed(2)}, 
Geração Mensal: ${geracao_mensal.toFixed(2)}`);

import { fio_B, verifica_fiob } from "./functions.js"
verifica_fiob(tusd)
console.log(fio_B)

/*
verifica_fiob()
console.log("R$", fio_B.toFixed(5))
*/