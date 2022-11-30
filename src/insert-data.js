const ENDPOINT_URL = "https://precise-ewe-30.hasura.app/v1/graphql";

const addMutation= `
mutation InsertFreelancerTable($city: String, $country: String, $email: String, $first_name: String, $last_name: String, $password: String, $phone_number: String, $service_type: String, $street_address: String, $zipcode: String, $picture:String) {
  insert_profile_freelancer_table(objects: {city: $city, country: $country, email: $email, first_name: $first_name, last_name: $last_name, password: $password, phone_number: $phone_number, service_type: $service_type, street_address: $street_address, zipcode: $zipcode, picture:$picture}) {
    affected_rows
    returning {
      id
			city
			country
			email
			first_name
			last_name
			password
			phone_number
			service_type
			street_address
			zipcode
			created_at
      picture
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
