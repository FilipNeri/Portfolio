import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  /*   featuredPortfolio,
  contentPortfolio,
  designPortfolio, */
  mobilePortfolio,
  webPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    /*     {
      id: "featured",
      title: "Featured",
    }, */
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    /*     {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    }, */
  ];
  useEffect(() => {
    switch (selected) {
      /*       case "featured":
        setData(featuredPortfolio);
        break; */
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      /*       case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break; */
      default:
        setData(webPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfólio</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            active={selected === item.id}
            title={item.title}
            setSelected={setSelected}
            id={item.id}
            key={index}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, index) => (
          <a href={d.url} className="item" key={index}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
