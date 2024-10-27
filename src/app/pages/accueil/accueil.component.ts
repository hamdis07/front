import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService } from 'src/app/services/genre.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpParams } from '@angular/common/http'; // Import HttpParams if not already

@Component({
  selector: 'app-genre-list',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  genres: any[] = [];
  produits: any[] = [];
  produit:any[]=[];
  filteredProduits: any[] = [];
  categories: any[] = [];
  hoveredCategory: number | null = null;
  loading: boolean = false;
  selectedGenre: any = null; // Ajout de selectedGenre
  filterParams: any = {}; // Params to send for filtering
  activeFilter: string | null = null;
  activeFilterLink: string | null = null;
  selectedCategory: number | null = null; // Pour marquer la catégorie sélectionnée

  constructor(
    private genreService: GenreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadGenres();
    this.loadCategories();
    this.route.paramMap.subscribe(params => {
      const genreSlug = params.get('genreSlug');
      this.filterParams.genre_id = this.getGenreIdBySlug(genreSlug);
      this.applyFilters(); // Apply filters based on URL params
    });

    this.loadProduits();
  }
  goToProductDetail(produitId: number): void {
    this.router.navigate(['/produit', produitId]); // Navigates to /produit/:id
  }
  onFilterClick(filter: string): void {
    // Set the active filter
    this.activeFilter = filter;

    // Build the filter parameters dynamically
    const filterOptions: any = {
      new: { new: true, popular: false, promo: false },
      popular: { new: false, popular: true, promo: false },
      promo: { new: false, popular: false, promo: true },
    };

    // Set the filter parameters based on the selected filter
    this.filterParams = filterOptions[filter] || {};

    // Apply the selected filter
    this.applyFilters();
  }
  // Get genre ID by its slug
  getGenreIdBySlug(genreSlug: string | null): number | null {
    const selectedGenre = this.genres.find(genre => genre.nom.toLowerCase() === genreSlug?.toLowerCase());
    return selectedGenre ? selectedGenre.id : null;
  }

  // Charger les genres
  loadGenres(): void {
    this.loading = true;
    this.genreService.getAllGenres().subscribe(
      data => {
        this.genres = data;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de la récupération des genres', error);
        this.loading = false;
      }
    );
  }

  // Charger les produits
  loadProduits(): void {
    this.loading = true;
    this.genreService.getAllProduits().subscribe(
      (response: any) => {
        const produitsAvecDetails = response.produits || [];
        this.produits = produitsAvecDetails.map((item: any) => {
          const produit = item.produit;
          return {
            id: produit.id,
            nom_produit: produit.nom_produit,
            description: produit.description,
            prix: produit.prix,
            image_url: produit.image_url,
            enPromo: produit.promo_id !== null, // Vérifiez si un produit a une promo
            promo: produit.promo_id ? { pourcentage_reduction: produit.promo.pourcentage_reduction } : null, // Détails de la promo

            genre_id: produit.genre_id || null,
            category_id: produit.category_id || null,
            subcategory_id: produit.subcategory_id || null,
          };
        });
        this.filteredProduits = this.produits;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de la récupération des produits', error);
        this.loading = false;
      }
    );
  }

  // Charger les catégories avec sous-catégories
  loadCategories(): void {
    this.genreService.getAllCategoriesWithSubcategories().subscribe(
      (response: any) => {
        this.categories = response.data;
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de la récupération des catégories', error);
      }
    );}

  // Apply filters to get filtered products
  applyFilters(): void {
    this.loading = true;
    this.genreService.filterProduits(this.filterParams).subscribe(
      (response: any) => {
        console.log('Produits filtrés:', response.produits);  // Ajoute ceci pour débugger
        this.filteredProduits = response.produits;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors du filtrage des produits', error);
        this.loading = false;
      }
    );
  }

  // Sélection d'un genre
  onGenreSelect(genreId: number): void {
    this.selectedGenre = this.genres.find(genre => genre.id === genreId);
    this.filterParams.genre_id = genreId;
    this.applyFilters(); // Filter after genre selection
  }

  // Gérer le survol d'une catégorie
  onCategoryHover(categoryId: number | null): void {
    this.hoveredCategory = categoryId;
  }

  // Gérer la sélection d'une catégorie
  onCategorySelect(categoryId: number): void {
    this.filterParams.categorie_id = categoryId;
    this.applyFilters(); // Filter after category selection
  }

  // Gérer la sélection d'une sous-catégorie
  onSubCategorySelect(subCategoryId: number): void {
    this.filterParams.souscategorie_id = subCategoryId;
    this.applyFilters(); // Filter after subcategory selection
  }

  // Filtrer les produits par le slug du genre (based on URL)
  filterProductsByGenreSlug(genreSlug: string | null): void {
    const genreId = this.getGenreIdBySlug(genreSlug);
    if (genreId) {
      this.filterParams.genre_id = genreId;
      this.applyFilters();
    }
  }
  onSearch(event: any): void {
    const keyword = event.target.value;
    this.filterParams.keyword = keyword;
    this.applyFilters(); // Apply search filter
  }
  // Ajouter un produit au panier
  addToCart(produit: any): void {
    this.router.navigate(['/paniersproduits/', produit.id]);
  }
}
