import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SafeHtmlPipe } from '../common.pipe';

@Component({
	selector: 'remi-video-item',
	templateUrl: './view.component.html',
	styleUrls: ['./style.component.scss'],
	standalone: true,
	imports: [CommonModule, SafeHtmlPipe],
})
export class RemiVideoItemComponent implements OnInit {
	@Input() url: string = '';
	@Input() sharer: string = 'auto@email.com'
	video: any;
	

	ngOnInit() {
		this.api.parseVideoUrl(this.url).subscribe(json => {
			this.video = json;
		});
	}

	constructor(
		private api: ApiService
	) { }
}
