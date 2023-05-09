import { Card } from "antd";
import { ReactComponent as DiamondIcon } from "../../assets/svg/diamond.svg";
import { ReactComponent as LinsIcon } from "../../assets/svg/lines.svg";
import { ReactComponent as OpenInNewIcon } from "../../assets/svg/open-in-new.svg";
import { ReactComponent as PlusIcon } from "../../assets/svg/plus.svg";
import { ReactComponent as GreenGearIcon } from "../../assets/svg/green-gear.svg";
import { ReactComponent as RedGearIcon } from "../../assets/svg/red-gear.svg";
import { cardsData } from "./data";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-header">
          <div className="home-logo">
            <h2 className="home-title">Get Support</h2>
            <DiamondIcon />
          </div>
          <LinsIcon />
        </div>
        <div className="home-card-container">
          {cardsData.map(
            ({ Icon, description, title, backgroundColor, amount }) => {
              return (
                <Card
                  hoverable
                  style={{ flex: " 1 1 0px" }}
                  key={title}
                  cover={Icon}
                >
                  <div
                    style={{ backgroundColor: backgroundColor }}
                    className="card-body"
                  >
                    <div>
                      <h3 className="card-body-title">{title}</h3>
                      <p className="card-body-description">{description}</p>
                    </div>
                    <div className="card-body-actions">
                      <span>{amount} DTSU*</span>
                      <div className="icons">
                        <div className="icon">
                          <Link target="_blank" to={title}>
                            <OpenInNewIcon />
                          </Link>
                        </div>
                        <div className="icon">
                          <PlusIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            }
          )}
        </div>
        <div className="DTSUs-section">
          <div className="DTSUs remaining">
            <GreenGearIcon />
            <span>Remaining DTSUs: 200</span>
          </div>
          <div className="DTSUs consumed">
            <RedGearIcon /> <span>Consumed DTSUs: 350</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
