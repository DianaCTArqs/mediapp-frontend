import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { VitalSign } from '../model/VitaSign';
import { GenericService } from './generic.service';


@Injectable({
  providedIn: 'root',
})


export class VitalSignService extends GenericService<VitalSign>{
  
  private vitalSignChange = new Subject<VitalSign[]>;
  private messageChange = new Subject<string>;

  constructor(protected override http: HttpClient){
    super(
      http,
      `${environment.HOST}/Vitalsign`)
  }
  
  listPageable(p: number, s:number){
    return this.http.get<any>(`${this.url}/pageable?page=${p}&size=${s}`);
  }

  setVitalSignChange(data: VitalSign[]){
    this.vitalSignChange.next(data);
  }

  getVitalSignChange(){
    return this.vitalSignChange.asObservable();
  }

  setMessageChange(data: string) {
    this.messageChange.next(data);
  }

  getMessageChange() {
    return this.messageChange.asObservable();
  }

}
