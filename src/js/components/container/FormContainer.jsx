import React, { Component } from "react"
import ReactDOM from "react-dom";

import Input from "../presentational/Input.jsx";

class FormContainer extends Component {
    constructor() {
        super();

        this.state = {
            seo_title: "",
            course_cohort: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        const { seo_title, course_cohort } = this.state;
        return (
            <form id="student-form">
                <Input
                    text="SEO title"
                    label="seo_title"
                    type="text"
                    id="seo_title"
                    value={seo_title}
                    handleChange={this.handleChange}
                />
                <Input
                    text="Course Cohort"
                    label="course_cohort"
                    type="text"
                    id="course_cohort"
                    value={course_cohort}
                    handleChange={this.handleChange}
                />
            </form>
        );
    }
}

export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;