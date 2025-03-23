import { MutateCustomerArgs } from '../types/customer.types';
import { PrestaShopWriteCustomer } from '../types/prestashop.types';

export const writeCustomerMapper = (
  customer: MutateCustomerArgs,
): PrestaShopWriteCustomer => {
  return {
    id_default_group: customer.idDefaultGroup,
    id_lang: customer.idLang,
    newsletter_date_add: customer.newsletterDateAdd,
    ip_registration_newsletter: customer.ipRegistrationNewsletter,
    deleted: customer.deleted,
    passwd: customer.passwd,
    lastname: customer.lastName,
    firstname: customer.firstName,
    email: customer.email,
    id_gender: customer.idGender,
    birthday: customer.birthday,
    newsletter: customer.newsletter,
    optin: customer.optIn,
    website: customer.website,
    company: customer.company,
    siret: customer.siret,
    ape: customer.ape,
    outstanding_allow_amount: customer.outstandingAllowAmount,
    show_public_prices: customer.showPublicPrices,
    id_risk: customer.idRisk,
    max_payment_days: customer.maxPaymentDays,
    active: customer.active,
    note: customer.note,
    is_guest: customer.isGuest,
    id_shop: customer.idShop,
    id_shop_group: customer.idShopGroup,
    date_add: customer.dateAdd,
    date_upd: customer.dateUpd,
    reset_password_token: customer.resetPasswordToken,
    reset_password_validity: customer.resetPasswordValidity,
    associations: customer.associations,
  };
};
