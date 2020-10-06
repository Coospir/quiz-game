import React, { Component } from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        çanswerState: null,
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо?',
                rightAnswerId: 3, 
                answers: [
                    {id: 1, text: 'Красное'},
                    {id: 2, text: 'Зеленое'},
                    {id: 3, text: 'Синее'},
                    {id: 4, text: 'Черное'},
                ]
            },
            {
                id: 2,
                question: 'Запрещающий сигнал светофора?',
                rightAnswerId: 1, 
                answers: [
                    {id: 1, text: 'Красный'},
                    {id: 2, text: 'Желтый'},
                    {id: 3, text: 'Зеленый'}
                ]
            }

        ]
    }

    onAnswerClickHandler = answerId => {
    const question = this.state.quiz[this.state.activeQuestion]

    if(question.rightAnswerId === answerId ) {

        this.setState({
            answerState: {
                [answerId] : 'success'
            }
        })

        const timeout = window.setTimeout(() => {
            if (this.isQuizFinished()) {
                console.log('finished')
            } else {
                this.setState({
                    activeQuestion: this.state.activeQuestion + 1
                })
            }
            window.clearTimeout(timeout)
        }, 1000)

         
    } else {
        this.setState({
            [answerId]: 'error'
        })
    }
    
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                <h1>Quiz</h1>
                    <ActiveQuiz 
                    answers={this.state.quiz[this.state.activeQuestion].answers}
                    question={this.state.quiz[this.state.activeQuestion].question}
                    onAnswerClick={this.onAnswerClickHandler}
                    quizLength={this.state.quiz.length}
                    answerNumber={this.state.activeQuestion + 1}
                    state={this.state.answerState} />
                </div>
            </div>
        )
    }
}

export default Quiz