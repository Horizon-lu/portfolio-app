import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-contact-dialog',
  imports: [MatDialogActions, MatDialogContent, MatIconModule, CommonModule,MatButtonModule],
  templateUrl: './contact-dialog.component.html',
  styleUrl: './contact-dialog.component.scss'
})
export class ContactDialogComponent {

  dialogRef = inject(MatDialogRef<ContactDialogComponent>);
  contacts = [
    { icon: 'phone', label: 'Celular', value: '+51 999 999 999' },
    { icon: 'call', label: 'Llamada', value: '+51 988 888 888' },
    { icon: 'email', label: 'Correo', value: 'soporte@ejemplo.com' },
    { icon: 'whatsapp', label: 'WhatsApp', value: '+51 955 555 555' }
  ];

  call(){
    const phoneNumber = '+51958766379';
    window.open(`tel:${phoneNumber}`);
  }

  email(){
    const email = 'reymerretamozolopez@gmail.com';
    window.open('mailto:' + email);
  }
  
  whatsapp(){
    const phoneNumber = '+51958766379';
    window.open(`https://wa.me/${phoneNumber}`);
  }
}
