import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
	selector: 'app-area-chart',
	templateUrl: './area-chart.component.html',
	styleUrl: './area-chart.component.scss',
})
export class AreaChartComponent implements OnInit {
	@ViewChild('MyChart') canvas!: ElementRef;
	public chart: any;
	constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			this.createChart();
		}
	}

	// public chart: any;

	createChart() {
		this.chart = new Chart('MyChart', {
			type: 'line',
			data: {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				datasets: [
					{
						label: 'Sales in 2024',
						data: [26, 29, 31, 24, 30, 23, 24, 26, 24, 25, 24, 23],
						// borderColor: 'rgb(54, 162, 235)',
						backgroundColor: 'green',
						borderWidth: 5,
						pointRadius: 2,
						// pointBackgroundColor: 'rgb(54, 162, 235)',
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
