import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export default class Parse extends Component {

    state = {
        keyWords: ['java', 'python'],
        description: "Cencage 3/30/2021\nDo you dare to have an impact on the future of education?\nAt Cengage, we're harnessing the power of tech to build a future where all learners have the tools and confidence meet our targets. As a Cengage employee, you will blaze a new trail to transform the way people learn. Collaborating with a distributed team, you'll feel challenged and encouraged to do breakthrough work. With the support of our united team, there is no limit to what you can envision, build and set in motion.\nAre we right for you?\nWe set the bar higher by bringing our outstanding talents and points of view to the table every day. We're curious and comfortable with change and are willing to accept the challenge to transform education for the better. Most importantly, we put learning first with everything we do. We also offer an appealing environment with the opportunity to work with some of the best people in our industry.\n\nWhat You'll Do Here\n\nAs an Associate Software Quality Assurance Engineer at Cengage, you will test software services and mobile applications to ensure that our systems and projects are working as designed. You will learn to apply quality standards followed by our organization, and will assist with the design, development and implementation of test plans. You will also regress bugs (with supervision), and will be given opportunities to help define direction and set goals. In this role, under moderate supervision, you will:\nCreate test plans from technical design and/or requirements documents.\nSolve issues (in QA or on live) as assigned.\nExecute manual test cases and regresses bugs with supervision.\nAssist in the review of technical and user documentation.\nAssist with reviewing test plans.\nAs needed may also help monitor the work of QA vendors.\nSkills you will need here:\n1+years of relevant software development or quality assurance experience.\nBA/BS in Computer Science or Engineering or equivalent experience.\nKnowledge of test case creation and defect management.\nFamiliarity with Agile software development, TDD and BDD concepts.\nKnowledge of programming theory for Web services and REST APIs.\nExperience testing browsers using testing tools (JIRA, Zephyr, Selenium).\nEntry-level knowledge of SQL (MySQL, Oracle) and SQL queries.\nBasic experience with scripting in Java, PHP, Ruby or C#.\nBasic knowledge of operating systems and web browsers used on Mac, Windows and Mobile devices.\nAbout Cengage\nCengage is the education and technology company built for learners. The company serves the higher education, K-12, professional, library and workforce training markets worldwide. Cengage creates learning experiences that build confidence and momentum toward the future students want. The company is headquartered in Boston, MA. Employees reside in nearly 40 countries with sales in more than 125 countries around the world. Visit us at www.cengage.com or find us on Facebook or Twitter.\n\nCengage is proud to be an Equal Employment Opportunity and Affirmative Action employer. We do not discriminate based upon race, color, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, veteran status, marital status, parental status, cultural background, organizational level, work styles, tenure and life experiences. Or for any other reason. You may view Cengage’s EEO/Affirmative Action Policy signed by CEO Michael Hansen and Equal Employment Opportunity is the Law notice by visiting their corresponding links.\n\nCengage provides excellent benefits (health, vision and dental, 401(k) , and three weeks vacation to start) and is committed to providing reasonable accommodations for qualified individuals with disabilities in our job application procedures. If you need assistance or an accommodation due to a disability, please contact us at accommodations.ta@cengage.com or you may call us at +1 (617) 289-7917.\nSeniority Level\nEntry level\n\nIndustry\nE-learning  Higher Education  Publishing\nEmployment Type\nFull-time\n\nJob Functions\nQuality Assurance",
        findKeys: new Set()
    }


    style = {
        position: 'relative',
        left: '0',
        right: '0',
        width: '100%',
        top: '0',
        height: '50%',
    }

    parse = (callback) => {
        let body = this.state.description
        const set = this.state.keyWords
        body = body.replaceAll(/\n/g, " ")
        const arr = body.split(' ')
        const keyWords = this.state.findKeys
        arr.forEach((s) => {
            let word = s.toLowerCase()
            set.forEach(key => {
                if (word.includes(key)) keyWords.add(key)
            })
        })
        callback(0, keyWords);
    }

    render() {
        return (
            <div>
                <h3>Please Import Your Job Description Here:</h3>
                <div style={this.style}>
                    <textarea style={{ width: '100%', height: '500px' }} name="Description" id="description"
                        value={this.state.description}
                        onChange={(e) => this.setState({
                            description: e.target.value
                        })}></textarea>
                </div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => { this.parse(this.props.next) }}
                        style={{ marginTop: "20px" }}
                    >
                        {'Next'}
                    </Button>
                </div>
            </div>

        )
    }
}
