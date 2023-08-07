import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-details-currency',
  templateUrl: './details-currency.component.html',
  styleUrls: ['./details-currency.component.scss']
})
export class DetailsCurrencyComponent {

  public chart: any;

  constructor() {

  }
  ngOnInit(): void {
    this.createChart();
  }
  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'bar',

      data: {
        labels: [
          '2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17'
          ,
        ],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });



  }
}
