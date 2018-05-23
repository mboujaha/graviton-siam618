import { Component, OnInit } from '@angular/core';
import {Tier} from '../../../entities/tier.entity';
import {TiersService} from '../../../services/tiers.service';

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.css']
})
export class TiersComponent implements OnInit {

  tiers: Tier[];

  constructor(private tiersService: TiersService) { }

  ngOnInit() {
    this.tiers = this.tiersService.getAllTiers();
  }

}

