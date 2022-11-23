const ENDPOINT_URL = "https://precise-ewe-30.hasura.app/v1/graphql";

const addMutation= `mutation InsertKotibetTest($first_name: String, $last_name: String, $email_address: String, $zip_code: String, $city: String, $country: String, $phone_number: String) {
  insert_kotibet_test(objects: {first_name: $first_name, last_name: $last_name, email_address: $email_address, zip_code: $zip_code, city: $city, country: $country, phone_number: $phone_number, service_type: "", street_address: ""}) {
    affected_rows
    returning {
      first_name
      last_name
      email_address
      id
      service_type
      zip_code
      city
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