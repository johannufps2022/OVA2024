//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=0;
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
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="felicitaciones "; messageTime="se acabo el tiempo"; messageError="vuelve a intentarlo"; messageErrorG="vuelve a intentarlo"; messageAttempts="vuelve a hacerlo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkX0I="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["R1JBTcOBVElDQQ==","SkVSQVJRVcONQQ==","Q0hPTVNLWQ==","QVVUw5NNQVRB","TEVOR1VBSkU=","","","","",""];imaW=["","","","","","","","","",""];queW=["Conjunto de reglas que definen un lenguaje formal, clasificadas por Chomsky en diferentes tipos según su complejidad.","Clasificación de las gramáticas formales en diferentes niveles, desde las más simples a las más complejas.","Lingüista estadounidense que desarrolló una teoría formal de la gramática y propuso una clasificación de los lenguajes.","Máquina abstracta que reconoce lenguajes formales y está asociada a cada nivel de la jerarquía de Chomsky.stá asociada a cada nivel de la jerarquía de Chomsky.","Conjunto de expresiones generadas por una gramática formal y clasificadas según su complejidad en la jerarquía de Chomsky.","","","","",""];var wordsL=[9,9,7,8,8,"","","","",""];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="Actividad_B_resources/media/"; textBNext="";
