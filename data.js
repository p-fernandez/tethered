
const songs = [
  'Dust',
  'Nostalgia',
  'Motorhinder',
  'Torches',
  'Shred',
  'Snarl',
  'Consume',
  'Saturn',
  'Tarantula',
  'The Whip',
  'Complicit',
  'Cold',
  'The Hook',
  'Time travel',
  'Home',
];

const covers = {
  c0: '[Ink & Dagger] Bloodlust',
  c1: '[Misfits] Astro Zombies',
};

const bands = {
  arches: {
    name: 'Arches',
  },
  awc: {
    name: 'AWC',
  },
  'bad-egg': {
    name: 'Bad Egg',
    country: 'CAN',
  },
  'benny-lager': {
    name: 'Benny Lager & The Tops',
  },
  'bitchfinder-general': {
    name: 'Bitchfinder General',
  },
  brie: {
    name: 'Brie',
  },
  'broken-lungs': {
    name: 'Broken Lungs',
  },
  'chaos-reigns': {
    name: 'Chaos Reigns',
  },
  'chasing-dolls': {
    name: 'Chasing Dolls',
  },
  'dead-heat': {
    name: 'Dead Heat',
    country: 'USA',
  },
  'do-one': {
    name: 'Do One',
  },
  dominate: {
    name: 'Dominate',
  },
  dynamite: {
    name: 'Dynamite',
    url: '',
    country: 'UK',
  },
  efbas: {
    name: 'Every Face Becomes A Skull',
  },
  'equals-what': {
    name: 'Equals What?',
  },
  fanchon: {
    name: 'Fanchon',
  },
  'final-form': {
    name: 'Final Form',
  },
  fosco: {
    name: 'Fosco',
    country: 'E',
  },
  'gay-skeleton-club': {
    name: 'Gay Skeleton Club',
  },
  glu: {
    name: 'GLU',
  },
  'grim-harvest': {
    name: 'Grim Harvest',
  },
  'gross-misconduct': {
    name: 'Gross Misconduct',
    url: '',
  },
  'hearing-tests': {
    name: 'Hearing Tests',
  },
  'higher-walls': {
    name: 'Higher Walls',
    url: '',
  },
  'hot-puds': {
    name: 'Hot Puds',
    url: '',
  },
  'in-case-you-leave': {
    name: 'Incaseyouleave',
    url: '',
  },
  'je-souhaite': {
    name: 'Je Souhaite',
  },
  'kill-mirror-image': {
    name: 'Kill Mirror Image',
  },
  'kill-the-snitch': {
    name: 'Kill The Snitch',
  },
  layback: {
    name: 'Layback',
    url: '',
  },
  louse: {
    name: 'Louse',
  },
  'moist-crevice': {
    name: 'Moist Crevice',
    url: '',
  },
  nix: {
    name: 'Nix',
  },
  'no-relief': {
    name: 'No Relief',
  },
  nylon: {
    name: 'Nylon',
  },
  'other-half': {
    name: 'Other Half',
  },
  overpower: {
    name: 'Overpower',
  },
  prey: {
    name: 'Prey',
    url: '',
    country: 'UK',
  },
  'restraining-order': {
    name: 'Restraining Order',
    url: '',
    country: 'USA',
  },
  'ritual-error': {
    name: 'Ritual Error',
    url: 'whatever',
  },
  'rough-justice': {
    name: 'Rough Justice',
  },
  'safest-spaces': {
    name: 'Safest Spaces',
    url: '',
  },
  'single-mothers': {
    name: 'Single Mothers',
    country: 'CAN',
  },
  smothering: {
    name: 'Smothering',
  },
  'stupid-world': {
    name: 'Stupid World',
  },
  tethered: {
    name: 'Tethered',
    url: 'https://luxorbeam.com',
  },
  'the-talking-kinds': {
    name: 'The Talking Kinds',
    url: '',
  },
  'winifer-odd': {
    name: 'Winifer Odd',
    url: '',
  },
  yarraman: {
    name: 'Yarraman',
  },
};

