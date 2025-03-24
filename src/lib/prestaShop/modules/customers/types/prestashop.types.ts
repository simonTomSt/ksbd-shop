export interface PrestaShopWriteCustomer {
  id_default_group?: number;
  id_lang?: number;
  newsletter_date_add?: string;
  ip_registration_newsletter?: string;
  deleted?: boolean;
  passwd: string;
  lastname: string;
  firstname: string;
  email: string;
  id_gender?: number;
  birthday?: string;
  newsletter?: boolean;
  optin?: boolean;
  website?: string;
  company?: string;
  siret?: string;
  ape?: string;
  outstanding_allow_amount?: number;
  show_public_prices?: boolean;
  id_risk?: number;
  max_payment_days?: number;
  active?: boolean;
  note?: string;
  is_guest?: boolean;
  id_shop?: number;
  id_shop_group?: number;
  date_add?: string;
  date_upd?: string;
  reset_password_token?: string;
  reset_password_validity?: string | null;
  associations?: {
    groups?: {
      id: number;
    }[];
  };
}

export interface PrestaShopReadCustomer extends PrestaShopWriteCustomer {
  id: number;
  last_passwd_gen?: string;
  secure_key?: string;
}
