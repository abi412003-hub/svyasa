export interface NewsItem {
  id: number;
  url: string;
  title: string;
  date: string;
  photoId?: string;
  featured?: boolean;
}

export interface EventItem {
  id: number;
  url: string;
  title: string;
  date: string;
  photoId?: string;
  hasImage: boolean;
  category: "conference" | "sports" | "cultural" | "yoga" | "monthly-report" | "other";
}

export const newsData: NewsItem[] = [
  { id: 42, url: "news-details-new.php?url=42", title: "Academic Calendar AY 2025-26", date: "2 Jan 2026", featured: true },
  { id: 41, url: "news-details-new.php?url=41", title: "Academic Calendar AY 2025-26", date: "2 Jan 2026" },
  { id: 34, url: "news-details-new.php?url=34", title: "26 INCOFYRA", date: "18 Dec 2025" },
  { id: 39, url: "news-details-new.php?url=39", title: "Himalaya Yoga Olympiad-2025", date: "12 Dec 2025" },
  { id: 38, url: "news-details-new.php?url=38", title: "Himalaya Yoga Olympiad-2025", date: "12 Dec 2025" },
  { id: 40, url: "news-details-new.php?url=40", title: "Himalaya Yoga Olympiad-2025", date: "12 Dec 2025" },
  { id: 36, url: "news-details-new.php?url=36", title: "S-VYASA Prashanti Campus Presents Krida Vilasa", date: "10 Sep 2025" },
  { id: 35, url: "news-details-new.php?url=35", title: "Gurupooja Utsav", date: "10 Jul 2025" },
  { id: 33, url: "news-details-new.php?url=33", title: "United Nations Academic Impact", date: "15 May 2025" },
  { id: 25, url: "news-details-new.php?url=25", title: "Science Fair", date: "10 May 2025" },
  { id: 32, url: "news-details-new.php?url=32", title: "Unlocking Innovation", date: "6 Mar 2025" },
  { id: 18, url: "news-details-new.php?url=18", title: "Karnataka Rajyotsava", date: "18 Feb 2025" },
  { id: 31, url: "news-details-new.php?url=31", title: "UG & PG", date: "18 Feb 2025" },
  { id: 21, url: "news-details-new.php?url=21", title: "PhD Inauguration", date: "15 Feb 2025" },
  { id: 9, url: "news-details-new.php?url=9", title: "THE ROAD AHEAD 2.0 Book Release", date: "13 Feb 2025" },
  { id: 16, url: "news-details-new.php?url=16", title: "Hackathon 2025", date: "8 Feb 2025" },
  { id: 14, url: "news-details-new.php?url=14", title: "Digital Marketing Day-2", date: "7 Feb 2025" },
  { id: 13, url: "news-details-new.php?url=13", title: "Digital Marketing Day-1", date: "6 Feb 2025" },
  { id: 15, url: "news-details-new.php?url=15", title: "Essay and Story Writing Competition", date: "1 Feb 2025" },
  { id: 22, url: "news-details-new.php?url=22", title: "P3 & Admin Exteriors", date: "30 Jan 2025" },
  { id: 11, url: "news-details-new.php?url=11", title: "Inauguration of Computer Society of India", date: "29 Jan 2025" },
  { id: 28, url: "news-details-new.php?url=28", title: "Sports Facilities", date: "27 Jan 2025" },
  { id: 29, url: "news-details-new.php?url=29", title: "Students", date: "27 Jan 2025" },
  { id: 26, url: "news-details-new.php?url=26", title: "SFA Championship", date: "25 Jan 2025" },
  { id: 27, url: "news-details-new.php?url=27", title: "Sheraton Press Meet", date: "25 Jan 2025" },
  { id: 20, url: "news-details-new.php?url=20", title: "Old Photos Received", date: "25 Jan 2025" },
  { id: 19, url: "news-details-new.php?url=19", title: "MBA Session", date: "25 Jan 2025" },
  { id: 23, url: "news-details-new.php?url=23", title: "P3 & Admin Interiors", date: "25 Jan 2025" },
  { id: 7, url: "news-details-new.php?url=7", title: "AHSCON Day-2", date: "18 Jan 2025" },
  { id: 6, url: "news-details-new.php?url=6", title: "AHSCON Day-1", date: "17 Jan 2025" },
  { id: 17, url: "news-details-new.php?url=17", title: "Inaugural Event", date: "3 Jan 2025" },
  { id: 1, url: "news-details-new.php?url=1", title: "Grand Unveiling: S-VYASA Deemed to be University Inauguration Marks New Era", date: "3 Jan 2025" },
  { id: 2, url: "news-details-new.php?url=2", title: "A Vision for the Future", date: "21 Dec 2024" },
  { id: 8, url: "news-details-new.php?url=8", title: "Anti Drug", date: "5 Dec 2024" },
  { id: 3, url: "news-details-new.php?url=3", title: "Renowned Actor and Martial Artist Vidyut Jammwal Inspires SVYASA Students", date: "16 Nov 2024" },
  { id: 12, url: "news-details-new.php?url=12", title: "Deeksharambh", date: "16 Oct 2024" },
  { id: 30, url: "news-details-new.php?url=30", title: "Teachers Day", date: "5 Sep 2024" },
  { id: 10, url: "news-details-new.php?url=10", title: "S-Vyasa Meet 2024", date: "21 Jul 2024" },
];

