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

  ngOnInit(): void {
    // this.fileInfos = this.uploadService.getFiles();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile,this.id).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } 
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } 
            this.currentFile = undefined;
          }
        });
      }
      this.selectedFiles = undefined;
    }
    this.router.navigate(['recipes', this.id]);
  }

}

