const usernames = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
];

const thoughts = [
    'thought1',
    'thought2',
    'thought3',
    'thought4',
    'thought5',
    'thought6',
    'thought7',
    'thought8',
    'thought9',
    'thought10',
    'thought11',
    'thought12',
    'thought13',
    'thought14',
    'thought15',
    'thought16',
    'thought17',
    'thought18',
];

const reactions = [
    'reaction1',
    'reaction2',
    'reaction3',
    'reaction4',
    'reaction5',
    'reaction6',
    'reaction7',
    'reaction8',
    'reaction9',
    'reaction10',
    'reaction11',
    'reaction12',
    'reaction13',
    'reaction14',
    'reaction15',
    'reaction16',
    'reaction17',
    'reaction18',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// function to get random username
const getRandomUsername = () => {
    return `${getRandomArrItem(names)}`
}

// function to get random thought
const getRandomThought = () => {
    return `${getRandomArrItem(thoughts)}`
}

// function to get random thought
const getRandomReaction = () => {
    return `${getRandomArrItem(reactions)}`
}

module.exports = {getRandomUsername, getRandomThought, getRandomReaction};
