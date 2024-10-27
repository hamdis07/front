import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  message = {
    objet: '',
    content: ''
  };
  selectedFiles: File[] = [];
  responseMessage: string | null = null;

  constructor(private messageService: MessageService) {}

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files); // Récupérer les fichiers sélectionnés
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('objet', this.message.objet);
    formData.append('content', this.message.content);

    // Ajouter chaque fichier sélectionné dans FormData
    this.selectedFiles.forEach((file, index) => {
      formData.append(`file[${index}]`, file, file.name);
    });

    // Appeler le service pour envoyer le formulaire
    this.messageService.contactAdmin(formData)
      .subscribe({
        next: (response) => {
          this.responseMessage = 'Message envoyé avec succès.';
          this.resetForm();
        },
        error: (error) => {
          this.responseMessage = 'Erreur lors de l\'envoi du message.';
          console.error(error);
        }
      });
  }

  resetForm() {
    this.message.objet = '';
    this.message.content = '';
    this.selectedFiles = [];
  }
}
