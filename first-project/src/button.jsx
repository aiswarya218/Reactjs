import { jsx } from "react/jsx-runtime"

export function button () {
    let number = 7
    let displayString

    if (number > 10) {
        displayString = "Big Number"
    }
    else {
        displayString = "Small Number"
    }
    return(
        <button>
            <p>{displayString}</p>
        </button>
    )
}

// export function Button(text, color, func, msg) {
//     return (
//         <button onClick={() => func(msg)} style={{backgroundColor: props.color}}>
//             <p>{props.text}</p>
//         </button>
//     )
// }


// import { useState } from "react"
// export function Button({color}) {
//     const [count, setCount] = useState(0)

//     return (
//         <button style = {{backgroundColor: color}}>
//             <p>{text}</p>
//         </button>
//     )
// }


        