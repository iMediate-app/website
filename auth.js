let auth0 = null;

const configureClient = async () => {
  auth0 = await createAuth0Client({
    domain: "imediate.eu.auth0.com",
    client_id: "EYbH3i9xd4SbycAYZWiR5dgh9HKAiXa5",
    cacheLocation: "localstorage",
    useRefreshTokens: true,
    redirect_uri: window.location.origin,
  });
};

window.onload = async () => {
  await configureClient();

  // Handle redirect callback
  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/");
  }

  const isAuthenticated = await auth0.isAuthenticated();

  if (isAuthenticated) {
    const user = await auth0.getUser();
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "inline-block";
    document.getElementById("profile").style.display = "block";
    document.getElementById("profile").textContent = JSON.stringify(user, null, 2);
  } else {
    document.getElementById("login").style.display = "inline-block";
    document.getElementById("logout").style.display = "none";
    document.getElementById("profile").style.display = "none";
  }

  document.getElementById("login").addEventListener("click", () => {
    auth0.loginWithRedirect();
  });

  document.getElementById("logout").addEventListener("click", () => {
    auth0.logout({ returnTo: window.location.origin });
  });
};
