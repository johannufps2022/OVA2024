//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=2;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>La sintaxis de las expresiones regulares puede variar ligeramente entre diferentes <input aria-label="Item 1" type="text" name="item1" id="item1" class="ardoraInput" >de programación, aunque los conceptos básicos son los mismos. </p><p>  </p><p> </p>','<p>Las expresiones regulares se utilizan comúnmente para <input aria-label="Item 2" type="text" name="item2" id="item2" class="ardoraInput" > y manipular texto, como validar datos de formularios o extraer información de archivos. </p><p>  </p><p> </p>','<p>Una <input aria-label="Item 3" type="text" name="item3" id="item3" class="ardoraInput" >es una secuencia de caracteres que define un patrón de búsqueda dentro de un texto. </p><p>  </p><p> </p>'];
var b=["Mg==","Mw==","MQ=="];
var c=[7,17,9];
var answers=["dmFsaWRhcg==","ZXhwcmVzacOzbiByZWd1bGFy","bGVuZ3VhamVz"];
var a=["2","3","1"];
var itemCorr=["0","0","0"];
var itemHelp=["","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="YWN0aXZpZGFkXzNfZXhwcmVzaW9uZXNfcmVndWxhcmVzXw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=true;
var fHelp="Verdana, Geneva, sans-serif";
var imaW=["300","300","300","300"];
var imaH=["225","225","225","225"];
var info=["","","",""];
