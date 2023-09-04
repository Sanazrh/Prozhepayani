<template>
    <div>
        <canvas id="myChart" class="fnt"></canvas>
        <br>
        <br>
        <br>
    </div>
    
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
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['تاثیر والدین', 'مادر کافی', 'کنکور-پزشکی', 'من عالی هستم', 'افکار من'],
        datasets: [{
            data: [30, 32, 100, 20, 45],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'میزان استقبال از هر سمینار نسبت به سمینار دیگر',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 50
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function(value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                }
            }
        }
    }
});
      
    }
  };
  </script>
  <style>
</style>