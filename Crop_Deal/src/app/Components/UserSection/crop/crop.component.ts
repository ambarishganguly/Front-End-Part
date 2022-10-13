import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Crop } from 'Models/crop.model';
import { CropService } from 'Service/crop.service';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent implements OnInit {

  croplist : Crop[]=[];

  constructor(private service: CropService) {
    this.getAll();
   }

  ngOnInit():void {
    // this.cropService.getAllCrop().subscribe(
    //   (res:any) => {
    //     this.croplist=res;
    //   });
  }

  getAll(){
    this.service.getAllCrop().subscribe(result => {
      this.croplist = result;
    });
  }
  delete(cropId: any) {
    if (confirm("Do you want remove?")) {
      this.service.deleteCrop(cropId).subscribe(result => {
        this.getAll();
      });
}
}
}