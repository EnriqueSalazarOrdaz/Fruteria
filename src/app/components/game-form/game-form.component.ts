import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/game';

import {Router} from '@angular/router';

import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

 @HostBinding('class') classes='row';
 
 game: Game={
 id:0,
 title:'',
 description:'',
 image:'',
 created_at: new Date()

 };

  constructor(private gameService:GameService, private router:Router) { }

  ngOnInit() {
  }

  save(){
    delete this.game.id;
    delete this.game.created_at;


    this.gameService.saveGame(this.game).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/games']);
      },
      err=>{
        console.log(err)
      }
    )
  }
}
