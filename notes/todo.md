# TODO

- [portfolio]:
  - conditionally show graph

- verify "test-results-history-verbose"

- add/fix test: Deny access to account info without authentication.
  - Test fix: see notes/test-draft.js
  - CI/CD:
    - work on new branch 'dev' (and push it to github).
    - add new workflow "daily-tests-dev", which checks out 'dev' and pushes the results to 'results-dev'. (GH action).


- remove ANSI colors from playwright output:
    name: Run Playwright (JSON)
    env:
      NO_COLOR: "1"
      FORCE_COLOR: "0"
    run: |
      npx playwright test tests --workers=1 --reporter=json > results.json || true




# EV try to implement:
- it might be better to use $DATE in register-new-user, so I could run all tests without 1 test always failing when running the job multiple times in a row.
  - also, I wouldn't RELY on the account being wiped every day (even though currently, that's the case)
  - would require login fixture to read from file?
  ... hm... but then, hm... it's simply not so pretty either.



- later, when stable:
  - remove this from daily job:
    mkdir -p test-results-history-verbose
    cp -r test-results test-results-history-verbose/${DATE}



# EV future 'features':
- dev branches (both for code and test results)
- email notifications?



# --------------------------------------------------------------------------

# GOOD IDEAS:
- fail some test if there are javascript exceptions in the console? Maybe just during a PART of a test? Watch: https://youtu.be/jKhTcQAtIKY?si=vJXvtlA9HOEtwFry 



# EV:
- testing on different devices / test.use?
- API testing?


# TTRT:
- om jag får problem senare, kan "wait for browser idle" lösa det? som verkade krävas i notes appen.


# EVEV:
- browse doc (parabank/services) and brainstorm ideas...?



# -------------- NOTES ----------------
- SLEEP: await new Promise(resolve => setTimeout(resolve, 10000));
- EVEV tests:
  - user forgot login info
  - pay bill
  - filter transactions


