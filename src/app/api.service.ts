import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, delay, map, retry, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(
        public httpClient: HttpClient,
    ) { }

    public login(info: any) {
        return this.httpClient.request<any>('post', `http://localhost:3000/api/login`,
            {
                body: info,
            }
        );
    }

    public register(info: any) {
        return this.httpClient.request<any>('post', `http://localhost:3000/api/register`,
            {
                body: info,
            }
        );
    }

    public getVideos() {
        return this.httpClient.request<any>('get', `http://localhost:3000/api/videos`);
    }

    public parseVideoUrl(url: string) {
        return this.httpClient.request<any>('get', `http://www.youtube.com/oembed?url=${url}&format=json`);
    }

    public shareVideoUrl(url: string) {
        let token = '';
        try {
            let user = JSON.parse(localStorage.getItem('remi_user') || '');
            if (user) token = user.token;
        } catch (error) {
            console.log(error);
        }
        return this.httpClient.request<any>('post', `http://localhost:3000/api/video`,
            {
                body: { url },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
        );
    }
}