

var gMovies = [
    { imdb: 'tt0373889', name: 'Harry Potter', rate: 17 },
    { imdb: 'tt0000004', name: 'Un bon bock', rate: 20 },
    { imdb: 'tt0000003', name: 'Pauvre Pierrot', rate: 15 },
]

function getMovieLink(imdb) {
    return `https://www.imdb.com/title/${imdb}/`


}

function deleteMovie(imdb) {
    gMovies = gMovies.filter(movie => movie.imdb !== imdb)
}

function sortByName() {
    gMovies.sort((a, b) => a.name.localeCompare(b.name))
}   

function sortByRate() {
    gMovies.sort((a, b) => b.rate - a.rate)
}   

function addMovie(imdb, name, rate) {
    gMovies.push({ imdb, name, rate })
}       

module.exports = {
    getMovieLink,
    deleteMovie,
    sortByName,
    sortByRate,
    addMovie
}   

// Write a function flatten(values) that flattens the array, meaning that if an item in this array is an array, it will push all its values to the result array.
// a.
// i.e. Input: [‘Hello’, [9, 6] ,18, [4, 7, 8]]
// b.
// output: [‘Hello’, 9, 6 ,18, 4, 7, 8]
// c.
// support only one level of nested values
// d.
// Bonus: use recursion to support any level

function flatten(values) {
    const result = []
    for (const item of values) {
        if (Array.isArray(item)) {
            result.push(...item)
        } else {
            result.push(item)
        }
    }
    return result
}

function flattenRecursive(values) { 
    const result = []
    for (const item of values) {
        if (Array.isArray(item)) {
            result.push(...flattenRecursive(item))
        } else {
            result.push(item)
        }
    }   
    return result
}


// Example usage:
const input = ['Hello', [9, 6], 18, [4, 7, 8]]
console.log(flatten(input)) // Output: ['Hello', 9, 6, 18, 4, 7, 8]
const nestedInput = ['Hello', [9, 6, [1, 2]], 18, [4, 7, 8]]
console.log(flattenRecursive(nestedInput)) // Output: ['Hello', 9, 6, 1, 2, 18, 4, 7, 8]

