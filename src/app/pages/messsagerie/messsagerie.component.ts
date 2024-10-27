import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messsagerie',
  templateUrl: './messsagerie.component.html',
  styleUrls: ['./messsagerie.component.css']
})
export class MesssagerieComponent implements OnInit {
  receivedMessages: any[] = [];
  replyContent: { [key: number]: string } = {}; // Stocker le contenu des réponses par ID de message
  errorMessage: string | null = null;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.getReceivedMessages();
  }

  getReceivedMessages(): void {
    this.messageService.getReceivedMessages().subscribe(
      (data) => {
        this.receivedMessages = data;
      },
      (error) => {
        this.errorMessage = error.error.message || 'Erreur lors de la récupération des messages.';
      }
    );
  }

  toggleReplyForm(messageId: number): void {
    const message = this.receivedMessages.find(m => m.id === messageId);
    if (message) {
      message.showReplyForm = !message.showReplyForm; // Toggle the reply form
    }
  }

  sendReply(messageId: number): void {
    const content = this.replyContent[messageId];
    if (!content) {
      alert('Le contenu de la réponse ne peut pas être vide.'); // Validation simple
      return;
    }

    this.messageService.replyToMessage(messageId, content).subscribe(
      () => {
        alert('Réponse envoyée avec succès.');
        this.replyContent[messageId] = ''; // Réinitialiser le contenu de la réponse
        this.toggleReplyForm(messageId); // Fermer le formulaire de réponse
      },
      (error) => {
        alert('Erreur lors de l\'envoi de la réponse : ' + error.error.message);
      }
    );
  }

  // Vérifier si l'URL est une image
  isImage(url: string): boolean {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }
}
