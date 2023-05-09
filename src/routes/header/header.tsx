import { Outlet } from "react-router-dom";
import "./header.scss";
import Icon, { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import { ReactComponent as Subtraction } from "../../assets/svg/Subtraction 2.svg";
import { ReactComponent as ShoppingCart } from "../../assets/svg/shopping-cart.svg";
import person1 from "../../assets/images/person-1.png";
import person2 from "../../assets/images/person-2.png";
import person3 from "../../assets/images/person-3.png";
import person4 from "../../assets/images/person-4.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-title">
          <h2>Welcome to iCloudReady!</h2>
          <p>
            You have started your <span>30 day trial</span>
          </p>
        </div>
        <div className="avatar-group">
          <Avatar.Group
            maxCount={4}
            maxStyle={{ color: "#7C838A", backgroundColor: "#fff" }}
          >
            <Avatar src={person1} />
            <Avatar src={person2} />
            <Avatar src={person3} />
            <Avatar src={person4} />
            <Avatar
              style={{ backgroundColor: "#7C838A" }}
              icon={<UserOutlined />}
            />
            <Avatar
              style={{ backgroundColor: "#7C838A" }}
              icon={<UserOutlined />}
            />
            <Avatar
              style={{ backgroundColor: "#7C838A" }}
              icon={<UserOutlined />}
            />
          </Avatar.Group>
          <div className="avatar-description">
            <h4 className="avatar-description-title">
              Our architects are here to help
            </h4>
            <span className="avatar-description-body">Book a free session</span>
          </div>
        </div>

        <div className="badge-group">
          <div className="badge">
            <Badge count={2} color="yellow" offset={[-30, 0]}>
              <Avatar icon={<Icon component={ShoppingCart} />} />
            </Badge>
          </div>
          <div className="badge">
            <Badge count={2} color="yellow" offset={[-30, 0]}>
              <Avatar icon={<Icon component={Subtraction} />} />
            </Badge>
          </div>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
