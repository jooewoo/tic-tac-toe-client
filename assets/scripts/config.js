'use strict'

let apiUrl
const apiUrls = {
<<<<<<< HEAD
  production: 'https://aqueous-atoll-85096.herokuapp.com',
  development: 'https://tic-tac-toe-wdi.herokuapp.com/'
=======
  development: 'https://tic-tac-toe-wdi.herokuapp.com',
  production: 'https://aqueous-atoll-85096.herokuapp.com'
>>>>>>> feature
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const teamIconsUrls = {
  niners: './../../teams/arizona.png',
  bears: './../../teams/bears.png',
  bengals: './../../teams/bengals.png',
  bill: './../../teams/bills.png',
  brady: './../../teams/brady.png',
  broncos: './../../teams/broncos.png',
  browns: './../../teams/browns.png',
  buccaneers: './../../teams/buccaneers.png',
  cardinals: './../../teams/cardinals.png',
  chargers: './../../teams/chargers.png',
  chiefs: './../../teams/chiefs.png',
  colts: './../../teams/colts.png',
  cowboys: './../../teams/cowboys.png',
  dolphins: './../../teams/dolphins.png',
  eagles: './../../teams/eagles.png',
  falcons: './../../teams/falcons.png',
  giants: './../../teams/giants.png',
  jaguars: './../../teams/jaguars.png',
  jets: './../../teams/jets.png',
  lions: './../../teams/lions.png',
  manning: './../../teams/eli.png',
  packers: './../../teams/packers.png',
  panthers: './../../teams/panthers.png',
  patriots: './../../teams/patriots.png',
  raiders: './../../teams/raiders.png',
  rams: './../../teams/rams.png',
  ravens: './../../teams/ravens.png',
  redskins: './../../teams/redskins.png',
  saints: './../../teams/saints.png',
  seahawks: './../../teams/seahawks.png',
  steelers: './../../teams/steelers.png',
  texans: './../../teams/texans.png',
  titans: './../../teams/titans.png',
  vikings: './../../teams/vikings.png'
}

const teamNames = {
  niners: 'San Fransico 49ers',
  bears: 'Chicago Bears',
  bengals: 'Cincinnati Bengals',
  bill: 'Buffalo Bills',
  broncos: 'Denver Broncos',
  browns: 'Cleveland Browns',
  buccaneers: 'Tampa Bay Buccaneers',
  cardinals: 'Arizona Cardinals',
  chargers: 'Los Angeles Chargers',
  chiefs: 'Kansas City Chiefs',
  colts: 'Indianapolis Colts',
  cowboys: 'Dallas Cowboys',
  dolphins: 'Miami Dolphins',
  eagles: 'Philadelphia Eagles',
  falcons: 'Atlanta Falcons',
  giants: 'New York Giants',
  jaguars: 'Jacksonville Jaguars',
  jets: 'New York Jets',
  lions: 'Detroit Lions',
  packers: 'Green Bay Packers',
  panthers: 'Carolina Panthers',
  patriots: 'New England Patriots',
  raiders: 'Oakland Raiders',
  rams: 'LA Rams',
  ravens: 'Baltimore Ravens',
  redskins: 'Washington Redskins',
  saints: 'New Orleans Saints',
  seahawks: 'Seattle Seahawks',
  steelers: 'Pittsburg Steelers',
  texans: 'Houston Texans',
  titans: 'Tennassee Titans',
  vikings: 'Minnesota Vikings'
}

module.exports = {
  apiUrl,
  teamIconsUrls,
  teamNames
}
