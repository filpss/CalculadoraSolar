# CalculadoraSolar

O que é? Site responsivo (PC e Celular).

### **Tecnologias:** Javascript (React).

	Por se tratar de uma calculadora não será necessário backend (No momento), a ideia é ser um site onde o usuário informa os dados solicitados e recebe o resultado do cálculo.
	Para um futuro próximo, podemos pensar em adicionar um sistema de cadastro e login, salvamento do histórico de cálculos por usuário etc.

### **Parte técnica:**
	Ao acessar o site o usuário preenche os campos (CAMPOS AQUI) e clicar no botão de “Calcular”, e então um método chamado “RealizarCalculos” é acionado e vai retornar 3 resultados: 

	1 - Quantidade de placas necessárias
	2 - Economia de energia mensal
	3 - Economia de energia anual (Próximos 10 anos) 

### Parte Conceitual:

	A aplicação realizará um o cálculo integral do dimensionamento fotovoltaico com base na "Entrada de Dados", apresentado nos itens posteriores. 

#### SAÍDA DE DADOS

1. Dados técnicos:

* Consumo médio diário/mensal/anual.(kWh)
* Geração diária/mensal.(kWp)
* Quantidade de módulos a serem utilizados.
* Compensação mensal/anual.(kWh)
* Área total a ser utilizada.
	* Peso total dos módulos.

**2. Dados Financeiros.** (se informado valor total do investimento).

* Tipo de cobrança prevista.
* Se Fio B, mostrará o valor de cobrança conforme (INFORMAR LEGISLAÇÃO).
* Economia mensal/anual.(R$) (Se houver valor de investimento.)

**(Comparativo de investimento aplicado ao longo de 25 anos.)**

* No CDI a 10,93% a.a.
* Poupança a 0,6723% a.a.
* Sistema Fotovoltaico.
* Fluxo de Caixa Anual.
* Payback.
* TIR.
* VPL.

	
#### **ENTRADA DE DADOS** 	

**1. Dados técnicos:**
* Consumo médio mensal.(kWh)
* Índice de Incidência Solar. (HSP)
* Rendimento (%)
* Potência da Placa em (Wp)

**2. Dados Financeiros:**
* Valor Total da Tarifa de Energia **(Soma da  Tarifa de Energia (TE) + Tarifa de Uso do Sistema de Distribuição (TUSD))**
* Investimento total.
* Taxa do CDI. **(Por padrão 10,93% a.a.)**
* Taxa da Poupança **(Por padrão 0,6723%  a.a.)**

