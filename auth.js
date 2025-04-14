<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2113.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">let auth0 = null;</p>
<p class="p2"><br></p>
<p class="p1">const configureClient = async () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>auth0 = await createAuth0Client({</p>
<p class="p1"><span class="Apple-converted-space">    </span>domain: "imediate.eu.auth0.com",</p>
<p class="p1"><span class="Apple-converted-space">    </span>client_id: "EYbH3i9xd4SbycAYZWiR5dgh9HKAiXa5",</p>
<p class="p1"><span class="Apple-converted-space">    </span>cacheLocation: "localstorage",</p>
<p class="p1"><span class="Apple-converted-space">    </span>useRefreshTokens: true,</p>
<p class="p1"><span class="Apple-converted-space">    </span>redirect_uri: window.location.origin,</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p1">};</p>
<p class="p2"><br></p>
<p class="p1">window.onload = async () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>await configureClient();</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// Handle redirect callback</p>
<p class="p1"><span class="Apple-converted-space">  </span>const query = window.location.search;</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (query.includes("code=") &amp;&amp; query.includes("state=")) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>await auth0.handleRedirectCallback();</p>
<p class="p1"><span class="Apple-converted-space">    </span>window.history.replaceState({}, document.title, "/");</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>const isAuthenticated = await auth0.isAuthenticated();</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>if (isAuthenticated) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const user = await auth0.getUser();</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById("login").style.display = "none";</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById("logout").style.display = "inline-block";</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById("profile").style.display = "block";</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById("profile").textContent = JSON.stringify(user, null, 2);</p>
<p class="p1"><span class="Apple-converted-space">  </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById("login").style.display = "inline-block";</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById("logout").style.display = "none";</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById("profile").style.display = "none";</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById("login").addEventListener("click", () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>auth0.loginWithRedirect();</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById("logout").addEventListener("click", () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>auth0.logout({ returnTo: window.location.origin });</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p1">};</p>
</body>
</html>
