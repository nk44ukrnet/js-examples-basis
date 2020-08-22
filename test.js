/*
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

let sorted = prices.sort((a,b) => a-b);

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
},
    {
        title: 'Changing My Mind',
        authors: ['Zadie Smith'],
        rating: 3.83,
        genres: ['nonfiction', 'essays']
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genres: ['fiction', 'graphic novel', 'fantasy']
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genres: ['fiction', 'historical fiction']
    },
    {
        title: 'The Name of the Wind',
        authors: ['Patrick Rothfuss'],
        rating: 4.54,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'The Overstory',
        authors: ['Richard Powers'],
        rating: 4.19,
        genres: ['fiction', 'short stories']
    },
    {
        title: 'The Way of Kings',
        authors: ['Brandon Sanderson'],
        rating: 4.65,
        genres: ['fantasy', 'epic']
    },
    {
        title: 'Truly Horrible book',
        authors: ['Xavier Time'],
        rating: 2.12,
        genres: ['fiction', 'garbage']
    },
    {
        title: 'Lord of the flies',
        authors: ['William Golding'],
        rating: 3.67,
        genres: ['fiction']
    }
];

books.sort((a,b) => b.rating-a.rating);

//console.log(books);
const nums = [3, 4, 5, 6, 7, 1,2,9,2,1];
const nRes = nums.reduce((total, currentVal) =>{
    return total * currentVal;
});
const maxNum = nums.reduce((max,current) => {
  if(current > max) return current;
  return max;
});
const maxNum1 = nums.reduce((max, current) => (
    Math.max(max, current)
));
// console.log([10,20,30,40,50].reduce((a,b) => (a+b), 100));
// console.log(maxNum1);
const votes = ['y','n','n','n','y','y','n','y','n'];
const votesRes = votes.reduce((tally, val) => {
if(tally[val]) {
tally[val]++;
} else {
    tally[val] = 1;
}
return tally;
}, {});

// console.log(votesRes);
const booksRes1 = books.reduce((groupedBooks, book) =>{
    const key = Math.floor(book.rating);
    if(!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book);
    return groupedBooks;
}, {});
console.log(booksRes1);

*/

////SPREAD*****************************

