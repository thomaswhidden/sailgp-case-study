// Wikimedia Commons CC-BY-SA images for each SailGP team.
// All images are freely reusable with attribution under CC BY-SA 4.0 or CC BY 2.0.
// Attribution: Wikimedia Commons contributors (see each file page for photographer credit).

export interface TeamImage {
  url: string;
  alt: string;
  credit: string;
  objectPosition?: string;
}

const WC = 'https://upload.wikimedia.org/wikipedia/commons';

// Wikimedia thumbnails use the raw filename (with %XX encoding preserved) in both
// the path segment and the leaf filename. Portrait images resolve at 1280px, not 1200px.
function thumb(hash: string, file: string, width = 1280): string {
  return `${WC}/thumb/${hash}/${file}/${width}px-${file}`;
}

export const teamImages: Record<string, TeamImage> = {
  australia: {
    url:    thumb('d/dd', 'SAILGP_Australian_Team.jpg'),
    alt:    'Australia SailGP Team F50 foiling catamaran racing',
    credit: 'Wikimedia Commons / CC BY-SA 4.0',
  },
  gbr: {
    url:    thumb('6/6f', 'Emirates_GBR_SailGP_Team_F50_Race_Boat.jpg'),
    alt:    'Emirates Great Britain SailGP F50 racing at the 2025 Sydney SailGP',
    credit: 'Wikimedia Commons / CC0 1.0',
  },
  france: {
    url:    thumb('8/85', 'SAILGP_French_Team.jpg'),
    alt:    'France SailGP Team F50 foiling catamaran',
    credit: 'Wikimedia Commons / CC BY-SA 4.0',
  },
  germany: {
    url:    thumb('9/96', 'Germany_SailGP_Sassnitz_2025_01.JPG'),
    alt:    'Germany SailGP Team racing at Sassnitz 2025',
    credit: 'Wikimedia Commons / CC BY-SA 4.0',
  },
  brazil: {
    url:    thumb('4/46', 'Mubadala_Brazil_SailGP_Team_%282026_Perth_SailGP%29.jpg'),
    alt:    'Mubadala Brazil SailGP Team at the 2026 Perth SailGP',
    credit: 'Wikimedia Commons / CC BY-SA 4.0',
  },
  denmark: {
    url:    thumb('a/a5', 'SailGP_Season_3_Grand_Final_-_San_Francisco_-_May_2023_%283149%29.jpg'),
    alt:    'Denmark SailGP F50 racing in San Francisco',
    credit: 'Gregory Varnum / Wikimedia Commons / CC BY-SA 4.0',
  },
  us: {
    url:    thumb('f/f7', 'SAILGP_American_Team-1.jpg'),
    alt:    'United States SailGP Team F50 foiling catamaran',
    credit: 'Wikimedia Commons / CC BY-SA 4.0',
  },
  italy: {
    url:    thumb('4/4a', 'Red_Bull_Italy_SailGP_Team_%282026_Perth_SailGP%29_-_1.jpg'),
    alt:    'Red Bull Italy SailGP Team at the 2026 Perth SailGP',
    credit: 'Wikimedia Commons / CC BY-SA 4.0',
  },
  sweden: {
    url:    thumb('2/2d', 'Artemis_SailGP_Team_%282026_Perth_SailGP%2C_debut%29_-_1.jpg'),
    alt:    'Artemis Sweden SailGP Team debut at the 2026 Perth SailGP',
    credit: 'Wikimedia Commons / CC BY-SA 4.0',
  },
  spain: {
    url:    thumb('d/d2', 'SailGP_Season_3_Grand_Final_-_San_Francisco_-_May_2023_%283227%29.jpg'),
    alt:    'Spain SailGP F50 racing in San Francisco',
    credit: 'Gregory Varnum / Wikimedia Commons / CC BY-SA 4.0',
  },
  'new-zealand': {
    url:    thumb('b/be', 'SailGP_Christchurch_2024.jpg'),
    alt:    'New Zealand Black Foils SailGP F50 in Christchurch 2024',
    credit: 'Alan Viles / Wikimedia Commons / CC BY 2.0',
  },
  canada: {
    url:    thumb('b/be', 'ROCKWOOL_CANADA_SAIL_GRAND_PRIX_2024.jpg'),
    alt:    'Rockwool Canada SailGP Team at the 2024 Sail Grand Prix',
    credit: 'Wikimedia Commons / CC BY-SA 4.0',
  },
  switzerland: {
    url:    thumb('9/92', 'SailGP_Season_3_Grand_Final_-_San_Francisco_-_May_2023_%283164%29.jpg'),
    alt:    'Switzerland SailGP F50 racing in San Francisco',
    credit: 'Gregory Varnum / Wikimedia Commons / CC BY-SA 4.0',
  },
};

// General SailGP images for hero / section plates (landscape, served at 1920px)
export const sailgpImages = {
  hero: {
    url:    thumb('3/32', 'Great_Britain_SailGP_New_York.jpg', 1920),
    alt:    'SailGP F50 foiling catamaran racing in New York Harbour',
    credit: 'Wikimedia Commons / CC BY-SA 4.0',
  },
  christchurch: {
    url:    thumb('b/be', 'SailGP_Christchurch_2024.jpg', 1920),
    alt:    'SailGP fleet racing at Christchurch 2024',
    credit: 'Alan Viles / Wikimedia Commons / CC BY 2.0',
  },
  perthFleet: {
    url:    thumb('2/20', 'Artemis_-_Black_Foils_-_Rockwool_Denmark_SailGP_Teams_%282026_Perth_SailGP%29.jpg', 1920),
    alt:    'Artemis, Black Foils and Denmark SailGP teams racing at the 2026 Perth SailGP',
    credit: 'Wikimedia Commons / CC BY-SA 4.0',
  },
  teamsBanner: {
    url:    thumb('5/59', 'Final_day_of_racing_at_2025_New_York_SailGP.jpg', 1920),
    alt:    'Fleet racing on the final day of the 2025 New York SailGP',
    credit: 'Clyde Charles Brown / Wikimedia Commons / CC BY-SA 4.0',
  },
  sassnitz: {
    url:    thumb('9/96', 'Germany_SailGP_Sassnitz_2025_01.JPG', 1920),
    alt:    'SailGP fleet racing at Sassnitz, Germany 2025',
    credit: 'Wikimedia Commons / CC BY-SA 4.0',
  },
};