const venues = {
  blondies: {
    name: 'Blondies',
    borough: 'Clapton',
    city: 'London',
    country: 'UK',
  },
  'birds-nest': {
    name: 'The Birds Nest',
    city: 'London',
    country: 'UK',
  },
  'calamity-tank': {
    name: 'Calamity Tank',
    borough: 'Leytonstone',
    city: 'London',
    country: 'UK',
  },

  'cav-arms-stockwell': {
    name: 'The Cavendish Arms',
    borough: 'Stockwell',
    city: 'London',
    country: 'UK',
  },
  'dulwich-dch': {
    name: 'Dulwich Hamlet Clubhouse',
    city: 'London',
    country: 'UK',
  },
  'face-bar-reading': {
    name: 'The Face Bar',
    city: 'Reading',
    country: 'UK',
  },
  'grand-burstin-hotel': {
    name: 'The Grand Burstin Hotel',
    city: 'Folkenstone',
    country: 'UK',
  },
  helgis: {
    name: `Helgi's`,
    borough: 'Hackney',
    city: 'London',
    country: 'UK',
  },
  'hope-and-anchor': {
    name: 'The Hope & Anchor',
    borough: 'Islington',
    city: 'London',
    country: 'UK',
  },
  'ivy-house-nunhead': {
    name: 'The Ivy House',
    borough: 'Nunhead',
    city: 'London',
    country: 'UK',
  },
  'jt-soar': {
    name: 'JT Soar',
    city: 'Nottingham',
    country: 'UK',
  },
  'new-cross-inn': {
    name: 'New Cross Inn',
    city: 'London',
    country: 'UK',
  },
  'new-river-studios': {
    name: 'New River Studios',
    city: 'London',
    country: 'UK',
  },
  'red-lion-leytonstone': {
    name: 'The Red Lion',
    borough: 'Leytonstone',
    city: 'London',
    country: 'UK',
  },
  'signature-brew-hag': {
    name: 'Signature Brew',
    borough: 'Haggerston',
    city: 'London',
    country: 'UK',
  },
  'the-pump-trowbridge': {
    name: 'The Pump',
    city: 'Trowbridge',
    country: 'UK',
  },
  'two-palms': {
    name: 'Two Palms',
    borough: 'Hackney',
    city: 'London',
    country: 'UK',
  },
};

const renderBandCountry = (country) => (country ? `(${country})` : '');
const renderBand = (band) =>
  `${band?.name} ${renderBandCountry(band?.country)}`;

const renderVenue = (venue) => {
  let info = venue.name;
  const borough = venue?.borough ?? '';
  if (borough) {
    info = `${info} (${borough})`;
  }

  return info;
};

const buildShow = (year, month, day, venueId, bandIds, songIds) => ({
  date: `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`,
  city: venues[venueId]?.city,
  country: venues[venueId]?.country,
  venue: renderVenue(venues[venueId]),
  lineUp: bandIds.map((bandId) => renderBand(bands[bandId])),
  setList: songIds?.map((songId) => {
    if (String(songId)[0] === 'c') {
      return covers[songId];
    } else {
      return songs[songId];
    }
  }),
});

