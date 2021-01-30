import React, { useEffect } from "react";
import Chart from "chart.js";
const Radar = () => {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");

    var myChart = new Chart(ctx, {
      // type: 'bar',
      label: "Professional Skills",
      type: "radar",
      data: {
        labels: ["HTML", "CSS", "JavaScript", "React JS", "React Native", "Node JS"],
        datasets: [
          {
            maxBarThickness: 100,
            label: "Profestional Skill",
            data: [70, 60, 60, 70, 60, 70],
            backgroundColor: ["rgba(255, 206, 86, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
            borderColor: ["rgba(255, 206, 86, 1)", "rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scale: {
          angleLines: {
            display: false,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      },
    });
  }, []);
  return (
    <>
      <canvas
        style={{
          marginTop:"2em"
        }}
        id="myChart"
        width="400"
        height="400"></canvas>
    </>
  );
};

export default Radar;
