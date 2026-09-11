export type Project = {
  slug: string;
  number: string;
  title: string;
  kicker: string;
  year: string;
  disciplines: string[];
  duration?: string;
  intro: string;
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  images: string[];
  thumbnail?: string;
  thumbnailPosition?: string;
  videoHref?: string;
  prototypeHref?: string;
  prototypeEmbedHref?: string;
  theme: "mono" | "cinema" | "wine" | "coffee" | "portrait" | "neon" | "noma" | "romance" | "study" | "book" | "pinterest";
};

export const projects: Project[] = [
  {
    slug: "pinterest-advert",
    number: "11",
    title: "Pinterest Advert",
    kicker: "Inspiration in motion",
    year: "2026",
    disciplines: ["Videography", "Advertising", "Creative direction"],
    intro:
      "A playful campaign film about the moment inspiration becomes an idea worth saving, sharing and bringing to life.",
    overview:
      "This advert presents Pinterest as more than a place to browse. It focuses on the platform as a starting point for personal creativity, showing how one discovery can lead to a new plan, mood or possibility.",
    challenge:
      "The film needed to communicate Pinterest’s core experience quickly while still feeling energetic and human. It had to make digital discovery visually engaging without relying on a long explanation of how the platform works.",
    solution:
      "I shaped the advert around movement, rhythm and clear visual connections. Fast transitions and an upbeat pace mirror the act of scrolling through ideas, while the sequence keeps returning to the feeling of finding something that immediately sparks curiosity.",
    result:
      "The final advert gives Pinterest a lively, creative presence and turns a familiar digital action into a compact visual story. It balances brand recognition with a personal sense of discovery and possibility.",
    images: [],
    videoHref: "https://youtu.be/4cWPGHXxMJY",
    theme: "pinterest",
  },
  {
    slug: "rightfit",
    number: "01",
    title: "RightFit",
    kicker: "Authority, made human",
    year: "2026",
    disciplines: ["Social media management", "Marketing", "Content strategy"],
    intro:
      "A focused social presence for a workplace training and wellbeing consultancy — designed to build trust before the first conversation.",
    overview:
      "I managed and developed the social media presence for RightFit Consultancy. The objective was to increase brand awareness, position the company as a trusted authority, and support lead generation for organisational clients.",
    challenge:
      "RightFit was a newly established consultancy with limited awareness and no defined social strategy. Its content needed to explain complex services clearly, educate decision-makers and encourage enquiries while building credibility from the ground up.",
    solution:
      "I developed a structured content system around leadership, workplace wellbeing and team performance. Educational posts, reels and carousels addressed themes such as burnout and communication, while consistent art direction and direct calls-to-action connected insight with enquiry.",
    result:
      "The new system gave the brand a more professional and recognisable presence. Authority-led content improved visibility, encouraged engagement and created clearer opportunities for organisations to discover RightFit’s services.",
    images: [
      "/fiorellas-vision-portfolio/images/rightfit-1.png",
      "/fiorellas-vision-portfolio/images/rightfit-2.png",
      "/fiorellas-vision-portfolio/images/rightfit-3.png",
      "/fiorellas-vision-portfolio/images/rightfit-4.png",
      "/fiorellas-vision-portfolio/images/rightfit-5.png",
    ],
    theme: "mono",
  },
  {
    slug: "music-video",
    number: "02",
    title: "We Don’t Talk Anymore",
    kicker: "Sound into story",
    year: "2023",
    disciplines: ["Videography", "Creative direction", "Post-production"],
    duration: "4 weeks",
    intro:
      "A cinematic experiment in rhythm, atmosphere and intimacy — translating music into a visual story.",
    overview:
      "This music video project explored the relationship between sound and visual storytelling. From concept and shot planning to cinematography and post-production, each decision was shaped around the song’s mood, emotion and structure.",
    challenge:
      "The central challenge was to let the imagery deepen the song without overpowering it. The visual language also needed to stay cohesive across narrative and performance moments, communicate emotion quickly and follow the changing pace of the track.",
    solution:
      "I built the creative direction from the song’s emotional core. Colour, lighting, camera movement and pacing were aligned with its rhythm, balancing candid narrative moments with more composed performance imagery.",
    result:
      "The finished piece creates an immersive visual experience that supports the music and strengthens its emotional impact. It demonstrates a thoughtful approach to rhythm, continuity and short-form cinematic storytelling.",
    images: [
      "/fiorellas-vision-portfolio/images/music-1.jpg",
      "/fiorellas-vision-portfolio/images/music-2.jpg",
      "/fiorellas-vision-portfolio/images/music-3.jpg",
      "/fiorellas-vision-portfolio/images/music-4.jpg",
      "/fiorellas-vision-portfolio/images/music-5.jpg",
    ],
    videoHref: "https://youtu.be/auaRJzYoKZ8",
    theme: "cinema",
  },
  {
    slug: "wine-bar-advert",
    number: "03",
    title: "Il-Mulino Café & WineBar",
    kicker: "Nightlife in print",
    year: "2025",
    disciplines: ["Campaign design", "Social media", "Brand identity"],
    duration: "3 weeks",
    intro:
      "An atmospheric editorial campaign that turns the character of a wine bar into a tactile print experience.",
    overview:
      "The project developed a polished magazine-style advert for a wine bar, bringing editorial planning, content, layout and production into one cohesive piece across print and digital presentation.",
    challenge:
      "The work needed a unified system for typography, imagery and production while preserving the venue’s intimate character. The original content and visual assets had to feel consistent, premium and commercially useful rather than like separate parts.",
    solution:
      "I established a clear art direction covering layout, type, colour and photography. A structured editorial workflow moved the project from content planning through design and prepress, with mockups used to test pacing and impact in context.",
    result:
      "The final advert feels cohesive, atmospheric and production-ready. Its strong visual identity gives the venue a distinctive print presence while creating a system that can extend to future promotions.",
    images: [
      "/fiorellas-vision-portfolio/images/wine-2.jpg",
      "/fiorellas-vision-portfolio/images/wine-3.jpg",
      "/fiorellas-vision-portfolio/images/wine-4.jpg",
      "/fiorellas-vision-portfolio/images/wine-1.jpg",
      "/fiorellas-vision-portfolio/images/wine-5.jpg",
    ],
    theme: "wine",
  },
  {
    slug: "coffee-crush",
    number: "04",
    title: "Coffee Crush",
    kicker: "A daily love affair",
    year: "2024",
    disciplines: ["Brand identity", "Digital design", "Packaging"],
    duration: "6 weeks",
    intro:
      "A warm, playful coffee identity designed around connection, craft and the small ritual people look forward to each day.",
    overview:
      "Coffee Crush is a lifestyle-focused coffee brand built around warmth, connection and everyday indulgence. Its identity combines premium craft with an approachable personality — including a signature coffee-bean ‘O’.",
    challenge:
      "The coffee market is crowded with brands offering similar products and visual cues. Coffee Crush needed to stand apart emotionally, feel memorable across physical and digital touchpoints, and remain welcoming rather than overly exclusive.",
    solution:
      "The identity centres on cosy tones, elegant type and a playful graphic language. Rather than competing on product alone, the brand tells stories around daily rituals and carries them through packaging, printed pieces and social-ready assets.",
    result:
      "Coffee Crush establishes a distinctive and emotionally resonant presence. The system feels stylish yet grounded, positioning the brand as something customers connect with for both the coffee and the feeling around it.",
    images: [
      "/fiorellas-vision-portfolio/images/coffee-2.jpg",
      "/fiorellas-vision-portfolio/images/coffee-1.jpg",
      "/fiorellas-vision-portfolio/images/coffee-3.jpg",
      "/fiorellas-vision-portfolio/images/coffee-4.jpg",
      "/fiorellas-vision-portfolio/images/coffee-5.jpg",
      "/fiorellas-vision-portfolio/images/coffee-6.jpg",
    ],
    theme: "coffee",
  },
  {
    slug: "portrait-photography",
    number: "05",
    title: "Portrait Photography",
    kicker: "Presence over posing",
    year: "2023",
    disciplines: ["Photography", "Art direction", "Retouching"],
    duration: "1 week",
    intro:
      "Portraits that feel intimate, cinematic and honest — balancing technical control with room for personality.",
    overview:
      "This project focuses on capturing authentic human expression through intentional visual storytelling. Natural direction, considered lighting and a calm shooting environment bring each subject’s mood and presence to the foreground.",
    challenge:
      "People can feel tense or uncertain in front of a camera, producing portraits that feel performed rather than personal. Changing light and short shooting windows also demanded quick technical decisions without losing emotional connection.",
    solution:
      "I approached each session as a collaboration. Moodboards and location planning established the visual language, while gentle direction and conversation helped subjects relax. Lighting and editing were kept cohesive but responsive to each person.",
    result:
      "The final series feels confident, natural and recognisable. The portraits combine clear mood with individual personality, strengthening a photographic style built on connection rather than rigid posing.",
    thumbnail: "/fiorellas-vision-portfolio/images/portrait-concrete-youth-1.webp",
    thumbnailPosition: "center 30%",
    images: [
      "/fiorellas-vision-portfolio/images/portrait-concrete-youth-1.webp",
      "/fiorellas-vision-portfolio/images/portrait-concrete-youth-2.webp",
      "/fiorellas-vision-portfolio/images/portrait-concrete-youth-3.webp",
      "/fiorellas-vision-portfolio/images/portrait-concrete-youth-4.webp",
      "/fiorellas-vision-portfolio/images/portrait-concrete-youth-5.webp",
      "/fiorellas-vision-portfolio/images/portrait-concrete-youth-6.webp",
      "/fiorellas-vision-portfolio/images/portrait-concrete-youth-7.webp",
      "/fiorellas-vision-portfolio/images/portrait-concrete-youth-8.webp",
      "/fiorellas-vision-portfolio/images/portrait-concrete-youth-9.webp",
      "/fiorellas-vision-portfolio/images/portrait-concrete-youth-10.webp",
      "/fiorellas-vision-portfolio/images/portrait-concrete-youth-11.webp",
      "/fiorellas-vision-portfolio/images/portrait-concrete-youth-12.webp",
    ],
    theme: "portrait",
  },
  {
    slug: "illustrations",
    number: "06",
    title: "Illustrations",
    kicker: "Electric characters",
    year: "2022—2025",
    disciplines: ["Digital art", "Illustration", "Visual storytelling"],
    intro:
      "A neon-lit collection of characters, symbols and stories shaped through expressive line work.",
    overview:
      "This ongoing illustration series explores visual storytelling through expressive characters, bold colour and intentional line work. Each piece begins with conceptual research and sketching before colour exploration and final digital production.",
    challenge:
      "An image can look visually strong and still lack narrative clarity. The challenge was to balance emotion, composition and style consistency while making work that can adapt across web, print and wider brand systems.",
    solution:
      "I used concept sketches to test ideas, defined palettes to establish mood and developed character expressions and gestures to carry the story. Layered compositions create focus while adaptable formats make the artwork more versatile.",
    result:
      "The collection has a cohesive, memorable visual voice. Its characters read clearly, the work holds together as a series and each illustration retains enough flexibility for different creative applications.",
    thumbnail: "/fiorellas-vision-portfolio/images/illustration-added-01.jpg",
    thumbnailPosition: "center 30%",
    images: [
      "/fiorellas-vision-portfolio/images/illustration-1.jpg",
      "/fiorellas-vision-portfolio/images/illustration-2.jpg",
      "/fiorellas-vision-portfolio/images/illustration-3.jpg",
      "/fiorellas-vision-portfolio/images/illustration-4.jpg",
      "/fiorellas-vision-portfolio/images/illustration-5.jpg",
      "/fiorellas-vision-portfolio/images/illustration-6.jpg",
      "/fiorellas-vision-portfolio/images/illustration-added-01.jpg",
      "/fiorellas-vision-portfolio/images/illustration-added-02.jpg",
      "/fiorellas-vision-portfolio/images/illustration-added-03.jpg",
      "/fiorellas-vision-portfolio/images/illustration-added-04.jpg",
      "/fiorellas-vision-portfolio/images/illustration-added-05.jpg",
      "/fiorellas-vision-portfolio/images/illustration-added-06.jpg",
      "/fiorellas-vision-portfolio/images/illustration-added-07.jpg",
      "/fiorellas-vision-portfolio/images/illustration-added-08.jpg",
      "/fiorellas-vision-portfolio/images/illustration-added-09.jpg",
      "/fiorellas-vision-portfolio/images/illustration-added-10.jpg",
    ],
    theme: "neon",
  },
  {
    slug: "noma",
    number: "07",
    title: "NØMA",
    kicker: "Cold brew, considered",
    year: "2026",
    disciplines: ["Brand identity", "Packaging", "Art direction"],
    intro:
      "A premium cold-brew coffee identity balancing quiet sophistication with the warmth of an everyday ritual.",
    overview:
      "NØMA is a premium cold-brew coffee brand built around slow craft, natural ingredients and considered simplicity. The identity brings together a distinctive wordmark, an organic spoon-and-leaf symbol and an earthy colour system designed to feel refined across packaging, merchandise and customer touchpoints.",
    challenge:
      "Premium coffee brands often rely on the same dark palettes and familiar visual cues. NØMA needed to communicate quality immediately while remaining approachable, memorable and flexible enough to move from a cold-brew can to cups, clothing, bags and loyalty materials.",
    solution:
      "I created a recognisable identity around the NØMA wordmark and a custom symbol that combines the language of coffee, serving and botanicals. Terracotta, forest green and soft neutral tones establish warmth and quality, while the restrained layouts let the mark remain clear across every application.",
    result:
      "The finished system gives NØMA a cohesive premium presence without feeling distant. Its packaging stands out, the merchandise feels genuinely wearable and every branded item belongs to the same calm, crafted visual world.",
    thumbnail: "/fiorellas-vision-portfolio/images/noma-3.webp",
    images: [
      "/fiorellas-vision-portfolio/images/noma-3.webp",
      "/fiorellas-vision-portfolio/images/noma-4.webp",
      "/fiorellas-vision-portfolio/images/noma-9.webp",
      "/fiorellas-vision-portfolio/images/noma-6.webp",
      "/fiorellas-vision-portfolio/images/noma-8.webp",
      "/fiorellas-vision-portfolio/images/noma-5.webp",
      "/fiorellas-vision-portfolio/images/noma-7.webp",
      "/fiorellas-vision-portfolio/images/noma-1.webp",
      "/fiorellas-vision-portfolio/images/noma-2.webp",
    ],
    theme: "noma",
  },
  {
    slug: "there-for-you",
    number: "08",
    title: "There for You",
    kicker: "Love in the in-between",
    year: "2026",
    disciplines: ["Videography", "Creative direction", "Post-production"],
    intro:
      "A warm, intimate music video shaped around the playful, ordinary moments that make two people feel inseparable.",
    overview:
      "There for You follows a couple through a day of small adventures, moving between arcade lights, open-air quiet, shopping trips and private moments of affection. The visual story treats everyday spaces as part of the romance, letting natural chemistry and changing environments carry the feeling of the song.",
    challenge:
      "The story needed to feel affectionate without becoming overly staged. It also had to maintain one emotional thread across locations with very different light, colour and energy, from bright outdoor scenes to saturated arcade interiors.",
    solution:
      "I directed relaxed interactions and built the coverage around candid gestures, close details and wider environmental frames. Warm sunlight, deep plum tones and flashes of neon create contrast while a rhythmic edit connects each location as another chapter of the same relationship.",
    result:
      "The final direction creates a relatable portrait of closeness that feels personal, playful and cinematic. It demonstrates an approach to music-video storytelling grounded in natural performance, visual continuity and emotionally led pacing.",
    thumbnail: "/fiorellas-vision-portfolio/images/there-for-you-1.webp",
    images: [
      "/fiorellas-vision-portfolio/images/there-for-you-2.webp",
      "/fiorellas-vision-portfolio/images/there-for-you-1.webp",
      "/fiorellas-vision-portfolio/images/there-for-you-3.webp",
      "/fiorellas-vision-portfolio/images/there-for-you-4.webp",
      "/fiorellas-vision-portfolio/images/there-for-you-5.webp",
      "/fiorellas-vision-portfolio/images/there-for-you-6.webp",
      "/fiorellas-vision-portfolio/images/there-for-you-7.webp",
      "/fiorellas-vision-portfolio/images/there-for-you-8.webp",
      "/fiorellas-vision-portfolio/images/there-for-you-9.webp",
    ],
    videoHref: "https://www.youtube.com/watch?v=WpCACQxQZCM",
    theme: "romance",
  },
  {
    slug: "studyspark",
    number: "09",
    title: "StudySpark",
    kicker: "Learning, made lighter",
    year: "2026",
    disciplines: ["UX/UI design", "Product design", "Interactive prototyping"],
    intro:
      "A mobile study companion designed to help students organise their learning, build momentum and make progress feel rewarding.",
    overview:
      "StudySpark is an interactive mobile-app concept that brings planning, focus and motivation into one friendly experience. The prototype explores how students can move through their study routine with clearer priorities, approachable navigation and encouraging visual feedback.",
    challenge:
      "Study tools can quickly feel crowded or demanding, especially for students who are already overwhelmed. The experience needed to communicate useful information without adding pressure, while keeping the main actions easy to understand on a small mobile screen.",
    solution:
      "I developed a focused mobile interface with clear hierarchy, accessible tap targets and a playful visual language. The prototype connects the key screens into a realistic flow, allowing users to experience the navigation, transitions and decision points rather than viewing the work as isolated mockups.",
    result:
      "The final prototype presents StudySpark as a coherent, usable product concept. It demonstrates the full journey in context and shows how interaction design, visual consistency and encouraging feedback can make a study app feel both practical and motivating.",
    images: [],
    prototypeHref:
      "https://www.figma.com/proto/VLBaQxOJIKWAeawZIIuxeZ/StudySpark_Prototype?page-id=0%3A1&node-id=20-182&p=f&viewport=504%2C307%2C0.39&t=j57leIon2PJgfbHy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
    prototypeEmbedHref:
      "https://embed.figma.com/proto/VLBaQxOJIKWAeawZIIuxeZ/StudySpark_Prototype?page-id=0%3A1&node-id=20-182&p=f&t=j57leIon2PJgfbHy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&hide-ui=1&embed-host=share",
    theme: "study",
  },
  {
    slug: "millies-ribbon",
    number: "10",
    title: "Millie’s Ribbon",
    kicker: "A small story about big courage",
    year: "2026",
    disciplines: ["Book design", "Illustration", "Visual storytelling"],
    intro:
      "An illustrated children’s book about a tiny mouse who discovers that courage can begin with one small step.",
    overview:
      "Millie’s Ribbon follows Millie, a shy little mouse, as she faces the fear of climbing a tall oak tree to recover her favourite pink ribbon. The story combines gentle storytelling with bright, character-led illustration to make ideas of bravery, confidence and growth accessible to young readers.",
    challenge:
      "The book needed to communicate fear and courage in a way that felt reassuring rather than overwhelming. Each spread also had to balance readable text with expressive imagery while keeping Millie’s character and the meadow world visually consistent.",
    solution:
      "I developed a playful visual language around soft shapes, vivid colour and simple compositions. The page sequence gradually moves Millie from the safety of her burrow into the open meadow and up the tree, allowing the imagery, pacing and repeated pink ribbon motif to carry the emotional journey.",
    result:
      "The finished book presents a clear and encouraging story about self-belief. Its approachable character, bright environments and gentle message create a memorable reading experience that celebrates small victories and personal growth.",
    thumbnail: "/fiorellas-vision-portfolio/images/millies-ribbon-thumbnail-v2.png",
    images: [
      "/fiorellas-vision-portfolio/images/millies-ribbon-cover.jpg",
      "/fiorellas-vision-portfolio/images/millies-ribbon-page-1.jpg",
      "/fiorellas-vision-portfolio/images/millies-ribbon-page-2.jpg",
      "/fiorellas-vision-portfolio/images/millies-ribbon-page-3.jpg",
      "/fiorellas-vision-portfolio/images/millies-ribbon-page-4.jpg",
      "/fiorellas-vision-portfolio/images/millies-ribbon-page-5.jpg",
      "/fiorellas-vision-portfolio/images/millies-ribbon-page-6.jpg",
      "/fiorellas-vision-portfolio/images/millies-ribbon-page-7.jpg",
      "/fiorellas-vision-portfolio/images/millies-ribbon-page-8.jpg",
      "/fiorellas-vision-portfolio/images/millies-ribbon-back.jpg",
    ],
    theme: "book",
  },
];

const latestProjectYear = (year: string) =>
  Math.max(...(year.match(/\d{4}/g)?.map(Number) ?? [0]));

export const projectsByYear = [...projects].sort((a, b) =>
  latestProjectYear(b.year) - latestProjectYear(a.year) ||
  Number(b.number) - Number(a.number),
);

export const projectBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<string, Project>;
