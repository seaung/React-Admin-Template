import React, { Component } from 'react';
import { Card, Form, Input, Button, Icon, Checkbox } from 'antd';
import "./index.less";

const FormItem = Form.Item;

class LoginForms extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("receved values fo form: ", values);
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Card title="Inline Login Form">
          <Form layout="inline">
            <FormItem>
              <Input placehodler="enter your name" />
            </FormItem>
            <FormItem>
              <Input placehodler="enter your password" />
            </FormItem>
            <FormItem>
              <Button type="primary">Login</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="Login Form" style={{marginTop: 10}}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator("username", {
                initialValue: "",
                rules: [
                  { required: true, message: "Please input your name." },
                  { min: 6, max: 10, message: "length." },
                  { pattern: new RegExp("^\\w+$", "g"), message: "is invalid." }
                ],
              })(
                <Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }}} placehodler="username." />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                initialValue: ""
                rules: [
                  { required: true, message: "Please input your password." },
                  { min: 6, max: 16, message: "length." },
                  { pattern: new RegExp("^\\w+$", "g"), message: "is invalid." },
                ],
              })(
                <Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)"}} placehodler="password."} />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("remeber", {
                  valuePropName: "checked",
                  initialValue: true,
                })(
                  <Checkbox>Remeber Me</Checkbox>
                )}
              <a className="login-form-forgot">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Login
              </Button>
              Or <a>register now!</a>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(LoginForms);
