//API to communicate with DB
//Endpoint for all request
const ENDPOINT_URL = "https://open-grizzly-45.hasura.app/v1/graphql";

//GraphQL query for initial sign up
const SIGNUP_COOKS = `mutation addCooks($activities: String = "", $ad_1_street: String = "", $ad_2_apt: String = "", $ad_3_city: String = "", $ad_4_postcode: String = "", $ad_5_country: String = "", $alcoholpassi: String = "", $bio: String = "", $first_name: String = "", $hygienipassi: String = "", $nick_name: String = "", $phone_number: String = "", $profile_picture: bytea = "", $signature_dishes: String = "", $signature_dishes_picture: bytea = "", $sur_name: String = "") {
  insert_zestii_cooks(objects: {activities: $activities, ad_1_street: $ad_1_street, ad_2_apt: $ad_2_apt, ad_3_city: $ad_3_city, ad_4_postcode: $ad_4_postcode, ad_5_country: $ad_5_country, alcoholpassi: $alcoholpassi, bio: $bio, first_name: $first_name, hygienipassi: $hygienipassi, nick_name: $nick_name, phone_number: $phone_number, profile_picture: $profile_picture, signature_dishes: $signature_dishes, signature_dishes_picture: $signature_dishes_picture, sur_name: $sur_name}) {
    returning {
      nick_name
      id
    }
  }
}
`;

export const addCooks = async (requestData) => {
    const response = await fetch(ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify({
            query: SIGNUP_COOKS,
            variables: requestData
        })
    }
    );
    return await response.json();
};

//GraphQL query for update cook profile data table
const UPDATE_COOKS = `
`
export const updateCooks = async (requestData) => {
  const response = await fetch(ENDPOINT_URL, {
      method: "POST",
      body: JSON.stringify({
          query: UPDATE_COOKS,
          variables: requestData
      })
  }
  );
  return await response.json();
};

//GraphQL query fetching
const FETCH_COOKS = `
query fetch_cooks {
  zestii_cooks
  {
    nick_name
    profile_picture
    bio
    ad_3_city
  }
}`

export const fetch_cooks = async (requestData) => {
  const response = await fetch(ENDPOINT_URL, {
      method: "POST",
      body: JSON.stringify({
          query: FETCH_COOKS,
          variables: requestData
      })
  }
  );
  return await response.json();
};