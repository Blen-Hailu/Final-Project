const ENDPOINT_URL = "https://precise-ewe-30.hasura.app/v1/graphql";

const addMutation= `mutation InsertKotibetTest($email: String, $firstName: String, $lastName: String) {
  insert_kotibet_test(objects: {email_address: $email_address, first_name: $first_name, last_name: $last_name}) {
    affected_rows
    returning {
      location_id
      first_name
      last_name
      id
      service_type_id
    }
  }
}
`;
export const userRegistration = async (requestData) => {
  const response = await fetch(ENDPOINT_URL, {
      method: "POST",
      body: JSON.stringify({
          query:  addMutation,
          variables: requestData
      })
  });
  return await response.json();
};