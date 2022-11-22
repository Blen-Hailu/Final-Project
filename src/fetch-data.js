const ENDPOINT_URL = "https://precise-ewe-30.hasura.app/v1/graphql";
const PROFILE_QUERY = `
    query {
        kotibet_test {
            first_name
            last_name
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
