import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from "firebase";
import { Button, Card, CardSection, Input, Spinner } from './common';
import { Text } from 'react-native';
import { emailChanged } from '../actions';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };
    }

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true })

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.onLoginSuccess())
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => this.onLoginSuccess())
                    .catch(() => this.onLoginFail())
            })
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onLoginFail() {
        alert(`Login failed with:\n Email: ${this.state.email} \n Pass: ${this.state.password} `);
        this.setState({ error: 'Auth failed', loading: false });
    }

    onLoginSuccess() {
        alert(`Login successfull with:\n Email: ${this.state.email} \n Pass: ${this.state.password} `);
        this.setState({ email: '', password: '', loading: false, error: '' });
    }

    renderButton() {
        return this.state.loading
            ? <Spinner />
            : <Button onPress={() => this.onButtonPress()}>Log in</Button>
    }

    render() {
        console.log(this.props);
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        value={this.props.email}
                        placeholder='user@mail.com'
                        onChangeText={()=>this.onEmailChange()} />
                </CardSection>

                <CardSection>
                    <Input
                        label='Password'
                        value={this.state.password}
                        placeholder='password'
                        secureTextEntry
                        onChangeText={password => this.setState({ password })} />
                </CardSection>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email
    }
}

export default connect(mapStateToProps, {emailChanged})(LoginForm);
