import React, { Component } from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import classes from './Quiz.module.css'

class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
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
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key] === "success") {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if(question.rightAnswerId === answerId ) {
            if(!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {
                    [answerId] : 'success'
                },
                results 
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)

            
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {
                    [answerId] : 'error'
                },
                results
            })
        }
    
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                <h1>Quiz</h1>
                { 
                    this.state.isFinished ? 
                    <FinishedQuiz 
                    onRetry={this.retryHandler}
                    results={this.state.results}
                    quiz={this.state.quiz}
                    /> :
                    <ActiveQuiz 
                    answers={this.state.quiz[this.state.activeQuestion].answers}
                    question={this.state.quiz[this.state.activeQuestion].question}
                    onAnswerClick={this.onAnswerClickHandler}
                    quizLength={this.state.quiz.length}
                    answerNumber={this.state.activeQuestion + 1}
                    state={this.state.answerState} />
                }                    
                </div>
            </div>
        )
    }
}

export default Quiz