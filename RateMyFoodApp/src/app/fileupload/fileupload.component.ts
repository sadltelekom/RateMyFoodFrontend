import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileuploadService } from '../serv/fileupload.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  id: number;

  constructor(private uploadService: FileuploadService,private activeRoute: ActivatedRoute,private router: Router) { 
    if (this.activeRoute.snapshot.paramMap.get('id')) {
      this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    }
    else {
      this.id = 1;
    }
  }


  // Drag Drop Start
  file:any;
  getFile(event:any) {
    this.file = event.target.files[0]
    
    console.log('file', this.file);

  }

  // uploadFile() {
  //   let formData = new FormData();
  //   formData.set("file", this.file)

  // }
  // Drag Drop End



  ngOnInit(): void {
    // this.fileInfos = this.uploadService.getFiles();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  // upload(): void {
  uploadFile() {
    let formData = new FormData();
    formData.set("file", this.file)
    this.progress = 0;
    // if (this.selectedFiles) {
    //   const file: File | null = this.selectedFiles.item(0);
      if (this.file) {
        // this.currentFile = this.file;
        this.uploadService.upload(this.file,this.id).subscribe({
          next: (event: any) => {

            console.log("upload: ", this.uploadService);

            if (event.type === HttpEventType.UploadProgress) {

              console.log("any progress?");

              this.progress = Math.round(100 * event.loaded / event.total);
            } 
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
            
            if (err.error && err.error.message) {
              console.log("PUnkt3");
              this.message = err.error.message;
            } 
            // this.currentFile = undefined;
          }
        });
      }
      // this.selectedFiles = undefined;
    // }
    console.log("PUnkt5");
    this.router.navigate(['recipes', this.id]);
  }

}

