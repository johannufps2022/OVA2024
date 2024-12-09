//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="felicitaciones"; messageTime="se acabo el tiempo"; messageError="vuelvelo a intentar"; messageErrorG="vuelvelo a intentar"; messageAttempts="muchos intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkX0U="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Una gramática formal es un conjunto de reglas que describen la sintaxis de un lenguaje formal.","Las gramáticas formales solo se utilizan en el campo de la lingüística.","Las gramáticas regulares son las más restrictivas de todas las gramáticas formales. (","Una gramática libre de contexto puede describir cualquier lenguaje natural.","La gramática de Chomsky es un ejemplo de una gramática formal."];
var answers1=["MXZlcmRhZGVybw==","MGZhbHNv"];
var answers2=["MWZhbHNv","MHZlcmRhZGVybw=="];
var answers3=["MXZlcmRhZGVybw==","MGZhbHNv"];
var answers4=["MWZhbHNv","MHZlcmRhZGVybw=="];
var answers5=["MXZlcmRhZGVybw==","MGZhbHNv"];
var ans=[answers1,answers2,answers3,answers4,answers5];
var err=["","","","",""];
var ima=["","","","",""];
var mp4=["","","","",""];
var ogv=["","","","",""];
var alt=["","","","",""];
var info=["","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Actividad_E_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
