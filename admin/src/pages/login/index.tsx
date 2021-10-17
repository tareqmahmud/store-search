import React from "react";
import {
  AntdLayout,
  Button,
  Card, Checkbox,
  Col,
  Form,
  Input,
  Row,
  Typography,
  useLogin,
} from "@pankod/refine";
import { ILogin } from "../../interfaces";
import "./style.css";

const { Title, Text } = Typography;

type Props = {};

const Login: React.FC<Props> = () => {
  const [form] = Form.useForm<ILogin>();

  const { mutate: login } = useLogin<ILogin>();

  const onSubmit = (values: ILogin) => {
    login(values);
  };

  const CardTitle = (
    <Title level={3} className="title">
      Sign in your account
    </Title>
  );

  return (
    <AntdLayout className="layout">
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Col xs={22}>
          <div className="container">
            <div className="imageContainer">
              <h2 className="login-title">Store Search</h2>
            </div>

            <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
              <Form<ILogin>
                layout="vertical"
                form={form}
                onFinish={onSubmit}
                requiredMark={false}
                initialValues={{ remember: false }}
              >
                {/* username */}
                <Form.Item
                  name="username"
                  label="username"
                  rules={[{ required: true }]}
                >
                  <Input size="large" placeholder="Username" />
                </Form.Item>

                {/* password */}
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true }]}
                  style={{ marginBottom: "12px" }}
                >
                  <Input type="password" placeholder="●●●●●●●●" size="large" />
                </Form.Item>
                <div style={{ marginBottom: "12px" }}>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      Remember me
                    </Checkbox>
                  </Form.Item>
                </div>
                <Button type="primary" size="large" htmlType="submit" block>
                  Sign in
                </Button>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </AntdLayout>
  );
};

export default Login;
