// const values = Array.from(document.querySelectorAll(".values"))
// const calcDisplayElement = document.getElementById("display")

// values.forEach(val =>  val.addEventListener("click", () =>  calcDisplayElement.value += val.innerHTML))

// document.querySelector(".cancel_all").addEventListener("click", () => calcDisplayElement.value = "" )

////////////////GRACE

// document.getElementById("eval").addEventListener("click", () => {
//     const results = eval(calcDisplayElement.value)
//     calcDisplayElement.value = results
// })

// document.querySelector('.delete').addEventListener("click", () => calcDisplayElement.value = calcDisplayElement.value.slice(1))


const values = Array.from(document.querySelectorAll('.values'))
const calcDisplayElement = document.getElementById('display')

values.forEach(val => val.addEventListener('click', () => calcDisplayElement.value += val.innerHTML))
document.querySelector('.cancel_all').addEventListener("click", () => calcDisplayElement.value = '')

document.getElementById('eval').addEventListener('click', () => {
    const results = eval(calcDisplayElement.value)
    calcDisplayElement.value = results
})

document.querySelector('.delete').addEventListener('click', () => calcDisplayElement.value = calcDisplayElement.value.slice(1))