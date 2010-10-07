(function(){
	var l = window.location;
	var query = {};
	var vars = l.hash.substring(1).split('&');
	if (vars.length > 0) {
		for (var i=0; i<vars.length; i++) {
			var pair = vars[i].split("=");
			query[pair[0]] = decodeURIComponent(pair[1]);
		}
	}
	l.hash = '';
	
	var p = document.getElementById("pulsing");
	if(p.className.indexOf('hidden') < 0) {
		p.className += ' hidden';
	}
	
/** BUILD
	var host = '**CODEROOT';
	var loader = new YAHOO.util.YUILoader({
		base: "//ajax.googleapis.com/ajax/libs/yui/2.8.1/build/",
		filter: "MIN",
		allowRollup: true,
		combine: false
	});
/** END */
/** DEBUG */
	var host = window.lacuna_code_base_url || window.lacuna_s3_base_url;
	var loader = new YAHOO.util.YUILoader({
		base: "//ajax.googleapis.com/ajax/libs/yui/2.8.1/build/",
		filter: "RAW",
		allowRollup: false,
		combine: false
	});
/** END */

	loader.addModule({
		name: "smd",
		type: "js",
		fullpath: host + "smd.js",
		requires : ["yahoo"]
	});
	loader.addModule({
		name: "rpc",
		type: "js",
		fullpath: host + "rpc.js",
		requires : ["yahoo","dom","connection","get","json"]
	});
	loader.addModule({
		name: "library",
		type: "js",
		fullpath: host + "library.js",
		requires : ["yahoo","dom"]
	});
	loader.addModule({
		name: "game",
		type: "js",
		fullpath: host + "game.js",
		requires : ["event","cookie","library","pulse","rpc","smd"]
	});
	loader.addModule({
		name: "about",
		type: "js",
		fullpath: host + "about.js",
		requires : ["container","event","game"]
	});
	loader.addModule({
		name: "createSpecies",
		type: "js",
		fullpath: host + "createSpecies.js",
		requires : ["dragdrop","game","slider"]
	});
	loader.addModule({
		name: "createEmpire",
		type: "js",
		fullpath: host + "createEmpire.js",
		requires : ["createSpecies"]
	});
	loader.addModule({
		name: "login",
		type: "js",
		fullpath: host + "login.js",
		requires : ["container","createEmpire","game"]
	});
	loader.addModule({
		name: "mapper",
		type: "js",
		fullpath: host + "mapper.js",
		requires : ["animation","dom","dragdrop","game","selector"]
	});
	loader.addModule({
		name: "mapStar",
		type: "js",
		fullpath: host + "mapStar.js",
		requires : ["event-delegate","game","mapper","selector"]
	});
	loader.addModule({
		name: "building",
		type: "js",
		fullpath: host + "building.js",
		requires : ["game","paginator","selector","tabview"]
	});
	loader.addModule({
		name: "archaeology",
		type: "js",
		fullpath: host + "buildingArchaeology.js",
		requires : ["animation","building","dragdrop"]
	});
	loader.addModule({
		name: "development",
		type: "js",
		fullpath: host + "buildingDevelopment.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "embassy",
		type: "js",
		fullpath: host + "buildingEmbassy.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "foodreserve",
		type: "js",
		fullpath: host + "buildingFoodReserve.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "intelligence",
		type: "js",
		fullpath: host + "buildingIntelligence.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "miningministry",
		type: "js",
		fullpath: host + "buildingMiningMinistry.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "network19",
		type: "js",
		fullpath: host + "buildingNetwork19.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "observatory",
		type: "js",
		fullpath: host + "buildingObservatory.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "orestorage",
		type: "js",
		fullpath: host + "buildingOreStorage.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "park",
		type: "js",
		fullpath: host + "buildingPark.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "planetarycommand",
		type: "js",
		fullpath: host + "buildingPlanetaryCommand.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "security",
		type: "js",
		fullpath: host + "buildingSecurity.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "shipyard",
		type: "js",
		fullpath: host + "buildingShipyard.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "spaceport",
		type: "js",
		fullpath: host + "buildingSpacePort.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "trade",
		type: "js",
		fullpath: host + "buildingTradeMinistry.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "transporter",
		type: "js",
		fullpath: host + "buildingTransporter.js",
		requires : ["building","trade"]
	});
	loader.addModule({
		name: "wasterecycling",
		type: "js",
		fullpath: host + "buildingWasteRecycling.js",
		requires : ["building"]
	});
	loader.addModule({
		name: "mapPlanet",
		type: "js",
		fullpath: host + "mapPlanet.js",
		requires : ["archaeology","development","embassy","foodreserve","intelligence","miningministry","network19","observatory","orestorage","park","planetarycommand","security","shipyard","spaceport","trade","transporter","wasterecycling","event-delegate","event-mouseenter","mapper","selector"]
	});
	loader.addModule({
		name: "textboxList",
		type: "js",
		fullpath: host + "textboxList.js",
		requires : ["autocomplete","library"]
	});
	loader.addModule({
		name: "messaging",
		type: "js",
		fullpath: host + "messaging.js",
		requires : ["datasource","event-delegate","game","paginator","textboxList"]
	});
	loader.addModule({
		name: "essentia",
		type: "js",
		fullpath: host + "essentia.js",
		requires : ["container","game","tabview"]
	});
	loader.addModule({
		name: "invite",
		type: "js",
		fullpath: host + "invite.js",
		requires : ["container","game"]
	});
	loader.addModule({
		name: "profile",
		type: "js",
		fullpath: host + "profile.js",
		requires : ["container","game","tabview"]
	});
	loader.addModule({
		name: "stats",
		type: "js",
		fullpath: host + "stats.js",
		requires : ["container","datasource","datatable","game","selector","tabview"]
	});
	loader.addModule({
		name: "pulse",
		type: "js",
		fullpath: host + "pulse.js",
		requires : ["container","dom","event"]
	});
	/*add after requirements*/
	loader.addModule({
		name: "gameMenu",
		type: "js",
		fullpath: host + "menu.js",
		requires : ["about","essentia","messaging","menu","profile","stats","invite"]
	});
	loader.require("gameMenu","logger","login","mapPlanet","mapStar");
	loader.onSuccess = function(o) {
		YAHOO.widget.Logger.enableBrowserConsole();		
		YAHOO.lacuna.Game.Start(query);
		progressLoaderC.parentNode.removeChild(progressLoaderC);
	};
	loader.onProgress = function(o) {
		if(firstFile) {
			if(this._combining) {
				progressLoader.total = this.sorted.length - this._combining.length + 1; //remove the count of the files that are getting combined but still record it as 1 file
			}
			else {
				progressLoader.total = this.sorted.length;
			}
			firstFile = undefined;
		}
		progressLoader.counter++;
		var perc = progressLoader.counter / progressLoader.total;
		progressLoader.style.width = Math.ceil(perc * progressLoaderC.offsetWidth) + "px";
		progressLoader.innerHTML = [Math.round(perc*1000)/10, '% - ', progressLoader.counter < status.length ? status[progressLoader.counter] : o.name].join('');
	};
	loader.onFailure = function(o) {
		YAHOO.log(o);
	};

	//pre calc so we can discover how many files are getting loaded for the progress bar
	loader.calculate();
	
	var status = [
			'loading ships',
			'starting engines',
			'breaking atmo',
			'calculating trajectory',
			'engaging hyper drive',
			'traveling the verse',
			'other witty comments',
			'reticulating splines',
			'compacting nebulas',
			'colliding asteroids',
			'corroding spreadsheets',
			'irradiating pneumatic systems',
			'constructing universe',
			'detonating luggage',
			'harvesting politicians',
			'inflating government structure',
			'discrediting liquids',
			'camoflaging nerds',
			'villifying heroes',
			'flooding prairies',
			'nebulizing nebulas',
			'spinning plates',
			'fortifying bread',
			'lambasting vampires',
			'elevating vectors',
			'caching favors',
			'predicting history',
			'looking suave',
			'babelizing translations',
			'necrotizing decimals',
			'capitalizing numerals',
			'compressing water',
			'reliving the past',
			'delivering ingots',
			'bottling particles',
			'refactoring physics',
			'cavitating airflow',
			'corrupting time stream',
			'unbalancing gyroscopes',
			'fishing for compliments',
			'refuting evidence',
			'rotating pinions',
			'engaging clutch',
			'ejecting pilot',
			'reciting poetry',
			'investigating rumors',
			'deconstructing philosophies',
			'monetizing colors',
			'digitizing electrolytes',
			'motivating livestock',
			'assuming the worst',
			'ignoring mummies',
			'disconnecting engineers',
			'remembering the future',
			'broadcasting the truth',
			'entertaining the possibility',
			'developing a theory',
			'making friends',
			'oxidizing lizards',
			'<span style="background-color: #000000; color: #ffffff;">&nbsp;&nbsp;&nbsp;&nbsp;[ REDACTED ]&nbsp;&nbsp;&nbsp;</span>',
			'coercing automatons',
			'dissociating ions',
			'taking a break',
			'watching paint dry',
			'decanting the clones',
			'motoring movers',
			'scaping goats',
			'assembling deployments',
			'deploying assemblages'
		],
		firstFile = true,
		progressLoaderC = document.createElement("div"),
		progressLoader = progressLoaderC.appendChild(progressLoaderC.cloneNode(false));
	var s = status.length;
	while ( --s ) {
		var j = Math.floor( Math.random() * ( s + 1 ) );
		var tempi = status[s];
		var tempj = status[j];
		status[s] = tempj;
		status[j] = tempi;
	}
	
	//container
	progressLoaderC.id = "loadingProgress";
	progressLoaderC.style.backgroundColor = '#FFD800';
	progressLoaderC.style.position = 'absolute';
	progressLoaderC.style.top = '30px';
	progressLoaderC.style.left = '30px';
	progressLoaderC.style.right = '30px';
	//progress bar
	progressLoader.counter = 0;
	progressLoader.style.backgroundColor = "#fff";
	progressLoader.style.textAlign = "left"; 
	progressLoader.style.paddingLeft = "10px"; 
	progressLoader.style.color = "black"; 
	progressLoader.style.height = "30px"; 
	progressLoader.style.lineHeight = "30px"; 
	progressLoader.style.width = "1px";
	progressLoader.style.overflow = "visible";
	progressLoader.style.whiteSpace = "nowrap";
	progressLoader.innerHTML = status[progressLoader.counter];
	
	document.body.insertBefore(progressLoaderC, document.body.firstChild);

	loader.insert();
})();
