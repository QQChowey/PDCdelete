var teamALeader = null;
var teamASub1 = null;
var teamASub2 = null;
var teamASub3 = null;
var teamASub4 = null;
var teamAFriend = null;

var teamBLeader = null;
var teamBSub1 = null;
var teamBSub2 = null;
var teamBSub3 = null;
var teamBSub4 = null;
var teamBFriend = null;

var teamCLeader = null;
var teamCSub1 = null;
var teamCSub2 = null;
var teamCSub3 = null;
var teamCSub4 = null;
var teamCFriend = null;
/*
 * Add handleClicks for A - B - C later
 * maybe prompt delete of C?
 */
var currentValue = "1";

function handleSwitchClick(switch_team) {

	if (currentValue != switch_team.value) {
		currentValue = switch_team.value;
		if (currentValue == "1") {
			document.getElementById("playerSwitch").innerHTML = "";
			var parent = document.getElementById("playerSwitch");
			var newform = document.createElement("form");
			var newdiv = document.createElement("div");
			newdiv.className = "switch_2opt";

			var newinputA = document.createElement("input");
			newinputA.setAttribute("type", "radio");
			newinputA.setAttribute("id", "playerA");
			newinputA.setAttribute("name", "switch_player");
			newinputA.setAttribute("value", "1");
			newinputA.setAttribute("checked", "checked");
			newinputA.setAttribute("autocomplete", "off");

			var newlabelA = document.createElement("label");
			newlabelA.setAttribute("for", "playerA");
			newlabelA.innerHTML = "A";

			var newinputB = document.createElement("input");
			newinputB.setAttribute("type", "radio");
			newinputB.setAttribute("id", "playerB");
			newinputB.setAttribute("name", "switch_player");
			newinputB.setAttribute("value", "2");
			newinputB.setAttribute("autocomplete", "off");

			var newlabelB = document.createElement("label");
			newlabelB.setAttribute("for", "playerB");
			newlabelB.innerHTML = "B";

			newdiv.append(newinputA);
			newdiv.append(newlabelA);
			newdiv.append(newinputB);
			newdiv.append(newlabelB);

			newform.append(newdiv);
			parent.append(newform);
		}

		else if(currentValue == "2") {
			document.getElementById("playerSwitch").innerHTML = "";
			var parent = document.getElementById("playerSwitch");
			var newform = document.createElement("form");
			var newdiv = document.createElement("div");
			newdiv.className = "switch_3opt";


			var newinputA = document.createElement("input");
			newinputA.setAttribute("type", "radio");
			newinputA.setAttribute("id", "playerA");
			newinputA.setAttribute("name", "switch_player");
			newinputA.setAttribute("value", "1");
			newinputA.setAttribute("checked", "checked");
			newinputA.setAttribute("autocomplete", "off");

			var newlabelA = document.createElement("label");
			newlabelA.setAttribute("for", "playerA");
			newlabelA.innerHTML = "A";

	
			var newinputB = document.createElement("input");
			newinputB.setAttribute("type", "radio");
			newinputB.setAttribute("id", "playerB");
			newinputB.setAttribute("name", "switch_player");
			newinputB.setAttribute("value", "2");
			newinputB.setAttribute("autocomplete", "off");

			var newlabelB = document.createElement("label");
			newlabelB.setAttribute("for", "playerB");
			newlabelB.innerHTML = "B";


			var newinputC = document.createElement("input");
			newinputC.setAttribute("type", "radio");
			newinputC.setAttribute("id", "playerC");
			newinputC.setAttribute("name", "switch_player");
			newinputC.setAttribute("value", "3");
			newinputC.setAttribute("autocomplete", "off");

			var newlabelC = document.createElement("label");
			newlabelC.setAttribute("for", "playerC");
			newlabelC.innerHTML = "C";


			newdiv.append(newinputA);
			newdiv.append(newlabelA);
			newdiv.append(newinputB);
			newdiv.append(newlabelB);
			newdiv.append(newinputC);
			newdiv.append(newlabelC);

			newform.append(newdiv);
			parent.append(newform);
		}
	}
}

function openOverlay(event) {
	document.getElementById("searchOverlay").style.width = "550px";
}





























































