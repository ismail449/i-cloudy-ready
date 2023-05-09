import { useParams } from "react-router-dom";
import "./pillar.scss";

const Pillar = () => {
  const { pillarTitle } = useParams();
  return <div className="pillar">{pillarTitle}</div>;
};

export default Pillar;
