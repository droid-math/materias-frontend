import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-default',
    templateUrl: './button-default.component.html',
    styleUrl: './button-default.component.scss',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonDefaultComponent {}