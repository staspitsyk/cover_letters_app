import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import queryString from 'query-string';
import { loadCompany, changeInput } from '../../common/redux/letter-generator/letter.generator.actions';

class LetterGenerator extends Component {
  constructor(props) {
    super(props);
    this.loadData();
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  loadData() {
    let querys = queryString.parse(this.props.location.search);
    this.props.loadCompany(querys);
  }

  handleInputChange(event) {
    this.props.changeInput({ name: event.target.name, value: event.target.value });
  }

  render() {
    console.log(this.props);
    const {
      id,
      projectType,
      projectPlatform,
      functionality,
      intro,
      portfolioExamples,
      relevantQuestions,
    } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <header>
            <nav>
              <div className="row">
                <div className="col-lg-6">
                  <a href="/letter-generator">
                    <span className="header__title">Periodix</span>
                  </a>
                </div>
                <div className="col-lg-6">
                  <button className="btn btn-secondary header__button">Create Cover Letter</button>
                </div>
                {/* <div className='col-lg-6'><a><span className='red'>Create Cover Letter</span></a></div> */}
              </div>
            </nav>
          </header>
          <main>
            <section>
              <div className="row justify-content-lg-center">
                <form className="col-lg-6">
                  <div className="generator__title">
                    <h3>1. Select type of the job</h3>
                  </div>
                  <div className="form-group">
                    <label>Project type</label>
                    <select onChange={this.handleInputChange} name="projectTypeSelect" className="form-control">
                      <option selected={true} disabled="disabled" value="">
                        Select
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
                    <select onChange={this.handleInputChange} name="projectPlatformSelect" className="form-control">
                      <option selected={true} disabled="disabled" value="">
                        Select
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
                    <label>Functionality</label>
                    <select onChange={this.handleInputChange} name="functionalitySelect" className="form-control">
                      <option selected={true} disabled="disabled" value="">
                        Select
                      </option>
                      {functionality.map((str, index) => (
                        <option key={index} value={str}>
                          {str}
                        </option>
                      ))}
                    </select>
                  </div>
                    <button type='submit' className='btn btn-primary'>Create Cover Letter</button>
                </form>
              </div>
            </section>
          </main>
        </div>
      </React.Fragment>
    );
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
    functionalitySelect
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
  functionalitySelect
});

const mapDispatchToProps = {
  loadCompany,
  changeInput
};

export default connect(mapStateToProps, mapDispatchToProps)(LetterGenerator);
