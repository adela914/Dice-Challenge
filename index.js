
var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomDiceImage = "images/dice" + randomNumber1 + ".png";


document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);
// 바꿔야 할 이미지 두개이니까 셀레터 올사용!

var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";


document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);
// 바꿔야 할 이미지 두개이니까 셀레터 올사용!
// [1]을 갖다 넣는 이유는 : querySelectorAll이 하나의 Array로 결과 값을 내기 때문에
// 그 중 원하는 element를 선택하기 위해서는 저렇게 번호로 구분해야함!


if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "draw";
}else if  (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}else if  (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins!";

}
//짧게 쓰는 것도 좋지만 발란스를 지키는게 좋다고함. 너무 한 문장에다가
//몰아 넣으려고 하면 다른사람이 읽기 어려우니 expressive하면서도
//간결하게 문장을 넣을 것! 