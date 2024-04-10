/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


// const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
// const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
// const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";
// alert("RANDOM")

const UK_FLAG_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png";
const AUS_FLAG_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/510px-Flag_of_Australia_%28converted%29.svg.png";
const JAP_FLAG_URL = "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg";
const FIN_FLAG_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1200px-Flag_of_Finland.svg.png";
const NETH_FLAG_URL = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Flag_of_the_Netherlands.png";
const MEX_FLAG_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Mexico.png/1200px-Flag_of_Mexico.png";
const MON_FLAG_URL = "https://cdn.britannica.com/50/2750-050-688E6E49/Flag-Monaco.jpg";
const FRA_FLAG_URL = "https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg";
const USA_FLAG_URL = "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
const GER_FLAG_URL = "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg";
const CHI_FLAG_URL = "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_China.png";
const DEN_FLAG_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png";
const SPA_FLAG_URL = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png";
const THA_FLAG_URL = "https://cdn.britannica.com/38/4038-050-BDDBA6AB/Flag-Thailand.jpg";
const CAN_FLAG_URL = "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg";
// This is an array of strings (TV show titles)
// let titles = [
//     "Fresh Prince of Bel Air",
//     "Curb Your Enthusiasm",
//     "East Los High",
//     "Placehodler"
// ];
const Drivers = [
    {
        name: "Max Verstappen",
        team: "Red Bull",
        dob: "30/09/1997",
        country: "Netherlands",
        raceNumber: "1",
        points: "2663.5",
        wins: "57",
        podiums: "101",
        races: "189",
        championships: "3",
        flagImg: NETH_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/verstappen.jpg.img.1920.medium.jpg/1708344264039.jpg",
    },
    {
        name: "Sergio Perez",
        team: "Red Bull",
        dob: "26/01/1990",
        country: "Mexico",
        raceNumber: "11",
        points: "1550",
        podiums: "38",
        wins: "6",
        races: "262",
        championships: "0",
        flagImg: MEX_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/perez.jpg.img.1920.medium.jpg/1708344497222.jpg",
    },
    {
        name: "Lewis Hamilton",
        team: "Mercedes",
        dob: "07/01/1985",
        country: "United Kingdom",
        raceNumber: "44",
        points: "4649.5",
        wins: "103",
        podiums: "197",
        races: "336",
        championships: "7",
        flagImg: UK_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/hamilton.jpg.img.1920.medium.jpg/1708362076344.jpg",

    },
    {
        name: "George Russell",
        team: "Mercedes",
        dob: "15/02/1998",
        country: "United Kingdom",
        raceNumber: "63",
        points: "493",
        podiums: "11",
        wins: "1",
        races: "108",
        championships: "0",
        flagImg: UK_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/russell.jpg.img.1920.medium.jpg/1708362100444.jpg",

    },
    {
        name: "Charles Leclerc",
        team: "Ferrari",
        dob: "16/10/1997",
        country: "Monaco",
        raceNumber: "16",
        points: "1133",
        podiums: "32",
        wins: "5",
        races: "129",
        championships: "0",
        flagImg: MON_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/leclerc.jpg.img.1920.medium.jpg/1708344558637.jpg",
    },
    {
        name: "Carlos Sainz",
        team: "Ferrari",
        dob: "01/09/1994",
        country: "Spain",
        raceNumber: "55",
        points: "1037.5",
        podiums: "21",
        wins: "3",
        races: "188",
        championships: "0",
        flagImg: SPA_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/sainz.jpg.img.1920.medium.jpg/1708344524647.jpg",
    },
    
    {
        name: "Lando Norris",
        team: "Mclaren",
        dob: "13/11/1999",
        country: "United Kingdom",
        raceNumber: "4",
        points: "670",
        wins: "0",
        podiums: "14",
        races: "108",
        championships: "0",
        flagImg: UK_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/norris.jpg.img.1920.medium.jpg/1708344586968.jpg",
    },
    {
        name: "Oscar Piastri",
        team: "Mclaren",
        dob: "06/04/2001",
        country: "Australia",
        raceNumber: "87",
        points: "129",
        wins: "0",
        podiums: "2",
        races: "26",
        championships: "0",
        flagImg: AUS_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/piastri.jpg.img.1920.medium.jpg/1708344466544.jpg",

    },
    {
        name: "Fernando Alonso",
        team: "Aston Martin",
        dob: "29/07/1981",
        country: "Spain",
        raceNumber: "14",
        points: "2291",
        podiums: "106",
        wins: "32",
        races: "384",
        championships: "2",
        flagImg: SPA_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/alonso.jpg.img.1920.medium.jpg/1708344615576.jpg",
    },
    {
        name: "Lance Stroll",
        team: "Aston Martin",
        dob: "29/10/1998",
        country: "Canada",
        raceNumber: "18",
        points: "277",
        podiums: "3",
        wins: "0",
        races: "147",
        championships: "0",
        flagImg: CAN_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/stroll.jpg.img.1920.medium.jpg/1708344367003.jpg",
    },
    {
        name: "Yuki Tsunoda",
        team: "RB",
        dob: "11/05/2000",
        country: "Japan",
        raceNumber: "22",
        points: "68",
        podiums: "0",
        wins: "0",
        races: "70",
        championships: "0",
        flagImg: JAP_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/tsunoda.jpg.img.1920.medium.jpg/1708344128383.jpg",
    },
    {
        name: "Daniel Ricciardo",
        team: "RB",
        dob: "01/07/1989",
        country: "Australia",
        raceNumber: "3",
        points: "1317",
        podiums: "32",
        wins: "8",
        races: "243",
        championships: "0",
        flagImg: AUS_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/ricciardo.jpg.img.1920.medium.jpg/1708344126609.jpg",
    },
    {
        name: "Nico Hulkenberg",
        team: "Haas",
        dob: "19/08/1987",
        country: "Germany",
        raceNumber: "27",
        points: "533",
        podiums: "0",
        wins: "0",
        races: "210",
        championships: "0",
        flagImg: GER_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/hulkenberg.jpg.img.1920.medium.jpg/1708344329424.jpg",
    },
    {
        name: "Kevin Magnussen",
        team: "Haas",
        dob: "05/01/1992",
        country: "Dennmark",
        raceNumber: "20",
        points: "187",
        podiums: "1",
        wins: "0",
        races: "168",
        championships: "0",
        flagImg: DEN_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/magnussen.jpg.img.1920.medium.jpg/1708344301907.jpg",
    },
    {
        name: "Alexander Albon",
        team: "Williams",
        dob: "23/03/1996",
        country: "Thailand",
        raceNumber: "23",
        points: "228",
        podiums: "2",
        wins: "0",
        races: "85",
        championships: "0",
        flagImg: THA_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/albon.jpg.img.1920.medium.jpg/1708362042590.jpg",
    },
    {
        name: "Logan Sargent",
        team: "Williams",
        dob: "31/12/2000",
        country: "United States of America",
        raceNumber: "2",
        points: "1",
        podiums: "0",
        wins: "0",
        races: "25",
        championships: "0",
        flagImg: USA_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/sargeant.jpg.img.1920.medium.jpg/1708344644988.jpg",
    },
    {
        name: "Zhou Guanyu",
        team: "Kick Sauber",
        dob: "30/05/1999",
        country: "China",
        raceNumber: "24",
        points: "12",
        podiums: "0",
        wins: "0",
        races: "48",
        championships: "0",
        flagImg: CHI_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/zhou.jpg.img.1920.medium.jpg/1708448631655.jpg",
    },
    {
        name: "Valterri Bottas",
        team: "Kick Sauber",
        dob: "28/08/1989",
        country: "Finland",
        raceNumber: "77",
        points: "1797",
        podiums: "67",
        wins: "10",
        races: "226",
        championships: "0",
        flagImg: FIN_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/bottas.jpg.img.1920.medium.jpg/1708448661324.jpg",
    },
    {
        name: "Esteban Ocon",
        team: "Alpine",
        dob: "17/09/1996",
        country: "France",
        raceNumber: "31",
        points: "422",
        podiums: "3",
        wins: "1",
        races: "137",
        championships: "0",
        flagImg: FRA_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/ocon.jpg.img.1920.medium.jpg/1708344427828.jpg",
    },
    {
        name: "Pierre Gasley",
        team: "Alpine",
        dob: "07/02/1996",
        country: "France",
        raceNumber: "10",
        points: "394",
        podiums: "4",
        wins: "1",
        races: "134",
        championships: "0",
        flagImg: FRA_FLAG_URL,
        image: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/gasly.jpg.img.1920.medium.jpg/1708344393640.jpg",
    },
    
]
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.

