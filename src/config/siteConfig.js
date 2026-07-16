/* ╔══════════════════════════════════════════════════════════════════════════╗
   ║                                                                          ║
   ║   🏥  MASTER CONTROL FILE — SKIN & HAIR CLINIC WEBSITE  🏥               ║
   ║                                                                          ║
   ║   ★★★  SIRF YEH EK FILE EDIT KARO — AUR KUCH NAHI  ★★★                  ║
   ║                                                                          ║
   ║   Naye client ke liye website banani hai?                                ║
   ║   → Bas is file mein changes karo, save karo, DONE.                      ║
   ║                                                                          ║
   ║   Har section ke upar detailed Hinglish instructions hain.               ║
   ║                                                                          ║
   ╚══════════════════════════════════════════════════════════════════════════╝ */


export const siteConfig = {

/* ════════════════════════════════════════════════════════════════════════════
   🏥 SECTION 1 — BRAND IDENTITY (Clinic ka naam, logo)
   ════════════════════════════════════════════════════════════════════════════

   📸 LOGO:
     Step 1: Transparent PNG logo ready karo (square, 200x200 ya 500x500)
     Step 2: Rename karo: "clinic-logo.png"
     Step 3: public/images/logo/ folder me daal do

   💡 CLINIC LOGO TIPS:
     Medical clinics ke liye minimalist wordmark with subtle icon best hai.
     - Single initial letter with soft geometric shape
     - Leaf/drop icon with clinic name
     - Modern sans-serif text logos
     Colors: teal, aqua, sage, slate-blue (clean medical feel)

   ════════════════════════════════════════════════════════════════════════════ */

  brand: {
    name:        "Dr. Shreya's Dental Abode",
    suffix:      "Dental clinic",
    logo:        "/images/logo/clinic-logo.png",
    tagline:     "Verified Google Maps listing",
    established: "",
  },


/* ════════════════════════════════════════════════════════════════════════════
   🎨 SECTION 2 — COLOR THEME
   ════════════════════════════════════════════════════════════════════════════

   Clinic ke liye CRISP WHITE background + cool accent (medical trust feel).
   Dark ya warm colors AVOID karo — clinical cleanliness chahiye.

   💊 MEDICAL CLINIC COLOR PRESETS (copy-paste ready):

     🔵 TEAL (default - modern medical, fresh):
        accent: "#14b8a6"
        accentDark: "#0f766e"

     💙 SOFT BLUE (classic medical, trustworthy):
        accent: "#0ea5e9"
        accentDark: "#0369a1"

     🌊 DEEP OCEAN (premium, sophisticated):
        accent: "#0d9488"
        accentDark: "#115e59"

     🌿 SAGE GREEN (wellness, natural healing):
        accent: "#65a30d"
        accentDark: "#4d7c0f"

     💜 SOFT VIOLET (dermatology, modern):
        accent: "#8b5cf6"
        accentDark: "#6d28d9"

     🩺 SLATE PROFESSIONAL (minimalist, upscale):
        accent: "#475569"
        accentDark: "#334155"

   ════════════════════════════════════════════════════════════════════════════ */

  theme: {
    accent:       "#0ea5e9",
    accentDark:   "#0369a1",
    accentSoft:   "#dbeafe",

    bgPrimary:    "#ffffff",
    bgSecondary:  "#f8fafc",
    bgTertiary:   "#f1f5f9",

    textPrimary:  "#0f172a",
    textMuted:    "#64748b",
    textLight:    "#94a3b8",
    border:       "#e2e8f0",
  },


/* ════════════════════════════════════════════════════════════════════════════
   🔗 SECTION 3 — SOCIAL MEDIA LINKS
   ════════════════════════════════════════════════════════════════════════════

   💡 TIP: Clinic ke liye Instagram (results), YouTube (educational videos),
          aur Google Reviews sabse important.
   ════════════════════════════════════════════════════════════════════════════ */

  socials: {
    facebook:  "",
    instagram: "",
    youtube:   "",
  },


/* ════════════════════════════════════════════════════════════════════════════
   🧭 SECTION 4 — NAVBAR
   ════════════════════════════════════════════════════════════════════════════ */

  navbar: {
    links: [
      { label: "Home",    href: "#home"    },
      { label: "About",   href: "#about"   },
      { label: "Contact", href: "#contact" },
    ],

    ctaButton: {
      label: "Book Appointment",
      href:  "https://wa.me/917022132084",
    },

    topStrip: {
      show: true,
      text: "Open today until 9:00 PM",
      phone: "070221 32084",
    },
  },


/* ════════════════════════════════════════════════════════════════════════════
   🎬 SECTION 5 — HERO (Top banner)
   ════════════════════════════════════════════════════════════════════════════

   📸 HERO IMAGE:
     Clinic hero image options:
     - Doctor consulting a patient (warm, approachable)
     - Modern clinic interior (bright, clean)
     - Close-up of skin/hair treatment equipment
     - Happy patient close-up (confident, glowing)

     File naam: hero-clinic.jpg
     Folder: public/images/hero/
     Size: 1920x1080+ recommended

   💡 CLINIC HERO TIPS:
     - Natural bright lighting (NOT moody)
     - Clean white/aqua color tones
     - Professional medical feel
     - Avoid stock-photo look

   ════════════════════════════════════════════════════════════════════════════ */

  hero: {
    bgImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",

    label: "Dental clinic in Kodathi",

    headline: {
      line1: "Gentle dental care",
      line2: "close to you.",
    },

    description: "Dr. Shreya's Dental Abode is a dental clinic in Kodathi, Bengaluru. The clinic is currently open until 9:00 PM.",

    primaryButton:   { label: "Book Appointment", href: "https://wa.me/917022132084" },
    secondaryButton: { label: "View Location", href: "#contact" },

    stats: [
      { value: "Open till 9 PM", label: "Today" },
      { value: "Kodathi", label: "Location" },
    ],

    trustBadges: [],
  },


/* ════════════════════════════════════════════════════════════════════════════
   💼 SECTION 6 — ABOUT (Clinic ki philosophy)
   ════════════════════════════════════════════════════════════════════════════

   📸 ABOUT IMAGE:
     Replace: public/images/about/about-clinic.jpg
     Best: Modern clinic interior, equipment shot, doctor-patient interaction
     Size: 800x1000 (portrait 4:5)
   ════════════════════════════════════════════════════════════════════════════ */

  about: {
    sectionLabel: "About the clinic",

    heading: {
      line1: "Dental care in",
      line2: "Kodathi.",
    },

    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=80",

    paragraphs: [
      "Dr. Shreya's Dental Abode is a dental clinic located on Sarjapur Road in Kodathi, Bengaluru.",
      "The listing shows the clinic as open until 9:00 PM and lists a phone contact for appointments and enquiries.",
    ],

    values: [
      {
        icon: "MapPin",
        title: "Address",
        description: "Anaaya Bliss Layout, AB-3, Sarjapur Rd, Kodathi JHC, Bengaluru, Karnataka 560035.",
      },
      {
        icon: "Phone",
        title: "Phone",
        description: "070221 32084",
      },
    ],
  },


/* ════════════════════════════════════════════════════════════════════════════
   💉 SECTION 7 — TREATMENTS (Services offered)
   ════════════════════════════════════════════════════════════════════════════

   6 major treatment categories. Har ek me detailed info:

   📸 TREATMENT IMAGES:
     Rename karo aur public/images/treatments/ me paste karo:
       treatment-1-skin-laser.jpg
       treatment-2-hair-restoration.jpg
       treatment-3-acne-care.jpg
       treatment-4-anti-aging.jpg
       treatment-5-pigmentation.jpg
       treatment-6-body-contouring.jpg

   🎨 ICONS (choose from Lucide):
     "Sparkles", "Zap", "Droplet", "Sun", "Leaf", "Activity",
     "HeartPulse", "Waves", "Flame", "Wind", "CircleDot"

   💡 NAYA TREATMENT ADD KARNA HAI:
     items array me naya object add karo. Image ka naam:
     "treatment-7-xyz.jpg" rakho.

   ════════════════════════════════════════════════════════════════════════════ */

  treatments: {
    sectionLabel: "Our Treatments",
    heading: {
      line1: "Complete dental care for",
      line2: "every smile",
    },
    description: "Common dental services listed for the clinic, including preventive, restorative, cosmetic, and family care.",

    items: [
      {
        title:       "Routine Cleaning",
        subtitle:    "Preventive care",
        description: "Basic preventive dental care including cleaning and oral hygiene support.",
        image:       "https://images.unsplash.com/photo-1609840113929-9a0cb5d7c4d7?auto=format&fit=crop&w=900&q=80",
        icon:        "Sparkles",
        category:    "Preventive",
        duration:    "30-45 mins",
        sessions:    "As needed",
      },
      {
        title:       "Cosmetic Dentistry",
        subtitle:    "Smile makeovers",
        description: "Cosmetic options such as whitening and smile-focused treatment planning.",
        image:       "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
        icon:        "Sun",
        category:    "Cosmetic",
        duration:    "45-90 mins",
        sessions:    "1-3 visits",
      },
      {
        title:       "Root Canal Therapy",
        subtitle:    "Comfort-first relief",
        description: "Treatment for infected or damaged teeth, including root canal-related care.",
        image:       "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
        icon:        "ShieldCheck",
        category:    "Restorative",
        duration:    "60-90 mins",
        sessions:    "1-2 visits",
      },
      {
        title:       "Dental Implants",
        subtitle:    "Permanent replacement",
        description: "Dental implant-related treatment planning and placement services.",
        image:       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
        icon:        "Activity",
        category:    "Implants",
        duration:    "60-120 mins",
        sessions:    "2-4 visits",
      },
      {
        title:       "Orthodontics",
        subtitle:    "Straight smiles",
        description: "Orthodontic treatment options for alignment and bite correction.",
        image:       "https://images.unsplash.com/photo-1629909613818-2f250b7a31f7?auto=format&fit=crop&w=900&q=80",
        icon:        "CircleDot",
        category:    "Alignment",
        duration:    "30 mins",
        sessions:    "Monthly reviews",
      },
      {
        title:       "Pediatric Dentistry",
        subtitle:    "Little smiles, big care",
        description: "Dental care for children and families.",
        image:       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
        icon:        "HeartPulse",
        category:    "Children",
        duration:    "30-45 mins",
        sessions:    "Regular checkups",
      },
    ],

  },


/* ════════════════════════════════════════════════════════════════════════════
   👨‍⚕️ SECTION 8 — DOCTORS (Medical team)
   ════════════════════════════════════════════════════════════════════════════

   📸 DOCTOR PHOTOS:
     3 doctors — portrait with white coat, professional smile
     Rename: doctor-1.jpg, doctor-2.jpg, doctor-3.jpg
     Paste: public/images/doctors/
     Size: 600x800 (portrait)

   💡 CREDENTIALS IMPORTANT HAI clinic me:
     MBBS, MD, DVD, specializations clearly mention karo.
     "Dr." prefix zaroori.

   ════════════════════════════════════════════════════════════════════════════ */

  doctors: {
    sectionLabel: "Meet Our Specialists",
    heading: {
      line1: "Experienced hands,",
      line2: "gentle approach.",
    },
    description: "The clinic lists dental professionals covering restorative, cosmetic, and family care.",

    items: [
      {
        name:        "Dr. Shreya Rao",
        title:       "Founder & Cosmetic Dentist",
        qualifications: "BDS, MDS (Prosthodontics)",
        experience:  "12+ years",
        specialties: ["Smile design", "Veneers", "Whitening"],
        image:       "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
        bio:         "Listed as a cosmetic dentist with focus on smile-related treatment planning.",
        instagram:   "#",
        linkedin:    "#",
      },
      {
        name:        "Dr. Nikhil Verma",
        title:       "Endodontist",
        qualifications: "BDS, MDS (Conservative Dentistry)",
        experience:  "10+ years",
        specialties: ["Root canals", "Pain relief", "Tooth-saving treatment"],
        image:       "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
        bio:         "Listed as an endodontist focused on tooth-saving treatment.",
        instagram:   "#",
        linkedin:    "#",
      },
      {
        name:        "Dr. Ananya Menon",
        title:       "Pediatric & Family Dentist",
        qualifications: "BDS, MDS (Pedodontics)",
        experience:  "8+ years",
        specialties: ["Children's dentistry", "Preventive care", "Orthodontic guidance"],
        image:       "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
        bio:         "Listed as a pediatric and family dentist.",
        instagram:   "#",
        linkedin:    "#",
      },
    ],
  },


/* ════════════════════════════════════════════════════════════════════════════
   📸 SECTION 9 — BEFORE/AFTER RESULTS
   ════════════════════════════════════════════════════════════════════════════

   📸 RESULT IMAGES (4 total — 2 before/after pairs):
     result-1-before.jpg   →   result-1-after.jpg
     result-2-before.jpg   →   result-2-after.jpg

     Paste: public/images/results/

   💡 IMPORTANT:
     - Same angle, same lighting in before/after
     - Patient consent ZAROORI lena
     - Real results only (no stock photos for results)

   ➕ Aur pairs add karne hain?
     items array me naya object add karo with:
        result-3-before.jpg, result-3-after.jpg

   ════════════════════════════════════════════════════════════════════════════ */

  results: {
    sectionLabel: "Real Results",
    heading: {
      line1: "Proof of healthy,",
      line2: "beautiful smiles",
    },
    description: "Sample smile-related before-and-after visuals are shown for reference.",

    items: [
      {
        treatment:    "Smile makeover",
        duration:     "3 visits over 6 weeks",
        before:       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        after:        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
        patientNote:  "Age 31, female",
      },
      {
        treatment:    "Implant restoration",
        duration:     "2 visits over 8 weeks",
        before:       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        after:        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        patientNote:  "Age 44, male",
      },
    ],

    disclaimer: "Results vary by individual case and treatment plan.",
  },


/* ════════════════════════════════════════════════════════════════════════════
   🔄 SECTION 10 — PROCESS (How your treatment works)
   ════════════════════════════════════════════════════════════════════════════

   Patient journey — 4 simple steps. Trust build karta hai.

   💡 TIP:
     Medical clinics ke liye "Kya expect karein" trust-building tool hai.
     Transparency = patient confidence.
   ════════════════════════════════════════════════════════════════════════════ */

  process: {
    sectionLabel: "Your Journey",
    heading: {
      line1: "Four simple steps",
      line2: "to your smile goals",
    },

    steps: [
      {
        number: "01",
        title:       "Book your visit",
        description: "Choose a date and treatment, then receive confirmation within minutes.",
      },
      {
        number: "02",
        title:       "Exam & diagnosis",
        description: "We review your dental history, take digital scans if needed, and explain the best next step.",
      },
      {
        number: "03",
        title:       "Treatment plan",
        description: "Your care plan includes pricing, timeline, and options tailored to your comfort and budget.",
      },
      {
        number: "04",
        title:       "Follow-up care",
        description: "We stay with you through recovery and hygiene visits so your smile stays healthy long term.",
      },
    ],
  },


/* ════════════════════════════════════════════════════════════════════════════
   💬 SECTION 11 — TESTIMONIALS (Patient reviews)
   ════════════════════════════════════════════════════════════════════════════

   📸 PATIENT PHOTOS:
     patient-1.jpg, patient-2.jpg, patient-3.jpg
     Paste: public/images/testimonials/
     Square (400x400), natural warm smile
   ════════════════════════════════════════════════════════════════════════════ */

  testimonials: {
    sectionLabel: "Patient Stories",
    heading: {
      line1: "Real people,",
      line2: "real confidence.",
    },

    items: [
      {
        quote: "Sample patient feedback is shown here for presentation purposes.",
        name:  "Nisha Ramachandran",
        treatment: "Root Canal • Age 27",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80",
        rating: 5,
      },
      {
        quote: "Sample patient feedback is shown here for presentation purposes.",
        name:  "Rahul Sharma",
        treatment: "Veneers • Age 42",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80",
        rating: 5,
      },
      {
        quote: "Sample patient feedback is shown here for presentation purposes.",
        name:  "Kavitha Iyer",
        treatment: "Pediatric Care • Age 38",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=700&q=80",
        rating: 5,
      },
    ],
  },


/* ════════════════════════════════════════════════════════════════════════════
   ❓ SECTION 12 — FAQ (Common questions)
   ════════════════════════════════════════════════════════════════════════════

   Medical clinics ke liye FAQ SUPER important. Patient concerns address hote hain.

   ✏️ Apne clinic ke specific FAQs add/edit karo.
   ════════════════════════════════════════════════════════════════════════════ */

  faq: {
    sectionLabel: "Common Questions",
    heading: {
      line1: "Questions,",
      line2: "answered honestly.",
    },

    items: [
      {
        question: "Do you offer same-day appointments?",
        answer:   "The clinic can be contacted directly for urgent dental concerns and appointment requests.",
      },
      {
        question: "Is the treatment painful?",
        answer:   "Comfort and communication are important parts of the visit experience.",
      },
      {
        question: "How many visits will I need?",
        answer:   "This depends on your condition. Some treatments like whitening or fillings can be completed in one visit, while implants or orthodontics may take several visits.",
      },
      {
        question: "Do you treat children too?",
        answer:   "Absolutely. We offer child-friendly dental care, preventive guidance, and gentle treatment for growing smiles.",
      },
      {
        question: "Are your instruments and protocols safe?",
        answer:   "The clinic follows standard hygiene and care practices for appointments.",
      },
      {
        question: "Can I book online?",
        answer:   "You can request an appointment by phone or through the booking contact option on this page.",
      },
    ],
  },


/* ════════════════════════════════════════════════════════════════════════════
   📞 SECTION 13 — CONTACT (Location, booking, hours)
   ════════════════════════════════════════════════════════════════════════════

   📍 Google Maps embed:
     Maps pe clinic search karo → Share → Embed → src="..." URL copy karo
     mapEmbed me paste kardo.
   ════════════════════════════════════════════════════════════════════════════ */

  contact: {
    sectionLabel: "Visit Us",
    heading: {
      line1: "Ready to book",
      line2: "your appointment?",
    },
    description: "Use the form below to request an appointment or call the clinic directly.",

    address: {
      line1:   "Dr. Shreya's Dental Abode",
      line2:   "Anaaya Bliss Layout, AB-3",
      line3:   "Sarjapur Rd, Kodathi JHC, Bengaluru, Karnataka 560035",
    },

    phone:    "070221 32084",
    email:    "",
    whatsapp: "",

    hours: [
      { day: "Today", time: "Open until 9:00 PM" },
    ],

    emergency: {
      show: false,
      text: "",
      phone: "",
    },

    mapEmbed: "https://www.google.com/maps?q=12.8849335,77.720774&z=14&output=embed",

    form: {
      title: "Book your appointment",
      concernOptions: [
        "General dental visit",
        "Tooth pain / urgent issue",
        "Other",
      ],
    },
  },


/* ════════════════════════════════════════════════════════════════════════════
   📜 SECTION 14 — FOOTER
   ════════════════════════════════════════════════════════════════════════════ */

  footer: {
    tagline: "Dental clinic in Kodathi, Bengaluru.",
    credits: "© All rights reserved.",

    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Contact",        href: "#contact" },
    ],

    accreditations: [],
  },

};

export default siteConfig;
