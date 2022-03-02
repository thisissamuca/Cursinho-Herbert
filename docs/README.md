<h1 align="center">
    <img alt="GIF" src="https://cdn.consumidormoderno.com.br/wp-content/uploads/2020/01/4SHA3IBTIQYD3IQLWLK4X2I7RY.gif">
</h1>

<h4 align="center"> 
	🚧 Web site 🚀 temporariamente concluído... 🚧
</h4>

<p align="center">
 
 <img src="http://img.shields.io/static/v1?label=STATUS&message=FINISHED&color=GREEN&style=for-the-badge"/>
 <img src="http://img.shields.io/static/v1?label=last_releasure&message=02_mar_2022&color=GREEN&style=for-the-badge"/>
 <img src="http://img.shields.io/static/v1?label=license&message=MIT&color=blue&style=for-the-badge"/>
 <img src="http://img.shields.io/static/v1?label=LANGUAGES&message=3&color=red&style=for-the-badge"/>
 <img src="http://img.shields.io/static/v1?label=repo size&message=5.38MB&color=yellow&style=for-the-badge"/>
 
</p>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#Sobre)
   * [Detalhes](#Detalhes)
   * [Animações](#Animações)
   * [Tuor](#Tuor)
   * [Tecnologias](#Tecnologias)
   * [Licença](#Licença)
<!--te-->

# 💻 Sobre o projeto

📕 web Site Cursinho - É um projeto voluntário de criação de site para o cursinho popular Herbert de Souza. Há anos os web sites do cursinho não eram atualizados, então resolvi ajudar com o frontend e colocar tudo que for necessário para o usuário em um só lugar.

🕹️ Funcionalidades:
- Informar o usuário sobre como se matricular.
- Informar os principais serviços do cursinho.
- Informar meios e como entrar em contato.
- Informar os principais integrantes do Cursinho.
- Informar a localização do Cursinho.
- Tirar as principais dúvidas do usuário.

<br>

🌐 Link para acessar o site:
https://thisissamuca.github.io/Cursinho-Herbert/

<br>

# ✔️ Detalhes importantes

1️ - A Navbar possui alguns efeitos com o hover, como por exemplo: 
- Devido ao blur (efeito vidro) e ao hover, quando o mouse passa sobre a Navbar a opacity aumenta, ou seja, fica mais escuro.
- Existe um efeito de "brilho" imitando um "reflexo" durante a movimentação do mouse sobre a Navbar.
- Cada aba possui um link que vai para uma página específica.
- Cada aba possui um efeito hover (quando o mouse passa por cima) ganhando uma coloração alaranjada em volta e underline (linha no pé) na base do texto.

<br>

2 - Quando é pressionado a tecla "Tab" no teclado um efeito de focus (foco) é acionado conforme a ordem de prioridade dos botoões. Esse efeito gera uma "sombra" branca sob o elemento.

<br>

3 - Todas as imagens das páginas possui uma animação de movimento, de tamanho e/ou de sombra, exceto na página "Nossa missão".

<br>

4 - Os cartões da página inicial na sessão "Nossos serviços" possui uma animação de flip (eles giram ao passar o mouse por cima).

<br>

5 - Cada botão da página possui uma animação de hover, deixando-os ainda mais dinâmicos e bonitos.

<br>

6 - Todas as tags a's (links) no footer possuem uma animação de hover que deixa a cor alaranjada, exceto nos ícones do Facebook e Instagram que possuem cores próprias.

<br>

7 - Na página "Nossa equipe" as imagens e textos são meramente ilustrativos, e existe uma interação sobre o ícone do integrante:
- Quando o mouse passa por cima das imagens elas rotacionam com a animação, imitando um efeito de "sobe - desce".
- Quando uma das imagens é clicada, um modal (aba) se abre na tela entregando mais informações sobre os integrantes do cursinho.
- Enquanto o modal estiver aberto, a imagem do integrante dentro do modal ficará se movimentando infinitamente.

<br>

8 - Na página "Contate-nos" os cartões possuem animação própria:
- Quando o mouse passa sobre os cartões eles imitam um movimento de "sobe-desce" para indicar sobre qual cartão o mouse está pousado.
- Cada botão dentro dos cartões possuem uma animação de hover própria.

<br>

# 💻 Animações

### Animando os ícones na página "Equipe"

1 - No arquivo "animation.css", criei um keyframe padrão de rotação:

**@keyframes rotation** {

  0% {

    transform: rotate(0deg);

  }

   25% {

    transform: rotate(-15deg);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.90);

   }

  50% {

    transform: rotate(0deg);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.60);

  }
  
  75% {

    transform: rotate(15deg);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.90);

  }

  100% {

    transform: rotate(0deg);

  }

}

2 - No arquivo "equipe.css" apliquei um hover em cada um dos ícones usando o id, da seguinte maneira:

**#icon01:hover, #icon02:hover, ...** {

    animation: rotation 3s linear infinite;

}

<br>
<hr>
<br>
	
### Animando os ícones dentro do modal na página "Equipe"

1 - No mesmo arquivo "animation.css", criei um segundo keyframe rotação:

**@keyframes rotate** {

  0% {

    transform: rotate(0deg);

  }

  20% {

    transform: rotate(-5deg);
      
  }

  40% {

    transform: rotate(5deg);
      
  }


  60% {

    transform: rotate(5deg);
      
  }

  80% {

    transform: rotate(-5deg);
  }

  100% {

    transform: rotate(0deg);
      
    }

}

2 - No mesmo arquivo "equipe.css" apliquei essa animação em cada um dos ícones usando o id, da seguinte maneira:

**#icone-modal-1, #icone-modal-2, ...** {

    animation: rotate 4s linear infinite;

}

