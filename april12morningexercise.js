// const getData = () => {
//     fetch("https://swapi.dev/api/films/1/").then((responseJSON) => {
//         reponseJSON.json().then((data) => {
//             console.log(data.results);
//             data.results.forEach((objectInAarray) => {

//             })
//         })
//     })
// }



let getAndReturnPeople = async () => {
    let response = await fetch('https://swapi.dev/api/people')
    let parsedResponse = await response.json()
    let peopleArray = parsedResponse.results;

    return peopleArray;
}
// "Easy" - Loop through this array of objects and and log the name of each person
// Medium - Loop through this array and make a new array that only contains people that are shorter than 165cm


const doProblem = async () => {
    let peopleArray = await getAndReturnPeople();
    console.log(peopleArray);
    for (i = 0; i < peopleArray.length; i++) {
        let personObject = peopleArray[i];
        console.log(personObject.name);

    }


    let heightArray = [];

    for (let i = 0; i < peopleArray.length; i++) {
        let person = peopleArray[i];
        person.height = Number(person.height);

        if (person.height < 165) {
            heightArray.push(person);
        }
    }
    console.log(heightArray)


    const heights = {
        tallestM: undefined,
        shortestM: undefined,
        tallestF: undefined,
        shortestF: undefined,
    }

    let tallestShortest = () => {
        for (let i = 0; i < peopleArray.length; i++) {
            // check if male or female
            // if male check if tallesM is undefined - if TRUE set heights to this person
            // if FALSE check if taller or shorter than tallesM and shortestM

            // same for females
        }
    }
tallestShortest()

};
doProblem()

// Hard - loop thorugh and find the tallest and shortest males and females.

// Very Hard - loop through and for each person write a string that says "This person is <name> and their ship is <name of ship if any>"
// if no ship, say "and they have no ship."