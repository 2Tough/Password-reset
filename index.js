let botonEl = document.getElementById("boton")
let pass1El = document.getElementById("password1")
let pass2El = document.getElementById("password2")
let pass3El = document.getElementById("password3")
let pass4El = document.getElementById("password4")
let randomKeys = [
    'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','`','~','!','@','#','%','^','&','*','(',')','-','_','=','+','\\','|','[','{',']','}',
    ';',':','"',',','<','.','>','+',1,2,3,4,5,6,7,8,9,0
]


let moreRandomKeys = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let cartas = []

 function newpasswordsEl() {
     let letra = Math.floor(Math.random()*randomKeys.length+1)
     let numero = randomKeys[letra]
      if (typeof numero === 'undefined')  {
          return randomKeys[55]
      }
     else {
         return numero
     }
     

 }
 
 function passWord1() {
     
    let pass1 = newpasswordsEl()
    let pass2 = newpasswordsEl()
    let pass3 = newpasswordsEl()
    let pass4 = newpasswordsEl()
    let pass5 = newpasswordsEl()
    let pass6 = newpasswordsEl()
    let pass7 = newpasswordsEl()
    let pass8 = newpasswordsEl()
    
    pass1El.textContent = pass1 + pass2 + pass3 + pass4 + pass5 + pass6 + pass7 + pass8
    
    passWord2()
    
 }
 
 
 function passWord2() {
     
     let numeroS = Math.floor(Math.random()*randomKeys.length)
     let letraS = randomKeys.slice(Math.floor(Math.random()*numeroS, numeroS+8))
     let numeroRandom = randomKeys.slice(numeroS, numeroS+1)
     let resersedS = numeroRandom.join("")
     
     return resersedS
   }
 
 
  function passGen2() {
      let moreRandomKeys = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     let passLenth = 8
     let password = ""
     for (let i=0; i <= passLenth; i++) {
        let passWord = Math.floor(Math.random()*randomKeys.length)
         
         return moreRandomKeys.substring(passWord, passWord +1)
         
 }    
  }  
 
 function passWord3() {
     let primeRo = passGen2()
     let segunDo = passGen2()
     let terceRo = passGen2()
     let cuarTo = passGen2()
     let quinTo = newpasswordsEl()
     let sexTo = passGen2()
     let septiMo = passGen2()
     let octaVo = passGen2()
     
     pass3El.textContent = primeRo + segunDo + terceRo + cuarTo + quinTo + sexTo + septiMo + octaVo
 }
 
 function passWord4() {
     let primeRo = passWord2()
     let segunDo = passWord2()
     let terceRo = passWord2()
     let cuarTo = passWord2()
     let quinTo = passWord2()
     let sexTo = passWord2()
     let septiMo = passWord2()
     let octaVo = passWord2()
     
     pass4El.textContent = primeRo + segunDo + terceRo + cuarTo + quinTo + sexTo + septiMo + octaVo
 }
 
 
 function passWord() {
     let primeRo = passGen2()
     let segunDo = passGen2()
     let terceRo = passGen2()
     let cuarTo = passWord2()
     let quinTo = newpasswordsEl()
     let sexTo = passGen2()
     let septiMo = passWord2()
     let octaVo = passWord2()
     
     pass2El.textContent = primeRo + segunDo + terceRo + cuarTo + quinTo + sexTo + septiMo + octaVo
 }
 
