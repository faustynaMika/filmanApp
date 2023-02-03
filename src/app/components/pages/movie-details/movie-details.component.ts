import {Component, OnInit} from '@angular/core';
import {MovieApiService} from "../../../services/movie-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  getMovieDetailResult: any;
  // getVideoResult:any;
  getMovieCastResult:any;

  constructor(private service: MovieApiService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id')
    this.getMovie(getParamId)
    // this.getVideo(getParamId)
    this.getMovieCast(getParamId)
  }


  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      this.getMovieDetailResult = result;
    })
  }
  // getVideo(id:any) {
  //   this.service.getMovieVideo(id).subscribe((result)=>{
  //     result.results.forEach((element:any)=>{
  //       if (element.type == 'trailer') {
  //         this.getVideoResult = element.key;
  //       }
  //     })
  //
  //   })
  // }
  getMovieCast(id:any) {
    this.service.getMovieCast(id).subscribe((result)=>{
      this.getMovieCastResult = result.cast;
    })
  }
}
