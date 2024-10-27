import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  produit: any;
  categories: string[] = [];
  souscategories: string[] = [];
  genre: string = '';
  quantites: any[] = [];
  images: any[] = [];
  currentIndex: number = 0;
  imageRotation: number = 0;
  imagesDisponibles: string[] = [];
  error: string | null = null; // Pour gérer les erreurs
  allImages: string[] = []; // Nouveau tableau pour toutes les images



  constructor(
    private route: ActivatedRoute,
    private router: Router,
        private dataService: DataService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    this.dataService.getProductById(id).subscribe(data => {
      this.produit = data.produit;
      this.categories = data.categories || [];
      this.categories = typeof this.categories === 'string' ? [this.categories] : this.categories; // Ensuring categories are array
      this.souscategories = data.souscategories || [];
      this.souscategories = typeof this.souscategories === 'string' ? [this.souscategories] : this.souscategories; // Ensuring souscategories are array
      this.genre = data.genre;
      this.quantites = data.quantites || [];

      // Handling multiple images from the `images` table
      this.images = data.images.map((image: any) => {
        return {
          url: `http://localhost/storage/images/${image.nom_fichier}`,
          alt: image.alt || 'Image du produit'
        };
      });

      // Extracting the images from the produit.images relationship (multiple images)
      this.imagesDisponibles = data.produit.images.map((image: any) => image.chemin_image);

      // Combine the main image (`image_url`) and additional images (`chemin_image`)
      this.allImages = [
        this.produit.image_url, // Main image from `image_url` in `produit` table
        ...this.imagesDisponibles  // Additional images from `images` table
      ].filter(image => !!image && image.length > 0); // Filtering out null or undefined values

      // Logging the results for debugging
      console.log('allImages:', this.allImages); // Check if all images are combined

    }, error => {
      console.error('Error fetching product details:', error);
    });
  }



  // Method to check if a value is an array
  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  // Passer à l'image suivante
  nextImage(): void {
    if (this.allImages.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.allImages.length; // Use allImages length
    }
  }

  // Revenir à l'image précédente
  prevImage(): void {
    if (this.allImages.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.allImages.length) % this.allImages.length; // Use allImages length
    }
  }

  // Rotation de l'image
  rotateImage(): void {
    this.imageRotation = (this.imageRotation + 90) % 360;
  }

  // Vérifier si le fichier est une image
  isImage(url: string): boolean {
    return url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.gif');
  }
  addToCart(produit: any): void {
    this.router.navigate(['/paniersproduits/', produit.id]);
  }
  // chargerDetailsProduit() {
  //   const produitId = +this.route.snapshot.paramMap.get('id')!;
  //   this.dataService.getProductById(produitId).subscribe({
  //     next: (data) => {
  //       this.produit = data.produit; // Assigner les détails du produit récupéré

  //       // Assigner les couleurs disponibles

  //       this.imagesDisponibles = this.produit.images.map((image: any) => image.chemin_image);
  //     },

  //     error: (err) => {
  //       this.error = err.error.message || 'Erreur lors du chargement du produit.';
  //       console.error('Erreur lors du chargement du produit:', this.error);
  //     }
  //   });
  // }
}
