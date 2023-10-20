//! Objects

let marvelHero = {
    fullName: 'Peter Parker',
    codeName: 'Spider-Man',
    age: 25,
    active: true
}

/* 
* Object Literal
    When our values are written within our keys.
        - Hard Coded

* Structure

    keyword objectName = {
        key: value,
        Key: value,
        etc...
    }

* Objects are dictionaries
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "season one": [
            {
                episode_title: "Simpsons Roasting on an Open Fire",
                aired: '1989-12-17'
            },
            {
                episode_title: "Bart the Genius",
                aired: '1990-01-01'
            },
        ],
        "season two": [/* ... */],
        "season three": [/* ... */]
    },
    currently_running: true,
}

console.log(theSimpsons.genre); // dot notation
console.log(theSimpsons['genre']); // square bracket notation

console.log(theSimpsons.seasons["season one"][1].episode_title); 

theSimpsons.characters = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'];
console.log(theSimpsons);

/* 
    - Use an array method to add another character to the the character array.
    - console.log just the characters from theSimpson object.
*/

theSimpsons.characters.push('Ned Flanders');
console.log(theSimpsons);

theSimpsons.currently_running = false;
console.log(theSimpsons);

/*
    - Navigate to season one, episode two, and change the date to reflect a date of 1990-01-14. 
*/
theSimpsons.seasons["season one"][1].aired = '1990-01-14';
console.log(theSimpsons.seasons["season one"][1].aired); 

/*

!   Challenge Details:
    - Create an object called "hulu".
    - This object will have 3 main keys:
        - id, movies, and shows.
    - id will simply be an integer.
    - movies will be an array of objects that represent individual movies.
        These objects will have:
                - title will be a string
                - genre will be an array of strings
                - rating will be a string
                - run time will be an integer representing total minutes (whole number)
                - year released will be an integer.
    - shows will be an array of objects that represent individual shows.
        - These shows will have the following keys:
            - title will be a string
            - number of seasons an integer
            - seasons will be an array of objects that will represent individual seasons.
                - A season will have the following keys:
                    - season will be an integer
                    - number of episodes will be an iteger
                    - episodes will be an array of objects that hold individual episodes.
                        - Episodes will only detail the title of the episode and an original aired date.
    
    - There should be at least 2 movie objects.
    - There will only need to be 1 show object.
        - The show should detail 2 seasons with only 2 episodes each season.
    
    * This information can be 100% fabricated
    
    - After the hulu object has been created:
        - write 3 console logs
            - detail the array of movies
            - show the title of the first show
            - show the title of episode 1 of the second season of the first show.
*/

let hulu = {
    id: 2,
    movies: [
        {
            title: 'The Big Short',
            genre: ['Drama', 'Comedy'],
            rating: '7.8/10',
            "run time": 130,
            "release date": 2015
        },
        {
            title: 'Ready Player One',
            genre: ['Sci-fi', 'Adventure'],
            rating: '7.4/10',
            "run time": 140,
            "release date": 2018
        },
    ],
    shows: [
        {
            title: 'Letterkenny',
            "number of seasons": 11,
            seasons: [
                    {
                    season: 1,
                    "number of episodes": 6,
                    episodes: [
                            {
                            episode_title: "Ain't No Reason to Get Excited",
                            aired: '2016-02-07'
                            },
                            {
                            episode_title: "Super Soft Birthday",
                            aired: '2016-02-07'
                            }
                        ]
                    },
                    {
                        season: 2,
                        "number of episodes": 6,
                        episodes: [
                            {
                                episode_title: "A Fuss at the Ag Hall",
                                aired: '2016-12-25'
                            },
                            {
                                episode_title: "The Election",
                                aired: '2016-12-25'
                            }
                        ]
                    }
            ]

        }
    ] ,
}

console.log(hulu.movies);
console.log(hulu.shows)