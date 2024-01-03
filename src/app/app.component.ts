import { Component, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RoutingComponents, AppRoutingModule } from './app.routes';
// import { AppModule } from './app.module';
import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
    RoutingComponents,
    RouterLink,
    HttpClientModule,
    NzButtonModule,
    NzLayoutModule,
    NzIconModule,
    NzTypographyModule,
    NzTabsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'media-downloader';
}
