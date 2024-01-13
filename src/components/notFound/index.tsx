import "./_not-found-page.scss";
import { Button, Space, Typography } from "antd";
import { useNavigate } from "react-router";

const { Title } = Typography;
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-page">
      <Title>404 - Page Not Found</Title>
      <Space>
        <Title level={5}>Go to Home page?</Title>
        <Button onClick={() => navigate("/")}>Click here</Button>
      </Space>
    </div>
  );
};

export default NotFoundPage;
