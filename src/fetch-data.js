const ENDPOINT_URL = "https://precise-ewe-30.hasura.app/v1/graphql";
const PROFILE_QUERY = `
query GetFreelancerTable {
  profile_freelancer_table
{
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
}
}
`;
export const fetchProfile = async () => {
    const response = await fetch(ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify({
            query: PROFILE_QUERY
        })
    });
  
    return await response.json();
};
