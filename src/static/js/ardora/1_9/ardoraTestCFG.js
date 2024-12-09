//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
var typeGame=0;
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
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="felicitaciones"; messageTime="se acabo el tiempo"; messageError="vuelvelo a intentar"; messageErrorG="vuelvelo a intentar"; messageAttempts="demasiados intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkX0ZfYXJib2xfZGVfZGVyaXZhY2lvbl8="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Un árbol de derivación representa visualmente una única derivación de una gramática libre de contexto.","Cada nodo interno de un árbol de derivación corresponde a un símbolo terminal","La raíz de un árbol de derivación siempre es el símbolo inicial de la gramática.","Un árbol de derivación puede tener múltiples raíces.","Dos árboles de derivación diferentes pueden representar la misma cadena.","Un árbol de derivación ambíguo representa una cadena que puede ser derivada de múltiples maneras.","Todas las gramáticas libres de contexto generan árboles de derivación únicos para cada cadena."];
var answers1=["MXZlcmRhZGVybw==","MGZhbHNv"];
var answers2=["MWZhbHNv","MHZlcmRhZGVybw=="];
var answers3=["MVZlcmRhZGVybw==","MGZhbHNv"];
var answers4=["MWZhbHNv","MHZlcmRhZGVybw=="];
var answers5=["MXZlcmRhZGVybyk=","MGZhbHNv"];
var answers6=["MXZlcmRhZGVybw==","MGZhbHNv"];
var answers7=["MWZhbHNv","MHZlcmRhZGVybw=="];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7];
var err=["","","","","","",""];
var ima=["","","","","","",""];
var mp4=["","","","","","",""];
var ogv=["","","","","","",""];
var alt=["","","","","","",""];
var info=["","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Actividad_F_arbol_de_derivacion__resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
