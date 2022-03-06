import React from "react";
import "./skills.scss";

export default function Skills() {
  const array = [1, 2, 3, 4, 5];
  const data = [
    {
      title: "Vue JS",
      nota: 5,
      cor: "#42b883",
    },
    {
      title: "React",
      nota: 3,
      cor: "#2ac7e3",
    },
    {
      title: "React Native",
      nota: 3,
      cor: "#5667f9",
    },
    {
      title: "TypeScript",
      nota: 3,
      cor: "#007acc",
    },
    {
      title: "NodeJS",
      nota: 3,
      cor: "#8cc84b",
    },
    {
      title: "PHP",
      nota: 2,
      cor: "#8792c0",
    },
    {
      title: "Xamarin Forms",
      nota: 3,
      cor: "#5727e2",
    },
    {
      title: "GitHub",
      nota: 2,
      cor: "#2d2929",
    },
  ];

  return (
    <div className="skills" id="skills">
      <div className="container">
        <h1>Habilidades</h1>
        {data.map((skill) => (
          <>
            <h3>{skill.title}</h3>
            <div className="pontuacao">
              {array.map((index) => {
                if (index <= skill.nota) {
                  return (
                    <div
                      className="bar"
                      style={{ backgroundColor: skill.cor }}
                    ></div>
                  );
                } else {
                  return (
                    <div
                      className="bar deactivate"
                      style={{ backgroundColor: skill.cor }}
                    ></div>
                  );
                }
              })}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
