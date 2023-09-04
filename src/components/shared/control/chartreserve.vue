<template>
    <canvas id="myChart" class="fnt"></canvas>
  </template>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script lang="ts">
  
  </script>
  <script>
  import { Chart } from "chart.js";
   import { color } from "chart.js";
  export default {
    name: "con-chartcomponent",
    mounted() {
      const ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],
          datasets: [
            {
              label: "# of Votes",
              data: [129, 241, 96, 150, 77, 95,200,30,163,213,130,88],
              borderWidth: .5,
              backgroundColor: [
                'rgba(216,27,96,0.6)',
                'rgba(3,169,244,0.6)',
                'rgba(255,152,0,0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)',
                 'rgba(84, 110, 122, 0.6)',
                 'rgba(216,27,96,0.6)',
                'rgba(3,169,244,0.6)',
                'rgba(255,152,0,0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)',
                'rgba(84, 110, 122, 0.6)',
              ],
              borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)',
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)',
            ],
            }
          ]
        },
        options: {
          legend:{
            display:false
          },
          title:{
            display: true,
            text: 'آمار نوبت‌دهی هر ماه نسبت به ماه قبل',
            position: 'top',
            fontSize: 20,
            padding: 50
          },
          scales: {
            yAxes: [{
                ticks: {
                    min: 20
                }
            }]
          }
        }
      });
      myChart;
    }
  };
  </script>
  <style>
</style>