import { Dispatch, FC, ReactNode } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Divider, Badge } from "antd";
import "./sidebar.scss";

type SidebarProps = {
  children?: ReactNode;
  name?: string;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
  itemNumber: number;
};

const Sidebar: FC<SidebarProps> = ({
  children,
  name = "Cart",
  isSidebarOpen = false,
  setIsSidebarOpen,
  itemNumber,
}) => {
  return (
    <div
      style={{ right: `${isSidebarOpen ? "0px" : "-100%"}` }}
      className="sidebar"
    >
      <div className="sidebar-container">
        <div className="sidebar-header">
          <div className="sidebar-header-left">
            <CloseCircleOutlined
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={() => setIsSidebarOpen(false)}
            />
            <h2>Your Run {name}</h2>
          </div>
          <Badge color="yellow" offset={[-140, -5]} showZero count={itemNumber}>
            <span className="sidebar-header-right">
              Requests in your run {name}
            </span>
          </Badge>
        </div>

        <Divider />
        <div className="sidebar-body">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
