
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

// let btn = document.getElementById('btn');
// btn.addEventListener('click', displayModal  )

// function displayModal() {
//     console.log("X");
//     let modal = document.getElementById('modal');
//     modal.style.display='block'
// }

// const customEvent = new CustomEvent('myEvent', {
//     detail: { message: "Hello from my event" },
//     bubbles: true,  // bubble up the DOM tree
//     cancelable: true  //allow canceled
// });

// // dispatch the event

// document.dispatchEvent(customEvent);

// // handle the custome event

// document.addEventListener('myEvent', function (event) {
//     console.log(event.detail.message);
//     // Output:"Hello from myEvent"
// })

// const myEventTarget = new EventTarget();

// const myEvent = new Event('myEvent');

// myEventTarget.addEventListener('myEvent', function (event) {
//     console.log('Custom event triggered');
// })
// myEventTarget.dispatchEvent(myEvent);

// const express = require('express');

// // const session=require('express-session')

// const cookieparser = require("cookie-parser");

// const app = express();

// app.use(cookieparser());

// // app.use(session({
// //     secret: 'secretKey',
// //     resave: false,
// //     saveUninitialized:false
// // }));

// app.get('/', (req, res) => {
//     res.send('Welcome')
// })

// // app.get('/login', (req, res) => {
// //     req.session.username = 'Dilip';
// //     res.send("Logged in successfully")
// // });

// // app.get('/profile', (req, res) => {
// //     let username = req.session.username;
// //     res.send(`Username:${username}`)
// // })

// app.get('/set', (req, res) => {
//     res.cookie('Username', "Dilip Sanap", { maxAge: 20 * 1000, httpOnly: true });
//     res.send('Cookie set successfully');
// })

// app.get('/get', (req, res) => {
//     const username = req.cookies.Username;
//     if (username) {
//         res.send(`Hello,  ${username}`)
//     } else {
//         res.send(`Cookie not found`)
//     }
    
// });

// app.get("/clear", (req, res) => {
//   res.clearCookie("username");
//   res.send("Cookie has been cleared");
// });
// app.listen(8080, () => {
//     console.log('server is running on port 8080');
// })

// const http = require('http');

// const options = {
//     hostname: 'api.example.com',
//     path: '/user/register',
//     method: 'POST',
//     headers: {
//         'content-Type': "application/json"
//     }
// };

// const req = http.request(options, (res) => {
//     let data = "";
//     res.on('data', (chunk) => {
//         data += chunk
//     });
//     res.on('end', () => {
//         console.log(data);
//     });
//     res.on('error', (error) => {
//         console.log(error);
//     })
// })

// const rateLimit = (limit, time, blockedTime) => {
    
//     const requests = {};

//     setInterval(() => {
        
//         for (let ip in requests) {
            
//             const now = Date.now();

//             const timeWindow = requests[ip].timeWindow;

//             const blockedUntill = requests[ip].blockedUntill;

//             requests[ip].requests = requests[ip].requests.filter((time) => {
//                 return time > now - timeWindow;
//             });

//             if (requests[ip].requests.length === 0) {
//                 requests[ip].timeWindow = now;
//             }

//             if (blockedUntill && blockedUntill <= now) {
//                 requests[ip].blockedUntill = null;

//                 requests[ip].requests = [];
//                 requests[ip].timeWindow = now
//             }
//         }

//     }, time);

//     return (req, res, next) => {
        
//         const ip = req.ip;

//         const now = Date.now();

//         requests[ip] = requests[ip] || {
//             requests: [], timeWindow: now
//         };

//         if (requests[ip].blockedUntill && requests[ip].blockedUntill > now) {
//             const remainingTime = Math.ceil((requests[ip].blockedUntill - now) / 1000);

//             res.status(429).send(`Too many requests , please try again after ${remainingTime} seconds`)
//         } else if (requests[ip].length >= limit) {
//             requests[ip].blockedUntill = now + blockedTime;

//             const remainingTime = Math.ceil((blockedTime) / 1000);

//             res.status(429).send(`Too many requests , please try again after ${remainingTime} seconds`)
//         } else {
//             requests[ip].requests.push(now);
//             next();
//         }
//     }
// };

// module.exports={rateLimit}

// const express = require('express');
// const app = express();

// const http = require('http').createServer(app);
// const io = require('socket.io')(http);

// // rate limiting

// const message_limit = 10;
// const timeF = 60 * 1000;

// const messageCount = new Map();

// io.on('connection', (socket) => {
//     console.log('Connected to server');

//     messageCount.set(socket.id, 0);

//     socket.io('message', (data) => {
//         const count = messageCount.get(socket.id) || 0;

//         if (count >= message_limit) {
//             socket.emit('rateLimitExceeded', { mesage: 'Rate limit exceeded. Please try again later.' });
//             return;
//         }
//         messageCount.set(socket.id, count + 1);
//         io.emit('message', data)
//     });
// });

// // disconnect
// io.on('disconnect', (socket) => {
//     messageCount.delete(socket.id);
// })
// let arr = [1, 2, 3, 4, 5];
// let n=5
// for (let i = 0; i <n; ++i){
//     console.log(arr[i])
 
// function setTimeout(func, delay, ...args) {
//   let timerId = setInterval(() => {
//     func.apply(null, args);
//     clearInterval(timerId);
//   }, delay);
// }
// // Usage example:
// function myFunction() {
//   console.log("Hello, world!");
// }

// setTimeout(myFunction, 2000);

// function setInterval(func, delay, ...args) {
//   function interval() {
//     func.apply(null, args);
//     setTimeout(interval, delay);
//   }

//   setTimeout(interval, delay);
// }

// // Usage example:
// function myFunction() {
//   console.log("Hello, world!");
// }

// setInterval(myFunction, 2000);





















// function setTimeout(func, delay, ...args) {
//     let id = setInterval(() => {
//         func.apply(null, args);
//         clearInterval(id)
//     })
// }
// function myGreet() {
//     console.log('Hello World');
// }

// setTimeout(myGreet, 1000);

// function setInterval(func, delay, ...agrs) {
//     function interval() {
//         func.apply(null, agrs);
//         setTimeout(interval,delay)
//     }
//     setTimeout(interval,delay)
// }

// function myGreet() {
//     console.log('Hello World');
// }

// setInterval(myGreet,1000)

function fetchData(callback) {
    setTimeout(() => {
        const data = ['a', 'b', 'c'];
        callback(data)
    },2000)
}

function processData(data) {
    console.log('Processing Data',data);
}

fetchData(processData);
