var taille_jeu;
var font1, font2;
var play_menu;
var haut, bas, vitesse_perso, y_perso, y_balle, x_balle, x_fond, x_fond2, vitesse_bf;
var ca, ca2, score, nbre_coeur, ecran;
var coeur, coeur2, coeur3, fond_jeu, fond_menu, fond_go, icon, persogif, jewel;

function setup() {
	taille_jeu = createCanvas(500, 500);
	taille_jeu.parent("jeu");

	fond_menu = loadImage('data/img/fond_menu.png');
	fond_jeu = loadImage('data/img/fond.png');
	fond_go = loadImage('data/img/fond_go.png');
	icon = loadImage('data/img/icon.png');
	coeur = loadImage("data/img/heart.png");
  	coeur2 = loadImage("data/img/heart.png");
  	coeur3 = loadImage("data/img/heart.png");
  	persogif = loadImage('data/img/bat1.gif');
  	jewel = loadImage('data/img/jewel.gif');


	font1 = loadFont('data/font/pixel.ttf');
	font2 = loadFont('data/font/game.ttf');

	play_menu = color(255);

	score = 0;
  	y_perso = 215;
  	x_balle = 500;
  	y_balle = random(0, 460);
  	vitesse_perso = 6.0;
  	vitesse_bf = 2.5;
  	haut = 0;
  	bas = 0;
  	nbre_coeur = 3;
  	x_fond = 0;
  	x_fond2 = 500;
  	ca = 0;
  	ca2 = 0;
  	ecran = 0;
}

function draw() {
	if (ecran == 0) {
		menu();
	} else if (ecran == 1) {
		jeu();
	} else if (ecran == 2) {
		gameover();
	}
}

function menu() {
	image(fond_menu, 0, 0);
  	image(icon, 122, 10);
//  	menu.play();
    textAlign(CENTER);
    textFont(font1);
    textSize(20);
    fill(255);
    text("DEMO 1.0", width/2, height-15);
    textAlign(CENTER);
    textFont(font2);
    textSize(125);
    fill(play_menu);
    text("Play", width/2, 400);

  	if (mouseX <= 350 && mouseX >= 150 && mouseY <= 410 && mouseY >= 290) {
    	play_menu = color(153, 117, 194);
  	} else {
    	play_menu = color(255);
 	}

	if (mouseIsPressed) {
  	  	if (mouseX <= 350 && mouseX >= 150 && mouseY <= 410 && mouseY >= 290) {
     	 	ecran = 1;
//      	pouet_menu.play();
//      	pouet_menu.rewind();
//      	menu.pause();
//      	menu.rewind();
    		image(fond_jeu, x_fond, 0);
	    	image(fond_jeu, x_fond2, 0);
 		}
	}
}

function jeu() {
	image(fond_jeu, x_fond, 0);
  	x_fond -= vitesse_bf;
  	if (x_fond <= -500) {
    	x_fond = 0;
  	}

  	image(fond_jeu, x_fond2, 0);
  	x_fond2 -= vitesse_bf;
  	if (x_fond2 <= 0) {
    	x_fond2 = 500;
  	}

  	if (ca2 == 5) {
    	image(jewelspe, x_ballespe, y_ballespe);
  	}

 	image(jewel, x_balle, y_balle);
 	image(persogif, 25, y_perso);
 	image(coeur, 462, 5, 32, 32);
 	image(coeur2, 425, 5, 32, 32);
 	image(coeur3, 388, 5, 32, 32);
//  	bg.play();

	fill(153, 117, 194);
  	textSize(50);
  	textFont(font1);
  	text(score, width/2, 15);
  	textAlign(CENTER, CENTER);

  	if (x_balle >= 0) {
    	x_balle -= vitesse_bf;
  	}

  	if (x_balle <= 0 && nbre_coeur > 1) {
    	nbre_coeur--;
    	y_balle = random(0, 460);
    	x_balle = 500;
    	vitesse_bf *= 0.85;
//    	pouet3.play();
//    	pouet3.rewind();

    	if (nbre_coeur == 2) {
      		coeur = loadImage("data/img/heart_bw.png");
    	} if (nbre_coeur == 1) {
      		coeur2 = loadImage("data/img/heart_bw.png");
    	}
	}

  	if (x_balle <= 0 && nbre_coeur == 1) {
    	ecran = 2;
  	}

  	if (y_balle <= y_perso +60 && y_balle >= y_perso-20 && x_balle <= 50) {
    	y_balle = random(0, 460);
    	x_balle = 500;
    	score++;
//    	pouet.play();
//    	pouet.rewind();

    	if (score%2 == 0) {
      		vitesse_bf *= 1.05;
    	}
  	}

  	if (y_perso >= 0 && y_perso <= 430) {
   	 	y_perso += (bas - haut) * vitesse_perso;
  	}


  	if (y_perso <= 0) {
    	y_perso++;
  	}

  	if (y_perso >= 430) {
    	y_perso--;
  	}
}

function gameover() {
//  pouet3.play();
//  pouet3.rewind();
  	coeur3 = loadImage("data/img/heart_bw.png");
  	nbre_coeur = 0;
//  bg.pause();
//  gameover.play();
//  gameover.rewind();
//  menu.play();

  	image(fond_go, 0, 0);
  	textAlign(CENTER);
  	fill(255);
  	textFont(font2);
  	textSize(100);
  	text("GAME OVER", width/2, 80);
  	textFont(font2);
  	textSize(30);
  	text("Press R to replay or M to go to the main menu", width/2, 480);
  	textSize(32);
  	text("This is a demo version.\n You can download the full game below the demo.", width/2, 270);
}

function rejouer() {
  	nbre_coeur = 3;
	score = 0;
 	haut = 0;
  	bas = 0;
  	y_balle = random(0, 460);
  	y_ballespe = random(0, 460);
  	y_perso = 215;
  	x_fond = 0;
  	x_fond2 = 500;
  	x_balle = 500;
  	x_ballespe = 730;
  	vitesse_perso = 6.0;
  	vitesse_bf = 2.5;
//  bg.rewind();
  	coeur = loadImage("data/img/heart.png");
  	coeur2 = loadImage("data/img/heart.png");
  	coeur3 = loadImage("data/img/heart.png");
}

function keyReleased() {
  if ((keyCode == UP_ARROW) && (ecran == 1)) {
    haut = 0;
  } else if ((keyCode == DOWN_ARROW) && (ecran == 1)) {
    bas = 0;
  }
}

function keyPressed() {
  if ((keyCode == UP_ARROW) && (ecran == 1)) {
    haut = 1;
  } else if ((keyCode == DOWN_ARROW) && (ecran == 1)) {
    bas = 1;
  }
}

function keyTyped() {
  if (ecran == 2 && (key == 'r' || key == 'R')) {
    loop();
    ecran = 1;
    rejouer();
//    menu.pause();
//    menu.rewind();
  } else if (ecran == 2 && (key == 'm' || key == 'M')) {
    loop();
    ecran = 0;
    rejouer();
  }
}

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);