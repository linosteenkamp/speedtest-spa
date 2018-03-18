import { Component, OnInit } from '@angular/core';
import { SpeedtestService } from './speedtest.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  readonly ping = 0;
  readonly download = 1;
  readonly upload = 2;

  private speedTests;
  chartData: any[] = [{'name': 'Ping', 'series': []}, {'name': 'Download', 'series': []}, {'name': 'Upload', 'series': []}];

  view: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'speed';
  curve = d3.curveCatmullRom.alpha(.5);
  timeline = true

  colorScheme = {
    domain: [
      '#647c8a', '#2196f3', '#afdf0a', '#f3e562', '#ff5722'
    ]
  };

  // line, area
  autoScale = true;

  constructor(private speedTestService: SpeedtestService) {}

  ngOnInit(): void {
    this.speedTestService.getSpeedtests().then(data => this.test(data) );
  }

  test(data) {
    this.speedTests = data;

    for (const test of this.speedTests) {
      const date = new Date(test.timestamp);
      const ping = {'value': test.ping, 'name': date};
      const download = {'value': test.download, 'name': date};
      const upload = {'value': test.upload, 'name': date};

      this.chartData[this.ping].series.push(ping);
      this.chartData[this.download].series.push(download);
      this.chartData[this.upload].series.push(upload);
    }
    this.chartData = [...this.chartData];
  }
}
