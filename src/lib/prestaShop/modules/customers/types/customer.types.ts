export interface MutateCustomerArgs {
  idDefaultGroup?: number;
  idLang?: number;
  newsletterDateAdd?: string;
  ipRegistrationNewsletter?: string;
  deleted?: boolean;
  passwd: string;
  lastName: string;
  firstName: string;
  email: string;
  idGender?: number;
  birthday?: string;
  newsletter?: boolean;
  optIn?: boolean;
  website?: string;
  company?: string;
  siret?: string;
  ape?: string;
  outstandingAllowAmount?: number;
  showPublicPrices?: boolean;
  idRisk?: number;
  maxPaymentDays?: number;
  active?: boolean;
  note?: string;
  isGuest?: boolean;
  idShop?: number;
  idShopGroup?: number;
  dateAdd?: string;
  dateUpd?: string;
  resetPasswordToken?: string;
  resetPasswordValidity?: string | null;
  associations?: {
    groups?: {
      id: number;
    }[];
  };
}

export interface Customer {
  idDefaultGroup?: number;
  idLang?: number;
  newsletterDateAdd?: string;
  ipRegistrationNewsletter?: string;
  deleted?: boolean;
  passwd: string;
  lastName: string;
  firstName: string;
  email: string;
  idGender?: number;
  birthday?: string;
  newsletter?: boolean;
  optIn?: boolean;
  website?: string;
  company?: string;
  siret?: string;
  ape?: string;
  outstandingAllowAmount?: number;
  showPublicPrices?: boolean;
  idRisk?: number;
  maxPaymentDays?: number;
  active?: boolean;
  note?: string;
  isGuest?: boolean;
  idShop?: number;
  idShopGroup?: number;
  dateAdd?: string;
  dateUpd?: string;
  resetPasswordToken?: string;
  resetPasswordValidity?: string | null;
  associations?: {
    groups?: {
      id: number;
    }[];
  };
  id: number;
  lastPasswdGen?: string;
  secureKey?: string;
}
