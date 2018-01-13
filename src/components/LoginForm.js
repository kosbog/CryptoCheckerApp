import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from "firebase";
import { Button, Card, CardSection, Input, Spinner } from './common';
import { Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password })
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    renderButton() {
        return this.props.loading
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
                        onChangeText={(text) => this.onEmailChange(text)} />
                </CardSection>

                <CardSection>
                    <Input
                        label='Password'
                        value={this.props.password}
                        placeholder='password'
                        secureTextEntry
                        onChangeText={(text) => this.onPasswordChange(text)} />
                </CardSection>

                <Text style={styles.errorStyle}>
                    {this.props.error}
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
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
