import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Form extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        birth_date: '',
        gender: '',
        ethnicity: '',
        linkedin: '',
        github: '',
        extra_link: '',
        cover_letter: '',
        highest_degree: '',
        college_major: '',
        college_location: '',
        is_employed: '',
        employer: '',
        is_military: false,
        income: '',
        has_laptop: false,
        why_interested: '',
        how_heard: '',
        skill_level: '',
        app_status: 'Under review',
    }

    componentDidMount() {
        this.setState({ cohort_id: this.props.location.state.cohort_id });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleCheckboxes = (event) => {
        this.setState({ [event.target.name]: event.target.checked });
    }

    handleSubmit = (event) => {
        console.log(JSON.stringify(this.state))
        event.preventDefault();
        fetch('http://localhost:3000/applications', {
            method: "POST",
            header: {
                'Accept': 'Application/json',
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(response => console.log(response.json()))
            .then(data => {
                this.props.history.push('/');
            })
    }

    handleEthnicity = (event) => {
        this.setState({ ethnicity: event.target.value })
    }

    handleDate = (date) => {
        let dbFriendlyDate = date.toISOString();
        this.setState({
            birth_date: dbFriendlyDate
        });
    };



    render() {
        return (
            <div className="container">
                <h1>Apply to a cohort</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" placeholder="Enter your name" name="name" value={this.state.name} onChange={this.handleChange} />
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange} />
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" id="phone" className="form-control" placeholder="Enter your phone number" name="phone" value={this.state.phone} onChange={this.handleChange} />
                    <label htmlFor="address">Home address</label>
                    <input type="text" id="address" className="form-control" placeholder="Enter your address" name="address" value={this.state.address} onChange={this.handleChange} />
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" className="form-control" placeholder="Enter your city" name="city" value={this.state.city} onChange={this.handleChange} />
                    <label htmlFor="state">State</label>
                    <select className="form-control" id="state" name="state" value={this.state.state} onChange={this.handleChange} >
                        <option>Select your state...</option>
                        <option>CT</option>
                        <option>NJ</option>
                        <option>NY</option>
                    </select>
                    <label htmlFor="zip">Zip code</label>
                    <input type="text" id="zip" className="form-control" placeholder="Enter your zip code" name="zip" value={this.state.zip} onChange={this.handleChange} />
                    <label htmlFor="date">Birth date:</label>
                    <DatePicker selected={new Date()} onChange={this.handleDate} showYearDropdown dateFormatCalendar="MMMM" yearDropdownItemNumber={100} scrollableYearDropdown />
                    <hr />
                    <label htmlFor="gender">Gender</label>
                    <input type="text" id="gender" className="form-control" placeholder="Enter your gender" name="gender" value={this.state.gender} onChange={this.handleChange} />
                    <label htmlFor="ethnicity">Ethnicity</label>
                    <input type="text" id="ethnicity" className="form-control" placeholder="Enter your ethnicity" name="ethnicity" value={this.state.ethnicity} onChange={this.handleChange} />
                    <label htmlFor="linkedin">LinkedIn</label>
                    <input type="text" id="linkedin" className="form-control" placeholder="Enter your LinkedIn profile address" name="linkedin" value={this.state.linkedin} onChange={this.handleChange} />
                    <label htmlFor="github">Github</label>
                    <input type="text" id="github" className="form-control" placeholder="Enter your gitHub Profile address" name="github" value={this.state.github} onChange={this.handleChange} />
                    <label htmlFor="extralink">Extra link</label>
                    <input type="text" id="extralink" className="form-control" placeholder="If you have an extra link you'd like to share with us, enter it here" name="extra_link" value={this.state.extra_link} onChange={this.handleChange} />
                    <label htmlFor="coverletter">Cover letter</label>
                    <textarea id="coverletter" className="form-control" rows="10" placeholder="Please enter your cover letter" name="cover_letter" value={this.state.cover_letter} onChange={this.handleChange} />
                    <label htmlFor="highest_degree">What's your highest degree?</label>
                    <select className="form-control" id="highest_degree" name="highest_degree" value={this.state.highest_degree} onChange={this.handleChange}>
                        <option>High School</option>
                        <option>Associate's</option>
                        <option>Bachelor's</option>
                        <option>Master's</option>
                        <option>PHD</option>
                    </select>
                    <label htmlFor="college major">What's your college major?</label>
                    <select className="form-control" id="college_major" name="college_major" value={this.state.college_major} onChange={this.handleChange} >
                        <option>Athletic Training</option>
                        <option>Biology</option>
                        <option>Chemistry</option>
                        <option>Environmental Science</option>
                    </select>
                    <label htmlFor="college_location">College location</label>
                    <input type="text" id="college_location" className="form-control" placeholder="Where is your college located?" name="college_location" value={this.state.college_location} onChange={this.handleChange} />
                    <input className="form-check-input" type="checkbox" id="is_employed" name="is_employed" value={this.state.is_employed} onChange={this.handleCheckboxes} />
                    <label className="form-check-label" htmlFor="is_employed">Are you employed?</label>
                    <label htmlFor="employer">Who's your employer?</label>
                    <input type="text" id="employer" className="form-control" placeholder="Enter the name of your employer" name="employer" value={this.state.employer} onChange={this.handleChange} />
                    <input className="form-check-input" type="checkbox" id="is_military" name="is_military" value={this.state.is_military} onChange={this.handleCheckboxes} />
                    <label className="form-check-label" htmlFor="is_military">Are you a veteran?</label>
                    <label htmlFor="income">What's your income?</label>
                    <select className="form-control" id="income" name="income" value={this.state.income} onChange={this.handleChange}>
                        <option>Under $30,000</option>
                        <option>$30,001 - $65,000</option>
                        <option>$65,001 - $100,000</option>
                        <option>Above $100,000</option>
                    </select>
                    <input className="form-check-input" type="checkbox" id="has_laptop" name="has_laptop" value={this.state.has_laptop} onChange={this.handleCheckboxes} />
                    <label className="form-check-label" htmlFor="has_laptop">Do you own a laptop?</label>
                    <label htmlFor="why_interested">Why are you interested in applying?</label>
                    <textarea id="why_interested" className="form-control" rows="5" name="why_interested" value={this.state.why_interested} onChange={this.handleChange} />
                    <label htmlFor="how_heard">How did you hear about Inclusion?</label>
                    <textarea id="how_heard" className="form-control" rows="5" name="how_heard" value={this.state.how_heard} onChange={this.handleChange} />
                    <label htmlFor="skill_level">What's your skill level?</label>
                    <select className="form-control" id="skill_level" name="skill_level" value={this.state.skill_level} onChange={this.handleChange}>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>
                    <button type="submit" className="btn btn-primary mt-3">Apply!</button>
                </form>
            </div>
        )
    }
}
