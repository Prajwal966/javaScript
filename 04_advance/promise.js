const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task 2 consumed");
});

// one method of handling promises
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Prajwal", email: "hello@gmail.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseThree
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or reject");
  });

// second method of handling promises
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went Wrong");
    }
  }, 1000);
});

//this can't handle error easily use try-catch block
async function consumePromiseFour() {
  try {
    const response = await promiseFour;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFour();
