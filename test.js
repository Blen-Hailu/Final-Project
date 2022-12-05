// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

firebase.initializeApp(config);

document.getElementById("register-form").onsubmit = function (event) {
  event.preventDefault();
  let email = document.getElementById("reg-email").value;
  let pass = document.getElementById("reg-password").value;
  register(email, pass);
};

document.getElementById("get-token").onclick = function (event) {
  event.preventDefault();
  firebase
    .auth()
    .currentUser.getIdToken(true)
    .then((token) => (document.getElementById("id-token").innerHTML = token));
};

function register(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const admin_secret = "<your-admin-secret>";
      const url = "<your-hasura-app-url>";
      const query = `mutation($userId: String!, $userEmail: String) {
        insert_users(objects: [{
          id: $userId, email: $userEmail, last_seen: "now()"
        }], on_conflict: {constraint: users_pkey, update_columns: [last_seen, email]}
        ) {
          affected_rows
        }
      }`;

      const variables = { userId: res.user.uid, userEmail: res.user.email };

      fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret": admin_secret,
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        })
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, ':', errorMessage);
    });
}
