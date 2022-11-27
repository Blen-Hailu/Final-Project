//API to communicate with DB
//Endpoint for all request 
const ENDPOINT_URL = "https://open-grizzly-45.hasura.app/v1/graphql";

//GraphQL query to send signup data in
const SIGNUP_COOKS = `
    mutation addCooks($email: String, $service_location: String, $user_name: String) {
    insert_zestii_cooks(objects: {email: $email, service_location: $service_location, user_name: $user_name}) {
      affected_rows
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

//GraphQL query to fetch data for profile page
const GENERATE_PROFILE_COOKS = `
        query MyQuery {
          zestii_cooks_profile {
            nick_name
            signature_dishes
            signature_dishes_picture
            profile_picture
            bio
          }
        }
`;

export const fetchCooksData = async (data) => {
    const response = await fetch(ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify({
            query: GENERATE_PROFILE_COOKS,
        })
    }
    );
    return await response.json();
};