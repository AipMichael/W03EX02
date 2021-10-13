let id;

const promiseMeTheId = (named) => {
  const promise = new Promise ( (resolve, reject) =>
    setTimeout( () => {
      
    id = Math.floor(Math.random() * 151);
    if (named === "Luis") {
      
      reject("I'm sick of you!");
    } else {
      
      resolve(`Your ID is ${id}`);
    }
  
    }, 2000));
    return promise;
}


const callAndGetTheId = promiseMeTheId("Pia");

callAndGetTheId.then((resolvedValue)=>console.log(resolvedValue));