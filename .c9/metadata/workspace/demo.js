{"filter":false,"title":"demo.js","tooltip":"/demo.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":544,"column":23},"end":{"row":544,"column":24},"action":"remove","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":544,"column":23},"end":{"row":544,"column":24},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":544,"column":38},"end":{"row":544,"column":39},"action":"remove","lines":["3"]}]}],[{"group":"doc","deltas":[{"start":{"row":544,"column":38},"end":{"row":544,"column":39},"action":"insert","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":544,"column":51},"end":{"row":544,"column":52},"action":"remove","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":544,"column":51},"end":{"row":544,"column":52},"action":"insert","lines":["3"]}]}],[{"group":"doc","deltas":[{"start":{"row":542,"column":23},"end":{"row":542,"column":24},"action":"remove","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":542,"column":23},"end":{"row":542,"column":24},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":542,"column":38},"end":{"row":542,"column":39},"action":"remove","lines":["3"]}]}],[{"group":"doc","deltas":[{"start":{"row":542,"column":38},"end":{"row":542,"column":39},"action":"insert","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":543,"column":77},"end":{"row":543,"column":92},"action":"remove","lines":["Body_Mass_Index"]},{"start":{"row":543,"column":77},"end":{"row":543,"column":97},"action":"insert","lines":["temperatura_vrednost"]}]}],[{"group":"doc","deltas":[{"start":{"row":547,"column":2},"end":{"row":547,"column":92},"action":"remove","lines":["\t\t\t\t\"where t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude<35 \" +"]}]}],[{"group":"doc","deltas":[{"start":{"row":547,"column":1},"end":{"row":547,"column":2},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":547,"column":0},"end":{"row":547,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":546,"column":77},"end":{"row":547,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":547,"column":28},"end":{"row":547,"column":29},"action":"remove","lines":["2"]},{"start":{"row":547,"column":28},"end":{"row":547,"column":29},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":547,"column":43},"end":{"row":547,"column":44},"action":"remove","lines":["3"]},{"start":{"row":547,"column":43},"end":{"row":547,"column":44},"action":"insert","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":278,"column":2},"end":{"row":278,"column":3},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":278,"column":3},"end":{"row":278,"column":4},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":296,"column":5},"end":{"row":296,"column":6},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":296,"column":6},"end":{"row":296,"column":7},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":296,"column":7},"end":{"row":297,"column":0},"action":"insert","lines":["",""]},{"start":{"row":297,"column":0},"end":{"row":297,"column":2},"action":"insert","lines":["\t\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":297,"column":2},"end":{"row":298,"column":0},"action":"insert","lines":["",""]},{"start":{"row":298,"column":0},"end":{"row":298,"column":2},"action":"insert","lines":["\t\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":298,"column":2},"end":{"row":338,"column":8},"action":"insert","lines":["var AQL = ","\t\t\t\t\t\t/*\"select \" +","    \t\t\t\t\t\t\"t/data[at0002]/events[at0003]/time/value as cas, \" +","    \t\t\t\t\t\t\"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude as temperatura_vrednost, \" +","    \t\t\t\t\t\t\"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/units as temperatura_enota \" +","\t\t\t\t\t\t\"from EHR e[e/ehr_id/value='\" + ehrId + \"'] \" +","\t\t\t\t\t\t\"contains OBSERVATION t[openEHR-EHR-OBSERVATION.body_temperature.v1] \" +","\t\t\t\t\t\t\"where t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude<35 \" +","\t\t\t\t\t\t\"order by t/data[at0002]/events[at0003]/time/value desc \" +","\t\t\t\t\t\t\"limit 10\";*/","\t\t\t\t\t\t\"select \" +","    \t\t\t\t\t\t\"t/data[at0001]/events[at0002]/time/value as cas, \" +","    \t\t\t\t\t\t\"t/data[at0001]/events[at0002]/data[at0003]/items[at0004]/value as temperatura_vrednost, \" +","    \t\t\t\t\t\t\"t/data[at0001]/events[at0002]/data[at0003]/items[at0004]/value/units as temperatura_enota \" +","\t\t\t\t\t\t\"from EHR e[e/ehr_id/value='\" + ehrId + \"'] \" +","\t\t\t\t\t\t\"contains OBSERVATION t[openEHR-EHR-OBSERVATION.body_mass_index.v1] \" +","\t\t\t\t\t\t\"order by t/data[at0001]/events[at0002]/time/value desc \" +","\t\t\t\t\t\t\"limit 10\";","\t\t\t\t\t$.ajax({","\t\t\t\t\t    url: baseUrl + \"/query?\" + $.param({\"aql\": AQL}),","\t\t\t\t\t    type: 'GET',","\t\t\t\t\t    headers: {\"Ehr-Session\": sessionId},","\t\t\t\t\t    success: function (res) {","\t\t\t\t\t    \tvar results = \"<table class='table table-striped table-hover'><tr><th>Datum in ura</th><th class='text-right'>Telesna temperatura</th></tr>\";","\t\t\t\t\t    \tif (res) {","\t\t\t\t\t    \t\tvar rows = res.resultSet;","\t\t\t\t\t\t        for (var i in rows) {","\t\t\t\t\t\t            results += \"<tr><td>\" + rows[i].cas + \"</td><td class='text-right'>\" + rows[i].temperatura_vrednost + \" \" \t+ rows[i].temperatura_enota + \"</td>\";","\t\t\t\t\t\t        }","\t\t\t\t\t\t        results += \"</table>\";","\t\t\t\t\t\t        $(\"#rezultatMeritveVitalnihZnakov\").append(results);","\t\t\t\t\t    \t} else {","\t\t\t\t\t    \t\t$(\"#preberiMeritveVitalnihZnakovSporocilo\").html(\"<span class='obvestilo label label-warning fade-in'>Ni podatkov!</span>\");","\t\t\t\t\t    \t}","","\t\t\t\t\t    },","\t\t\t\t\t    error: function() {","\t\t\t\t\t    \t$(\"#preberiMeritveVitalnihZnakovSporocilo\").html(\"<span class='obvestilo label label-danger fade-in'>Napaka '\" + JSON.parse(err.responseText).userMessage + \"'!\");","\t\t\t\t\t\t\tconsole.log(JSON.parse(err.responseText).userMessage);","\t\t\t\t\t    }","\t\t\t\t\t});"]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":5},"end":{"row":307,"column":19},"action":"remove","lines":["\t/*\"select \" +","    \t\t\t\t\t\t\"t/data[at0002]/events[at0003]/time/value as cas, \" +","    \t\t\t\t\t\t\"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude as temperatura_vrednost, \" +","    \t\t\t\t\t\t\"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/units as temperatura_enota \" +","\t\t\t\t\t\t\"from EHR e[e/ehr_id/value='\" + ehrId + \"'] \" +","\t\t\t\t\t\t\"contains OBSERVATION t[openEHR-EHR-OBSERVATION.body_temperature.v1] \" +","\t\t\t\t\t\t\"where t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude<35 \" +","\t\t\t\t\t\t\"order by t/data[at0002]/events[at0003]/time/value desc \" +","\t\t\t\t\t\t\"limit 10\";*/"]}]}],[{"group":"doc","deltas":[{"start":{"row":298,"column":12},"end":{"row":299,"column":5},"action":"remove","lines":["","\t\t\t\t\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":0},"end":{"row":299,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":300,"column":0},"end":{"row":300,"column":4},"action":"remove","lines":["    "]},{"start":{"row":301,"column":0},"end":{"row":301,"column":4},"action":"remove","lines":["    "]},{"start":{"row":302,"column":0},"end":{"row":302,"column":4},"action":"remove","lines":["    "]},{"start":{"row":303,"column":0},"end":{"row":303,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":304,"column":0},"end":{"row":304,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":305,"column":0},"end":{"row":305,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":306,"column":0},"end":{"row":306,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":307,"column":0},"end":{"row":307,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":308,"column":0},"end":{"row":308,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":309,"column":0},"end":{"row":309,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":310,"column":0},"end":{"row":310,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":311,"column":0},"end":{"row":311,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":312,"column":0},"end":{"row":312,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":313,"column":0},"end":{"row":313,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":314,"column":0},"end":{"row":314,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":315,"column":0},"end":{"row":315,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":316,"column":0},"end":{"row":316,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":317,"column":0},"end":{"row":317,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":318,"column":0},"end":{"row":318,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":319,"column":0},"end":{"row":319,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":320,"column":0},"end":{"row":320,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":321,"column":0},"end":{"row":321,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":322,"column":0},"end":{"row":322,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":324,"column":0},"end":{"row":324,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":325,"column":0},"end":{"row":325,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":326,"column":0},"end":{"row":326,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":327,"column":0},"end":{"row":327,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":328,"column":0},"end":{"row":328,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":329,"column":0},"end":{"row":329,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":0},"end":{"row":299,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":300,"column":0},"end":{"row":300,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":301,"column":0},"end":{"row":301,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":302,"column":0},"end":{"row":302,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":303,"column":0},"end":{"row":303,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":304,"column":0},"end":{"row":304,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":305,"column":0},"end":{"row":305,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":306,"column":0},"end":{"row":306,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":307,"column":0},"end":{"row":307,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":308,"column":0},"end":{"row":308,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":309,"column":0},"end":{"row":309,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":310,"column":0},"end":{"row":310,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":311,"column":0},"end":{"row":311,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":312,"column":0},"end":{"row":312,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":313,"column":0},"end":{"row":313,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":314,"column":0},"end":{"row":314,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":315,"column":0},"end":{"row":315,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":316,"column":0},"end":{"row":316,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":317,"column":0},"end":{"row":317,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":318,"column":0},"end":{"row":318,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":319,"column":0},"end":{"row":319,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":320,"column":0},"end":{"row":320,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":321,"column":0},"end":{"row":321,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":322,"column":0},"end":{"row":322,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":324,"column":0},"end":{"row":324,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":325,"column":0},"end":{"row":325,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":326,"column":0},"end":{"row":326,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":327,"column":0},"end":{"row":327,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":328,"column":0},"end":{"row":328,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":329,"column":0},"end":{"row":329,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":299,"column":0},"end":{"row":299,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":300,"column":0},"end":{"row":300,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":301,"column":0},"end":{"row":301,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":302,"column":0},"end":{"row":302,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":303,"column":0},"end":{"row":303,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":304,"column":0},"end":{"row":304,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":305,"column":0},"end":{"row":305,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":306,"column":0},"end":{"row":306,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":307,"column":0},"end":{"row":307,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":308,"column":0},"end":{"row":308,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":309,"column":0},"end":{"row":309,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":310,"column":0},"end":{"row":310,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":311,"column":0},"end":{"row":311,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":312,"column":0},"end":{"row":312,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":313,"column":0},"end":{"row":313,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":314,"column":0},"end":{"row":314,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":315,"column":0},"end":{"row":315,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":316,"column":0},"end":{"row":316,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":317,"column":0},"end":{"row":317,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":318,"column":0},"end":{"row":318,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":319,"column":0},"end":{"row":319,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":320,"column":0},"end":{"row":320,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":321,"column":0},"end":{"row":321,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":322,"column":0},"end":{"row":322,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":324,"column":0},"end":{"row":324,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":325,"column":0},"end":{"row":325,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":326,"column":0},"end":{"row":326,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":327,"column":0},"end":{"row":327,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":328,"column":0},"end":{"row":328,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":329,"column":0},"end":{"row":329,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":7},"end":{"row":301,"column":70},"action":"remove","lines":["data[at0001]/events[at0002]/data[at0003]/items[at0004]/value as"]},{"start":{"row":301,"column":7},"end":{"row":301,"column":86},"action":"insert","lines":["/data[at0002]/events[at0003]/data[at0001]/items[at0004, 'Body weight']/value as"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":6},"end":{"row":301,"column":7},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":300,"column":17},"end":{"row":300,"column":18},"action":"remove","lines":["1"]},{"start":{"row":300,"column":17},"end":{"row":300,"column":18},"action":"insert","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":300,"column":32},"end":{"row":300,"column":33},"action":"remove","lines":["2"]},{"start":{"row":300,"column":32},"end":{"row":300,"column":33},"action":"insert","lines":["3"]}]}],[{"group":"doc","deltas":[{"start":{"row":306,"column":11},"end":{"row":306,"column":12},"action":"remove","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":306,"column":10},"end":{"row":306,"column":11},"action":"remove","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":306,"column":10},"end":{"row":306,"column":11},"action":"insert","lines":["5"]}]}],[{"group":"doc","deltas":[{"start":{"row":942,"column":1},"end":{"row":943,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":943,"column":0},"end":{"row":944,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":0},"end":{"row":944,"column":1},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":1},"end":{"row":944,"column":2},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":2},"end":{"row":944,"column":3},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":2},"end":{"row":944,"column":3},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":0},"end":{"row":944,"column":2},"action":"remove","lines":["fu"]},{"start":{"row":944,"column":0},"end":{"row":944,"column":8},"action":"insert","lines":["function"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":8},"end":{"row":944,"column":9},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":9},"end":{"row":944,"column":10},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":10},"end":{"row":944,"column":11},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":11},"end":{"row":944,"column":12},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":12},"end":{"row":944,"column":13},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":13},"end":{"row":944,"column":14},"action":"insert","lines":["#"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":13},"end":{"row":944,"column":14},"action":"remove","lines":["#"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":13},"end":{"row":944,"column":14},"action":"insert","lines":["3"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":14},"end":{"row":944,"column":15},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":15},"end":{"row":944,"column":16},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":16},"end":{"row":944,"column":17},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":17},"end":{"row":944,"column":19},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":19},"end":{"row":944,"column":20},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":20},"end":{"row":944,"column":21},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":944,"column":20},"end":{"row":946,"column":0},"action":"insert","lines":["","\t",""]}]}],[{"group":"doc","deltas":[{"start":{"row":945,"column":1},"end":{"row":1003,"column":1},"action":"insert","lines":["var margin = {top: 20, right: 20, bottom: 30, left: 40},","    width = 960 - margin.left - margin.right,","    height = 500 - margin.top - margin.bottom;","","var x = d3.scale.ordinal()","    .rangeRoundBands([0, width], .1);","","var y = d3.scale.linear()","    .range([height, 0]);","","var xAxis = d3.svg.axis()","    .scale(x)","    .orient(\"bottom\");","","var yAxis = d3.svg.axis()","    .scale(y)","    .orient(\"left\")","    .ticks(10, \"%\");","","var svg = d3.select(\"body\").append(\"svg\")","    .attr(\"width\", width + margin.left + margin.right)","    .attr(\"height\", height + margin.top + margin.bottom)","  .append(\"g\")","    .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");","","d3.tsv(\"data.tsv\", type, function(error, data) {","  x.domain(data.map(function(d) { return d.letter; }));","  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);","","  svg.append(\"g\")","      .attr(\"class\", \"x axis\")","      .attr(\"transform\", \"translate(0,\" + height + \")\")","      .call(xAxis);","","  svg.append(\"g\")","      .attr(\"class\", \"y axis\")","      .call(yAxis)","    .append(\"text\")","      .attr(\"transform\", \"rotate(-90)\")","      .attr(\"y\", 6)","      .attr(\"dy\", \".71em\")","      .style(\"text-anchor\", \"end\")","      .text(\"Frequency\");","","  svg.selectAll(\".bar\")","      .data(data)","    .enter().append(\"rect\")","      .attr(\"class\", \"bar\")","      .attr(\"x\", function(d) { return x(d.letter); })","      .attr(\"width\", x.rangeBand())","      .attr(\"y\", function(d) { return y(d.frequency); })","      .attr(\"height\", function(d) { return height - y(d.frequency); });","","});","","function type(d) {","  d.frequency = +d.frequency;","  return d;","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":949,"column":0},"end":{"row":949,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":950,"column":0},"end":{"row":950,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":951,"column":0},"end":{"row":951,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":952,"column":0},"end":{"row":952,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":953,"column":0},"end":{"row":953,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":954,"column":0},"end":{"row":954,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":955,"column":0},"end":{"row":955,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":956,"column":0},"end":{"row":956,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":957,"column":0},"end":{"row":957,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":958,"column":0},"end":{"row":958,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":959,"column":0},"end":{"row":959,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":960,"column":0},"end":{"row":960,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":961,"column":0},"end":{"row":961,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":962,"column":0},"end":{"row":962,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":963,"column":0},"end":{"row":963,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":964,"column":0},"end":{"row":964,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":965,"column":0},"end":{"row":965,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":966,"column":0},"end":{"row":966,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":967,"column":0},"end":{"row":967,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":968,"column":0},"end":{"row":968,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":969,"column":0},"end":{"row":969,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":970,"column":0},"end":{"row":970,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":971,"column":0},"end":{"row":971,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":972,"column":0},"end":{"row":972,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":973,"column":0},"end":{"row":973,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":974,"column":0},"end":{"row":974,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":975,"column":0},"end":{"row":975,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":976,"column":0},"end":{"row":976,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":977,"column":0},"end":{"row":977,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":978,"column":0},"end":{"row":978,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":979,"column":0},"end":{"row":979,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":980,"column":0},"end":{"row":980,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":981,"column":0},"end":{"row":981,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":982,"column":0},"end":{"row":982,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":983,"column":0},"end":{"row":983,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":984,"column":0},"end":{"row":984,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":985,"column":0},"end":{"row":985,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":986,"column":0},"end":{"row":986,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":987,"column":0},"end":{"row":987,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":988,"column":0},"end":{"row":988,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":989,"column":0},"end":{"row":989,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":990,"column":0},"end":{"row":990,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":991,"column":0},"end":{"row":991,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":992,"column":0},"end":{"row":992,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":993,"column":0},"end":{"row":993,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":994,"column":0},"end":{"row":994,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":995,"column":0},"end":{"row":995,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":996,"column":0},"end":{"row":996,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":997,"column":0},"end":{"row":997,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":998,"column":0},"end":{"row":998,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":999,"column":0},"end":{"row":999,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":1000,"column":0},"end":{"row":1000,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":1001,"column":0},"end":{"row":1001,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":1002,"column":0},"end":{"row":1002,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":1003,"column":0},"end":{"row":1003,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":574,"column":0},"end":{"row":581,"column":17},"action":"remove","lines":["\t\t\t\t\t\t\"select \" +","    \t\t\t\t\t\t\"t/data[at0001]/events[at0002]/time/value as cas, \" +","    \t\t\t\t\t\t\"t/data[at0001]/events[at0002]/data[at0003]/items[at0004]/value as temperatura_vrednost, \" +","    \t\t\t\t\t\t\"t/data[at0001]/events[at0002]/data[at0003]/items[at0004]/value/units as temperatura_enota \" +","\t\t\t\t\t\t\"from EHR e[e/ehr_id/value='\" + ehrId + \"'] \" +","\t\t\t\t\t\t\"contains OBSERVATION t[openEHR-EHR-OBSERVATION.body_mass_index.v1] \" +","\t\t\t\t\t\t\"order by t/data[at0001]/events[at0002]/time/value desc \" +","\t\t\t\t\t\t\"limit 10\";"]}]}],[{"group":"doc","deltas":[{"start":{"row":573,"column":19},"end":{"row":574,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":573,"column":18},"end":{"row":573,"column":19},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":573,"column":17},"end":{"row":573,"column":18},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":565,"column":7},"end":{"row":565,"column":8},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":565,"column":6},"end":{"row":565,"column":7},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":319,"column":11},"end":{"row":319,"column":63},"action":"remove","lines":["$(\"#rezultatMeritveVitalnihZnakov\").append(results);"]},{"start":{"row":319,"column":11},"end":{"row":319,"column":38},"action":"insert","lines":["$(\"#detail\").html(results);"]}]}],[{"group":"doc","deltas":[{"start":{"row":326,"column":7},"end":{"row":326,"column":169},"action":"remove","lines":["$(\"#preberiMeritveVitalnihZnakovSporocilo\").html(\"<span class='obvestilo label label-danger fade-in'>Napaka '\" + JSON.parse(err.responseText).userMessage + \"'!\");"]},{"start":{"row":326,"column":7},"end":{"row":326,"column":138},"action":"insert","lines":["$(\"#detail\").html(\"<span class='obvestilo label label-danger fade-in'>Napaka '\" + JSON.parse(err.responseText).userMessage + \"'!\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":12},"end":{"row":321,"column":49},"action":"remove","lines":["preberiMeritveVitalnihZnakovSporocilo"]},{"start":{"row":321,"column":12},"end":{"row":321,"column":18},"action":"insert","lines":["detail"]}]}],[{"group":"doc","deltas":[{"start":{"row":302,"column":17},"end":{"row":302,"column":18},"action":"remove","lines":["1"]},{"start":{"row":302,"column":17},"end":{"row":302,"column":18},"action":"insert","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":302,"column":32},"end":{"row":302,"column":33},"action":"remove","lines":["2"]},{"start":{"row":302,"column":32},"end":{"row":302,"column":33},"action":"insert","lines":["3"]}]}],[{"group":"doc","deltas":[{"start":{"row":302,"column":45},"end":{"row":302,"column":46},"action":"remove","lines":["3"]},{"start":{"row":302,"column":45},"end":{"row":302,"column":46},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":304,"column":27},"end":{"row":304,"column":69},"action":"remove","lines":["openEHR-EHR-OBSERVATION.body_mass_index.v1"]},{"start":{"row":304,"column":27},"end":{"row":304,"column":65},"action":"insert","lines":["openEHR-EHR-OBSERVATION.body_weight.v1"]}]}],[{"group":"doc","deltas":[{"start":{"row":312,"column":78},"end":{"row":312,"column":89},"action":"remove","lines":["atum in ura"]},{"start":{"row":312,"column":78},"end":{"row":312,"column":79},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":312,"column":79},"end":{"row":312,"column":80},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":312,"column":80},"end":{"row":312,"column":81},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":312,"column":109},"end":{"row":312,"column":128},"action":"remove","lines":["Telesna temperatura"]},{"start":{"row":312,"column":109},"end":{"row":312,"column":110},"action":"insert","lines":["W"]}]}],[{"group":"doc","deltas":[{"start":{"row":312,"column":110},"end":{"row":312,"column":111},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":312,"column":110},"end":{"row":312,"column":111},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":312,"column":110},"end":{"row":312,"column":111},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":312,"column":111},"end":{"row":312,"column":112},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":312,"column":112},"end":{"row":312,"column":113},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":312,"column":113},"end":{"row":312,"column":114},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":312,"column":114},"end":{"row":312,"column":115},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":61},"end":{"row":301,"column":75},"action":"remove","lines":[" 'Body weight'"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":60},"end":{"row":301,"column":61},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":67},"end":{"row":301,"column":68},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":68},"end":{"row":301,"column":69},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":69},"end":{"row":301,"column":70},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":70},"end":{"row":301,"column":71},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":71},"end":{"row":301,"column":72},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":72},"end":{"row":301,"column":73},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":67},"end":{"row":301,"column":74},"action":"remove","lines":["/value "]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":67},"end":{"row":301,"column":68},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":67},"end":{"row":301,"column":68},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":67},"end":{"row":301,"column":68},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":68},"end":{"row":301,"column":77},"action":"insert","lines":["magnitude"]}]}],[{"group":"doc","deltas":[{"start":{"row":316,"column":94},"end":{"row":316,"column":114},"action":"remove","lines":["temperatura_vrednost"]},{"start":{"row":316,"column":94},"end":{"row":316,"column":100},"action":"insert","lines":["weight"]}]}],[{"group":"doc","deltas":[{"start":{"row":301,"column":78},"end":{"row":301,"column":98},"action":"remove","lines":["temperatura_vrednost"]},{"start":{"row":301,"column":78},"end":{"row":301,"column":84},"action":"insert","lines":["weight"]}]}],[{"group":"doc","deltas":[{"start":{"row":302,"column":77},"end":{"row":302,"column":94},"action":"remove","lines":["temperatura_enota"]},{"start":{"row":302,"column":77},"end":{"row":302,"column":81},"action":"insert","lines":["unit"]}]}],[{"group":"doc","deltas":[{"start":{"row":316,"column":118},"end":{"row":316,"column":135},"action":"remove","lines":["temperatura_enota"]},{"start":{"row":316,"column":118},"end":{"row":316,"column":122},"action":"insert","lines":["unit"]}]}]]},"ace":{"folds":[],"scrolltop":4936,"scrollleft":0,"selection":{"start":{"row":316,"column":122},"end":{"row":316,"column":122},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":307,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1419172595725,"hash":"f8c339c115efbf292e74c21f9e855799c554a769"}