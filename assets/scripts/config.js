'use strict'

let apiUrl
const apiUrls = {
  development: 'https://tic-tac-toe-wdi.herokuapp.com',
  production: 'https://aqueous-atoll-85096.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const teamIconsUrls = {
  niners: './../../public/teams/arizona.png',
  bears: './../../public/teams/bears.png',
  bengals: './../../public/teams/bengals.png',
  bill: './../../public/teams/bills.png',
  brady: './../../public/teams/brady.png',
  broncos: './../../public/teams/broncos.png',
  browns: './../../public/teams/browns.png',
  buccaneers: './../../public/teams/buccaneers.png',
  cardinals: './../../public/teams/cardinals.png',
  chargers: './../../public/teams/chargers.png',
  chiefs: './../../public/teams/chiefs.png',
  colts: './../../public/teams/colts.png',
  cowboys: './../../public/teams/cowboys.png',
  dolphins: './../../public/teams/dolphins.png',
  eagles: './../../public/teams/eagles.png',
  falcons: './../../public/teams/falcons.png',
  giants: './../../public/teams/giants.png',
  jaguars: './../../public/teams/jaguars.png',
  jets: './../../public/teams/jets.png',
  lions: './../../public/teams/lions.png',
  manning: './../../public/teams/eli.png',
  packers: './../../public/teams/packers.png',
  panthers: './../../public/teams/panthers.png',
  patriots: './../../public/teams/patriots.png',
  raiders: './../../public/teams/raiders.png',
  rams: './../../public/teams/rams.png',
  ravens: './../../public/teams/ravens.png',
  redskins: './../../public/teams/redskins.png',
  saints: './../../public/teams/saints.png',
  seahawks: './../../public/teams/seahawks.png',
  steelers: './../../public/teams/steelers.png',
  texans: './../../public/teams/texans.png',
  titans: './../../public/teams/titans.png',
  vikings: './../../public/teams/vikings.png'
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
