//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = []; //lista vazia porque ninguém foi adicionado ainda

//função 1: capturar o valor de entrada com o document.getElementById(); validar a entrada; se vazio, criar um alert; atualizar
// a lista com o .push(); limpar o campo após adicionar o nome ''.

function adicionarAmigo() { //criando a função de adicionar amigo
    let nomeAmigo = document.querySelector('input').value; //pegando o campo de texto onde vai ser escrito o nome do amigo: input
    if (nomeAmigo !== '') { //se o campo for diferente da string vazia, adicionar o nomeAmigo a listaDeAmigos
        listaDeAmigos.push(nomeAmigo);
        limparCampo(); //limpar a caixa de texto após a inserção do nome
        atualizarLista(); //atualizar a lista a cada entrada
    } else { //senão, se o campo estiver vazio
        alert('Por favor, insira um nome válido'); //exibir um alert
    }
}

function atualizarLista() { //precisamos atualizar a lista conforme adicionamos os nomes dos amigos
    let lista = document.getElementById('listaAmigos'); //aqui eu vou utilizar a variável lista (que é o ul que tem lá no HTML) que 
//corresponde ao espacinho onde vai ser inserida a lista de amigos que tem o ID listaAmigos (abaixo do campo de texto):
//<ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
    lista.innerHTML = ''; //determinamos que a lista que está dentro do html esteja com uma string vazia, ou seja, limpamos a lista antes de
//atualizar com um novo nome (limpamos a lista, não o campo de texto)

    for (let i = 0; i < listaDeAmigos.length; i++) { //com o loop for vamos percorrer a lista de amigos. a variável i nesse caso
//começa com 0 porque nas arrays o primeiro elemento da lista tem o índice 0, e não 1; o loop continua enquanto o i for menor que
//o tamanho da lista de amigos (o length nos dá somente o tamanho em número, 3 ou 5 ou 10 amigos); i++ porque cada vez vai aumentando
//1 amigo (a cada iteração)
        let li = document.createElement('li'); //o li significa List Item (item da lista) e é um elemento dentro do HTML que só pode
//ser usado com o UL ou OL (lista não ordenada e lista ordenada). o UL cria a lista e cada LI corresponde a um item da lista. no JS
//precisamos CRIAR (createElement) o li porque ele não existe no HTML.
        li.textContent = listaDeAmigos[i]; //vamos adicionar um texto dentro do li, que é o nome dos amigos vindo da lista listaDeAmigos;
//o i vai ser o número de amigos. o textContent insere o texto dentro de um elemento apenas (dentro do li).
        lista.appendChild(li); //adicionamos o li (a lista) dentro da lista (espacinho no html, na tela, que é o ul). é isso que 
// o appendChild faz: adiciona um elemento (li) dentro de outro elemento (lista, ul)
    }
}

//função 3: limpar o campo após cada nome ser inserido na lista
function limparCampo() {
nomeAmigo = document.querySelector('input');
nomeAmigo.value = ' ';
}

//função 4: validar se há amigos disponívels; gerar um índice aleatório com Math.random() e Math.floor(); obter um número sorteado
//com o índice aleatório e acessar o nome correspondente ao array; atualizar o conteúdo do elemento de resultado com 
//document.getElementById e innerHTML
//<ul id="resultado" class="result-list" aria-live="polite"></ul>

function sortearAmigo() { //sortearAmigo() da mesma forma que está no HTML na função do botão 
    let numero = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[numero];
    console.log(amigoSorteado);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Seu amigo secreto é ${amigoSorteado}!`;
    dispararConfete();
    listaDeAmigos = [];
        atualizarLista();
}

function dispararConfete() {
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };
    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}

