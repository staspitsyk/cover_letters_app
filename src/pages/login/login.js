import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { submitLogin, changeInput } from '../../common/redux/auth/auth.actions';
import { Redirect } from 'react-router-dom';

class LetterStatistic extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  handleInputChange(event) {
    if (event.target.type === 'checkbox') {
      this.props.changeInput({ name: event.target.name, value: event.target.checked });
    } else {
      this.props.changeInput({ name: event.target.name, value: event.target.value });
    }

  }

  handleSubmitLogin(event) {
    event.preventDefault();

    const { email, password } = this.props;

    this.props.submitLogin({
      email,
      password,
    });
  }

  render() {
    console.log(this.props);
    const { isLogedIn, email, password, loginError, showPassword } = this.props;

    if (isLogedIn) {
      return <Redirect to="/letter-statistic" />;
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
                    <h4 className="header__description">Login</h4>
                  </div>
                </div>
              </nav>
            </header>

            <main className="login">
              <section>
                <div className="row justify-content-lg-center">
                  <form className="col-lg-6" onSubmit={this.handleSubmitLogin}>
                    <div className="generator__title">
                      <h3>Email</h3>
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        onChange={this.handleInputChange}
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        required
                        placeholder="Input Email"
                      />
                    </div>

                    <div className="generator__title">
                      <h3>Password</h3>
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input
                        onChange={this.handleInputChange}
                        type={showPassword ? 'text' : 'password'}
                        className="form-control"
                        name="password"
                        value={password}
                        required
                        placeholder="Input Password"
                      />
                    </div>

                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="showPassword"
                        name="showPassword"
                        onChange={this.handleInputChange}
                      />
                      <label class="form-check-label" for="showPassword">
                        Show password
                      </label>
                    </div>

                    {loginError ? <p className="login_error">{loginError}</p> : <></>}
                    <button type="submit" className="btn btn-primary login__btn">
                      Login
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

const mapStateToProps = ({ authReducer: { isLogedIn, email, password, loginError, showPassword } }) => ({
  isLogedIn,
  email,
  password,
  loginError,
  showPassword
});

const mapDispatchToProps = {
  submitLogin,
  changeInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(LetterStatistic);
