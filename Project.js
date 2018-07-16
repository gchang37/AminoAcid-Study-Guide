let num = 0;
let ans = "";
let sAminoAcid = 0;
let wAminoAcid = 0;
let sProperties = 0;
let wProperties = 0;
let img = new Image();

function allowDrop(ev){
	ev.preventDefault();
}

function drag(ev){
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
	ev.preventDefault();
	var answer = ev.dataTransfer.getData("text");
	// alert(data);
	 ans = ev.target.appendChild(document.getElementById(answer));
	 //alert(ev.target); alert(document.getElementById(data));
}

let qArray = ["A", "R", "G", "Q", "H", "S", "P"];

function generateQuestion(){
	let display = document.getElementById("question");
	num = Math.floor(Math.random()*6);
	display.innerHTML = qArray[num];

	let solutionBox = document.getElementById("solutionBox");
	let solution = document.getElementById("solution");
	let isempty = document.getElementById("solution").innerHTML;
	let ulist = document.getElementById("psolution").innerHTML;

	if (isempty !=""){
		//alert(isempty);
		solution.removeChild(solution.firstChild);
		alert(ulist);
		ulist.innerHTML += "";
	}		
}
//generateQuestion();

let alanine = new Image();
alanine.src = "Alanine.PNG";
// let alanineBall = new Image();
// alanineBall.src = "AlanineBall.PNG";

let arginine = new Image();
arginine.src = "arginineSide.PNG";
// let arginineBall = new Image();
// arginineBall.src = "ArginineBall.PNG";

let glycine = new Image();
glycine.src = "glycineSide.PNG";
// let glycineBall = new Image();
// glycineBall.src = "GlycineBall.PNG";

let glutamine = new Image();
glutamine.src = "glutamineSide.PNG";
// let glutamineBall = new Image();
// glutamineBall.src = "GlutamineBall.PNG";

let histidine = new Image();
histidine.src = "histidineSide.PNG";
// let histidineBall = new Image();
// histidineBall.src = "HistidineBall.PNG";

let serine = new Image();
serine.src = "serineSide.PNG";
// let serineBall = new Image();
// serineBall.src = "SerineBall.PNG";

let proline = new Image();
proline.src = "proline.PNG";

// let sArray = [];
// sArray[0] = [alanine, alanineBall];
// sArray[1] = [arginine, arginineBall];
// sArray[2] = [glycine, glycineBall];
// sArray[3] = [glutamine, glutamineBall];
// sArray[4] = [histidine, histidineBall];
// sArray[5] = [serine, serineBall];

let pArray = [];
pArray[0] = ["aliphatic", "non-polar", "hydrophobic", "non-reactive"];
pArray[1] = ["polar", "hydrophilic"];
pArray[2] = ["basic", "ionizable", "interactive"];
pArray[3] = [""];

let masterAAArray = [];
masterAAArray[0] = ["alanine", alanine, "A", pArray[0]];
masterAAArray[1] = ["arginine", arginine, "R", pArray[2]];
masterAAArray[2] = ["glycine", glycine, "G", pArray[3]];
masterAAArray[3] = ["glutamine", glutamine, "Q", pArray[1]];
masterAAArray[4] = ["histidine", histidine, "H", pArray[2]];
masterAAArray[5] = ["serine", serine, "S", pArray[1]];
masterAAArray[6] = ["proline", proline, "P", pArray[0]];

function checkAnswer() {
	sProperties = 0;
	wProperties = 0;
	checkAminoAcid();
	checkProperties();
}

function checkAminoAcid(){
	let q = qArray[num];
	//alert(q);
	let expAns = "";

	ans = ans.id;
	//alert(ans);

	for (i = 0; i < 6; i++){
		if(q == masterAAArray[i][2]){
			expAns = masterAAArray[i][0];
			//alert(expAns);
		}
	}

	if(ans == expAns){
		sAminoAcid += 1;
		let display = document.getElementById("correctAns1");
		display.innerHTML = sAminoAcid;
		num = 0;
		generateQuestion();
	} else {
		alert("Wrong Side Group! Try Again~");
		wAminoAcid += 1;
		let display = document.getElementById("wrongAns1");
		display.innerHTML = wAminoAcid;
	}

}

function showSolution(){
	let q = qArray[num];
	
	for(i=0; i<7; i++){
		if(q == masterAAArray[i][2]){
			img = masterAAArray[i][1];
			let display = document.getElementById("solution");
			display.appendChild(img);
			for(let j=0; j < masterAAArray[i][3].length; j++){
				let ulist = document.getElementById("psolution");
				ulist.innerHTML += "<li>" + masterAAArray[i][3][j] + "</li>";
			}
		}
	}
}

function checkProperties(){
	let expectedlist = [];
	expectedlist = masterAAArray[num][3].slice();
	//alert(expectedlist);
	let actualList = getSelectedCheckBox();
	//alert(actualList);
	
	if (actualList.length < expectedlist.length){
		for(let i = 0 ; i < expectedlist.length ; i++){
			for(let j = 0 ; j < actualList.length ; j++){
				if(actualList[j] == expectedlist[i]){
					sProperties += 1;
				} 
			}
			wProperties += 1;
		}

	}else{
		for(let i=0; i < actualList.length; i++){
			for(let j=0; j <expectedlist.length; j++){
				if(actualList[i] == expectedlist[j]){
					sProperties += 1;
				}
			}
			wProperties += 1;
		}
	}

	if((actualList.length != expectedlist.length) && (wProperties != 0)){
		alert("Please rethink about the associated properties again");
	}else {
		alert("Great job! Next Question");
	}
	let display1 = document.getElementById("correctAns2");
		display1.innerHTML = sProperties;
	let display2 = document.getElementById("wrongAns2");
		display2.innerHTML = wProperties;
}

function getSelectedCheckBox(){
	let selection = [];
	let p0 = "";
	let p1 = "";
	let p2 = "";
	let p3 = "";
	let p5 = "";
	let p6 = "";
	let p7 = "";
	let p8 = "";
	if(document.getElementById("aliphatic").checked){
		p0 = document.getElementById("aliphatic").value;
		selection.push(p0);
	}
	if(document.getElementById("basic").checked){
		p1 = document.getElementById("basic").value;
		selection.push(p1);
	}
	if(document.getElementById("hydrophilic").checked){
		p2 = document.getElementById("hydrophilic").value;
		selection.push(p2);
	}
	if(document.getElementById("hydrophobic").checked){
		p3 = document.getElementById("hydrophobic").value;
		selection.push(p3);
	}
	if(document.getElementById("interactive").checked){
		p4 = document.getElementById("interactive").value;
		selection.push(p4);
	}
	if(document.getElementById("ionizable").checked){
		p5 = document.getElementById("ionizable").value;
		selection.push(p5);
	}
	if(document.getElementById("non-polar").checked){
		p6 = document.getElementById("non-polar").value;
		selection.push(p6);
	}
	if(document.getElementById("non-reactive").checked){
		p7 = document.getElementById("non-reactive").value;
		selection.push(p7);
	}
	if(document.getElementById("polar").checked){
		p8 = document.getElementById("polar").value;
		selection.push(p8);
	}
	return selection;
	//alert(selection);
}

function generateNextQuestion() {
	num = 0;
	generateQuestion();
}

// $("body").append($("<img>").attr("src", "images/image.png"));