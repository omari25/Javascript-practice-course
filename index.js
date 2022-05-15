const submit = document.getElementsByClassName('btn1')
const form1 = document.getElementById('form1')

form1.addEventListener('submit', function answers(e){
    marks=0;

  e.preventDefault()
    var q1 = document.form1.quizOne.value
    var q2 = document.form1.quizTwo.value
    var q3 = document.form1.quizThree.value
    var q4 = document.form1.quizFour.value
    var q5 = document.form1.quizFive.value
    var q6 = document.form1.quizSix.value
    var q7 = document.form1.quizSeven.value
    var q8 = document.form1.quizEight.value
    var q9 = document.form1.quizNine.value
    var q10 = document.form1.quizTen.value
    var q11 = document.form1.quizEleven.value
    var q12 = document.form1.quizTwelve.value
    var q13 = document.form1.quizThirteen.value
    var q14 = document.form1.quizFourteen.value
    var q15 = document.form1.quizFifteen.value
    var q16 = document.form1.quizSixteen.value
    var q17 = document.form1.quizSeventeen.value
    var q18 = document.form1.quizEighteen.value
    var q19 = document.form1.quizNineteen.value
    var q20 = document.form1.quizTwenty.value


    if(q1 == '5')marks++
    if(q2 == '-6')marks++
    if(q3 == 'c')marks++
    if(q4 == '2')marks++
    if(q5 == '5x')marks++
    if(q6 == '6')marks++
    if(q7 == '7')marks++
    if(q8 == '8')marks++
    if(q9 == '9')marks++
    if(q10 == '10')marks++
    if(q11 == '11')marks++
    if(q12 == '12')marks++
    if(q13 == '13')marks++
    if(q14 == '14')marks++
    if(q15 == '15')marks++
    if(q16 == '16')marks++
    if(q17 == '17')marks++
    if(q18 == '18')marks++
    if(q19 == '19')marks++
    if(q20 == '20')marks++


    var result = marks*100/(20)+ +" " + "%"

    if(result == 80 +'%' || result> 80 +'%' || result ==100 +'%') 
    form1.innerHTML = ( "Your score:" + " "+ '<br>' + '<br>'+ result + " " + '<br>'+'<br>'+ "Excellent performance")


    else if(result >= 50+'%' && result< 80+'%')
    form1.innerHTML= ('Your score:' +  '<br>' + '<br>'+" "+ result + " "  + '<br>' + '<br>' +"Fairly Passed")
 
    else if(result < 50+'%')
    form1.innerHTML= ('You score:' + " "+" "+ '<br>' + '<br>'+ result + " "+ '<br>' + '<br>' + "Terribly failed.")
 
    form1.classList.add('center')

})
