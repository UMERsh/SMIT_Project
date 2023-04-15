document.getElementById("name").onclick=function(){
    alert("Umer Shafiq") 
    document.getElementById("originalStatement").innerHTML="alert('Umer Shafiq')"
    document.getElementById("outputStatement").innerHTML='Umer Shafiq'
   
}
document.getElementById("num").onclick=function(){
    alert("1234") 
    document.getElementById("originalStatement").innerHTML="alert('12345')"
    document.getElementById("outputStatement").innerHTML='1234'
   
}
document.getElementById("variableName").onclick=function(){
   
    document.getElementById("originalStatement").innerText=`<ul>
    <li>A variable name can't contain any spaces.</li>
    <li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li>
    <li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.
    For example, <code>userAlert</code> and <code>myVar</code> are legal.
    </li>
    <li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a
    <code>Rose</code>. If you assign the string "Floribundas" to the variable <code>rose</code> , and then ask
    JavaScript
    for the value assigned to <code>Rose</code> , you'll come up empty
    </li>
    </ul>`

    document.getElementById("outputStatement").innerHTML=`<ul>
    <li>A variable name can't contain any spaces.</li>
    <li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li>
    <li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.
    For example, <code>userAlert</code> and <code>myVar</code> are legal.
    </li>
    <li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a
    <code>Rose</code>. If you assign the string "Floribundas" to the variable <code>rose</code> , and then ask
    JavaScript
    for the value assigned to <code>Rose</code> , you'll come up empty
    </li>
    </ul>`
}
document.getElementById("varcamel").onclick = function () {
    document.getElementById("originalStatement").innerText =`<ul>
    <li>userResponse</li>
    <li>userResponse</li>
    <li>userResponseTimeLimit</li>
    <li>response</li>
    </ul>`
    
    document.getElementById("outputStatement").innerHTML ="html"


}

// sum numbers 
let sum1 = 15
let sum2 = 20
let sum = sum1 + sum2
console.log(sum)

document.getElementById("sumnum").onclick = function () {
    document.getElementById("originalStatement").innerText = `let sum1 = 15
    let sum2 = 20
    let sum = sum1 + sum2
    sum=15+20`
    document.getElementById("outputStatement").innerHTML = sum
}

// subtract numbers 
let sub1 = 35
let sub2 = 20
let sub = sub1 - sub2
console.log(sub)

document.getElementById("subtract").onclick = function () {
    document.getElementById("originalStatement").innerText = `let sub1 = 35
    let sub2 = 20
    let sub = sub1 - sub2
    sub=35-20`
    document.getElementById("outputStatement").innerHTML = sub
}

// multiply numbers
let mul1 = 5
let mul2 = 20
let multiply = mul1 * mul2
console.log(multiply)

document.getElementById("multiply").onclick = function () {
    document.getElementById("originalStatement").innerText = `let mul1 = 5
    let mul2 = 20
    let multiply = mul1 * mul2
    multiply=5*20`
    document.getElementById("outputStatement").innerHTML = multiply
}

// divide numbers 
let div1 = 50
let div2 = 2
let divide = div1 / div2
console.log(divide)

document.getElementById("division").onclick = function () {
    document.getElementById("originalStatement").innerText = `let div1 = 50
    let div2 = 2
    let divide = div1 / div2
    divide=50/2`
    document.getElementById("outputStatement").innerHTML = divide
}

// calculate some numbers 
let som1 = 36
let som2 = 6
let som3 = 3
let som4 = 2
let som5 = 4
let som6 = 3
let som7 = 5
let calculate = som1 / som2 * som3 ** som4 - som5 * som6 + som7;
console.log(calculate)

document.getElementById("bodmas").onclick = function () {
    document.getElementById("originalStatement").innerText = `let som1 = 36
    let som2 = 6
    let som3 = 3
    let som4 = 2
    let som5 = 4
    let som6 = 3
    let som7 = 5
    let calculate = som1 / som2 * som3 ** som4 - som5 * som6 + som7
    calculate = 36 / 6 * 3**2 - 4 * 3 + 5`
    document.getElementById("outputStatement").innerHTML = calculate
}

document.getElementById("clearOriginalStatement").onclick=function(){
    document.getElementById("originalStatement").innerHTML="" 
}

document.getElementById("clearOutputStatement").onclick=function(){
    document.getElementById("outputStatement").innerHTML="" 
}





