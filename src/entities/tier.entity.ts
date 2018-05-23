export class Tier {
  id: number;
  types: any = [
    {
      id: 0,
      libelle: ''
    }
  ];
  code: number;
  civility: string;
  social_reason: string;
  rc: string;
  patent_number: string;
  if: string;
  ice: string;
  last_name: string;
  first_name: string;
  cin: string;
  date_birth: string;
  date_death: string;
  gender: string;
  adress: string;
  city: string;
  street: string;
  postal_code: string;
  tel1: string;
  tel2: string;
  address_email: string;
  situation: string;
  children_number: number;
  assurance: string;
  retreat: string;
  education_level: string;
  tva_code: number;
  payment_mode: string;
  dette: number;
  etat: string;
  actionsPermission: {
    delete: false,
    update: false
  };
  created_date: string;
  updated_date: string;
}
