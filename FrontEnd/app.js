console.log("App.js funcionando");

const API = "http://localhost:3000/lerveiculos";

async function carregar() {
    
    const res = await fetch(API);

    const dados = await res.json();

    const tabela = document.getElementById("tabela");

    tabela.innerHTML = "";

    console.log(dados)

    dados.forEach((carro) => {
        tabela.innerHTML += `      
        <tr>
            <td>${carro.id}</td>
            <td>${carro.placa}</td>
            <td>${carro.modelo}</td>
            <td>${carro.pago ? "✅Sim" : "❌ Não" }</td>
            <td>
                <button onclick="pagar(${carro.id}, ${carro.pago})">
                    PATCH ${carro.pago ? '<span style="color:blue">Cancelar</span>' : ''}
                </button>
            </td>
        </tr>
        `
    });

}

async function pagar(id,pagoAtual) {
    console.log(id);
    console.log(pagoAtual)
}
//------------------------------------------
// Ao abrir a pagína, chama a função carregar
//------------------------------------------
carregar();