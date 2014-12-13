{"filter":false,"title":"demo.js","tooltip":"/demo.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":252,"column":0},"end":{"row":258,"column":12},"action":"remove","lines":["\t\t\t        if(Math.abs( res[0].pulse - 80 ) < 20){","\t\t\t        \tcolor = \"green\";","\t\t\t        }else if(Math.abs( res[0].pulse - 80 ) < 40){","\t\t\t        \tcolor = \"yellow\";","\t\t\t        }else if(Math.abs( res[0].pulse - 80 ) < 60){","\t\t\t        \tcolor = \"red\";","\t\t\t        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":250,"column":15},"end":{"row":250,"column":28},"action":"remove","lines":["patient-pulse"]},{"start":{"row":250,"column":15},"end":{"row":250,"column":31},"action":"insert","lines":["patient-problems"]}]}],[{"group":"doc","deltas":[{"start":{"row":255,"column":12},"end":{"row":255,"column":25},"action":"remove","lines":["patient-pulse"]},{"start":{"row":255,"column":12},"end":{"row":255,"column":28},"action":"insert","lines":["patient-problems"]}]}],[{"group":"doc","deltas":[{"start":{"row":253,"column":1},"end":{"row":253,"column":172},"action":"remove","lines":["\t\t        $(\"#progress-pulse\").html(\"<div class=\\\"progress-bar\\\" style=\\\"width: \" + ( 50*res[0].pulse/80 ) + \"%; height: 20px; background-color: \" + color + \";\\\"></div>\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":253,"column":0},"end":{"row":253,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":252,"column":0},"end":{"row":253,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":11},"end":{"row":252,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":249,"column":17},"end":{"row":249,"column":30},"action":"remove","lines":["patient-pulse"]},{"start":{"row":249,"column":17},"end":{"row":249,"column":33},"action":"insert","lines":["patient-problems"]}]}],[{"group":"doc","deltas":[{"start":{"row":250,"column":10},"end":{"row":250,"column":11},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":250,"column":11},"end":{"row":250,"column":12},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":7},"end":{"row":251,"column":8},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":6},"end":{"row":251,"column":7},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":5},"end":{"row":251,"column":6},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":4},"end":{"row":251,"column":5},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":3},"end":{"row":251,"column":4},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":249,"column":12},"end":{"row":249,"column":13},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":249,"column":11},"end":{"row":249,"column":12},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":249,"column":103},"end":{"row":249,"column":108},"action":"remove","lines":["pulse"]},{"start":{"row":249,"column":103},"end":{"row":249,"column":104},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":249,"column":104},"end":{"row":249,"column":105},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":249,"column":105},"end":{"row":249,"column":106},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":249,"column":106},"end":{"row":249,"column":107},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":249,"column":107},"end":{"row":249,"column":108},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":249,"column":108},"end":{"row":249,"column":109},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":249,"column":109},"end":{"row":249,"column":110},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":249,"column":110},"end":{"row":249,"column":111},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":248,"column":28},"end":{"row":249,"column":0},"action":"insert","lines":["",""]},{"start":{"row":249,"column":0},"end":{"row":249,"column":8},"action":"insert","lines":["\t\t    \t\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":249,"column":8},"end":{"row":255,"column":37},"action":"insert","lines":["var results = \"<table class='table table-striped table-hover'><tr><th>Date</th><th class='text-right'>Weight</th></tr>\";","\t\t        for (var i in res) {","\t\t            results += \"<tr><td>\" + res[i].time + \"</td><td class='text-right'>\" + res[i].weight + \" \" \t+ res[i].unit + \"</td>\";","\t\t           ","\t\t        }","\t\t        results += \"</table>\";","\t\t        $(\"#detail\").html(results);"]}]}],[{"group":"doc","deltas":[{"start":{"row":250,"column":0},"end":{"row":250,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":251,"column":0},"end":{"row":251,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":252,"column":0},"end":{"row":252,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":253,"column":0},"end":{"row":253,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":254,"column":0},"end":{"row":254,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":255,"column":0},"end":{"row":255,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":31},"end":{"row":251,"column":59},"action":"remove","lines":["<td>\" + res[i].time + \"</td>"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":65},"end":{"row":251,"column":71},"action":"remove","lines":["weight"]},{"start":{"row":251,"column":65},"end":{"row":251,"column":66},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":66},"end":{"row":251,"column":67},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":67},"end":{"row":251,"column":68},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":68},"end":{"row":251,"column":69},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":69},"end":{"row":251,"column":70},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":70},"end":{"row":251,"column":71},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":71},"end":{"row":251,"column":72},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":72},"end":{"row":251,"column":73},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":74},"end":{"row":251,"column":97},"action":"remove","lines":["+ \" \" \t+ res[i].unit + "]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":74},"end":{"row":251,"column":75},"action":"insert","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":75},"end":{"row":251,"column":76},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":256,"column":0},"end":{"row":257,"column":144},"action":"remove","lines":["\t\t\t        $(\"#patient-problems\").html(\"<span class='obvestilo label label-success fade-in'>\" + res[0].problems + \"</span>\");","\t\t\t       // $(\"#patient-problems\").html(\"<button type=\\\"button\\\" class=\\\"C3\\\" onclick=\\\"master_deatilPulse()\\\">\" + res[0].pulse + \"</button>\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":255,"column":38},"end":{"row":256,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":256,"column":0},"end":{"row":256,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":255,"column":38},"end":{"row":256,"column":5},"action":"remove","lines":["","\t\t   "]}]}],[{"group":"doc","deltas":[{"start":{"row":255,"column":15},"end":{"row":255,"column":21},"action":"remove","lines":["detail"]},{"start":{"row":255,"column":15},"end":{"row":255,"column":31},"action":"insert","lines":["patient-problems"]}]}],[{"group":"doc","deltas":[{"start":{"row":252,"column":2},"end":{"row":252,"column":3},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":252,"column":1},"end":{"row":252,"column":2},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":252,"column":0},"end":{"row":252,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":84},"end":{"row":252,"column":11},"action":"remove","lines":["","           "]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":72},"end":{"row":251,"column":73},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":244,"column":54},"end":{"row":244,"column":55},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":249,"column":70},"end":{"row":249,"column":126},"action":"remove","lines":["<tr><th>Date</th><th class='text-right'>Weight</th></tr>"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":31},"end":{"row":251,"column":32},"action":"insert","lines":["<"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":32},"end":{"row":251,"column":33},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":33},"end":{"row":251,"column":34},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":34},"end":{"row":251,"column":35},"action":"insert","lines":[">"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":35},"end":{"row":251,"column":36},"action":"insert","lines":["<"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":36},"end":{"row":251,"column":37},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":37},"end":{"row":251,"column":38},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":38},"end":{"row":251,"column":39},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":39},"end":{"row":251,"column":40},"action":"insert","lines":[">"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":35},"end":{"row":251,"column":36},"action":"insert","lines":["O"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":35},"end":{"row":251,"column":36},"action":"remove","lines":["O"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":35},"end":{"row":251,"column":36},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":35},"end":{"row":251,"column":36},"action":"remove","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":35},"end":{"row":251,"column":36},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":35},"end":{"row":251,"column":36},"action":"remove","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":35},"end":{"row":251,"column":36},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":35},"end":{"row":251,"column":36},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":35},"end":{"row":251,"column":36},"action":"insert","lines":["<"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":36},"end":{"row":251,"column":37},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":37},"end":{"row":251,"column":38},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":38},"end":{"row":251,"column":39},"action":"insert","lines":[">"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":39},"end":{"row":251,"column":40},"action":"insert","lines":["<"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":40},"end":{"row":251,"column":41},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":41},"end":{"row":251,"column":42},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":42},"end":{"row":251,"column":43},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":43},"end":{"row":251,"column":44},"action":"insert","lines":[">"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":44},"end":{"row":251,"column":45},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":45},"end":{"row":251,"column":46},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":45},"end":{"row":251,"column":46},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":44},"end":{"row":251,"column":45},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":99},"end":{"row":251,"column":104},"action":"insert","lines":["</tr>"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":34},"end":{"row":251,"column":35},"action":"remove","lines":[">"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":33},"end":{"row":251,"column":34},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":32},"end":{"row":251,"column":33},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":31},"end":{"row":251,"column":32},"action":"remove","lines":["<"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":44},"end":{"row":251,"column":45},"action":"remove","lines":[">"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":43},"end":{"row":251,"column":44},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":42},"end":{"row":251,"column":43},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":41},"end":{"row":251,"column":42},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":40},"end":{"row":251,"column":41},"action":"remove","lines":["<"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":35},"end":{"row":251,"column":40},"action":"remove","lines":["</li>"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":85},"end":{"row":251,"column":90},"action":"insert","lines":["</li>"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":85},"end":{"row":251,"column":90},"action":"remove","lines":["</li>"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":35},"end":{"row":251,"column":40},"action":"insert","lines":["</li>"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":31},"end":{"row":251,"column":40},"action":"remove","lines":["<li></li>"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":54},"end":{"row":251,"column":63},"action":"insert","lines":["<li></li>"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":58},"end":{"row":251,"column":63},"action":"remove","lines":["</li>"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":80},"end":{"row":251,"column":85},"action":"insert","lines":["</li>"]}]}],[{"group":"doc","deltas":[{"start":{"row":251,"column":76},"end":{"row":251,"column":77},"action":"insert","lines":["s"]}]}]]},"ace":{"folds":[],"scrolltop":3826,"scrollleft":0,"selection":{"start":{"row":251,"column":77},"end":{"row":251,"column":77},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":238,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1418492385713,"hash":"66c93e6a0b7d05192173ea5771947a8b08e418bf"}