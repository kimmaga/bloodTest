
var quizData = [
{
	question : '길을 잃어버렸을 때',
	answers : {
		a : '길을 잃은 걸 알아채면, 이곳저곳 돌아다니며 길을 찾습니다.',
		b : '내가 가는 길이 맞는지 아닌지 관심 없이 그냥 갑니다.',
		o : '길을 잃어버리지 않습니다.',
		ab : '길을 찾으면서 자기 할 일 다 합니다.'
	}
},
{
	question : '스트레스를 받을 때',
	answers : {
		a : '타인을 먼저 생각하다가 하고 싶은 말을 못 하고 스스로 참습니다.',
		b : '자기 속에 있는 말 다 하는 편이라 스트레스를 적게 받습니다.',
		o : '겉보기에는 스트레스가 없어 보이지만, 협조적이고 서비스 정신이 많아 스트레스가 한 번에 몰려옵니다.',
		ab : '할 때는 하고 안 할 때는 안 하는 단호한 타입이라 스트레스가 다소 적습니다.'
	}
},
{
	question : '친구가 장난칠 때',
	answers : {
		a : '잘 놀라지만 일부러 태연한 척합니다.',
		b : '장난을 받아쳐서 역으로 장난을 칩니다.',
		o : '친구가 했던 장난을 그대로 갚아줍니다.',
		ab : '장난 그만 쳐 라고 말하며 정색합니다.'
	}
},
];

function answerClick(va){
	console.log(va.querySelector("input").alt);
	buildQuiz(Number(va.querySelector("input").alt)+1);
}


function buildQuiz(index){
		
	document.getElementsByClassName('question')[0].textContent = quizData[index].question; 
	var addElement = "";
	for(var answerKey in Object.keys(quizData[index].answers)){
		var tagElement 
			= '<p class="lead answer" onmouseover ="mouseEnter(this)" onmouseout = "mouseOut(this)" onclick = "answerClick(this)">' 
			+ quizData[index].answers[Object.keys(quizData[index].answers)[answerKey]] 
			+ '<input type="hidden" class="bloodType" value="'+Object.keys(quizData[index].answers)[answerKey]+'" alt="'+index+'"> </p>';
		
		addElement += tagElement;
	}
	document.getElementsByClassName('answer')[0].innerHTML = addElement;
	if(quizData.length<= index){
		alert('끗');
	}

}

function mouseEnter(va){
	va.style.color = "yellow";
}
function mouseOut(va){
	va.style.color= "white";
}

