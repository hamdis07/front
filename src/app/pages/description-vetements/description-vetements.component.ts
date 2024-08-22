import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-vetements',
  templateUrl: './description-vetements.component.html',
  styleUrls: ['./description-vetements.component.css']
})
export class DescriptionVetementsComponent implements OnInit {
  productId: string | null = null;
  product: any | undefined;

  products = [
    {
      id: '31224852',
      image: 'assets/images/chemise_femme_1.png',
      title: 'CHEMISE',
      description: 'Chemise femme tendance',
      price: '80DT',
      colors: 'Beige, Noir, Rouge, Blanc',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '711224852',
      image: 'assets/images/chemise_femme_2.png',
      title: 'CHEMISE SATIN',
      description: 'Chemise femme tendance',
      price: '100DT',
      colors: 'Blanc, Noir, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '91224852',
      image: 'assets/images/chemise_femme_3.png',
      title: 'CHEMISE',
      description: 'Chemise femme tendance',
      price: '40DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '71224852',
      image: 'assets/images/tee-shirt-homme1.png',
      title: 'PULL HOMME',
      description: 'Pull homme tendance en coton disponible en plusieurs couleurs et tailles pour tous les genres',
      price: '80DT',
      colors: 'Beige, Noir, Rouge, Blanc, Marron, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '0311224852',
      image: 'assets/images/tee-shirt-homme2.png',
      title: 'PULL HOMME',
      description: 'Pull homme tendance disponible en plusieurs couleurs et tailles pour tous les genres',
      price: '70DT',
      colors: 'Blanc, Noir, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '781224852',
      image: 'assets/images/tee-shirt-homme3.png',
      title: 'PULL HOMME',
      description: 'Pull homme tendance en coton disponible en plusieurs couleurs et tailles pour tous les genres',
      price: '50DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'L, M, S, XL, XS'
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
