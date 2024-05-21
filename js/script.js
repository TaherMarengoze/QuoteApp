var quoteViewer = document.getElementById('quote');
var quoteOwnerViewer = document.getElementById('quoteOwner');

var quotesPool = [
    {
        quote: "Be yourself; everyone else is already taken.",
        owner: " Oscar Wilde"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        owner: "Marilyn Monroe"
    },
    {
        quote: "So many books, so little time.",
        owner: "Frank Zappa"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        owner: " Albert Einstein"
    },
    {
        quote: "A room without books is like a body without a soul.",
        owner: " Marcus Tullius Cicero"
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        owner: "Bernard M. Baruch"
    },
    {
        quote: "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
        owner: " William W. Purkey"
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        owner: "Dr. Seuss"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        owner: " Mae West"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        owner: " Mahatma Gandhi"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        owner: " Robert Frost"
    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        owner: " J.K. Rowling, Harry Potter and the Goblet of Fire "
    },
    {
        quote: "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
        owner: " Albert Camus"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        owner: " Mark Twain"
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        owner: " Maya Angelou"
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        owner: " Elbert Hubbard"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        owner: " Oscar Wilde"
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        owner: " Oscar Wilde"
    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        owner: "Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches "
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        owner: " Mahatma Gandhi"
    },
    {
        quote: "We accept the love we think we deserve.",
        owner: "Stephen Chbosky, The Perks of Being a Wallflower"
    },
    {
        quote: "Without music, life would be a mistake.",
        owner: "Friedrich Nietzsche, Twilight of the Idols"
    },
    {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        owner: " Oscar Wilde, The Happy Prince and Other Stories"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        owner: "Ralph Waldo Emerson"
    },
    {
        quote: `Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.`,
        owner: "Steve Jobs"
    },
    {
        quote: "Insanity is doing the same thing, over and over again, but expecting different results.",
        owner: "Narcotics Anonymous"
    },
    {
        quote: `I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.`,
        owner: " Marilyn Monroe"
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        owner: " Andre Gide, Autumn Leaves"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        owner: " H. Jackson Brown Jr., P.S. I Love You"
    },
    {
        quote: "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
        owner: "Bruce Lee"
    },
    {
        quote: "Try to learn something about everything and everything about something",
        owner: "Thomas Huxley"
    },
    {
        quote: "A person often meets his destiny on the road he took to avoid it.",
        owner: "Jean de La Fontaine"
    },
    {
        quote: "If you only do what you can do, you will never be more than who you are.",
        owner: "Master Shifu, Kung Fu Panda"
    },
    {
        quote: "It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.",
        owner: "Sir Arthur Conan Doyle, Sherlock Holmes"
    },
];

var firstIndex = 0;
var lastIndex = quotesPool.length - 1;
var prevNumber = getRandomNumber(firstIndex, lastIndex);


function getRandomNumber(lowerBound, upperBound) {
    return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
}

function getNewRandomNumber(min, max, prevNumber) {
    var newRandomNumber;
    do {
        newRandomNumber = getRandomNumber(min, max);
    } while (newRandomNumber === prevNumber)

    return newRandomNumber;
}

function generateQuote() {
    var index = getNewRandomNumber(firstIndex, lastIndex, prevNumber);
    prevNumber = index;
    var selectedQuote = quotesPool[index];

    quoteViewer.innerText = selectedQuote.quote;
    quoteOwnerViewer.innerText = selectedQuote.owner;
}

function testRandom() {
    console.log(getRandomNumber(firstIndex, lastIndex));
}