<br>
<hr>
<br>

### Animando os cartões na página "Contate-nos"

1 - No mesmo arquivo "animation.css", criei um terceiro keyframe de sombreamento:

**@keyframes shadow** {

  0% {

    box-shadow: 0px 0px 0px rgba(0, 0, 0);
    transform: translateX(0) scale(1);
  }

   25% {

    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.90);
    transform: translateX(0) scale(1.05);
   }

  50% {

    box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.60);
    transform: translateX(0) scale(1.1);
  }
  
  75% {
    
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.90);
    transform: translateX(0) scale(1.05);

  }

  100% {
    
    box-shadow: 0px 0px 0px rgba(0, 0, 0);
    transform: translateX(0) scale(1);
  }

}

2 - No mesmo arquivo "equipe.css" apliquei essa animação dentro de um hover na classe "cards" que possuia todos os cartões, da seguinte maneira:

**.card:hover** {

    animation: shadow 3s linear infinite;
    
}

3 - Dessa mesma forma, consegui animar todas as imagens do Web Site, basta aplicar um raw no arquivo "animation.css" e seguir o mesmo esquema aplicando as animações nos elementos que desejar.

<br>
<hr>
<br>

### Criando o efeito de "brilho" na Navbar

1 - No arquivo "script.js", copiei o seguinte script (código disponível no link abaixo):

créditos ao braboo: https://codepen.io/vinicius-de-moraes-the-styleful/pen/GRrWzyW

<br>

<div align="start" text-align="center">
	
<img alt="IMAGEM" src="https://cdn.discordapp.com/attachments/947611804945776691/948719374175465532/unknown.png">
	
</div>

2 - Em seguida, foi necessário acessar o arquivo "style.css" e criar a cor do brilho:

**.brightness** {

    --posX: 0px;
    --posY: 0px;
    --color: rgba(255, 255, 255, 0.15);
    
}

3 - No mesmo arquivo, vamos definir o formato do brilho:

<div align="start" text-align="center">
	
<img alt="IMAGEM" src="https://cdn.discordapp.com/attachments/947611804945776691/948722205162885140/unknown.png">
	
</div>

4 - E por último, mas não menos importante:

<br>

- Vamos selecionar os elemenos que receberão o efeito "brightness".

<div align="start" text-align="center">
	
<img alt="IMAGEM" src="https://cdn.discordapp.com/attachments/947611804945776691/948722623192399873/unknown.png">
	
</div>

<br>

- No HTML Vamos colocar a classe "brightness" no elemento desejado

<div align="start" text-align="center">
	
<img alt="IMAGEM" src="https://cdn.discordapp.com/attachments/947611804945776691/948723377890287676/unknown.png">
	
</div>

<br>

# 🎨 Tuor Desktop

<div align="center" text-align="center">

**Página inicial**
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/navbar.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/paginaInicial01.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/paginaInicial02.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/paginaInicial03.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/paginaInicial04.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/paginaInicial05.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/paginaInicial06.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/footer.png?raw=true">
	
<br>

</div>

<br>

<hr>

<br>

<div align="center" text-align="center">

**Projetos**
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/navbar.png?raw=true">
	
</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/nossosProjetos01.png?raw=true">
	
</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/nossosProjetos02.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/nossosProjetos03.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/nossosProjetos04.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/footer.png?raw=true">
	
<br>

</div>

<br>

<hr>

<br>

<div align="center" text-align="center">

**Nossa missão**
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/navbar.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/nossaMissao01.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/nossaMissao02.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/nossaMissao03.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/footer.png?raw=true">

</div>

<br>

<hr>

<br>

<div align="center" text-align="center">

**Nossa equipe**
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/navbar.png?raw=true">

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/nossaEquipe01.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/nossaEquipe02.png?raw=true">

</div>

<div justify-content="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/nossaEquipe03.png?raw=true">

<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/nossaEquipe05.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/footer.png?raw=true">

</div>

<br>

<hr>

<br>

<div align="center" text-align="center">

**Contate-nos**
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/navbar.png?raw=true">

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/contateNos01.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/contateNos02.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/footer.png?raw=true">

</div>

<br>

<div align="center" text-align="center">

**Preciso de ajuda**
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/navbar.png?raw=true">

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/precisoAjuda01.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/precisoAjuda02.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/precisoAjuda03.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/precisoAjuda04.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/precisoAjuda05.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/precisoAjuda06.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/precisoAjuda07.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/precisoAjuda08.png?raw=true">

</div>

<div align="center" text-align="center">
	
<img alt="IMAGEM" src="https://github.com/thisissamuca/Cursinho-Herbert/blob/main/imagens/website/footer.png?raw=true">

</div>

## 🛠 Tecnologias!

As seguintes ferramentas foram usadas na construção do projeto:

- [CSS3](#CSS3)
- [HTML5](#HTML5)
- [JavaScript](#JavaScript)
- [JQuery](#JQuery)
- [Bootstrap](#Bootstrap)

<hr>

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Samuel Augusto

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[npm]: https://nodejs.org/en/download/
[vscode]: https://code.visualstudio.com/
[license]: https://opensource.org/licenses/MIT
