
var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var queryUrl = baseUrl + '/query';

var username = "ois.seminar";
var password = "ois4fri";

function getSessionId() {
    var response = $.ajax({
        type: "POST",
        url: baseUrl + "/session?username=" + encodeURIComponent(username) +
                "&password=" + encodeURIComponent(password),
        async: false
    });
    return response.responseJSON.sessionId;
}


function kreirajEHRzaBolnika() {
	sessionId = getSessionId();

	var ime = $("#kreirajIme").val();
	var priimek = $("#kreirajPriimek").val();
	var datumRojstva = $("#kreirajDatumRojstva").val();

	if (!ime || !priimek || !datumRojstva || ime.trim().length == 0 || priimek.trim().length == 0 || datumRojstva.trim().length == 0) {
		$("#kreirajSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevane podatke!</span>");
	} else {
		$.ajaxSetup({
		    headers: {"Ehr-Session": sessionId}
		});
		$.ajax({
		    url: baseUrl + "/ehr",
		    type: 'POST',
		    success: function (data) {
		        var ehrId = data.ehrId;
		        var partyData = {
		            firstNames: ime,
		            lastNames: priimek,
		            dateOfBirth: datumRojstva,
		            partyAdditionalInfo: [{key: "ehrId", value: ehrId}]
		        };
		        $.ajax({
		            url: baseUrl + "/demographics/party",
		            type: 'POST',
		            contentType: 'application/json',
		            data: JSON.stringify(partyData),
		            success: function (party) {
		                if (party.action == 'CREATE') {
		                    $("#kreirajSporocilo").html("<span class='obvestilo label label-success fade-in'>Uspešno kreiran EHR '" + ehrId + "'.</span>");
		                    console.log("Uspešno kreiran EHR '" + ehrId + "'.");
		                    $("#preberiEHRid").val(ehrId);
		                }
		            },
		            error: function(err) {
		            	$("#kreirajSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
		            	console.log(JSON.parse(err.responseText).userMessage);
		            }
		        });
		    }
		});
	}
}


function preberiEHRodBolnika() {
	sessionId = getSessionId();

	var ehrId = $("#preberiEHRid").val();

	if (!ehrId || ehrId.trim().length == 0) {
		$("#preberiSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevan podatek!");
	} else {
		$.ajax({
			url: baseUrl + "/demographics/ehr/" + ehrId + "/party",
			type: 'GET',
			headers: {"Ehr-Session": sessionId},
	    	success: function (data) {
				var party = data.party;
				$("#preberiSporocilo").html("<span class='obvestilo label label-success fade-in'>Bolnik '" + party.firstNames + " " + party.lastNames + "', ki se je rodil '" + party.dateOfBirth + "'.</span>");
				console.log("Bolnik '" + party.firstNames + " " + party.lastNames + "', ki se je rodil '" + party.dateOfBirth + "'.");
			},
			error: function(err) {
				$("#preberiSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
			}
		});
	}	
}

function preberiEHRodBolnikaEHR() {
	sessionId = getSessionId();

	var ehrId = $("#preberiEHRidEHR").val();
	
	var temp;
	var temp2;
	var color = "blue";

	if (!ehrId || ehrId.trim().length == 0) {
		$("#preberiSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevan podatek!");
	} else {
		$.ajax({
			url: baseUrl + "/demographics/ehr/" + ehrId + "/party",
			type: 'GET',
			headers: {"Ehr-Session": sessionId},
	    	success: function (data) {
				var party = data.party;
				$("#patient-name").html("<span class='C1'>" + party.firstNames + " " + party.lastNames + ".</span>");
				$(".patient-age").html("<span class='C2'>" + ( ((new Date).getFullYear() - (new Date(party.dateOfBirth)).getFullYear()) ) + "</span>");
				//$("#patient-gender").html("<span class='obvestilo label label-success fade-in'>" + party.partyAdditionalInfo.telesnaVisina + "</span>");
				$("#patient-dob").html("<span class='C2'>" + party.dateOfBirth + "</span>");
			},
			error: function(err) {
				$("#preberiSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
			}
		});
		
		$.ajax({
		    url: baseUrl + "/view/" + ehrId + "/" + "body_temperature",
		    type: 'GET',
		    headers: {"Ehr-Session": sessionId},
		    success: function (res) {
		    	if (res.length > 0) {
			    	//var results = "<table class='table table-striped table-hover'><tr><th>Datum in ura</th><th class='text-right'>Telesna temperatura</th></tr>";
			        /*for (var i in res) {
			           // results += "<tr><td>" + res[i].time + "</td><td class='text-right'>" + res[i].temperature + " " 	+ res[i].unit + "</td>";
			        }*/
			        //results += "</table>";
			        //$("#rezultatMeritveVitalnihZnakov").append(results);
			        //$("#patient-temp").html("<span class='C3'>" + res[0].temperature + " " + res[0].unit + "</span>");
			        $("#patient-temp").html("<button type=\"button\" class=\"C3\" onclick=\"master_deatilTemperature()\">" + res[0].temperature + " " + res[0].unit + "</button>");
		    	} else {
		    		//$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-warning fade-in'>Ni podatkov!</span>");
		    		$("#patient-temp").html("<span class='obvestilo label label-success fade-in'>" + "Ni podatkov" + "</span>");
		    	}
		    },
		    error: function() {
		    	$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
		    }
		});
		$.ajax({
		    url: baseUrl + "/view/" + ehrId + "/" + "weight",
		    type: 'GET',
		    headers: {"Ehr-Session": sessionId},
		    success: function (res) {
		    	if (res.length > 0) {
			        temp = res[0].weight;
			        temp2 = res[0].unit;
			        $(".patient-weight").html("<button type=\"button\" class=\"C2\" onclick=\"master_deatilWeight()\">" + res[0].weight + " " + res[0].unit + "</button>");
			       // $(".patient-weight").html("<span class='obvestilo label label-success fade-in'>" + res[0].weight + " " + res[0].unit + "</span>");
		    	} else {
		    		$(".patient-weight").html("<span class='obvestilo label label-success fade-in'>" + "Ni podatkov" + "</span>");
		    	}
		    },
		    error: function() {
		    	$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
		    }
		});
		$.ajax({
		    url: baseUrl + "/view/" + ehrId + "/" + "height",
		    type: 'GET',
		    headers: {"Ehr-Session": sessionId},
		    success: function (res) {
		    	if (res.length > 0) {
			        //$("#patient-height").html("<span class='obvestilo label label-success fade-in'>" + res[0].height + " " + res[0].unit + "</span>");
			        $("#patient-height").html("<button type=\"button\" class=\"C2\" onclick=\"master_deatilHeight()\">" + res[0].height + " " + res[0].unit + "</button>");
			        $(".height-placeholder-value").html("<span>" + res[0].height + " " + res[0].unit + "</span>");
			        
			        $("#patient-bmi").html("<span class='C3'>" + ( temp/(res[0].height/100)^2 ) + " " + temp2 + "/" + "m" + "2" + "</span>");
		    	} else {
		    		$("#patient-height").html("<span class='obvestilo label label-success fade-in'>" + "Ni podatkov" + "</span>");
		    	}
		    },
		    error: function() {
		    	$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
		    }
		});
		$.ajax({
		    url: baseUrl + "/view/" + ehrId + "/" + "blood_pressure",
		    type: 'GET',
		    headers: {"Ehr-Session": sessionId},
		    success: function (res) {
		    	if (res.length > 0) {
			        //$("#patient-bp").html("<span class='obvestilo label label-success fade-in'>" + res[0].systolic + "/" + res[0].diastolic + " " + res[0].unit + "</span>");
			        $("#patient-bp").html("<button type=\"button\" class=\"C3\" onclick=\"master_deatilBP()\">" + res[0].systolic + "/" + res[0].diastolic + " " + res[0].unit + "</button>");
			        
			        if(Math.abs( res[0].systolic - 120 ) < 20){
			        	color = "green";
			        }else if(Math.abs( res[0].systolic - 120 ) < 40){
			        	color = "yellow";
			        }else if(Math.abs( res[0].systolic - 120 ) < 60){
			        	color = "red";
			        }
			        $("#progress-bp-systolic").html("<div class=\"progress-bar\" style=\"width: " + ( 50*res[0].systolic/120 ) + "%; height: 20px; background-color: " + color + ";\"></div>");
			        
			        if(Math.abs( res[0].diastolic - 80 ) < 20){
			        	color = "green";
			        }else if(Math.abs( res[0].diastolic - 80 ) < 40){
			        	color = "yellow";
			        }else if(Math.abs( res[0].diastolic - 80 ) < 60){
			        	color = "red";
			        }
			        $("#progress-bp-diastolic").html("<div class=\"progress-bar\" style=\"width: " + ( 50*res[0].diastolic/80 ) + "%; height: 20px; background-color: " + color + ";\"></div>");
		    	} else {
		    		$("#patient-bp").html("<span class='obvestilo label label-success fade-in'>" + "Ni podatkov" + "</span>");
		    	}
		    },
		    error: function() {
		    	$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
		    }
		});
		$.ajax({
		    url: baseUrl + "/view/" + ehrId + "/" + "pulse",
		    type: 'GET',
		    headers: {"Ehr-Session": sessionId},
		    success: function (res) {
		    	if (res.length > 0) {
			        //$("#patient-pulse").html("<span class='obvestilo label label-success fade-in'>" + res[0].pulse + "</span>");
			        $("#patient-pulse").html("<button type=\"button\" class=\"C3\" onclick=\"master_deatilPulse()\">" + res[0].pulse + "</button>");
			        
			        if(Math.abs( res[0].pulse - 80 ) < 20){
			        	color = "green";
			        }else if(Math.abs( res[0].pulse - 80 ) < 40){
			        	color = "yellow";
			        }else if(Math.abs( res[0].pulse - 80 ) < 60){
			        	color = "red";
			        }
			        $("#progress-pulse").html("<div class=\"progress-bar\" style=\"width: " + ( 50*res[0].pulse/80 ) + "%; height: 20px; background-color: " + color + ";\"></div>");
		    	} else {
		    		$("#patient-pulse").html("<span class='obvestilo label label-success fade-in'>" + "Ni podatkov" + "</span>");
		    	}
		    },
		    error: function() {
		    	$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
		    }
		});
		$.ajax({
		    url: baseUrl + "/view/" + ehrId + "/" + "problem",
		    type: 'GET',
		    headers: {"Ehr-Session": sessionId},
		    success: function (res) {
		    	if (res.length > 0) {
		    		var results = "<table class='table table-striped table-hover'>";
			        for (var i in res) {
			            results += "<tr><td class='text-right'><li>" + res[i].problems + "</li></td></tr>";
			        }
			        results += "</table>";
			        $("#patient-problems").html(results);
		    	} else {
		    		$("#patient-problems").html("<span class='obvestilo label label-success fade-in'>" + "Ni podatkov" + "</span>");
		    	}
		    },
		    error: function() {
		    	$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
		    }
		});
		
		
	}	
}

////////////////////////////////////////
function master_deatilWeight() {
	sessionId = getSessionId();

	var ehrId = $("#preberiEHRidEHR").val();

	if (!ehrId || ehrId.trim().length == 0) {
		$("#preberiSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevan podatek!");
	} else {
		/*$.ajax({
			url: baseUrl + "/view/" + ehrId + "/" + "weight",
			type: 'GET',
			headers: {"Ehr-Session": sessionId},
	    	success: function (res) {
				var results = "<table class='table table-striped table-hover'><tr><th>Date</th><th class='text-right'>Weight</th></tr>";
		        for (var i in res) {
		            results += "<tr><td>" + res[i].time + "</td><td class='text-right'>" + res[i].weight + " " 	+ res[i].unit + "</td>";
		           
		        }
		        results += "</table>";
		        $("#detail").html(results);
			//	$("#detail").html("<span class='obvestilo label label-success fade-in'>" + res[i].weight + " " + res[i].unit + "</span>");
			},
			error: function(err) {
				$("#detail").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
			}
		});*/
		
		var AQL = 
			"select " +
				"t/data[at0002]/events[at0003]/time/value as time, " +
				"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude as weight, " +
				"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/units as unit " +
			"from EHR e[e/ehr_id/value='" + ehrId + "'] " +
			"contains OBSERVATION t[openEHR-EHR-OBSERVATION.body_weight.v1] " +
			"order by t/data[at0001]/events[at0002]/time/value desc " +
			"limit 5";
		$.ajax({
		    url: baseUrl + "/query?" + $.param({"aql": AQL}),
		    type: 'GET',
		    headers: {"Ehr-Session": sessionId},
		    success: function (res) {
		    	var results = "<table class='table table-striped table-hover'><tr><th>Date</th><th class='text-right'>Weight</th></tr>";
		    	if (res) {
		    		var rows = res.resultSet;
			        for (var i in rows) {
			            results += "<tr><td>" + rows[i].time + "</td><td class='text-right'>" + rows[i].weight + " " 	+ rows[i].unit + "</td>";
			        }
			        results += "</table>";
			        $("#detail").html(results);
		    	} else {
		    		$("#detail").html("<span class='obvestilo label label-warning fade-in'>Ni podatkov!</span>");
		    	}

		    },
		    error: function() {
		    	$("#detail").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
		    }
		});
	}	
}
function master_deatilHeight() {
	sessionId = getSessionId();

	var ehrId = $("#preberiEHRidEHR").val();

	if (!ehrId || ehrId.trim().length == 0) {
		$("#preberiSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevan podatek!");
	} else {
		$.ajax({
			url: baseUrl + "/view/" + ehrId + "/" + "height",
			type: 'GET',
			headers: {"Ehr-Session": sessionId},
	    	success: function (res) {
				var results = "<table class='table table-striped table-hover'><tr><th>Date</th><th class='text-right'>Height</th></tr>";
		        for (var i in res) {
		            results += "<tr><td>" + res[i].time + "</td><td class='text-right'>" + res[i].height + " " 	+ res[i].unit + "</td>";
		           
		        }
		        results += "</table>";
		        $("#detail").html(results);
			//	$("#detail").html("<span class='obvestilo label label-success fade-in'>" + res[i].weight + " " + res[i].unit + "</span>");
			},
			error: function(err) {
				$("#detail").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
			}
		});
	}	
}
function master_deatilBP() {
	sessionId = getSessionId();

	var ehrId = $("#preberiEHRidEHR").val();

	if (!ehrId || ehrId.trim().length == 0) {
		$("#preberiSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevan podatek!");
	} else {
		$.ajax({
			url: baseUrl + "/view/" + ehrId + "/" + "blood_pressure",
			type: 'GET',
			headers: {"Ehr-Session": sessionId},
	    	success: function (res) {
				var results = "<table class='table table-striped table-hover'><tr><th>Date</th><th class='text-right'>Blood pressure</th></tr>";
		        for (var i in res) {
		            results += "<tr><td>" + res[i].time + "</td><td class='text-right'>" + res[i].systolic + "/" + res[0].diastolic + " " 	+ res[i].unit + "</td>";
		        }
		        results += "</table>";
		        $("#detail").html(results);
			//	$("#detail").html("<span class='obvestilo label label-success fade-in'>" + res[i].weight + " " + res[i].unit + "</span>");
			},
			error: function(err) {
				$("#detail").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
			}
		});
	}	
}
function master_deatilPulse() {
	sessionId = getSessionId();

	var ehrId = $("#preberiEHRidEHR").val();

	if (!ehrId || ehrId.trim().length == 0) {
		$("#preberiSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevan podatek!");
	} else {
		$.ajax({
			url: baseUrl + "/view/" + ehrId + "/" + "pulse",
			type: 'GET',
			headers: {"Ehr-Session": sessionId},
	    	success: function (res) {
				var results = "<table class='table table-striped table-hover'><tr><th>Date</th><th class='text-right'>Pulse</th></tr>";
		        for (var i in res) {
		            results += "<tr><td>" + res[i].time + "</td><td class='text-right'>" + res[i].pulse + " " 	+ res[i].unit + "</td>";
		        }
		        results += "</table>";
		        $("#detail").html(results);
			//	$("#detail").html("<span class='obvestilo label label-success fade-in'>" + res[i].weight + " " + res[i].unit + "</span>");
			},
			error: function(err) {
				$("#detail").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
			}
		});
	}	
}
function master_deatilTemperature() {
	sessionId = getSessionId();

	var ehrId = $("#preberiEHRidEHR").val();

	if (!ehrId || ehrId.trim().length == 0) {
		$("#preberiSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevan podatek!");
	} else {
		$.ajax({
			url: baseUrl + "/view/" + ehrId + "/" + "body_temperature",
			type: 'GET',
			headers: {"Ehr-Session": sessionId},
	    	success: function (res) {
				var results = "<table class='table table-striped table-hover'><tr><th>Date</th><th class='text-right'>Temperature</th></tr>";
		        for (var i in res) {
		            results += "<tr><td>" + res[i].time + "</td><td class='text-right'>" + res[i].temperature + " " 	+ res[i].unit + "</td>";
		        }
		        results += "</table>";
		        $("#detail").html(results);
			//	$("#detail").html("<span class='obvestilo label label-success fade-in'>" + res[i].weight + " " + res[i].unit + "</span>");
			},
			error: function(err) {
				$("#detail").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
			}
		});
	}	
}
//////////////////////////////////////////////

function dodajMeritveVitalnihZnakov() {
	sessionId = getSessionId();

	var ehrId = $("#dodajVitalnoEHR").val();
	var datumInUra = $("#dodajVitalnoDatumInUra").val();
	var telesnaVisina = $("#dodajVitalnoTelesnaVisina").val();
	var telesnaTeza = $("#dodajVitalnoTelesnaTeza").val();
	var telesnaTemperatura = $("#dodajVitalnoTelesnaTemperatura").val();
	var sistolicniKrvniTlak = $("#dodajVitalnoKrvniTlakSistolicni").val();
	var diastolicniKrvniTlak = $("#dodajVitalnoKrvniTlakDiastolicni").val();
	var nasicenostKrviSKisikom = $("#dodajVitalnoNasicenostKrviSKisikom").val();
	var merilec = $("#dodajVitalnoMerilec").val();

	if (!ehrId || ehrId.trim().length == 0) {
		$("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevane podatke!</span>");
	} else {
		$.ajaxSetup({
		    headers: {"Ehr-Session": sessionId}
		});
		var podatki = {
			// Preview Structure: https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
		    "ctx/language": "en",
		    "ctx/territory": "SI",
		    "ctx/time": datumInUra,
		    "vital_signs/height_length/any_event/body_height_length": telesnaVisina,
		    "vital_signs/body_weight/any_event/body_weight": telesnaTeza,
		   	"vital_signs/body_temperature/any_event/temperature|magnitude": telesnaTemperatura,
		    "vital_signs/body_temperature/any_event/temperature|unit": "°C",
		    "vital_signs/blood_pressure/any_event/systolic": sistolicniKrvniTlak,
		    "vital_signs/blood_pressure/any_event/diastolic": diastolicniKrvniTlak,
		    "vital_signs/indirect_oximetry:0/spo2|numerator": nasicenostKrviSKisikom
		};
		var parametriZahteve = {
		    "ehrId": ehrId,
		    templateId: 'Vital Signs',
		    format: 'FLAT',
		    committer: merilec
		};
		$.ajax({
		    url: baseUrl + "/composition?" + $.param(parametriZahteve),
		    type: 'POST',
		    contentType: 'application/json',
		    data: JSON.stringify(podatki),
		    success: function (res) {
		    	console.log(res.meta.href);
		        $("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-success fade-in'>" + res.meta.href + ".</span>");
		    },
		    error: function(err) {
		    	$("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
		    }
		});
	}
}


function preberiMeritveVitalnihZnakov() {
	sessionId = getSessionId();	

	var ehrId = $("#meritveVitalnihZnakovEHRid").val();
	var tip = $("#preberiTipZaVitalneZnake").val();

	if (!ehrId || ehrId.trim().length == 0 || !tip || tip.trim().length == 0) {
		$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-warning fade-in'>Prosim vnesite zahtevan podatek!");
	} else {
		$.ajax({
			url: baseUrl + "/demographics/ehr/" + ehrId + "/party",
	    	type: 'GET',
	    	headers: {"Ehr-Session": sessionId},
	    	success: function (data) {
				var party = data.party;
				$("#rezultatMeritveVitalnihZnakov").html("<br/><span>Pridobivanje podatkov za <b>'" + tip + "'</b> bolnika <b>'" + party.firstNames + " " + party.lastNames + "'</b>.</span><br/><br/>");
				if (tip == "telesna temperatura") {
					$.ajax({
					    url: baseUrl + "/view/" + ehrId + "/" + "body_temperature",
					    type: 'GET',
					    headers: {"Ehr-Session": sessionId},
					    success: function (res) {
					    	if (res.length > 0) {
						    	var results = "<table class='table table-striped table-hover'><tr><th>Datum in ura</th><th class='text-right'>Telesna temperatura</th></tr>";
						        for (var i in res) {
						            results += "<tr><td>" + res[i].time + "</td><td class='text-right'>" + res[i].temperature + " " 	+ res[i].unit + "</td>";
						        }
						        results += "</table>";
						        $("#rezultatMeritveVitalnihZnakov").append(results);
					    	} else {
					    		$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-warning fade-in'>Ni podatkov!</span>");
					    	}
					    },
					    error: function() {
					    	$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
							console.log(JSON.parse(err.responseText).userMessage);
					    }
					});
				} else if (tip == "telesna teža") {
					$.ajax({
					    url: baseUrl + "/view/" + ehrId + "/" + "weight",
					    type: 'GET',
					    headers: {"Ehr-Session": sessionId},
					    success: function (res) {
					    	if (res.length > 0) {
						    	var results = "<table class='table table-striped table-hover'><tr><th>Datum in ura</th><th class='text-right'>Telesna teža</th></tr>";
						        for (var i in res) {
						            results += "<tr><td>" + res[i].time + "</td><td class='text-right'>" + res[i].weight + " " 	+ res[i].unit + "</td>";
						        }
						        results += "</table>";
						        $("#rezultatMeritveVitalnihZnakov").append(results);
					    	} else {
					    		$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-warning fade-in'>Ni podatkov!</span>");
					    	}
					    },
					    error: function() {
					    	$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
							console.log(JSON.parse(err.responseText).userMessage);
					    }
					});					
				} else if (tip == "telesna temperatura AQL") {
					var AQL = 
						"select " +
    						"t/data[at0002]/events[at0003]/time/value as cas, " +
    						"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude as temperatura_vrednost, " +
    						"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/units as temperatura_enota " +
						"from EHR e[e/ehr_id/value='" + ehrId + "'] " +
						"contains OBSERVATION t[openEHR-EHR-OBSERVATION.body_temperature.v1] " +
						"where t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude<35 " +
						"order by t/data[at0002]/events[at0003]/time/value desc " +
						"limit 10";
					$.ajax({
					    url: baseUrl + "/query?" + $.param({"aql": AQL}),
					    type: 'GET',
					    headers: {"Ehr-Session": sessionId},
					    success: function (res) {
					    	var results = "<table class='table table-striped table-hover'><tr><th>Datum in ura</th><th class='text-right'>Telesna temperatura</th></tr>";
					    	if (res) {
					    		var rows = res.resultSet;
						        for (var i in rows) {
						            results += "<tr><td>" + rows[i].cas + "</td><td class='text-right'>" + rows[i].temperatura_vrednost + " " 	+ rows[i].temperatura_enota + "</td>";
						        }
						        results += "</table>";
						        $("#rezultatMeritveVitalnihZnakov").append(results);
					    	} else {
					    		$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-warning fade-in'>Ni podatkov!</span>");
					    	}

					    },
					    error: function() {
					    	$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
							console.log(JSON.parse(err.responseText).userMessage);
					    }
					});
				}
	    	},
	    	error: function(err) {
	    		$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
				console.log(JSON.parse(err.responseText).userMessage);
	    	}
		});
	}
}


$(document).ready(function() {
	$('#preberiObstojeciEHR').change(function() {
		$("#preberiSporocilo").html("");
		$("#preberiEHRid").val($(this).val());
	});
	
	//////////
	/*$('#preberiObstojeciEHREHR').change(function() {
		$("#preberiSporociloEHR").html("");
		$("#preberiEHRidEHR").val($(this).val());
	});*/
	/////////
	
	$('#preberiPredlogoBolnika').change(function() {
		$("#kreirajSporocilo").html("");
		var podatki = $(this).val().split(",");
		$("#kreirajIme").val(podatki[0]);
		$("#kreirajPriimek").val(podatki[1]);
		$("#kreirajDatumRojstva").val(podatki[2]);
	});
	$('#preberiObstojeciVitalniZnak').change(function() {
		$("#dodajMeritveVitalnihZnakovSporocilo").html("");
		var podatki = $(this).val().split("|");
		$("#dodajVitalnoEHR").val(podatki[0]);
		$("#dodajVitalnoDatumInUra").val(podatki[1]);
		$("#dodajVitalnoTelesnaVisina").val(podatki[2]);
		$("#dodajVitalnoTelesnaTeza").val(podatki[3]);
		$("#dodajVitalnoTelesnaTemperatura").val(podatki[4]);
		$("#dodajVitalnoKrvniTlakSistolicni").val(podatki[5]);
		$("#dodajVitalnoKrvniTlakDiastolicni").val(podatki[6]);
		$("#dodajVitalnoNasicenostKrviSKisikom").val(podatki[7]);
		$("#dodajVitalnoMerilec").val(podatki[8]);
	});
	$('#preberiEhrIdZaVitalneZnake').change(function() {
		$("#preberiMeritveVitalnihZnakovSporocilo").html("");
		$("#rezultatMeritveVitalnihZnakov").html("");
		$("#meritveVitalnihZnakovEHRid").val($(this).val());
	});
});

function generirajBolnika() {
	var bolnik = $("#generirajEHR").val();
	
	sessionId = getSessionId();


	if (bolnik == "Bolnik 1") {
		
	var ime = "Peter";
	var priimek = "Novak";
	var datumRojstva = "1970-06-08T02:20";
	
	
	$.ajaxSetup({
	    headers: {"Ehr-Session": sessionId}
	});
	$.ajax({
	    url: baseUrl + "/ehr",
	    type: 'POST',
	    success: function (data) {
	        var ehrId = data.ehrId;
	        var partyData = {
	            firstNames: ime,
	            lastNames: priimek,
	            dateOfBirth: datumRojstva,
	            partyAdditionalInfo: [{key: "ehrId", value: ehrId}]
	        };
	        $.ajax({
	            url: baseUrl + "/demographics/party",
	            type: 'POST',
	            contentType: 'application/json',
	            data: JSON.stringify(partyData),
	            success: function (party) {
	                if (party.action == 'CREATE') {
	                    $("#kreirajSporocilo").html("<span class='obvestilo label label-success fade-in'>Uspešno kreiran EHR '" + ehrId + "'.</span>");
	                    console.log("Uspešno kreiran EHR '" + ehrId + "'.");
	                    $("#preberiEHRid").val(ehrId);
	                    
	                    //////
						var datumInUra = "2014-04-04T08:55";
						var telesnaVisina = "185";
						var telesnaTeza = "120";
						var telesnaTemperatura = "36.4";
						var sistolicniKrvniTlak = "143";
						var diastolicniKrvniTlak = "69";
						var nasicenostKrviSKisikom = "97.9";
						var merilec = "Dr. Marjan Pip";
						var pulz = "73";
					
						$.ajaxSetup({
						    headers: {"Ehr-Session": sessionId}
						});
						var podatki = {
							// Preview Structure: https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
						    "ctx/language": "en",
						    "ctx/territory": "SI",
						    "ctx/time": datumInUra,
						    "vital_signs/height_length/any_event/body_height_length": telesnaVisina,
						    "vital_signs/body_weight/any_event/body_weight": telesnaTeza,
						   	"vital_signs/body_temperature/any_event/temperature|magnitude": telesnaTemperatura,
						    "vital_signs/body_temperature/any_event/temperature|unit": "°C",
						    "vital_signs/blood_pressure/any_event/systolic": sistolicniKrvniTlak,
						    "vital_signs/blood_pressure/any_event/diastolic": diastolicniKrvniTlak,
						    "vital_signs/indirect_oximetry:0/spo2|numerator": nasicenostKrviSKisikom,
						    "vital_signs/pulse:0/any_event:0/rate|magnitude": pulz
						    //vital_signs/pulse:0/any_event:0/rate|magnitude":83.0,
						};
						var parametriZahteve = {
						    "ehrId": ehrId,
						    templateId: 'Vital Signs',
						    format: 'FLAT',
						    committer: merilec
						};
						$.ajax({
						    url: baseUrl + "/composition?" + $.param(parametriZahteve),
						    type: 'POST',
						    contentType: 'application/json',
						    data: JSON.stringify(podatki),
						    success: function (res) {
						    	console.log(res.meta.href);
						        $("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-success fade-in'>" + res.meta.href + ".</span>");
						    },
						    error: function(err) {
						    	$("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
								console.log(JSON.parse(err.responseText).userMessage);
						    }
						});
						$("#preberiEHRidEHR").val(ehrId);
						
	                    //////
	                }
	            },
	            error: function(err) {
	            	$("#kreirajSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
	            	console.log(JSON.parse(err.responseText).userMessage);
	            }
	        });
	    }
	});
	}else if (bolnik == "Bolnik 2") {
			
	var ime = "Nika";
	var priimek = "Cerar";
	var datumRojstva = "1989-03-05T18:20";
	
	
	$.ajaxSetup({
	    headers: {"Ehr-Session": sessionId}
	});
	$.ajax({
	    url: baseUrl + "/ehr",
	    type: 'POST',
	    success: function (data) {
	        var ehrId = data.ehrId;
	        var partyData = {
	            firstNames: ime,
	            lastNames: priimek,
	            dateOfBirth: datumRojstva,
	            partyAdditionalInfo: [{key: "ehrId", value: ehrId}]
	        };
	        $.ajax({
	            url: baseUrl + "/demographics/party",
	            type: 'POST',
	            contentType: 'application/json',
	            data: JSON.stringify(partyData),
	            success: function (party) {
	                if (party.action == 'CREATE') {
	                    $("#kreirajSporocilo").html("<span class='obvestilo label label-success fade-in'>Uspešno kreiran EHR '" + ehrId + "'.</span>");
	                    console.log("Uspešno kreiran EHR '" + ehrId + "'.");
	                    $("#preberiEHRid").val(ehrId);
	                    
	                    //////
						var datumInUra = "2014-12-07T12:30";
						var telesnaVisina = "180";
						var telesnaTeza = "55";
						var telesnaTemperatura = "36.5";
						var sistolicniKrvniTlak = "122";
						var diastolicniKrvniTlak = "75";
						var nasicenostKrviSKisikom = "98.9";
						var merilec = "Dr. Andreja Kranjc";
						var pulz = "68";
					
						$.ajaxSetup({
						    headers: {"Ehr-Session": sessionId}
						});
						var podatki = {
							// Preview Structure: https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
						    "ctx/language": "en",
						    "ctx/territory": "SI",
						    "ctx/time": datumInUra,
						    "vital_signs/height_length/any_event/body_height_length": telesnaVisina,
						    "vital_signs/body_weight/any_event/body_weight": telesnaTeza,
						   	"vital_signs/body_temperature/any_event/temperature|magnitude": telesnaTemperatura,
						    "vital_signs/body_temperature/any_event/temperature|unit": "°C",
						    "vital_signs/blood_pressure/any_event/systolic": sistolicniKrvniTlak,
						    "vital_signs/blood_pressure/any_event/diastolic": diastolicniKrvniTlak,
						    "vital_signs/indirect_oximetry:0/spo2|numerator": nasicenostKrviSKisikom,
						    "vital_signs/pulse:0/any_event:0/rate|magnitude": pulz
						};
						var parametriZahteve = {
						    "ehrId": ehrId,
						    templateId: 'Vital Signs',
						    format: 'FLAT',
						    committer: merilec
						};
						$.ajax({
						    url: baseUrl + "/composition?" + $.param(parametriZahteve),
						    type: 'POST',
						    contentType: 'application/json',
						    data: JSON.stringify(podatki),
						    success: function (res) {
						    	console.log(res.meta.href);
						        $("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-success fade-in'>" + res.meta.href + ".</span>");
						    },
						    error: function(err) {
						    	$("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
								console.log(JSON.parse(err.responseText).userMessage);
						    }
						});
						$("#preberiEHRidEHR").val(ehrId);
						
	                    //////
	                }
	            },
	            error: function(err) {
	            	$("#kreirajSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
	            	console.log(JSON.parse(err.responseText).userMessage);
	            }
	        });
	    }
	});
	}else if (bolnik == "Bolnik 3") {
			
	var ime = "Klemen";
	var priimek = "Smole";
	var datumRojstva = "1968-7-2T12:20";
	
	
	$.ajaxSetup({
	    headers: {"Ehr-Session": sessionId}
	});
	$.ajax({
	    url: baseUrl + "/ehr",
	    type: 'POST',
	    success: function (data) {
	        var ehrId = data.ehrId;
	        var partyData = {
	            firstNames: ime,
	            lastNames: priimek,
	            dateOfBirth: datumRojstva,
	            partyAdditionalInfo: [{key: "ehrId", value: ehrId}]
	        };
	        $.ajax({
	            url: baseUrl + "/demographics/party",
	            type: 'POST',
	            contentType: 'application/json',
	            data: JSON.stringify(partyData),
	            success: function (party) {
	                if (party.action == 'CREATE') {
	                    $("#kreirajSporocilo").html("<span class='obvestilo label label-success fade-in'>Uspešno kreiran EHR '" + ehrId + "'.</span>");
	                    console.log("Uspešno kreiran EHR '" + ehrId + "'.");
	                    $("#preberiEHRid").val(ehrId);
	                    
	                    //////
						var datumInUra = "2014-03-03T08:15";
						var telesnaVisina = "193";
						var telesnaTeza = "83";
						var telesnaTemperatura = "38.4";
						var sistolicniKrvniTlak = "131";
						var diastolicniKrvniTlak = "86";
						var nasicenostKrviSKisikom = "97.2";
						var merilec = "Medicinska sestra Eva Bogataj";
						var pulz = "67";
					
						$.ajaxSetup({
						    headers: {"Ehr-Session": sessionId}
						});
						var podatki = {
							// Preview Structure: https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
						    "ctx/language": "en",
						    "ctx/territory": "SI",
						    "ctx/time": datumInUra,
						    "vital_signs/height_length/any_event/body_height_length": telesnaVisina,
						    "vital_signs/body_weight/any_event/body_weight": telesnaTeza,
						   	"vital_signs/body_temperature/any_event/temperature|magnitude": telesnaTemperatura,
						    "vital_signs/body_temperature/any_event/temperature|unit": "°C",
						    "vital_signs/blood_pressure/any_event/systolic": sistolicniKrvniTlak,
						    "vital_signs/blood_pressure/any_event/diastolic": diastolicniKrvniTlak,
						    "vital_signs/indirect_oximetry:0/spo2|numerator": nasicenostKrviSKisikom,
						    "vital_signs/pulse:0/any_event:0/rate|magnitude": pulz
						};
						var parametriZahteve = {
						    "ehrId": ehrId,
						    templateId: 'Vital Signs',
						    format: 'FLAT',
						    committer: merilec
						};
						$.ajax({
						    url: baseUrl + "/composition?" + $.param(parametriZahteve),
						    type: 'POST',
						    contentType: 'application/json',
						    data: JSON.stringify(podatki),
						    success: function (res) {
						    	console.log(res.meta.href);
						        $("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-success fade-in'>" + res.meta.href + ".</span>");
						    },
						    error: function(err) {
						    	$("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
								console.log(JSON.parse(err.responseText).userMessage);
						    }
						});
						$("#preberiEHRidEHR").val(ehrId);
						
	                    //////
	                }
	            },
	            error: function(err) {
	            	$("#kreirajSporocilo").html("<span class='obvestilo label label-danger fade-in'>Napaka '" + JSON.parse(err.responseText).userMessage + "'!");
	            	console.log(JSON.parse(err.responseText).userMessage);
	            }
	        });
	    }
	});
	}
	
	
}

function graf3Djs(){
	var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

	var x = d3.scale.ordinal()
	    .rangeRoundBands([0, width], .1);
	
	var y = d3.scale.linear()
	    .range([height, 0]);
	
	var xAxis = d3.svg.axis()
	    .scale(x)
	    .orient("bottom");
	
	var yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left")
	    .ticks(10, "%");
	
	var svg = d3.select("body").append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	d3.tsv("data.tsv", type, function(error, data) {
	  x.domain(data.map(function(d) { return d.letter; }));
	  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);
	
	  svg.append("g")
	      .attr("class", "x axis")
	      .attr("transform", "translate(0," + height + ")")
	      .call(xAxis);
	
	  svg.append("g")
	      .attr("class", "y axis")
	      .call(yAxis)
	    .append("text")
	      .attr("transform", "rotate(-90)")
	      .attr("y", 6)
	      .attr("dy", ".71em")
	      .style("text-anchor", "end")
	      .text("Frequency");
	
	  svg.selectAll(".bar")
	      .data(data)
	    .enter().append("rect")
	      .attr("class", "bar")
	      .attr("x", function(d) { return x(d.letter); })
	      .attr("width", x.rangeBand())
	      .attr("y", function(d) { return y(d.frequency); })
	      .attr("height", function(d) { return height - y(d.frequency); });
	
	});
	
	function type(d) {
	  d.frequency = +d.frequency;
	  return d;
	}
}