//API to communicate with DB
//Endpoint for all request 
const ENDPOINT_URL = "https://open-grizzly-45.hasura.app/v1/graphql";

//GraphQL query for initial sign up
const SIGNUP_COOKS = `
    mutation addCooks($email: String, $service_location: String, $user_name: String, $password: String) {
    insert_zestii_cooks(objects: {email: $email, service_location: $service_location, user_name: $user_name, password: $password}) {
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

//GraphQL query for login auth
const LOG_IN_AUTH = `
`
export const User_LogIn = async (requestData) => {
  const response = await fetch(ENDPOINT_URL, {
      method: "POST",
      body: JSON.stringify({
          query: LOG_IN_AUTH, 
          variables: requestData
      })
  }
  );
  return await response.json();
};