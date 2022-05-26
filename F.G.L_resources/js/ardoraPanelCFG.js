//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=140; timeIni=140; timeBon=10;
var successes=0; successesMax=16; attempts=0; attemptsMax=1;
var score=0; scoreMax=16; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#D3ECFE"; colorButton="#0080C0"; colorText="#FF0000"; colorSele="#008080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones, eres muy bueno en este juego"; messageTime="Lo lamento, el tiempo se ha agotado"; messageError="Incorreto, intenta de nuevo"; messageAttempts="Lo lamento, se han acabado el numero de intentos permitidos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var posX=[168,210,259,299,429,422,407,379,363,347,359,330,311,275,249,172]; var posY=[54,34,47,45,66,88,97,113,138,160,189,217,244,250,266,251];
var coorx=["MTYz", "MjA1", "MjU0", "Mjk0", "NDI0", "NDE3", "NDAy", "Mzc0", "MzU4", "MzQy", "MzU0", "MzI1", "MzA2", "Mjcw", "MjQ0", "MTY3"]; var coory=["NTQ=", "MzQ=", "NDc=", "NDU=", "NjY=", "ODg=", "OTc=", "MTEz", "MTM4", "MTYw", "MTg5", "MjE3", "MjQ0", "MjUw", "MjY2", "MjUx"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; answers=["Costa de Galicia", "Costa verde", "Costa de Cantabria", "Costa Vasca", "Costa Brava", "Costa del Maresme", "Costa del Garraf", "Costa Dorada", "Costa del Azahar", "Costa de Valencia", "Costa Blanca", "Costa Calida", "Costa de Almeria", "Costa Tropical", "Costa del Sol", "Costa de la Luz"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="Ri5HLkw="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
