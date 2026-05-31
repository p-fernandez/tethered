import { bands } from './bands.js';
import { covers, songs } from './songs.js';
import { venues } from './venues.js';

const renderBandCountry = (country) =>
  country && country !== 'UK' ? ` (${country})` : '';
const renderBand = (band) => `${band?.name}${renderBandCountry(band?.country)}`;

const renderVenue = (venue) => {
  let info = venue.name;
  const borough = venue?.borough ?? '';
  if (borough) {
    info = `${info} (${borough})`;
  }

  return info;
};

const buildShow = (year, month, day, venueId, bandIds, songIds, extra) => ({
  date: `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`,
  city: venues[venueId]?.city,
  country: venues[venueId]?.country,
  venue: renderVenue(venues[venueId]),
  extra,
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
    ['tethered', 'ritual-error', 'achers'],
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
  buildShow(
    2025,
    11,
    21,
    'birds-nest',
    ['tethered', 'moist-crevice', 'stupid-world'],
    [12, 6, 9, 7, 13, 5, 10, 14, 11]
  ),
  buildShow(
    2025,
    11,
    24,
    'the-star-inn-ashford',
    ['tethered', 'ritual-error', 'sarah-tonin', 'coder', 'try-hard'],
    [14, 11, 2, 10, 3, 6, 9, 13]
  ),
  buildShow(
    2025,
    11,
    26,
    'poortgebouw',
    ['tethered', 'meditation', 'dodentocht'],
    [14, 11, 2, 10, 3, 6, 9, 13]
  ),
  buildShow(
    2025,
    11,
    28,
    'fla-fla',
    ['tethered', 'tu-la-llevas', 'gvlls'],
    [14, 11, 2, 10, 3, 6, 9, 13]
  ),
  buildShow(
    2025,
    11,
    29,
    'privat',
    ['placid', 'wonderful-world', 'tethered', 'i-recover'],
    [14, 11, 2, 10, 3, 6, 9, 13]
  ),
  buildShow(
    2025,
    11,
    30,
    'high-voltage-bar',
    ['tethered', 'cephalee'],
    [14, 11, 2, 10, 3, 6, 9, 13, 12]
  ),
  buildShow(
    2025,
    12,
    18,
    'new-cross-inn',
    ['neversaid', 'tethered', 'hearing-tests', 'kill-the-snitch'],
    [14, 11, 2, 10, 3, 6, 9, 13]
  ),
  buildShow(
    2026,
    1,
    30,
    'hoffs-margate',
    ['tethered', 'rats-nest', 'lets-av-it'],
    [9, 2, 10, 6, 14, 13, 12]
  ),
  buildShow(
    2026,
    3,
    6,
    'walthamstow-trades-hall',
    ['tethered', 'higher-walls', 'millpool'],
    [9, 2, 10, 8, 6, 14, 11, 12, 13]
  ),
  buildShow(
    2026,
    3,
    27,
    'english-bridge-studios',
    ['grim-harvest', 'tethered', 'half-brick'],
    [7, 2, 12, 10, 9, 11, 14, 13, 6]
  ),
  buildShow(
    2026,
    3,
    28,
    'muthers-studio',
    ['tethered', 'priest-crippler', 'uptight'],
    [7, 2, 12, 10, 9, 14, 13, 6]
  ),
  buildShow(
    2026,
    3,
    29,
    'the-holloway',
    ['nø-man', 'birdwitch', 'grim-harvest', 'tethered'],
    [2, 12, 10, 9, 14, 13, 6]
  ),
  buildShow(
    2026,
    3,
    30,
    'new-cross-inn',
    ['nø-man', 'supernova', 'tethered', 'scadenza', 'sevy-verna'],
    [2, 12, 10, 9, 14, 13, 6]
  ),
  buildShow(
    2026,
    4,
    9,
    'the-victoria',
    ['the-yatch-club', 'tethered', 'fuzzy-heart', 'fly-fly-triceratops'],
    [7, 2, 12, 10, 9, 14, 13]
  ),
  buildShow(
    2026,
    5,
    30,
    'planet-sounds',
    ['tethered', 'skulker', 'dark-forest-theory'],
    [7, 2, 12, 10, 9, 11, 14, 13, 6]
  ),
];

export const futureShows = [
  buildShow(
    2026,
    6,
    21,
    'the-old-spotted-dog-ground',
    ['tethered'],
    [],
    'Clapton Punks 10 year Anniversary Gig'
  ),
  buildShow(2026, 6, 25, 'endeavour', [
    'sverker-clern',
    'tethered',
    'bale',
    'forgiving',
  ]),
  buildShow(2026, 7, 19, 'calamity-tank', ['brach', 'efbas', 'tethered']),
  buildShow(2026, 8, 8, 'blondies-brewery', [
    'pest-control',
    'jawless',
    'stiff-meds',
    'getting-off',
    'tethered',
  ]),
  buildShow(2026, 9, 4, 'porto', ['tethered']),
  buildShow(2026, 9, 5, 'el-perro-perdedor', [
    'notes-to-myself',
    'tethered',
    'benevola',
    'masa',
    'tentacula',
  ]),
  buildShow(2026, 9, 6, 'csa-las-vegas', ['tethered', 'pasado', 'durruti']),
  buildShow(2026, 9, 7, 'almeria', ['tethered']),
  buildShow(2026, 9, 8, 'la-luna', ['tethered', 'fosco']),
  buildShow(2026, 9, 9, 'madrid', ['tethered']),
  buildShow(2026, 9, 10, 'asturias', ['tethered']),
  buildShow(2026, 9, 11, 'sala-fantastica', [
    'tethered',
    'kuma',
    'noite-atari',
  ]),
  buildShow(2027, 2, 27, 'walthamstow-trades-hall', ['tethered']),
];

console.log({ pastShows });
