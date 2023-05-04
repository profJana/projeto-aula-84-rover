canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');

larguraRover = 100;
alturaRover = 90
roverX = 10;
roverY = 10;

backgroundImage = './soloMarte.jpg';
roverImage = './rover.png';

function add(){
    backgroundIMG = new Image(); //criando uma nova imagem
    backgroundIMG.onload = uploadBackground; //ao carregar a pagina estamos atribuindo a função uploadBackground que ainda iremos criar
    backgroundIMG.src = backgroundImage //alterando a imagem

    roverIMG = new Image(); //criando uma nova imagem
    roverIMG.onload = uploadRover; //ao carregar a pagina estamos atribuindo a função uploadBackground que ainda iremos criar
    roverIMG.src = roverImage //alterando a imagem
}

function uploadBackground(){
    ctx.drawImage(backgroundIMG, 0, 0, canvas.width, canvas.height)
}

function uploadRover(){
    ctx.drawImage(roverIMG, roverX, roverY, larguraRover, alturaRover)
}

window.addEventListener('keydown', moveRover)

function moverRover(e){
    teclaPressionada = e.keyCode;
    console.log(teclaPressionada)
    if(teclaPressionada == '38'){
        up()
    }
    if(teclaPressionada == '40'){
        down()
    }
    if(teclaPressionada == '37'){
        left()
    }
    if(teclaPressionada == '39'){
        right()
    }
}