const drivers = document.querySelector(".Drivers")

function editDriverContent(driver) {
    const div = document.createElement("div")
    div.classList.add("driverInfo")

    const image = document.createElement("img")
    image.src = driver.image
    div.appendChild(image)

    const nameFlagDiv = document.createElement("div")
    nameFlagDiv.classList.add("nameFlag")
    
    const name = document.createElement("h1")
    name.innerText = driver.name
    nameFlagDiv.appendChild(name)

    const raceNumber = document.createElement("h1")
    raceNumber.innerText = "#" + driver.raceNumber
    nameFlagDiv.appendChild(raceNumber)


    const nationFlag = document.createElement("img")
    nationFlag.src = driver.flagImg
    nationFlag.height = "75"
    nationFlag.width = "75"
    nameFlagDiv.appendChild(nationFlag)


    div.appendChild(nameFlagDiv)

    const team = document.createElement("h2")
    team.innerText = "Team: " + driver.team
    div.appendChild(team)

    
    const birthDate = document.createElement("h3")
    birthDate.innerText = "Date of Birth: " + driver.dob
    div.appendChild(birthDate)

    const country = document.createElement("h3")
    country.innerText = "Country: " + driver.country
    div.appendChild(country)

    
    const careerPoints = document.createElement("h3")
    careerPoints.innerText = "Career Points: " + driver.points
    div.appendChild(careerPoints)

    const podiums = document.createElement("h3")
    podiums.innerText = "Podiums: " + driver.podiums
    div.appendChild(podiums)

    const wins = document.createElement("h3")
    wins.innerText = "Race Wins: " + driver.wins
    div.appendChild(wins)

    const races = document.createElement("h3")
    races.innerText = "Total Races: " + driver.races
    div.appendChild(races)

    const championships = document.createElement("h3")
    championships.innerText = "Driver Championships: " +  driver.championships
    div.appendChild(championships)

    

    drivers.appendChild(div)
}