export const pastShows = [
  buildShow(
    2023,
    9,
    1,
    'dulwich-dch',
    ['the-talking-kinds', 'hot-puds', 'tethered'],
    [3, 0, 2, 4, 1]
  ),
  buildShow(
    2023,
    12,
    4,
    'new-cross-inn',
    ['in-case-you-leave', 'safest-spaces', 'tethered', 'winifer-odd'],
    [3, 0, 2, 5, 4, 1]
  ),
  buildShow(
    2024,
    1,
    17,
    'new-cross-inn',
    ['restraining-order', 'layback', 'dynamite', 'prey', 'tethered'],
    [3, 5, 0, 2, 4, 1]
  ),
  buildShow(
    2024,
    3,
    4,
    'new-cross-inn',
    ['prey', 'ritual-error', 'higher-walls', 'tethered'],
    [3, 5, 0, 2, 4, 1]
  ),
  buildShow(
    2024,
    5,
    4,
    'cav-arms-stockwell',
    ['gross-misconduct', 'gay-skeleton-club', 'tethered'],
    [3, 5, 0, 2, 4, 1, 6]
  ),
  buildShow(
    2024,
    6,
    20,
    'red-lion-leytonstone',
    ['bad-egg', 'chaos-reigns', 'do-one', 'tethered'],
    [3, 6, 0, 4, 2, 5]
  ),
  buildShow(
    2024,
    6,
    21,
    'ivy-house-nunhead',
    ['tethered', 'ritual-error', 'arches'],
    [3, 6, 0, 4, 2, 5, 7, 1]
  ),
  buildShow(
    2024,
    7,
    7,
    'new-cross-inn',
    [
      'dead-heat',
      'rough-justice',
      'no-relief',
      'overpower',
      'final-form',
      'dominate',
      'nylon',
      'nix',
      'tethered',
    ],
    [3, 6, 0, 4, 2, 5]
  ),
  buildShow(
    2024,
    8,
    11,
    'hope-and-anchor',
    ['awc', 'in-case-you-leave', 'tethered'],
    [3, 7, 0, 4, 2, 5, 6]
  ),
  buildShow(
    2024,
    8,
    15,
    'two-palms',
    ['ritual-error', 'achers', 'yarraman', 'tethered'],
    [3, 7, 0, 4, 2, 5, 6]
  ),
  buildShow(
    2024,
    9,
    29,
    'new-cross-inn',
    ['fosco', 'fanchon', 'tethered', 'smothering'],
    [3, 0, 7, 1, 4, 2, 5, 6]
  ),
  buildShow(
    2024,
    11,
    7,
    'new-river-studios',
    ['ritual-error', 'tethered', 'efbas', 'brie'],
    [3, 0, 7, 1, 4, 2, 5, 6]
  ),
  buildShow(
    2024,
    11,
    9,
    'jt-soar',
    ['ritual-error', 'tethered', 'efbas'],
    [3, 0, 7, 1, 4, 2, 5, 6]
  ),
  buildShow(
    2025,
    1,
    31,
    'grand-burstin-hotel',
    ['ritual-error', 'tethered', 'je-souhaite', 'grim-harvest'],
    [3, 10, 8, 2, 4, 0, 5, 7, 9, 6]
  ),
  buildShow(
    2025,
    3,
    5,
    'signature-brew-hag',
    ['equals-what', 'glu', 'tethered'],
    [3, 0, 2, 4, 7, 8, 5, 9, 6]
  ),
  buildShow(
    2025,
    3,
    28,
    'dulwich-dch',
    ['bitchfinder-general', 'tethered', 'benny-lager'],
    [5, 3, 7, 8, 2, 10, 4, 9, 6]
  ),
  buildShow(
    2025,
    4,
    24,
    'new-cross-inn',
    ['single-mothers', 'other-half', 'tethered'],
    [5, 3, 11, 7, 10, 9, 6]
  ),
  buildShow(
    2025,
    5,
    15,
    'blondies',
    ['broken-lungs', 'tethered'],
    [5, 3, 11, 7, 10, 12, 9, 6]
  ),
  buildShow(
    2025,
    5,
    16,
    'the-pump-trowbridge',
    ['tethered', 'kill-mirror-image', 'chasing-dolls'],
    [3, 0, 7, 10, 2, 11, 4, 12, 9, 6]
  ),
  buildShow(
    2025,
    8,
    9,
    'helgis',
    ['tethered', 'hearing-tests', 'louse', 'kill-the-snitch'],
    [13, 6, 9, 12]
  ),
  buildShow(
    2025,
    10,
    31,
    'calamity-tank',
    ['tethered', 'louse', 'kill-the-snitch'],
    [3, 7, 13, 'c0', 9, 6, 'c1']
  ),
];

export const futureShows = [buildShow(
    2025,
    11,
    21,
    'birds-nest',
    ['tethered', 'moist-crevice', 'stupid-world'],
    []
  ),];

