import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
	selector: 'app-area-last-chart',
	templateUrl: './area-last-chart.component.html',
	styleUrl: './area-last-chart.component.scss',
})
export class AreaLastChartComponent implements OnInit {
	@ViewChild('lastYearChart') canvas!: ElementRef;
	constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			this.createChart();
		}
	}

	public chart: any;

	createChart() {
		this.chart = new Chart('lastYearChart', {
			type: 'line',
			data: {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				datasets: [
					{
						label: 'Sales in 2023',
						data: [13, 16, 21, 28, 32, 34, 32, 31, 30, 26, 20, 14],
						// borderColor: 'rgb(255, 99, 132)',
						backgroundColor: '#49be25',
						borderWidth: 5,
						pointRadius: 2,
						// pointBackgroundColor: 'rgb(255, 99, 132)',
						fill: true,
					},
				],
			},
			options: {
				aspectRatio: 2,
				scales: {
					x: {
						ticks: {
							color: 'black',
						},
					},
					y: {
						ticks: {
							color: 'black',
						},
					},
				},
			},
		});
	}
}
