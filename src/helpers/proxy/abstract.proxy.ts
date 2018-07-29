import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export abstract class AbstractProxy {
    protected headers: any;
    constructor(private http: HttpClient) {
        this.headers = { 'Content-Type': 'application/json' };
    }

    protected consult(url: string, data: Object = {}, method: string) {
        const token = localStorage.getItem('token');

        if (token)
            this.headers['Authorization'] = `Bearer ${token}`;

        const httpOptions = { headers: new HttpHeaders(this.headers) };

        return this.http[method](url, data, httpOptions);
    }
}