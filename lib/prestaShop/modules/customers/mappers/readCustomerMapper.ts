import { Customer } from '../types/customer.types';
import { PrestaShopReadCustomer } from '../types/prestashop.types';

export const readCustomerMapper = (
  customer: PrestaShopReadCustomer,
): Customer => {
  return {
    id: customer.id,
    passwd: customer.passwd,
    lastName: customer.lastname,
    firstName: customer.firstname,
    email: customer.email,
    idDefaultGroup: customer.id_default_group,
    idLang: customer.id_lang,
    newsletterDateAdd: customer.newsletter_date_add,
    ipRegistrationNewsletter: customer.ip_registration_newsletter,
    deleted: customer.deleted,
    idGender: customer.id_gender,
    birthday: customer.birthday,
    newsletter: customer.newsletter,
    optIn: customer.optin,
    website: customer.website,
    company: customer.company,
    siret: customer.siret,
    ape: customer.ape,
    outstandingAllowAmount: customer.outstanding_allow_amount,
    showPublicPrices: customer.show_public_prices,
    idRisk: customer.id_risk,
    maxPaymentDays: customer.max_payment_days,
    active: customer.active,
    note: customer.note,
    isGuest: customer.is_guest,
    idShop: customer.id_shop,
    idShopGroup: customer.id_shop_group,
    dateAdd: customer.date_add,
    dateUpd: customer.date_upd,
    resetPasswordToken: customer.reset_password_token,
    resetPasswordValidity: customer.reset_password_validity,
    associations: customer.associations,
    lastPasswdGen: customer.last_passwd_gen,
    secureKey: customer.secure_key,
  };
};
