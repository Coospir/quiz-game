import React from 'react'
import AnswersList from '../AnswersList/AnswersList'
import classes from './ActiveQuiz.module.css'

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                    {props.question}
            </span>
            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>
        <AnswersList 
        answers={props.answers}
        onAnswerClick={props.onAnswerClick} />
    </div>
)

export default ActiveQuiz