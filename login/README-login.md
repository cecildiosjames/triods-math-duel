# Math Duel with login (copy)

Address: https://cecildiosjames.github.io/triods-math-duel/login/

- **Continue as guest** works right away.
- **Sign in with Google** needs a Google "Client ID":
  1. Go to https://console.cloud.google.com/ → create a project (free).
  2. APIs & Services → OAuth consent screen → External → app name "Triods Math Duel", your email → Save.
  3. Credentials → Create credentials → OAuth client ID → type **Web application**.
  4. Authorised JavaScript origins: `https://cecildiosjames.github.io`
  5. Copy the Client ID (ends in `.apps.googleusercontent.com`) and put it in `index.html` at `const GOOGLE_CLIENT_ID='';`, then commit.
  6. Under the consent screen, publish the app ("In production") so everyone, not only test users, can sign in.
