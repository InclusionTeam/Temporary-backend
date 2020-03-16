import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Form from './Form'


export default class Cohorts extends Component {

    state = {
        cohorts: []
    }


    componentDidMount() {
        fetch('http://localhost:3000/cohorts')
            .then(res => res.json())
            .then(cohorts => this.setState({ cohorts: cohorts }))
    }

    cohortList = () => {
        return this.state.cohorts.map(cohort => {
            return (
                <li key={cohort.id}><Link to={{ pathname: "/application", state: { cohort_id: cohort.id } }} >{cohort.cohort_nickname}</Link></li>
            )
        })
    }

    render() {

        return (
            <div className="container">
                <h1>Cohorts</h1>
                <hr />
                <ul>
                    {this.cohortList()}
                </ul>
            </div>
        )
    }
}
