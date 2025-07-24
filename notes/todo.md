# TESTS TODO:
- Transfer funds -> verify the money was indeed transferred from account A to account B.

skip:
- forgot login info


# QUESTIONS:




# LATER CONSIDER:
- use a page object model for better maintainability?
- have others written code for Parabank? Look at their code.
- API testing? And what else can I do with /services? (ask gpt?)
- fail some test(s) if there are javascript exceptions in the console? Can I do this for just one single test? Watch: https://youtu.be/jKhTcQAtIKY?si=vJXvtlA9HOEtwFry 
    - MAYBE just during PART of a test?




# MISC CODE NOTES
// Sleep
await new Promise(resolve => setTimeout(resolve, 10000));

// Log variable in browser console
await page.evaluate((uname) => {
  console.log('Hello from browser, new user:', uname);
}, username);
