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

  constructor(private uploadService: FileuploadService, private activeRoute: ActivatedRoute, private router: Router) {
    if (this.activeRoute.snapshot.paramMap.get('id')) {
      this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    }
    else {
      this.id = 1;
    }
  }



  file: any;
  getFile(event: any) {
    this.file = event.target.files[0]

  }





  ngOnInit(): void {

  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }


  uploadFile() {
    let formData = new FormData();
    formData.set("file", this.file)
    this.progress = 0;

    if (this.file) {

      this.uploadService.upload(this.file, this.id).subscribe({
        next: (event: any) => {



          if (event.type === HttpEventType.UploadProgress) {



            this.progress = Math.round(100 * event.loaded / event.total);
          }
        },
        error: (err: any) => {

          this.progress = 0;

          if (err.error && err.error.message) {

            this.message = err.error.message;
          }

        }
      });
    }


    this.router.navigate(['recipes', this.id]);
  }

}