export const eventsData: EventItem[] = [
  { id: 29, url: "event-details.php?url=29", title: "Republic Day", date: "26 Jan 2026", hasImage: true, category: "cultural" },
  { id: 28, url: "event-details.php?url=28", title: "All India Inter-University Yogasana Championships (Women) 2026", date: "05 Jan 2026", hasImage: true, category: "sports" },
  { id: 27, url: "event-details.php?url=27", title: "Faculty Development Program on Quantum Computing & Cybersecurity", date: "15 Dec 2025", hasImage: false, category: "conference" },
  { id: 26, url: "event-details.php?url=26", title: "Karnataka Rajyotsava 2025", date: "22 Nov 2025", hasImage: true, category: "cultural" },
  { id: 25, url: "event-details.php?url=25", title: "All India Yogasana Sports Competition for Women (AIU)", date: "17 Nov 2025", hasImage: false, category: "sports" },
  { id: 16, url: "event-details.php?url=16", title: "International Conference on Rethinking Business and Innovation: The Convergence of AI, Industry, and Society 5.0 in Management", date: "19 Sep 2025", hasImage: true, category: "conference" },
  { id: 23, url: "event-details.php?url=23", title: "S-VYASA Prashanti Campus Presents Krida Vilasa", date: "10 Sep 2025", hasImage: true, category: "sports" },
  { id: 15, url: "event-details.php?url=15", title: "11th International Day of Yoga \"Yoga Sangama\"", date: "21 Jun 2025", hasImage: false, category: "yoga" },
  { id: 14, url: "event-details.php?url=14", title: "11th International Day of Yoga", date: "11 Jun 2025", hasImage: true, category: "yoga" },
  { id: 13, url: "event-details.php?url=13", title: "Awareness of Blood Donation as Part of Karma Yoga", date: "09 Jun 2025", hasImage: true, category: "yoga" },
  { id: 12, url: "event-details.php?url=12", title: "21 Day Yoga Day Celebrations, Yoga and Environment Day", date: "05 Jun 2025", hasImage: true, category: "yoga" },
  { id: 11, url: "event-details.php?url=11", title: "World Environment Day Competitions 2025", date: "31 May 2025", hasImage: true, category: "other" },
  { id: 22, url: "event-details.php?url=22", title: "Monthly Report May 2025", date: "26 May 2025", hasImage: true, category: "monthly-report" },
  { id: 10, url: "event-details.php?url=10", title: "Kala Vilasa 2025", date: "09 May 2025", hasImage: true, category: "cultural" },
  { id: 9, url: "event-details.php?url=9", title: "An Introduction to Research-Based Careers", date: "05 May 2025", hasImage: true, category: "conference" },
  { id: 7, url: "event-details.php?url=7", title: "Green March: Follow the Path to a Better Earth", date: "22 Apr 2025", hasImage: true, category: "other" },
  { id: 21, url: "event-details.php?url=21", title: "Monthly Report April 2025", date: "16 Apr 2025", hasImage: true, category: "monthly-report" },
  { id: 5, url: "event-details.php?url=5", title: "World Down Syndrome Day Seminar", date: "21 Mar 2025", hasImage: true, category: "conference" },
  { id: 20, url: "event-details.php?url=20", title: "Monthly Report March 2025", date: "01 Mar 2025", hasImage: true, category: "monthly-report" },
  { id: 1, url: "event-details.php?url=1", title: "Meditation for Leadership & Excellence", date: "20 Feb 2025", hasImage: true, category: "yoga" },
  { id: 3, url: "event-details.php?url=3", title: "Scientific Research & Policy Innovation", date: "20 Feb 2025", hasImage: true, category: "conference" },
  { id: 2, url: "event-details.php?url=2", title: "Meditation for Social Change & Well-being", date: "20 Feb 2025", hasImage: true, category: "yoga" },
  { id: 4, url: "event-details.php?url=4", title: "Double Burden of Over and Under Nutrition", date: "19 Feb 2025", hasImage: true, category: "conference" },
  { id: 8, url: "event-details.php?url=8", title: "Participation in Astra 2.0", date: "17 Feb 2025", hasImage: true, category: "sports" },
  { id: 19, url: "event-details.php?url=19", title: "Monthly Report February 2025", date: "05 Feb 2025", hasImage: true, category: "monthly-report" },
  { id: 18, url: "event-details.php?url=18", title: "Monthly Report January 2025", date: "27 Jan 2025", hasImage: true, category: "monthly-report" },
  { id: 6, url: "event-details.php?url=6", title: "Deeksharambham Program", date: "16 Oct 2024", hasImage: true, category: "cultural" },
];

export const eventCategories = [
  { id: "all", label: "All" },
  { id: "conference", label: "Conferences" },
  { id: "sports", label: "Sports" },
  { id: "cultural", label: "Cultural" },
  { id: "yoga", label: "Yoga" },
  { id: "monthly-report", label: "Monthly Reports" },
];
