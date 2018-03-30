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
 * Fill Monster Overlay with entries
 */

window.onload = function() {
	//fillMOlist();

		// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
	  // Great success! All the File APIs are supported.
	} else {
	  alert('The File APIs are not fully supported in this browser.');
	}
};



//var monsterjson = JSON.parse(monster);

//function fillMOlist() {
//	alert(monsterjson[5].name);
//}

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

/*
 Left click to
 select monster.
 - - - - - - -
 Right click for
 more info.
 */

function LR_openOverlay(e) {
	e = e || window.event;
	switch(e.which) {
		case 1: openMonsterOverlay(); break;
		case 3: openOptionOverlay(); break;
	}
}

function openOptionOverlay() {
	document.getElementById("optionOverlay").style.width = "550px";
	document.getElementById("optionOverlay").style.opacity = "1";
	document.getElementById("exitOptionOverlay").style.width = "100%";
}

function closeOptionOverlay() {
	document.getElementById("optionOverlay").style.opacity = "0";
	setTimeout(function() { document.getElementById("optionOverlay").style.width = "0"; }, 250);
	document.getElementById("exitOptionOverlay").style.width = "0%";
}

function openMonsterOverlay() {
	document.getElementById("searchMonsterOverlay").style.width = "550px";
	document.getElementById("exitMonsterOverlay").style.width = "100%";
}

function closeMonsterOverlay() {
	document.getElementById("searchMonsterOverlay").style.width = "0";
	document.getElementById("exitMonsterOverlay").style.width = "0";
}

function searchFilter() {
	// Declare variables
	var input, filter, container, item, itemInner, name, i;
	input = document.getElementById("MOsearchInput");
	filter = input.value.toUpperCase();
	container = document.getElementById("MOlist");
	item = container.getElementsByClassName("display");
	itemInner = container.getElementsByClassName("name");

/*	for (i = 0; i < item.length; i++) {
		itemInner = item[i].getElementsByClassName("rightContainer")[0];
		alert(item.length);
	}

	for (i = 0; i < itemInner.length; i++) {
		name = itemInner[i].getElementsByClassName("name")[0];
		if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
			item[i].style.display = "";
		}
		else {
			item[i].style.display = "none";
		}
	}*/

	for (i = 0; i < itemInner.length; i++) {
		name = itemInner[i];
		if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
			item[i].style.display = "";
		}
		else {
			item[i].style.display = "none";
		}
	}
}

function openMOfilter() {
	document.getElementById("MOfilter").style.height = "100px";
	document.getElementById("MOlist").style.height = "calc(100% - 200px)";
	document.getElementById("filterBtn").innerHTML = "Close Filter";
	document.getElementById("filterBtn").setAttribute("onclick","closeMOfilter();");
}

function closeMOfilter() {
	document.getElementById("MOfilter").style.height = "0";
	document.getElementById("MOlist").style.height = "calc(100% - 100px)";
	document.getElementById("filterBtn").innerHTML = "Open Filter";
	document.getElementById("filterBtn").setAttribute("onclick","openMOfilter();");
}

function openInheritOverlay() {

}

function closeInheritOverlay() {

}

function openLatentOverlay() {

}

function closeLatentOverlay() {

}

function openBadgeOverlay() {

}

function closeBadgeOverlay() {

}

function openDungeonOverlay() {

}

function closeDungeonOverlay() {

}


















































