import React, { useState, useCallback } from 'react';
import produce from 'immer';

const initialState = [
    {
        name : 'house',
        rooms: [
        {
            name: 'room1',
            text: 'Room1',
        },
    ],
 },
{
    name: 'car',
    text: 'i20',
},
];

function RoomName({ data, onChange }) {
    return (
        <div>
            <div>Update Room Name</div>
            <input value = {data.text} onChange = {onChange} />
        </div>
    );
}

function CarName({ data, onChange }) {
    console.log('CarName');
    return (
        <div>
            <div>Update Car Name</div>
            <input value = {data.text} onChange = {onChange} />
        </div>
    );
}

export default function Test() {
    const [indo, setInfo] = useState(initialState);

    const onRoomChange = (evt) => {
        setInfo((state) => {
            return produce(state, (draft) => {
        draft[0].rooms[0].text = evt.target.value;
    });
 });
};


const onCarChange = useCallback((evt) => {
    setInfo((state) => {
        return produce(state, (draft) => {
            draft[1].text = evt.target.value;
        });
    });
}, []);

console.log(info);

return (
    <div>
    <RoomName data = {info[0].rooms[0]} onChange={onRoomChange} />
    <CarName data = {info[1]} onChange = {onCarChnage} />
    </div>
);
}




const quizData = [
    {
        question : "Which language runs in a web browser?",
        a : "Java",
        b : "C",
        c : "Python",
        d : "JavaScript",
        correct : "d"
    },
    {
        question : "What does CSS stand for ?",
        a : "Central Style Sheets",
        b : "Cascading Style Sheets",
        c : "Cascading Simple Sheets",
        d : "Cars SUVs Sailboats",
        correct : "b",
    },
    {
        question : "What does HTML stand for ?",
        a : "Hypertext Markup Language",
        b : "Hypertext Markdown Language",
        c : "Hyperloop Machine Language",
        d : "Helicopter Motor Lamborgini",
        correct : "a",
    },
    {
        question : "What year was Javascript launched ?",
        a : "1996",
        b : "1995",
        c : "1994",
        d : "None of the above",
        correct : "b",
    },
];

const quiz = document.getElementById('quiz')
const answersEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer 

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
        answer = answerEl.id
    }
})

return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        }
        else {
            quizData.innerHTML = `
            <h2>you answered ${score}/${quizData.atlength} questions correctly</h2>
            
            <button onClick = "location.reload()">Relaod</button>
            `
        }
    }
})