function Criptografar() {
    var texto = document.getElementById("texto-inserido").value  
    
    texto = texto.replace(/e/g,'enter') 
    texto = texto.replace(/i/g, 'imes')
    texto = texto.replace(/a/g, 'ai')
    texto = texto.replace(/o/g, 'ober') 
    texto = texto.replace(/u/g, 'ufat') 
   
    var conteudoCaixa = document.getElementById("paragrafo-direita");
  
    conteudoCaixa.innerHTML = texto;
    
    document.getElementById("imagem").style.display = "none";
    document.getElementById("titulo-direita").style.display = "none";
    document.getElementById("adicionar-botao").style.display = "flex";
  }
  
  function Descriptografar() {
    var texto = document.getElementById("texto-inserido").value  
    
    texto = texto.replace(/enter/g,'e') 
    texto = texto.replace(/imes/g, 'i')
    texto = texto.replace(/ai/g, 'a')
    texto = texto.replace(/ober/g, 'o') 
    texto = texto.replace(/ufat/g, 'u') 
   
    var conteudoCaixa = document.getElementById("paragrafo-direita");
  
    conteudoCaixa.innerHTML = texto;
    
    document.getElementById("imagem").style.display = "none";
    document.getElementById("titulo-direita").style.display = "none";
    document.getElementById("adicionar-botao").style.display = "flex";
  }
  
  document.getElementById('botao-copiar').addEventListener('click', copiarClipboard);
  async function copiarClipboard () {
    var textoCopiado = document.querySelector('#titulo-direita').textContent;
    await navigator.clipboard.writeText(textoCopiado);
  }