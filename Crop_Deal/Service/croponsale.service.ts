import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CropOnSale } from 'Models/croponsale.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CroponsaleService {

  constructor(private http:HttpClient) { }

  formData: CropOnSale = new CropOnSale();
  readonly baseUrl ='https://localhost:7214/api/CropOnSale';

  postCropOnSale(){
    return this.http.post<CropOnSale>(this.baseUrl,this.formData)
  }

  getCropOnSale(cropSaleId:number){
    return this.http.get<CropOnSale>(this.baseUrl+'/'+cropSaleId)
  }

  getAllCropOnSale():Observable<CropOnSale[]>{
    return this.http.get<CropOnSale[]>(this.baseUrl)
  }

  updateCropOnSale(cropSaleId:number){
    return this.http.put<CropOnSale>(this.baseUrl+'/',cropSaleId)
  }

  deleteCropOnSale(cropSaleId:number){
    return this.http.delete<CropOnSale>(this.baseUrl+'/'+cropSaleId)
  }
}
