import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SafeHtmlPipe } from '../common.pipe';

@Component({
	selector: 'loading-effect',
	templateUrl: './view.component.html',
	styleUrls: ['./style.component.scss'],
	standalone: true,
	imports: [CommonModule],
})
export class LoadingEffectComponent {
	
}
