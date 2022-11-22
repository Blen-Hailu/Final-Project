//API to communicate with DB
//Endpoint for all request 
const ENDPOINT_URL = "https://open-grizzly-45.hasura.app/v1/graphql";

//GraphQL query
const SIGNUP_COOKS = `
    mutation add_cooks ($email: String = "", $first_name: String = "", $id: Int = 11, $service_location: String = "", $sur_name: String = "", $phone: String = "") {
        insert_zestii_cooks(objects: {email: $email, first_name: $first_name, service_location: $service_location, sur_name: $sur_name, phone: $phone}) {
          returning {
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
