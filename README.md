@yadex205/scaffold-firebase-ssr
===============================

What's this?
------------

A SSR website scaffold for Firebase, with power of

* Next.js
* Preact
* TypeScript
* SASS (glob import available!)


Setup
-----

```bash
# Install requirements
npm install -g firebase-tools

# Install packages
npm install                   # for npm user
yarn install --ignore-engines # for yarn user (MUST apply --ignore-engines)

# Setting project
firebase use --add
```


Develop
-------

```bash
# Launch live preview environment, then edit files under /src/app
npm run develop # for npm user
yarn develop    # for yarn user

# Emulate Firebase environment
npm run emulate
yarn emulate
```
