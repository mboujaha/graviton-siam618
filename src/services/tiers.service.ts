import {HttpClient} from '@angular/common/http';
import {Tier} from '../entities/tier.entity';
import {Injectable} from '@angular/core';

@Injectable()
export class TiersService {

  private tiers: Tier[] = [
    new Tier(),
    new Tier()
  ];

  constructor(private http: HttpClient) {}

  getAllTiers(): any {
    return this.tiers.slice() ;
  }

}
