//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct = 360; timeIni = 360; timeBon = 0;
var successes = 0; successesMax = 1; attempts = 0; attemptsMax = 1;
var score = 0; scoreMax = 1; scoreInc = 1; scoreDec = 1;
var typeGame = 0;
var tiTime = false;
var tiTimeType = 0;
var tiButtonTime = true;
var textButtonTime = "Comenzar";
var tiSuccesses = false;
var tiAttempts = false;
var tiScore = false;
var startTime; var tiAudio = false;
var colorBack = "#FFFFFF"; colorButton = "#91962F"; colorText = "#000000"; colorSele = "#FF8000";
var goURLNext = false; goURLRepeat = false; tiAval = false;
var scoOk = 0; scoWrong = 0; scoOkDo = 0; scoWrongDo = 0; scoMessage = ""; scoPtos = 10;
var fMenssage = "Verdana, Geneva, sans-serif";
var fActi = "Verdana, Geneva, sans-serif";
var fDefs = "Verdana, Geneva, sans-serif";
var fEnun = "Verdana, Geneva, sans-serif";
var timeOnMessage = 5; messageOk = "Completado"; messageTime = ""; messageError = "Mal"; messageErrorG = "Mal"; messageAttempts = ""; isShowMessage = false;
var urlOk = ""; urlTime = ""; urlError = ""; urlAttempts = "";
var goURLOk = "_blank"; goURLTime = "_blank"; goURLAttempts = "_blank"; goURLError = "_blank";
borderOk = "#008000"; borderTime = "#FF0000"; borderError = "#FF0000"; borderAttempts = "#FF0000";
var wordsGame = "MV8y"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement) {
    var valueZindex = 0; capas = document.getElementsByTagName(typeElement);
    for (i = 0; i < capas.length; i++) { if (parseInt($(capas[i]).css("z-index"), 10) > valueZindex) { valueZindex = parseInt($(capas[i]).css("z-index"), 10); } } return valueZindex;
}
var col = 0; row = 0; writeDir = 0;
var cw = [["", "", "", "Qw==", "", "", "", "RA==", "", "", "", "", ""], ["VQ==", "Tg==", "SQ==", "Tw==", "Tg==", "", "", "SQ==", "", "", "", "", ""], ["", "", "", "Tg==", "", "", "", "Rg==", "", "", "", "", ""], ["", "", "", "Qw==", "", "", "", "RQ==", "", "", "", "", ""], ["", "", "", "QQ==", "", "", "", "Ug==", "", "", "", "Qw==", ""], ["", "SQ==", "Tg==", "VA==", "RQ==", "Ug==", "Uw==", "RQ==", "Qw==", "Qw==", "SQ==", "Tw==", "Tg=="], ["", "", "", "RQ==", "", "", "", "Tg==", "", "", "", "TQ==", ""], ["", "", "", "Qg==", "", "", "", "Qw==", "", "", "", "UA==", ""], ["", "", "", "Tg==", "", "", "", "SQ==", "", "", "", "TA==", ""], ["", "", "", "QQ==", "", "", "", "QQ==", "", "", "", "RQ==", ""], ["", "", "", "Qw==", "", "", "", "", "", "", "", "TQ==", ""], ["", "", "", "SQ==", "", "", "", "", "", "", "", "RQ==", ""], ["", "", "", "Tw==", "", "", "", "", "", "", "", "Tg==", ""], ["", "", "", "Tg==", "", "", "", "", "", "", "", "VA==", ""], ["", "", "", "", "", "", "", "", "", "", "", "Tw==", ""]];
var x1 = [1, 4, 2, 8, 12];
var y1 = [2, 1, 6, 1, 5];
var x2 = [5, 4, 13, 8, 12];
var y2 = [2, 14, 6, 10, 15];
var imaCW = ["", "", "", "", ""];
var audioCW = ["", "", "", "", ""];
var defCW = ["La unión de dos lenguajes es un nuevo lenguaje que contiene todas las cadenas que pertenecen a a ambos lenguajes.", "Dos lenguajes produce un lenguaje que contiene todas las cadenas formadas al concatenar ambos lenguajes.", "Es el conjunto de las cadenas que pertenecen a ambos lenguajes.", "Es el conjunto de las cadenas que pertenecen a L1 pero no a L2.", "Es el conjunto de todas las cadenas posibles que no están en L."];
var altCW = ["", "", "", "", ""];
var colNum = 13;
var rowNum = 15;
