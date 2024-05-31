import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    [x: string]: any;
    postList: any = [
        {
            title: 'Title',
            content: 'Content',
            category: 'Category',
            time: 'Time',
            author: 'Author'
        }
    ];
    constructor(private router: Router, private httpProvider: HttpProviderService) { }
    ngOnInit(): void {
        this.getPosts();
    }
    getPosts() {
        this.postList = [
            {
                title: 'Title',
                content: 'Content',
                category: 'Category',
                time: 'Time',
                author: 'Author'
            },
            {
                title: 'Title',
                content: 'Content',
                category: 'Category',
                time: 'Time',
                author: 'Author'
            },
            {
                title: 'Title',
                content: 'Content',
                category: 'Category',
                time: 'Time',
                author: 'Author'
            }
        ]
    }
    async getAllPost() {
        this.httpProvider.getAllPost().subscribe((data: any) => {
            if (data != null && data.body != null) {
                var resultData = data.body;
                if (resultData) {
                    this.postList = resultData;
                }
            }
            (error: any) => {
                if (error) {
                    if (error.status == 404) {
                        if (error.error && error.error.message) {
                            this.postList = [];
                        }
                    }
                }
            }
        })
    }
    addPost() {
        this.router.navigate(['AddPost']);
    }
}
