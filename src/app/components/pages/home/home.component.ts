import {Component, OnInit} from '@angular/core';
import {MovieApiService} from "../../../services/movie-api.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service: MovieApiService) {
  }

  bannerResult:any = [];
  trendingResult:any = [];
  actionMovieResult:any = [];
  adventureMovieResult:any = [];
  animationMovieResult:any = [];
  comedyMovieResult:any = [];
  documentaryMovieResult:any = [];
  scienceFictionMovieResult:any = [];
  thrillerMovieResult:any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceFictionMovie();
    this.thrillerMovie();

  }

  bannerData(){
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, "bannerresult#");
      this.bannerResult = result.results;
    })
  }

  trendingMovieData(){
    this.service.trendingMoviesApiData().subscribe((result) => {
      console.log(result, "trendingResult#");
      this.trendingResult = result.results;
    })
  }

  actionMovie(){
    this.service.fetchActionMovies().subscribe((result)=>{
      this.actionMovieResult = result.results;
    })
  }
  adventureMovie(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      this.adventureMovieResult = result.results;
    })
  }
  animationMovie(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      this.animationMovieResult = result.results;
    })
  }

  comedyMovie(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      this.comedyMovieResult = result.results;
    })
  }

  documentaryMovie(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
      this.documentaryMovieResult = result.results;
    })
  }

  scienceFictionMovie(){
    this.service.fetchScienceFictionMovies().subscribe((result)=>{
      this.scienceFictionMovieResult = result.results;
    })
  }

  thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      this.thrillerMovieResult = result.results;
    })
  }
}
