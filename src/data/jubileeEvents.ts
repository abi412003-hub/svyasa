/**
 * Golden Jubilee of Prashanti Kutiram (November 2026) — event photo sets.
 * Photos live in src/assets/events/<slug>/ and are bundled with the site.
 */

const allPhotos = import.meta.glob<string>("/src/assets/events/*/*.jpg", {
  eager: true,
  import: "default",
});

export type JubileePhoto = { src: string; caption: string };

export type JubileeEvent = {
  slug: string;
  title: string;
  /** ISO date used for sorting. */
  date: string;
  /** Human-readable date shown on cards. */
  dateLabel: string;
  campus: "Prashanti";
  category: string;
  summary: string;
  photos: JubileePhoto[];
};

const photosFor = (slug: string, captions: Record<string, string>): JubileePhoto[] =>
  Object.keys(allPhotos)
    .filter((path) => path.includes(`/events/${slug}/`))
    .sort()
    .map((path) => {
      const file = path.split("/").pop()!.replace(/\.jpg$/, "");
      return { src: allPhotos[path], caption: captions[file] ?? "" };
    });

export const jubileeEvents: JubileeEvent[] = [
  {
    slug: "sunil-kumar-sharma-visit",
    title: "Shri Sunil Kumar Sharma, Leader of the Opposition, J&K Legislative Assembly, visits Prashanti Kutiram",
    date: "2026-11-16",
    dateLabel: "16 November 2026",
    campus: "Prashanti",
    category: "Golden Jubilee",
    summary:
      "A traditional welcome, Vande Mataram, lamp lighting and felicitation, followed by an address to students, a visit to the research labs and a cultural performance by students.",
    photos: photosFor("sunil-kumar-sharma-visit", {
      "01-traditional-welcome": "Traditional welcome at the campus entrance",
      "02-campus-walk": "Walking through the Golden Jubilee gateway at Prashanti Kutiram",
      "03-vande-mataram": "Dignitaries on stage for Vande Mataram",
      "04-national-song": "Vande Mataram at the inaugural session",
      "05-lamp-lighting": "Lighting of the traditional lamp",
      "06-felicitation": "Felicitation of Shri Sunil Kumar Sharma",
      "07-memento-presentation": "Presentation of a memento by S-VYASA leadership",
      "08-shawl-honour": "Honouring the chief guest with a shawl",
      "09-address": "Shri Sunil Kumar Sharma addresses the gathering",
      "10-keynote": "Keynote address at the Golden Jubilee celebrations",
      "11-dignitaries-group": "Dignitaries with the S-VYASA leadership",
      "12-research-lab-visit": "Visit to the S-VYASA research laboratories",
      "13-lab-demonstration": "Demonstration of research instruments in the lab",
      "14-physiology-lab": "Assessment demonstration in the physiology lab",
      "15-shiva-dance-opening": "Students open the cultural performance",
      "16-shiva-tandava": "Shiva Tandava dance performance",
      "17-dance-ensemble": "Student dance ensemble",
      "18-dance-finale": "Dance finale against a Himalayan backdrop",
      "19-nandi-tableau": "Nandi and Om tableau by the students",
      "20-group-photo": "Group photograph with students and faculty",
    }),
  },
  {
    slug: "mohan-yadav-visit",
    title: "Hon'ble Chief Minister of Madhya Pradesh Dr. Mohan Yadav Ji visits Prashanti Kutiram",
    date: "2026-11-14",
    dateLabel: "14 November 2026",
    campus: "Prashanti",
    category: "Golden Jubilee",
    summary:
      "The Chief Minister of Madhya Pradesh joined the Golden Jubilee celebrations with a campus welcome, lamp lighting and felicitation.",
    photos: photosFor("mohan-yadav-visit", {
      "01-campus-welcome": "Warm welcome on arrival at Prashanti Kutiram",
      "02-lamp-lighting": "Lighting of the traditional lamp",
      "03-felicitation": "Felicitation of Dr. Mohan Yadav Ji",
      "04-citation-presentation": "Presentation of a citation",
      "05-on-the-dais": "Dignitaries on the dais",
      "06-address": "Address at the Golden Jubilee celebrations",
    }),
  },
  {
    slug: "golden-jubilee-cultural-evening",
    title: "Golden Jubilee Cultural Evening — 50 Years of Dharma",
    date: "2026-11-13",
    dateLabel: "November 2026",
    campus: "Prashanti",
    category: "Cultural",
    summary:
      "Students celebrated 50 years of Prashanti Kutiram with classical dance, theatre and tableaux on the theme “50 Years of Dharma”.",
    photos: photosFor("golden-jubilee-cultural-evening", {
      "01-fifty-years-of-dharma-ensemble": "“50 Years of Dharma” — the cast on stage",
      "02-nataraja-group-dance": "Group dance before the Nataraja backdrop",
      "03-bharatanatyam-solo": "Bharatanatyam solo",
      "04-lotus-dance": "Lotus dance ensemble",
      "05-krishna-radha-dance": "Krishna and Radha dance drama",
      "06-stage-drama": "Theatre performance by the students",
      "07-ananta-shayana-tableau": "Ananta Shayana tableau",
      "08-classical-solo": "Classical dance solo",
      "09-play-scene": "A scene from the student play",
      "10-fan-dance": "Fan dance performance",
      "11-golden-jubilee-group-photo": "Group photograph celebrating 50 years of Prashanti Kutiram",
    }),
  },
];

/** Every Golden Jubilee photo, newest event first. */
export const jubileePhotos = jubileeEvents.flatMap((e) =>
  e.photos.map((p, i) => ({ ...p, id: `${e.slug}-${i}`, event: e.title })),
);
