//API to communicate with DB
//Endpoint for all request 
const ENDPOINT_URL = "https://open-grizzly-45.hasura.app/v1/graphql";

//GraphQL query
const SIGNUP_COOKS = `
    mutation add_cooks ($id: Int = 10, $updated_at: timestamptz = "", $created_at: timestamptz = "") 
    {insert_zestii_cooks
        (objects: 
            {created_at: $created_at, email: "",
             first_name: "", 
             id: $id, 
             phone: "", 
             service_location: "", 
             sur_name: "", 
             updated_at: $updated_at}) {
         returning {
           id
        }
      }
    }
`;

export const addCooks = async (request) => {
    const request = await fetch(ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify({
            query: SIGNUP_COOKS
        })
    }
    );
    const { errors, data } = await addCooks();
    if (errors) {
        // handle those errors like a pro
        console.error(errors);
      }
      // do something great with this precious data
      console.log(data);
    }
    return await response.json();
};
