{"filter":false,"title":"demo.js","tooltip":"/demo.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":149,"column":29},"end":{"row":149,"column":30},"action":"remove","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":150,"column":10},"end":{"row":150,"column":11},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":150,"column":11},"end":{"row":150,"column":12},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":129},"end":{"row":149,"column":133},"action":"remove","lines":["Knof"]},{"start":{"row":149,"column":129},"end":{"row":149,"column":130},"action":"insert","lines":["\""]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":130},"end":{"row":149,"column":131},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":131},"end":{"row":149,"column":132},"action":"insert","lines":["\""]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":130},"end":{"row":149,"column":131},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":131},"end":{"row":149,"column":132},"action":"insert","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":132},"end":{"row":149,"column":133},"action":"insert","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":132},"end":{"row":149,"column":133},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":132},"end":{"row":149,"column":133},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":133},"end":{"row":149,"column":146},"action":"insert","lines":["res[0].weight"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":105},"end":{"row":149,"column":124},"action":"remove","lines":["kreirajEHRzaBolnika"]},{"start":{"row":149,"column":105},"end":{"row":149,"column":106},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":106},"end":{"row":149,"column":107},"action":"insert","lines":["a"]},{"start":{"row":149,"column":107},"end":{"row":149,"column":108},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":108},"end":{"row":149,"column":109},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":109},"end":{"row":149,"column":110},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":110},"end":{"row":149,"column":111},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":111},"end":{"row":149,"column":112},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":112},"end":{"row":149,"column":113},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":113},"end":{"row":149,"column":114},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":114},"end":{"row":149,"column":115},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":115},"end":{"row":149,"column":116},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":116},"end":{"row":149,"column":117},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":117},"end":{"row":149,"column":118},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":118},"end":{"row":149,"column":119},"action":"insert","lines":["W"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":119},"end":{"row":149,"column":120},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":120},"end":{"row":149,"column":121},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":121},"end":{"row":149,"column":122},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":122},"end":{"row":149,"column":123},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":123},"end":{"row":149,"column":124},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":118},"end":{"row":149,"column":119},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":118},"end":{"row":149,"column":119},"action":"remove","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":220,"column":0},"end":{"row":221,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":221,"column":0},"end":{"row":222,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":221,"column":0},"end":{"row":244,"column":1},"action":"insert","lines":["function preberiEHRodBolnika() {","\tsessionId = getSessionId();","","\tvar ehrId = $(\"#preberiEHRid\").val();","","\tif (!ehrId || ehrId.trim().length == 0) {","\t\t$(\"#preberiSporocilo\").html(\"<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevan podatek!\");","\t} else {","\t\t$.ajax({","\t\t\turl: baseUrl + \"/demographics/ehr/\" + ehrId + \"/party\",","\t\t\ttype: 'GET',","\t\t\theaders: {\"Ehr-Session\": sessionId},","\t    \tsuccess: function (data) {","\t\t\t\tvar party = data.party;","\t\t\t\t$(\"#preberiSporocilo\").html(\"<span class='obvestilo label label-success fade-in'>Bolnik '\" + party.firstNames + \" \" + party.lastNames + \"', ki se je rodil '\" + party.dateOfBirth + \"'.</span>\");","\t\t\t\tconsole.log(\"Bolnik '\" + party.firstNames + \" \" + party.lastNames + \"', ki se je rodil '\" + party.dateOfBirth + \"'.\");","\t\t\t},","\t\t\terror: function(err) {","\t\t\t\t$(\"#preberiSporocilo\").html(\"<span class='obvestilo label label-danger fade-in'>Napaka '\" + JSON.parse(err.responseText).userMessage + \"'!\");","\t\t\t\tconsole.log(JSON.parse(err.responseText).userMessage);","\t\t\t}","\t\t});","\t}\t","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":221,"column":9},"end":{"row":221,"column":28},"action":"remove","lines":["preberiEHRodBolnika"]},{"start":{"row":221,"column":9},"end":{"row":221,"column":10},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":221,"column":10},"end":{"row":221,"column":11},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":221,"column":11},"end":{"row":221,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":221,"column":12},"end":{"row":221,"column":13},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":221,"column":13},"end":{"row":221,"column":14},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":221,"column":14},"end":{"row":221,"column":15},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":221,"column":15},"end":{"row":221,"column":16},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":221,"column":16},"end":{"row":221,"column":17},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":221,"column":17},"end":{"row":221,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":221,"column":16},"end":{"row":221,"column":18},"action":"remove","lines":["de"]},{"start":{"row":221,"column":16},"end":{"row":221,"column":28},"action":"insert","lines":["deatilWeight"]}]}],[{"group":"doc","deltas":[{"start":{"row":221,"column":16},"end":{"row":221,"column":17},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":221,"column":15},"end":{"row":221,"column":16},"action":"remove","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":111},"end":{"row":149,"column":112},"action":"remove","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":149,"column":111},"end":{"row":149,"column":112},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":235,"column":4},"end":{"row":235,"column":197},"action":"remove","lines":["$(\"#preberiSporocilo\").html(\"<span class='obvestilo label label-success fade-in'>Bolnik '\" + party.firstNames + \" \" + party.lastNames + \"', ki se je rodil '\" + party.dateOfBirth + \"'.</span>\");"]},{"start":{"row":235,"column":4},"end":{"row":235,"column":137},"action":"insert","lines":["// $(\".patient-weight\").html(\"<span class='obvestilo label label-success fade-in'>\" + res[0].weight + \" \" + res[0].unit + \"</span>\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":236,"column":4},"end":{"row":236,"column":5},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":236,"column":5},"end":{"row":236,"column":6},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":235,"column":6},"end":{"row":235,"column":7},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":235,"column":5},"end":{"row":235,"column":6},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":235,"column":4},"end":{"row":235,"column":5},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":230,"column":3},"end":{"row":230,"column":58},"action":"remove","lines":["url: baseUrl + \"/demographics/ehr/\" + ehrId + \"/party\","]},{"start":{"row":230,"column":3},"end":{"row":230,"column":52},"action":"insert","lines":["url: baseUrl + \"/view/\" + ehrId + \"/\" + \"weight\","]}]}],[{"group":"doc","deltas":[{"start":{"row":233,"column":25},"end":{"row":233,"column":29},"action":"remove","lines":["data"]},{"start":{"row":233,"column":25},"end":{"row":233,"column":26},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":233,"column":26},"end":{"row":233,"column":27},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":233,"column":27},"end":{"row":233,"column":28},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":234,"column":4},"end":{"row":234,"column":27},"action":"remove","lines":["var party = data.party;"]},{"start":{"row":234,"column":4},"end":{"row":239,"column":65},"action":"insert","lines":["//var results = \"<table class='table table-striped table-hover'><tr><th>Datum in ura</th><th class='text-right'>Telesna temperatura</th></tr>\";","\t\t\t        /*for (var i in res) {","\t\t\t           // results += \"<tr><td>\" + res[i].time + \"</td><td class='text-right'>\" + res[i].temperature + \" \" \t+ res[i].unit + \"</td>\";","\t\t\t        }*/","\t\t\t        //results += \"</table>\";","\t\t\t        //$(\"#rezultatMeritveVitalnihZnakov\").append(results);"]}]}],[{"group":"doc","deltas":[{"start":{"row":235,"column":0},"end":{"row":235,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":236,"column":0},"end":{"row":236,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":237,"column":0},"end":{"row":237,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":238,"column":0},"end":{"row":238,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":239,"column":0},"end":{"row":239,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":235,"column":11},"end":{"row":235,"column":12},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":235,"column":10},"end":{"row":235,"column":11},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":237,"column":12},"end":{"row":237,"column":13},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":237,"column":11},"end":{"row":237,"column":12},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":240,"column":91},"end":{"row":240,"column":92},"action":"remove","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":240,"column":91},"end":{"row":240,"column":92},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":240,"column":113},"end":{"row":240,"column":114},"action":"remove","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":240,"column":113},"end":{"row":240,"column":114},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":240,"column":4},"end":{"row":240,"column":134},"action":"remove","lines":["$(\".patient-weight\").html(\"<span class='obvestilo label label-success fade-in'>\" + res[i].weight + \" \" + res[i].unit + \"</span>\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":236,"column":137},"end":{"row":237,"column":0},"action":"insert","lines":["",""]},{"start":{"row":237,"column":0},"end":{"row":237,"column":13},"action":"insert","lines":["\t\t           "]}]}],[{"group":"doc","deltas":[{"start":{"row":237,"column":13},"end":{"row":237,"column":143},"action":"insert","lines":["$(\".patient-weight\").html(\"<span class='obvestilo label label-success fade-in'>\" + res[i].weight + \" \" + res[i].unit + \"</span>\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":237,"column":17},"end":{"row":237,"column":31},"action":"remove","lines":["patient-weight"]},{"start":{"row":237,"column":17},"end":{"row":237,"column":18},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":237,"column":18},"end":{"row":237,"column":19},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":237,"column":19},"end":{"row":237,"column":20},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":237,"column":20},"end":{"row":237,"column":21},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":237,"column":21},"end":{"row":237,"column":22},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":237,"column":22},"end":{"row":237,"column":23},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":237,"column":16},"end":{"row":237,"column":17},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":237,"column":16},"end":{"row":237,"column":17},"action":"insert","lines":["#"]}]}],[{"group":"doc","deltas":[{"start":{"row":242,"column":1},"end":{"row":242,"column":124},"action":"remove","lines":["\t\t\t//console.log(\"Bolnik '\" + party.firstNames + \" \" + party.lastNames + \"', ki se je rodil '\" + party.dateOfBirth + \"'.\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":242,"column":0},"end":{"row":242,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":241,"column":4},"end":{"row":242,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":244,"column":8},"end":{"row":244,"column":24},"action":"remove","lines":["preberiSporocilo"]},{"start":{"row":244,"column":8},"end":{"row":244,"column":9},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":244,"column":9},"end":{"row":244,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":244,"column":10},"end":{"row":244,"column":11},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":244,"column":11},"end":{"row":244,"column":12},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":244,"column":12},"end":{"row":244,"column":13},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":244,"column":13},"end":{"row":244,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":237,"column":13},"end":{"row":237,"column":135},"action":"remove","lines":["$(\"#detail\").html(\"<span class='obvestilo label label-success fade-in'>\" + res[i].weight + \" \" + res[i].unit + \"</span>\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":241,"column":4},"end":{"row":241,"column":126},"action":"insert","lines":["$(\"#detail\").html(\"<span class='obvestilo label label-success fade-in'>\" + res[i].weight + \" \" + res[i].unit + \"</span>\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":241,"column":3},"end":{"row":241,"column":4},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":241,"column":4},"end":{"row":241,"column":5},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":236,"column":14},"end":{"row":236,"column":15},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":236,"column":13},"end":{"row":236,"column":14},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":236,"column":92},"end":{"row":236,"column":103},"action":"remove","lines":["temperature"]},{"start":{"row":236,"column":92},"end":{"row":236,"column":98},"action":"insert","lines":["weight"]}]}],[{"group":"doc","deltas":[{"start":{"row":239,"column":11},"end":{"row":239,"column":12},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":239,"column":10},"end":{"row":239,"column":11},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":240,"column":11},"end":{"row":240,"column":12},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":240,"column":10},"end":{"row":240,"column":11},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":240,"column":14},"end":{"row":240,"column":43},"action":"remove","lines":["rezultatMeritveVitalnihZnakov"]},{"start":{"row":240,"column":14},"end":{"row":240,"column":20},"action":"insert","lines":["detail"]}]}]]},"ace":{"folds":[],"scrolltop":3501.5,"scrollleft":0,"selection":{"start":{"row":240,"column":20},"end":{"row":240,"column":20},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":217,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1418459283054,"hash":"fc6f3f9233d215cbef6f97ca8e20d254d27410ea"}