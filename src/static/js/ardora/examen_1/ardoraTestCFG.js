//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="felicidades por completar el cuestionario"; messageTime="se acabo el tiempo"; messageError="vuelve a intentarlo"; messageErrorG="vuelve a intentarlo"; messageAttempts="demasioados intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkX3ByZXZpbw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Qué es un alfabeto en el contexto de los lenguajes formales?","¿Qué es una cadena?","¿Cuál de las siguientes NO es una operación común en lenguajes formales?","¿Cuál de las siguientes expresiones regulares representa todas las cadenas que comienzan con 'a' y terminan con 'b'?","¿Qué es una gramática formal?","¿Cuáles son los componentes principales de una gramática formal?","¿Cuál es el tipo de gramática más restrictivo en la jerarquía de Chomsky?","¿Cuál es la característica principal de una gramática en forma normal de Chomsky?","¿Cuál es la característica principal de una gramática en forma normal de Greibach?","¿Qué representa un árbol de derivación?"];
var answers1=["MVVuIGNvbmp1bnRvIGZpbml0byBkZSBzw61tYm9sb3M=","MFVuIGNvbmp1bnRvIGluZmluaXRvIGRlIHBhbGFicmFzLg==","MFVuIGNvbmp1bnRvIGRlIHJlZ2xhcyBncmFtYXRpY2FsZXMu","MFVuYSBjYWRlbmEgZGUgc8OtbWJvbG9zLg=="];
var answers2=["MVVuYSBzZWN1ZW5jaWEgZmluaXRhIGRlIHPDrW1ib2xvcyBkZSB1biBhbGZhYmV0by4=","MFVuIGNvbmp1bnRvIGluZmluaXRvIGRlIHPDrW1ib2xvcy4=","MFVuYSByZWdsYSBncmFtYXRpY2FsLg==","MFVuIGxlbmd1YWplIGZvcm1hbC4="];
var answers3=["MURlcml2YWNpw7NuLg==","MFVuacOzbi4=","MEludGVyc2VjY2nDs24u","MENvbXBsZW1lbnRvLg=="];
var answers4=["MWEoYXxiKSpi","MGFi","MGEuYg=="];
var answers5=["MVVuIGNvbmp1bnRvIGRlIHJlZ2xhcyBwYXJhIGdlbmVyYXIgbGVuZ3VhamVzIGZvcm1hbGVzLg==","MFVuIGNvbmp1bnRvIGRlIHJlZ2xhcyBwYXJhIGdlbmVyYXIgbGVuZ3VhamVzIG5hdHVyYWxlcy4=","MFVuIGF1dMOzbWF0YSBmaW5pdG8u","MFVuYSBleHByZXNpw7NuIHJlZ3VsYXIu"];
var answers6=["MUFsZmFiZXRvIHRlcm1pbmFsLCBhbGZhYmV0byBubyB0ZXJtaW5hbCwgc8OtbWJvbG8gaW5pY2lhbCwgcmVnbGFzIGRlIHByb2R1Y2Npw7NuLg==","MEVzdGFkb3MsIGFsZmFiZXRvIGRlIGVudHJhZGEsIGZ1bmNpw7NuIGRlIHRyYW5zaWNpw7NuLCBlc3RhZG8gaW5pY2lhbCwgZXN0YWRvcyBkZSBhY2VwdGFjacOzbi4=","MEV4cHJlc2lvbmVzIHJlZ3VsYXJlcyB5IG9wZXJhZG9yZXMu","MMOBcmJvbCBzaW50w6FjdGljbyB5IGRlcml2YWNpw7NuLg=="];
var answers7=["MVRpcG8gMyAocmVndWxhcmVzKS4=","MFRpcG8gMCAocmVjdXJzaXZhbWVudGUgZW51bWVyYWJsZXMp","MFRpcG8gMSAoc2Vuc2libGVzIGFsIGNvbnRleHRvKQ==","MFRpcG8gMiAobGlicmVzIGRlIGNvbnRleHRvKQ=="];
var answers8=["MVRvZGFzIGxhcyByZWdsYXMgdGllbmVuIGV4YWN0YW1lbnRlIHVuIHPDrW1ib2xvIG5vIHRlcm1pbmFsIGVuIGVsIGxhZG8gaXpxdWllcmRvLg==","MFRvZGFzIGxhcyByZWdsYXMgdGllbmVuIGV4YWN0YW1lbnRlIGRvcyBzw61tYm9sb3MgdGVybWluYWxlcyBlbiBlbCBsYWRvIGRlcmVjaG8u","MFRvZGFzIGxhcyByZWdsYXMgdGllbmVuIHVuIHNvbG8gc8OtbWJvbG8gdGVybWluYWwgZW4gZWwgbGFkbyBkZXJlY2hvLg==","MFRvZGFzIGxhcyByZWdsYXMgdGllbmVuIHVuIHNvbG8gc8OtbWJvbG8gbm8gdGVybWluYWwgZW4gZWwgbGFkbyBkZXJlY2hvLg=="];
var answers9=["MVRvZGFzIGxhcyByZWdsYXMgdGllbmVuIHVuIHPDrW1ib2xvIHRlcm1pbmFsIGVuIGxhIHByaW1lcmEgcG9zaWNpw7NuIGRlbCBsYWRvIGRlcmVjaG8u","MFRvZGFzIGxhcyByZWdsYXMgdGllbmVuIHVuIHPDrW1ib2xvIG5vIHRlcm1pbmFsIGVuIGxhIHByaW1lcmEgcG9zaWNpw7NuIGRlbCBsYWRvIGRlcmVjaG8u","MFRvZGFzIGxhcyByZWdsYXMgdGllbmVuIGFsIG1lbm9zIHVuIHPDrW1ib2xvIHRlcm1pbmFsIGVuIGVsIGxhZG8gZGVyZWNoby4=","MFRvZGFzIGxhcyByZWdsYXMgdGllbmVuIGFsIG1lbm9zIHVuIHPDrW1ib2xvIG5vIHRlcm1pbmFsIGVuIGVsIGxhZG8gZGVyZWNoby4="];
var answers10=["MUxhIGVzdHJ1Y3R1cmEgc2ludMOhY3RpY2EgZGUgdW5hIGNhZGVuYSBnZW5lcmFkYSBwb3IgdW5hIGdyYW3DoXRpY2Eu","MExhIHNlY3VlbmNpYSBkZSBwYXNvcyBwYXJhIGdlbmVyYXIgdW5hIGNhZGVuYS4=","MFVuIGF1dMOzbWF0YSBmaW5pdG8gcXVlIHJlY29ub2NlIGVsIGxlbmd1YWplLg==","MFVuYSBleHByZXNpw7NuIHJlZ3VsYXIgZXF1aXZhbGVudGUgYSBsYSBncmFtw6F0aWNhLg=="];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10];
var err=["","","","","","","","","",""];
var ima=["","","","","","","","","",""];
var mp4=["","","","","","","","","",""];
var ogv=["","","","","","","","","",""];
var alt=["","","","","","","","","",""];
var info=["","","","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Actividad_previo_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
