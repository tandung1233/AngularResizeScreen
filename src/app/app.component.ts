import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count: number = 1;

  ngOnInit(): void {
    this.updateCount(window.innerWidth);
    this.getPagination(this.count);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log("%cĐã chạy onResize","color: blue");
    this.updateCount(event.target.innerWidth);
    this.getPagination(this.count);
  }

  private updateCount(width: number) {
    this.count = (width <= 1024) ? this.count : 2;
    this.count = (width > 1024) ? this.count : 1;
  }

  getPagination(count: number): void {
    console.log(count);
  }
}