//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){if (tiAval){parent.iniciaActividade()}
if ((tiTime) && (tiButtonTime)){paintButtonTime();}else{showText();}$(":input").attr("autocomplete","off");$(":input").attr("spellcheck",false);}
function showText(){
document.getElementById("ardoraAct").innerHTML=txtC[indexTXT]+'<canvas id="ardoraActCanvas" width="2px" height="2px"></canvas><canvas id="ardoraHelpCanvas" width="2px" height="2px"></canvas>';
resizeCanvas();cssColors()
$("#ardoraAct img").css({width:imaW[indexTXT]+"px",height:imaH[indexTXT]+"px",maxWidth:"100%",maxHeight:"100%",cursor: "pointer",display:"block"});
$(".ardoraInput").mouseenter(function () {var indexHelp=parseInt($(this).attr("name").substring(4));if ($.trim(itemHelp[indexHelp-1])){paintHelp($(this));}
}).mouseleave(function () {document.getElementById("ardoraHelpCanvas").style["visibility"]="hidden";});
$(".imaup").keydown(function(e) {if (e.which != 9) {$(this).click();}});
$(".imaup").on("touchstart click", function() {var iu=$(this).attr("src").split(".");var newDivBig = $('<div id="imaForTagBig"  tabindex="0"><span class="background-image" role="img" aria-label="' + $(this).attr("alt") + '"></span></div>);');
newDivBig.css({height: "100%",width: "100%",position: "fixed",padding: "0px",margin: "0px",backgroundColor: "rgba(255,253,253,0.5)",top: "0",left: "0",display: "flex",alignItems: "center",justifyContent: "center",zindex: 500});
newDivBig.html("<img id='imaBig' alt='" + $("#ardoraAct img").attr("alt") + "' src="+$("#ardoraAct img").attr("src")+" height='auto' width='auto'>");
newDivBig.mousedown(function(e) {$("#imaForTagBig").remove();});
$("body").append(newDivBig);
if (info[indexTXT].localeCompare("") != 0) {$("#imaForTagBig").append('<button id="ifbut" tabindex="0">🛈</button>');$("#imaForTagBig").append('<div id="infoText" class="infoText">' + info[indexTXT] + '</div>');
document.getElementById("ifbut").addEventListener("click", toggleInfoText);document.getElementById("ifbut").addEventListener("keydown", function(e) {if (e.key !== "Tab") {e.preventDefault();toggleInfoText();}});
$("#ifbut").mousedown(function(e) {e.stopPropagation();});
function toggleInfoText(event) {if (event) {event.stopPropagation();};var textDiv = document.getElementById("infoText");var infoButton = document.getElementById("ifbut");if (textDiv.style.display === "none" || textDiv.style.display === "") {
textDiv.style.display = "block";infoButton.style.bottom = 'calc(5px + ' + textDiv.offsetHeight + 'px)';} else {textDiv.style.display = "none";infoButton.style.bottom = "0px";}}}
$("#imaForTagBig img").css({maxWidth: "90vw",maxHeight: "90vh",margin: "5px",display: "block"});$("#imaBig").css({backgroundColor:"white",display:"inline-block",position: "relative"});
$("#imaForTagBig").focus();$("#imaForTagBig").keydown(function(e) {if (e.which == 27) {newDivBig.mousedown();}});});
}
function paintHelp(item){document.getElementById("ardoraHelpCanvas").style.zIndex=3;var canvas = document.getElementById("ardoraHelpCanvas");canvas.width = canvas.width;var contexto = canvas.getContext("2d");
contexto.font="14px " + fHelp; var indexHelp=parseInt($(item).attr("name").substring(4));var metricsW = contexto.measureText(itemHelp[indexHelp-1]).width+20;
var metricsH = 10+14+10;$("#ardoraHelpCanvas").attr({"width": metricsW,"height": metricsH});var topHelp=Math.round($(item).position().top)-metricsH;
var leftHelp=Math.round($(item).position().left)+10-(canvas.width/2);var xPoint=0;if (leftHelp<5){leftHelp=5;xPoint=Math.round($(item).position().left)+10;};
document.getElementById("ardoraHelpCanvas").style["visibility"]="visible";document.getElementById("ardoraHelpCanvas").style["position"]="absolute";document.getElementById("ardoraHelpCanvas").style["top"]=topHelp.toString()+"px";
document.getElementById("ardoraHelpCanvas").style["left"]=leftHelp.toString()+"px";
contexto.fillStyle=colorSele;var gcolorSele=colorSele;colorSele="#FF8000";paintBubble(contexto,0,0,canvas.width-10, canvas.height-3,xPoint,10);colorSele=gcolorSele;
contexto.beginPath();contexto.lineWidth="1";contexto.textAlign="left";
contexto.font="14px " + fHelp;contexto.shadowBlur = 0;contexto.shadowOffsetX = 0;contexto.shadowOffsetY = 0;
contexto.fillStyle="#000000";contexto.fillText(itemHelp[indexHelp-1],5,14);contexto.fill();}
function randomSort(){};
function resizeCanvas(){var canWidth = $("#ardoraAct").css("width").replace("px", "");var canHeight = $("#ardoraAct").css("height").replace("px", "");
$("#ardoraActCanvas").attr({"width": canWidth,"height": canHeight});$("#ardoraActCanvasAnim").attr({"width": canWidth,"height": canHeight});};
function isCorrect(){successes=consolidateSuccess;score=consolidateScore;var correct=true;for (j=1; j<41; j++){var numItem=j;var nameItem="item"+numItem.toString();
var theItem=document.getElementById(nameItem);var ansCorrect="";if (theItem != null){
for (i=0; i<a.length; i++){if (a[i]==numItem){
var ans=$.trim(completaWords(answers[i])).toUpperCase(); var isOk=true;for (t=0;t<c[i];t++){if ($.trim(ans.charAt(t))!=$.trim(theItem.value.charAt(t)).toUpperCase()){isOk=false;}}if ($.trim(theItem.value).length!=c[i]){isOk = false;}
if (isOk){ansCorrect=theItem.value;}}}
if (theItem.value.toUpperCase()==ansCorrect.toUpperCase() && $.trim(theItem.value)!=""){
itemCorr[numItem-1]="1";consolidateSuccess++;consolidateScore=consolidateScore+scoreInc;
score = score + scoreInc;successes++;}
else{
consolidateScore=consolidateScore-scoreDec;
score = score - scoreDec;correct=false;}}}if (correct) {if (indexTXT==txtC.length-1){showMessage("Ok");$("#buttonOk").remove();}else{
indexTXT++;showText();consolidateSuccess=successes;consolidateScore=score;
timeAct = timeAct + timeBon;}}else{attempts++;if (tiAttempts) {
if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){for (i = 0; i < itemCorr.length; i++) {itemCorr[i]="1";}showCorrect();}
function paintBack(){showText();}
function completaWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
function showCorrect(){var output="";var txtCorr=document.getElementById("ardoraAct").innerHTML;
for (j = 1; j < 41; j++) {var numItem = j;var nameItem = "item" + numItem.toString();var theItem = document.getElementById(nameItem);
if (theItem != null) {if (itemCorr[j-1]!="0"){var pos=txtCorr.indexOf(nameItem);var ans="";
posItem=txtCorr.indexOf(">",pos)+1;
for (i = 0; i < a.length; i++) {if (a[i] == numItem) {if (parseInt(completaWords(b[i])) == numItem) {ans = answers[i];}}}
output = [txtCorr.slice(0, posItem),"<b>"+completaWords(ans)+"</b>", txtCorr.slice(posItem)].join("");
var it="input#"+nameItem;
document.getElementById("ardoraAct").innerHTML=output;$(it).remove();txtCorr=document.getElementById("ardoraAct").innerHTML;}}}
$(".ardoraInput").mouseenter(function () {var indexHelp=parseInt($(this).attr("name").substring(4));if ($.trim(itemHelp[indexHelp-1])){
paintHelp($(this));}}).mouseleave(function () {document.getElementById("ardoraHelpCanvas").style["visibility"]="hidden";});}
