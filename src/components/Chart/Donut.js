import React, { useEffect } from "react";
import Chart from "chart.js"
const Donut = () => {
  useEffect(() => {
    var ctx2 = document.getElementById("pieChat").getContext("2d");

    var myPieChart = new Chart(ctx2, {
      type: "polarArea",
      data: {
        labels: ["English", "Teamwork", "Creativity", "eager to learn"],
        datasets: [
          {
            maxBarThickness: 100,
            label: "Profestional Skill",
            data: [50, 60, 60, 70],
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
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
  return <canvas id="pieChat" width="400" height="400" style={{ marginTop:"2em"}}></canvas>;
};

export default Donut;
