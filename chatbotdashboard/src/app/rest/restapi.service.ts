import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  apiUrl = 'http://localhost:8090'
  
  constructor() { }
}
