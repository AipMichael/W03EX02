let id;

const getUserId = (named) =>{
  id = Math.floor(Math.random() * 151);
  if (named === "Luis") {
    return new Error("I'm sick of you!");
  } else {
    return `Your ID is ${id}`;
  }
}

const promiseMeTheId = (name) => {
  const promise = new Promise ( (resolve, reject) =>
  setTimeout( () => {
    const giveUserId = getUserId(name);
    resolve(giveUserId)
  }, 2000));
    return promise;
}

