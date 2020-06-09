import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import queryString from 'query-string';
import {
  loadCompany,
  changeInput,
  createLetter,
  addQuestion,
  removeQuestion
} from '../../common/redux/letter-generator/letter.generator.actions';

class LetterGenerator extends Component {
  constructor(props) {
    super(props);
    this.loadData();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.isFormCompleted = this.isFormCompleted.bind(this);
    this.handleCreateLetter = this.handleCreateLetter.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
  }

  loadData() {
    let querys = queryString.parse(this.props.location.search);
    this.props.loadCompany(querys);
  }

  isFormCompleted() {
    const {
      projectTypeSelect,
      projectPlatformSelect,
      functionalitySelect,
      introSelect,
      portfolioExamplesSelect,
      relevantQuestionsSelect,
    } = this.props;

    const condition =
      projectTypeSelect &&
      projectPlatformSelect &&
      functionalitySelect &&
      introSelect &&
      portfolioExamplesSelect &&
      relevantQuestionsSelect;

    return condition;
  }

  handleInputChange(event) {
    this.props.changeInput({ name: event.target.name, value: event.target.value });
  }

  handleAddQuestion(event) {
    if (event.target.checked) {
      this.props.addQuestion({ name: event.target.name, value: event.target.value });
    } else {
      this.props.removeQuestion({ name: event.target.name, value: event.target.value });
    }

  }

  handleCreateLetter(event) {
    event.preventDefault();

    const {
      projectTypeSelect,
      projectPlatformSelect,
      functionalitySelect,
      introSelect,
      portfolioExamplesSelect,
      relevantQuestionsSelect,
    } = this.props;

    this.props.createLetter({
      projectTypeSelect,
      projectPlatformSelect,
      functionalitySelect,
      introSelect,
      portfolioExamplesSelect,
      relevantQuestionsSelect,
    });
  }

  render() {
    console.log(this.props);
    const {
      projectType,
      projectPlatform,
      functionality,
      intro,
      portfolioExamples,
      relevantQuestions,
      letter,
    } = this.props;

    if (letter) {
      return (
        <React.Fragment>
          <div className="container">
            <header className="header">
              <nav>
                <div className="row ">
                  <div className="col-lg-6">
                    <a href="/letter-generator">
                      <span className="header__title">Periodix</span>
                    </a>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
              </nav>
            </header>
            <main className="letter">
              <section>
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="letter_title">Periodix Cover Letter Generator</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-10 letter_body">
                    <pre>{letter}</pre>
                  </div>
                  <div className="col-lg-1"></div>
                </div>
              </section>
            </main>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <header className="header">
              <nav>
                <div className="row ">
                  <div className="col-lg-6">
                    <a href="/letter-generator">
                      <span className="header__title">Periodix</span>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <label
                      htmlFor="formSubmit"
                      className={
                        this.isFormCompleted()
                          ? 'btn btn-secondary header__button-submit'
                          : 'btn btn-secondary header__button'
                      }
                    >
                      Create Cover Letter
                    </label>
                  </div>
                </div>
              </nav>
            </header>
            <main className="generator">
              <section>
                <div className="row justify-content-lg-center">
                  <form onSubmit={this.handleCreateLetter} className="col-lg-6">
                    <div className="generator__title">
                      <h3>1. Select type of the job</h3>
                    </div>
                    <div className="form-group">
                      <label>Project type</label>
                      <select
                        onChange={this.handleInputChange}
                        name="projectTypeSelect"
                        className="form-control"
                      >
                        <option selected={true} disabled="disabled" value="">
                          Select project type
                        </option>
                        {projectType.map((str, index) => (
                          <option key={index} value={str}>
                            {str}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Project platform</label>
                      <select
                        onChange={this.handleInputChange}
                        name="projectPlatformSelect"
                        className="form-control"
                      >
                        <option selected={true} disabled="disabled" value="">
                          Select platform
                        </option>
                        {projectPlatform.map((str, index) => (
                          <option key={index} value={str}>
                            {str}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="generator__title">
                      <h3>2. Select the functionality</h3>
                    </div>
                    <div className="form-group">
                      {functionality.map((str, index) => (
                        <div key={index} className="form-check ">
                          <input
                            onChange={this.handleAddQuestion}
                            name="functionalitySelect"
                            className="form-check-input"
                            type="checkbox"
                            id={`functionality${index}`}
                            value={str}
                          />
                          <label className="form-check-label" htmlFor={`functionality${index}`}>
                            {str}
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="generator__title">
                      <h3>3. Select the intro</h3>
                    </div>
                    <div className="form-group">
                      <label>Intro</label>
                      <select
                        onChange={this.handleInputChange}
                        name="introSelect"
                        className="form-control"
                      >
                        <option selected={true} disabled="disabled" value="">
                          Select intro you will start with
                        </option>
                        {intro.map((str, index) => (
                          <option key={index} value={str}>
                            {str}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="generator__title">
                      <h3>4. Select the portfolio examples</h3>
                    </div>
                    <div className="form-group">
                      {portfolioExamples.map((str, index) => (
                        <div key={index} className="form-check ">
                          <input
                            onChange={this.handleAddQuestion}
                            name="portfolioExamplesSelect"
                            className="form-check-input"
                            type="checkbox"
                            id={`portfolio${index}`}
                            value={str}
                          />
                          <label className="form-check-label" htmlFor={`portfolio${index}`}>
                            {str}
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="generator__title">
                      <h3>5. Select the relevant questions</h3>
                    </div>
                    <div className="form-group">
                      {relevantQuestions.map((str, index) => (
                        <div key={index} className="form-check ">
                          <input
                            onChange={this.handleAddQuestion}
                            name="relevantQuestionsSelect"
                            className="form-check-input"
                            type="checkbox"
                            id={`question${index}`}
                            value={str}
                          />
                          <label className="form-check-label" htmlFor={`question${index}`}>
                            {str}
                          </label>
                        </div>
                      ))}
                    </div>
                    <button
                      id="formSubmit"
                      type="submit"
                      className="btn btn-primary generator__submit-button"
                      disabled={this.isFormCompleted() ? false : true}
                    >
                      Create Cover Letter
                    </button>
                  </form>
                </div>
              </section>
            </main>
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = ({
  letterGeneratorReducer: {
    companyData: {
      id,
      projectType,
      projectPlatform,
      functionality,
      intro,
      portfolioExamples,
      relevantQuestions,
    },
    projectTypeSelect,
    projectPlatformSelect,
    functionalitySelect,
    introSelect,
    portfolioExamplesSelect,
    relevantQuestionsSelect,
    letter,
  },
}) => ({
  id,
  projectType,
  projectPlatform,
  functionality,
  intro,
  portfolioExamples,
  relevantQuestions,
  projectTypeSelect,
  projectPlatformSelect,
  functionalitySelect,
  introSelect,
  portfolioExamplesSelect,
  relevantQuestionsSelect,
  letter,
});

const mapDispatchToProps = {
  loadCompany,
  changeInput,
  createLetter,
  addQuestion,
  removeQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(LetterGenerator);
