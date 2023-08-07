import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() hiddenDetails = false;

  @Input() title = "Currency Exchanger";
  @Input() hiddenBackToHome = true;
  private route = inject(Router);
  backToHome() {
    this.route.navigate(['../'])
  }

}
