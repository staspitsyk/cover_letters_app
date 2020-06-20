import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import {
  loadCurrentCompanies,
  submitLetter,
  changeInput,
  showLoader,
  hideNotification,
} from '../../common/redux/letter-generator/letter.generator.actions';
import { Redirect } from 'react-router-dom';

class LetterStatistic extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitLetter = this.handleSubmitLetter.bind(this);
    this.renderSpinnerOrNotification = this.renderSpinnerOrNotification.bind(this);
  }

  componentDidMount() {
    this.props.loadCurrentCompanies();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isSuccesses !== prevProps.isSuccesses) {
      setTimeout(() => {
        this.props.hideNotification();
      }, 3000);
    }
  }

  handleInputChange(event) {
    this.props.changeInput({ name: event.target.name, value: event.target.value });
  }

  handleSubmitLetter(event) {
    event.preventDefault();
    this.props.showLoader();

    const { companieSelect, urlSelect, letterSelect } = this.props;

    this.props.submitLetter({
      companieSelect,
      urlSelect,
      letterSelect,
    });
  }

  renderSpinnerOrNotification() {
    const { isSuccesses, loading } = this.props;
    if (!loading) {
      return (

        <div>
        <h3 className={isSuccesses === 'success' ? 'statistic__succesess' : 'statistic__error'}>
          {isSuccesses === 'success' ? 'Letter was successfully submited' : isSuccesses === 'error' ? 'Oops something went wrong' : ''}
        </h3>
      </div>

        // <div>
        //   <h3 className="statistic__succesess">
        //     {isSuccesses ? 'Letter was successfully submited' : ''}
        //   </h3>
        // </div>
      );
    } else {
      return (
        <div class="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      );
    }
  }

  render() {
    console.log(this.props);
    const { currentCompanies, urlSelect, letterSelect, companieSelect } = this.props;

    //timely security for route
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('user');

    if (!token) {
      return <Redirect to="/login" />;
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <header className="header">
              <nav>
                <div className="row ">
                  <div className="col-lg-4">
                    <a href="/letter-generator">
                      <span className="header__title">Periodix</span>
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <h4 className="header__appeal">Cover Letter Statistic</h4>
                  </div>
                  <div className="col-lg-4">
                    <h4 className="header__description">Hello, {name}</h4>
                  </div>
                </div>
              </nav>
            </header>
  
            <main className="statistic">
              <section>
                <div className="row justify-content-lg-center">
                  <form className="col-lg-6" onSubmit={this.handleSubmitLetter}>
                    { this.renderSpinnerOrNotification() }
                    <div className="generator__title">
                      <h3>1. Select company</h3>
                    </div>
                    <div className="form-group">
                      <label>Company</label>
                      <select
                        onChange={this.handleInputChange}
                        name="companieSelect"
                        className="form-control"
                        value={companieSelect}
                        required
                      >
                        <option selected={true} disabled="disabled" value="">
                          Select company
                        </option>
                        {currentCompanies.map((str, index) => (
                          <option key={index} value={str}>
                            {str}
                          </option>
                        ))}
                      </select>
                    </div>
  
                    <div className="generator__title">
                      <h3>2. Input URL</h3>
                    </div>
                    <div class="form-group">
                      <label>URL</label>
                      <input
                        onChange={this.handleInputChange}
                        type="text"
                        className="form-control"
                        name="urlSelect"
                        value={urlSelect}
                        required
                        placeholder="Input URL"
                      />
                    </div>
  
                    <div className="generator__title">
                      <h3>3. Input Cover Letter</h3>
                    </div>
                    <div class="form-group">
                      <label>Cover Letter</label>
                      <textarea
                        onChange={this.handleInputChange}
                        className="form-control"
                        name="letterSelect"
                        rows="10"
                        value={letterSelect}
                        required
                        placeholder="Input cover letter"
                      />
                    </div>
  
                    <button type="submit" className="btn btn-primary">
                      Submit Cover Letter
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
    currentCompanies,
    companieSelect,
    urlSelect,
    letterSelect,
    isSuccesses,
    loading
  },
}) => ({
  currentCompanies,
  companieSelect,
  urlSelect,
  letterSelect,
  isSuccesses,
  loading
});

const mapDispatchToProps = {
  loadCurrentCompanies,
  changeInput,
  submitLetter,
  showLoader,
  hideNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(LetterStatistic);
