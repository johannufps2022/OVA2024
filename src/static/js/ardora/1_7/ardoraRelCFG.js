//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="felicidades por relacionarlos correctamente"; messageTime="se acabo el tiempo"; messageError="error"; messageErrorG="error"; messageAttempts="vuelve lo a intentar"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkXzRfQUZELUFGTkRf"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Autómata Finito Determinista (AFD)</p>","<p>Autómata Finito No Determinista (AFND)</p>","<p>Estado de aceptación</p>","<p>Cadena de entrada</p>","<p>Equivalencia de autómatas</p>","<p>Alfabeto de entrada</p>","<p>Minimización de autómatas</p>","<p>Lenguaje reconocido</p>"];
var iL=["","","","","","","",""];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Autómata en el que, para cada par (estado, símbolo), existe exactamente una transición.</p>","<p>Estado en el que el autómata se encuentra al final de un cálculo exitoso.</p>","<p>Propiedad que indica que dos autómatas reconocen el mismo lenguaje.</p>","<p>Conjunto de todas las cadenas que llevan al autómata a un estado de aceptación.</p>","<p>Autómata en el que, para cada par (estado, símbolo), puede haber cero, una o más transiciones.</p>","<p>Secuencia finita de símbolos del alfabeto de entrada.</p>","<p>Conjunto finito de símbolos que el autómata puede leer como entrada.</p>","<p>Proceso de encontrar un AFD con el menor número de estados posible que reconozca el mismo lenguaje que otro AFD.</p>"]; ansRL=["MA==","NA==","MQ==","NQ==","Mg==","Ng==","Nw==","Mw=="];
var iR=["","","","","","","",""];
var auR=[1,3,5,8,2,4,6,7];
