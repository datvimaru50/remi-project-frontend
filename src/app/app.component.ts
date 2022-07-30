import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title: string = 'remi';
	user: any;
	showShareForm: boolean = false;
	videos: any[] = [];
	curLink: string = '';
	loading: boolean = false;


	closePopupShare(){
		this.showShareForm = false;
	}
	openShare(){
		this.showShareForm = true;
	}

	startShareALink(link: string){
		if(!link) {
			alert('Please enter an video url');
			return;
		};
		
		this.api.shareVideoUrl(link).subscribe((res:any)=>{
			if(res.url){
				alert('Thanks for your sharing');
				this.curLink = '';
				this.getVideos();
			}else{
				alert('Error in sharing this link, please try again');
			}
		})
	}

	login(email: string, password: string){
		if(!email || !password) {
			alert ('Please enter email and password');
			return;
		}

		
		this.api.login({email, password}).subscribe((res: any)=>{
		
			if(res.success){
				try {
					localStorage.setItem('remi_user', JSON.stringify(res));
					this.user = res;
				} catch (error) {
					console.log('unable to remember user');
					
				}
			}else{
				alert(res.err);
			}
			
		});
		
		
	}

	register(email: string, password: string){
		if(!email || !password) {
			alert ('Please enter email and password');
			return;
		}
		this.api.register({email, password}).subscribe((res: any)=>{
			if(res.success){
				this.login(email, password);
			}else{
				alert(res.err);
			}
		});
	}

	logOut(){
		try {
			localStorage.removeItem('remi_user');
			this.user = undefined;
			this.showShareForm = false;
		} catch (error) {
			console.log('unable to remove user info from local storage');
		}
	}

	getVideos(){
		this.loading = true;
		this.api.getVideos().subscribe((videos: any[]) => {
			this.videos = videos;
			this.loading = false;
		});
	}

	ngOnInit() {
		try {
			let curUser = localStorage.getItem('remi_user');
			if(curUser) this.user = JSON.parse(curUser);
		} catch (error) {
			console.log('unable to get user info from local storage');
		}
		this.getVideos();
	}

	constructor(
		private api: ApiService
	) { }
}
