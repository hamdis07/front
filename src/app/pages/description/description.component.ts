import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  productId: string | null = null;
  product: any | undefined;

  products = [
    {
      id: '0001224852',
      image: 'assets/images/accessoire1.jpg',
      title: 'Accessoire Pour Les Cheveux',
      description: 'Collection de scrunchies à bande élastique en soie tendance et de pinces à cheveux perles',
      price: '20DT',
      colors: 'Beige, Noir, Rouge, Blanc',
      size: 'Unique'
    },
    {
      id: '0011224852',
      image: 'assets/images/accessoire2.jpg',
      title: 'Parure Perles',
      description: "Parure Perles d'eau douce -Bijoux -Accessoires- Cadeaux pour femmes",
      price: '80DT',
      colors: 'Blanc',
      size: 'Unique'
    },
    {
      id: '301224852',
      image: 'assets/images/accessoire3.png',
      title: 'Bracelet fantaisie femme',
      description: 'Bracelet fantaisie femme à porter en toutes les occasions.',
      price: '40DT',
      colors: 'Beige, Noir, Blanc',
      size: 'Unique'
    },
    {
      id: '852',
      image: 'assets/images/sac-femme-1.png',
      title: 'Sac a main tendance',
      description: 'Sac a main tendance pour tout les genres',
      price: '120DT',
      colors: 'Beige, Noir, Rouge, Blanc, Marron',
      size: 'L, M, S'
    },
    {
      id: '003',
      image: 'assets/images/sac-femme-2.png',
      title: 'Sac a main femme',
      description: 'Sac a main pour femmes chic',
      price: '150DT',
      colors: 'Marron, Noir',
      size: 'L, M, S'
    },
    {
      id: '242',
      image: 'assets/images/sac-femme-3.png',
      title: 'Sac a main tendance',
      description: 'Sac en plusieurs Couleurs pour un meilleur look',
      price: '180DT',
      colors: 'Beige, Noir',
      size: 'L, M, S'
    }, {
      id: '96224852',
      image: 'assets/images/sac-homme1.png',
      title: 'Sacoche Homme Jeep Buluo J701 Black',
      description: 'Sacoche Homme disponible en plusieurs couleurs',
      price: '80DT',
      colors: 'Beige, Noir, Rouge, Blanc, Marron, Bleu',
      size: 'L, M'
    },
    {
      id: '031122152',
      image: 'assets/images/sac-homme2.png',
      title: 'Sacoche Homme',
      description: 'Saccoche homme disponible en plusieurs couleurs pour tous les genres',
      price: '99DT',
      colors: 'Blanc, Noir',
      size: 'L, M'
    },
    {
      id: '881224852',
      image: 'assets/images/sac-homme3.png',
      title: 'Sacoche Homme',
      description: 'Sacoche Homme disponible',
      price: '199DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'L, M'
    }, {
      id: '111022',
      image: 'assets/images/accessoire-enfant-fille1.png',
      title: 'ACCESSOIRE FILLE:',
      description: 'Barrette cheveux fille, chouchou, élastique - Le petit Souk',
      price: '20DT',
      colors: 'Beige, Noir, Rouge, Blanc',
      size: 'Unique'
    },
    {
      id: '55555',
      image: 'assets/images/accessoire-enfant-fille2.png',
      title: 'ACCESSOIRE FILLE:',
      description: 'Accessoires de mode fille',
      price: '10DT',
      colors: 'Blanc, Noir, Bleu, Violet, Rose',
      size: 'Unique'
    },
    {
      id: '99912',
      image: 'assets/images/accessoire-enfant-fille3.png',
      title: 'ACCESSOIRE FILLE:',
      description: '7pcs Accessoire cheveux fille enfant bandeau épingle à cheveux et chouchou à rayures bleu',
      price: '20DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'Unique'
    },
    {
      id: 'p7845',
      image: 'assets/images/sac-enfant-garcon1.png',
      title: 'SAC ENFANT:',
      description: 'Sac tendance pour garçon',
      price: '29.900DT',
      colors: 'Bleu, Noir, Beige',
      size: 'Unique'
    },
    {
      id: '33341155',
      image: 'assets/images/sac-enfant-garcon2.png',
      title: 'SAC ENFANT:',
      description: 'Sac tendance pour garçon',
      price: '29.900DT',
      colors: 'Blanc, Noir, Bleu',
      size: 'Unique'
    },
    {
      id: '0001399912',
      image: 'assets/images/sac-enfant-garcon3.png',
      title: 'SAC ENFANT:',
      description: 'Sac tendance pour garçon',
      price: '25DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'Unique'
    }, {
      id: 'nnp7845',
      image: 'assets/images/sac-bebe-garcon1.png',
      title: 'SAC Bébé:',
      description: 'Sac tendance pour nouveau né',
      price: '39.900DT',
      colors: 'Bleu, Noir, Beige',
      size: 'Unique'
    },{
      id: '50m111022',
      image: 'assets/images/accessoire-bebe-fille1.png',
      title: 'ACCESSOIRE Bébé FILLE:',
      description: 'Barrette cheveux fille, chouchou, élastique - Le petit Souk',
      price: '25DT',
      colors: 'Beige, Noir, Rouge, Blanc',
      size: 'Unique'
    },
    {
      id: 'mml55555',
      image: 'assets/images/accessoire-bebe-fille2.png',
      title: 'ACCESSOIRE Bébé FILLE:',
      description: 'Accessoires fille pour nouveau né',
      price: '29.900DT',
      colors: 'Blanc, Noir, Bleu, Violet, Rose',
      size: 'Unique'
    },
    {
      id: 'llpo99912',
      image: 'assets/images/accessoire-bebe-fille3.png',
      title: 'ACCESSOIRE Bébé FILLE:',
      description: 'Accessoires fille pour nouveau né',
      price: '29DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'Unique'
    }, {
      id: 'nnp7845',
      image: 'assets/images/sac-bebe-garcon1.png',
      title: 'SAC Bébé:',
      description: 'Sac tendance pour nouveau né',
      price: '39.900DT',
      colors: 'Bleu, Noir, Beige',
      size: 'Unique'
    },
    {
      id: 'kk33341155',
      image: 'assets/images/sac-bebe-garcon2.png',
      title: 'SAC Bébé:',
      description: 'Sac tendance pour nouveau né',
      price: '39.900DT',
      colors: 'Blanc, Noir, Bleu',
      size: 'Unique'
    },
    {
      id: 'p001399912',
      image: 'assets/images/sac-bebe-garcon3.png',
      title: 'SAC Bébé:',
      description: 'Sac tendance pour nouveau né',
      price: '35DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'Unique'
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) {
      this.product = this.products.find(p => p.id === this.productId);
    }

    if (!this.product) {
      console.error('Produit non trouvé !');
    }
  }

  showModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

closeModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

}