Drivers.forEach(function (driver){
    editDriverContent(driver)
})

function sortDrivers() {
    
}

// This function adds cards the page to display the data in the array
// function showCards() {
//     const cardContainer = document.getElementById("card-container");
//     cardContainer.innerHTML = "";
//     const templateCard = document.querySelector(".card");
    
//     for (let i = 0; i < titles.length; i++) {
//         let title = titles[i];

//         // This part of the code doesn't scale very well! After you add your
//         // own data, you'll need to do something totally different here.
//         let imageURL = "";
//         if (i == 0) {
//             imageURL = FRESH_PRINCE_URL;
//         } else if (i == 1) {
//             imageURL = CURB_POSTER_URL;
//         } else if (i == 2) {
//             imageURL = EAST_LOS_HIGH_POSTER_URL;
//         }

//         const nextCard = templateCard.cloneNode(true); // Copy the template card
//         editCardContent(nextCard, title, imageURL); // Edit title and image
//         cardContainer.appendChild(nextCard); // Add new card to the container
//     }
// }

// function editCardContent(card, newTitle, newImageURL) {
//     card.style.display = "block";

//     const cardHeader = card.querySelector("h2");
//     cardHeader.textContent = newTitle;

//     const cardImage = card.querySelector("img");
//     cardImage.src = newImageURL;
//     cardImage.alt = newTitle + " Poster";

//     // You can use console.log to help you debug!
//     // View the output by right clicking on your website,
//     // select "Inspect", then click on the "Console" tab
//     console.log("new card:", newTitle, "- html: ", card);
// }

// // This calls the addCards() function when the page is first loaded
// document.addEventListener("DOMContentLoaded", showCards);

// function quoteAlert() {
//     console.log("Button Clicked!")
//     alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
// }

// function removeLastCard() {
//     titles.pop(); // Remove last item in titles array
//     showCards(); // Call showCards again to refresh
// }
