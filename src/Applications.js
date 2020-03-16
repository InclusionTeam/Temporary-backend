import React, { Component } from 'react'

export default class Applications extends Component {

    state = {
        cohorts: [],
        cohortsWithApps: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/cohorts')
            .then(res => res.json())
            .then(cohorts => this.setState({ cohorts }));
    }

    getCohortApps = async id => {
        let applicants = [];
        await fetch(`http://localhost:3000/cohorts/${id}/applications`)
            .then(res => res.json())
            .then(apps => applicants.push(apps));
        applicants.map(applicant => {
            applicant.map(app => {
                return (
                    <li>${app.name}</li>
                )
            })
        })
    }


    getCohorts = () => {
        return this.state.cohorts.map(cohort => {
            return (
                <div>{cohort.cohort_nickname} {this.getCohortApps(cohort.id)}</div>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <h1>Viewing all applications</h1>
                <hr />
                <ul>
                    {this.getCohorts()}
                </ul>
            </div>
        )
    }
}
