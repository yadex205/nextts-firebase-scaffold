nextts-firebase-scaffold
========================

What's this?
============

A scaffold of Next.js website for Firebase Function, with power of

* TypeScript
* Preact (https://preactjs.com)


Setup
-----

```bash
# Install requirements
npm install -g firebase-tools

# Install packages
npm install                   # for npm user
yarn install --ignore-engines # for Yarn user (MUST apply --ignore-engines)

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
