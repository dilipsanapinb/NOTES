
// let btn = document.getElementById('search');

// btn.addEventListener('input', () => {
//     debounce(searchFunction(),1000)
// })

// const searchFunction = async() => {
//     let inputValue = document.getElementById('serach').value;

//     let res = await fetch(`url${inputValue}`, {
//         method: "GET",
//         headers: {
//             'Content-type': "Application/json",
//             Authorization:`Bearer ${token}`
//         }
//     })
//     if (res.ok) {
//         let data = await res.json();
//         console.log(data);
//     }
// }

// let id;
// function debaunce(func, delay) {
//     if (id) {
//         clearInterval(id)
//     }
//     id = setInterval(() => {
//         func()
//     },delay)
//  }

// setTimeout(() => {
    
// },3000)
// let id;
// function func(delay) {
//     if (id===delay) {
//         clearInterval()
//     }
//     id = setInterval(() => {
//         console.log("Hello")
//     }, delay)
// }

// func()

let btn = document.getElementById('btn');
btn.addEventListener('click', displayModal  )

function displayModal() {
    console.log("X");
    let modal = document.getElementById('modal');
    modal.style.display='block'
}
