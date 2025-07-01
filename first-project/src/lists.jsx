//rendering lists in react

import { jsx } from "react/jsx-runtime";

export default function FruitList() {
    const fruits = ["Apple", "Banana", "Orange", "Mango"];

    return (
        <div>
            <h2> 🍓 Fruit List</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key = {index}> ✅ {fruit}</li>
                ))}
            </ul>
        </div>
    )
}



//conditional rendering in react(msg based on condition)

export default function WelcomeMessaage({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? (
                <h2>👋 Welcome back, user! </h2>
            ) : (
                <h2>🚪 Please log in.</h2>
            )}
        </div>
    );
}

//conditional rendering using &&
export default function ShowAlert({ show }) {
    return (
        <div>
            {show && <p style={{ color: "red"}}> ⚠️ Warning : Action required!</p>}
        </div>
    );
}

//list + conditional together
export default function TaskList() {
    const talks = ["React", "JS", "CSS"];

    return (
        <div>
            <h2>  Task List</h2>
            {TaskList.length === 0 ? (
                <p> 🎉 All tasks completed!</p>
            ) : (
            <ul>
                {TaskList.map((task, index) => (
                    <li key = {index}> ✅ {task}</li>
                ))}
            </ul>
            )}
        </div>
    );
}

