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
    name:        "Dr. Motadu's Multispeciality Dental Clinic",
    suffix:      "Dental clinic",
    logo:        "/images/logo/clinic-logo.png",
    tagline:     "Google Maps listing",
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
      { label: "Services", href: "#treatments" },
      { label: "Contact", href: "#contact" },
    ],

    ctaButton: {
      label: "Book Appointment",
      href:  "https://wa.me/919881446168?text=" + encodeURIComponent("Hi Dr. Motadu's Multispeciality Dental Clinic, I would like to book an appointment. Please share the available time slots."),
    },

    topStrip: {
      show: true,
      text: "Open today • Call for appointment",
      phone: "098814 46168",
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
    bgImage: "https://divinesmiles.com.au/wp-content/uploads/2026/03/Divine-Imagery-scaled-1092x1092.webp",

    label: "Multispeciality dental clinic in Pune",

    headline: {
      line1: "Welcome to",
      line2: "Dr. Motadu's Dental Clinic.",
    },

    description: "Experience gentle, modern dental care in Camp, Pune with a focus on comfort, smile confidence, and long-term oral health. From preventive care to laser dentistry and cosmetic treatments, we are here to help you smile with ease.",

    primaryButton:   { label: "Book Appointment", href: "https://wa.me/919881446168?text=" + encodeURIComponent("Hi Dr. Motadu's Multispeciality Dental Clinic, I would like to book an appointment. Please share the available time slots.") },
    secondaryButton: { label: "View Location", href: "#contact" },

    stats: [
      { value: "Camp, Pune", label: "Location" },
      { value: "Laser care", label: "Speciality" },
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
      line1: "Modern dental care",
      line2: "in Camp, Pune.",
    },

    image: "public/images/about/Screenshot 2026-08-15 225654.png",

    paragraphs: [
      "Dr. Motadu's Multispeciality Dental Clinic is a trusted dental care clinic in Camp, Pune, known for gentle treatment and modern clinical technology.",
      "The clinic focuses on preventive, restorative, cosmetic, and laser dentistry with a comfort-first approach for every patient.",
    ],

    values: [
      {
        icon: "MapPin",
        title: "Address",
        description: "2nd Floor, Tej House, 202, MG Road, next to Marz-o-rin, opposite Budhani Waffers, Camp, Pune, Maharashtra 411001.",
      },
      {
        icon: "Phone",
        title: "Phone",
        description: "098814 46168",
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
    sectionLabel: "Our Services",
    heading: {
      line1: "Comprehensive dental care",
      line2: "for every smile",
    },
    description: "From preventive care to advanced laser treatments, our clinic offers personalized dental solutions for families and individuals in Pune.",

    items: [
      {
        title:       "Laser Dentistry",
        subtitle:    "Comfort-first care",
        description: "Minimally invasive dental procedures with precision, reduced discomfort, and faster healing.",
        image:       "https://www.stavyadental.com/blog/wp-content/uploads/2022/07/laser-treatment.jpg",
        icon:        "Sparkles",
        category:    "Advanced",
        duration:    "30-60 mins",
        sessions:    "As needed",
      },
      {
        title:       "Teeth Whitening",
        subtitle:    "Brighten your smile",
        description: "Professional whitening treatments designed for a brighter, more confident smile.",
        image:       "https://www.smilecentre.in/assets/images/treatments/tooth-whitening.jpg",
        icon:        "Sun",
        category:    "Cosmetic",
        duration:    "45-60 mins",
        sessions:    "Single visit",
      },
      {
        title:       "Root Canal Treatment",
        subtitle:    "Pain relief",
        description: "Gentle root canal care to save infected teeth and restore comfort and function.",
        image:       "https://forestray.dentist/wp-content/uploads/root-canal-treatment.png",
        icon:        "ShieldCheck",
        category:    "Restorative",
        duration:    "60-90 mins",
        sessions:    "1-2 visits",
      },
      {
        title:       "Dental Implants",
        subtitle:    "Permanent replacement",
        description: "Strong and natural-looking implant solutions for tooth replacement and bite stability.",
        image:       "https://www.vitaldentalcare.co.in/blog/uploads/Unlocking%20Benefits%20of%20Immediate%20Dental%20Implant%20(1).jpg",
        icon:        "Activity",
        category:    "Implants",
        duration:    "60-120 mins",
        sessions:    "Multiple visits",
      },
      {
        title:       "Smile Design",
        subtitle:    "Natural aesthetics",
        description: "Personalized cosmetic treatments to improve smile balance, shape, and appearance.",
        image:       "https://pristinealigner.com/wp-content/uploads/2021/11/teeth-2-1024x768.jpg",
        icon:        "CircleDot",
        category:    "Cosmetic",
        duration:    "45-90 mins",
        sessions:    "1-3 visits",
      },
      {
        title:       "Preventive Care",
        subtitle:    "Healthy habits",
        description: "Routine checkups, cleaning, and oral health guidance to keep your smile healthy long-term.",
        image:       "https://www.smileartdental.in/_next/image?url=%2Fimages%2Fpreventive-care.png&w=1200&q=75",
        icon:        "HeartPulse",
        category:    "Preventive",
        duration:    "30-45 mins",
        sessions:    "Regular care",
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
    sectionLabel: "Meet Your Dentist",
    heading: {
      line1: "Compassionate care,",
      line2: "expert treatment.",
    },
    description: "Your smile is guided by Dr. Motadu, a dental specialist focused on comfort, accuracy, and long-term oral health.",

    items: [
      {
        name:        "Dr. Motadu",
        title:       "Multispeciality Dental Consultant",
        qualifications: "Dental expertise in restorative and cosmetic care",
        experience:  "Trusted dental care",
        specialties: ["Laser dentistry", "Smile design", "Preventive care"],
        image:       "public/images/doctors/Screenshot 2026-08-15 225152.png",
        bio:         "Dr. Motadu is dedicated to delivering modern, patient-friendly dental care with a strong focus on precision, comfort, and long-lasting results. From routine dental care to cosmetic and restorative treatments, every consultation is tailored to the patient’s needs.",
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
    sectionLabel: "Before & After",
    heading: {
      line1: "Smile transformations,",
      line2: "before & after.",
    },
    description: "Add your treatment before-and-after photos here to showcase smile improvements and patient results.",

    items: [
      {
        treatment:    "Smile makeover",
        duration:     "3 visits over 6 weeks",
        before:       "https://www.merrickdentistry.com/wp-content/uploads/sites/1429/2015/01/case-01-1.jpg",
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
        description: "Call or WhatsApp the clinic to schedule a consultation at your convenience.",
      },
      {
        number: "02",
        title:       "Exam & diagnosis",
        description: "We assess your dental concerns, review your oral health, and explain the best treatment path.",
      },
      {
        number: "03",
        title:       "Treatment plan",
        description: "A personalized treatment plan is shared with clear guidance on care, timeline, and expected results.",
      },
      {
        number: "04",
        title:       "Follow-up care",
        description: "We support your recovery and long-term oral health with thoughtful aftercare and checkups.",
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
        answer:   "Yes, appointment availability depends on the treatment and schedule, so it is best to call or WhatsApp the clinic directly for urgent concerns.",
      },
      {
        question: "Do you provide laser dentistry?",
        answer:   "Yes. Dr. Motadu's Multispeciality Dental Clinic offers laser-based dental care for more comfortable and precise treatment experiences.",
      },
      {
        question: "How many visits will I need?",
        answer:   "This varies by procedure. Some treatments like cleaning or whitening may be completed in one visit, while implants or restorative work may need multiple appointments.",
      },
      {
        question: "Do you treat cosmetic concerns too?",
        answer:   "Yes. Smile design, teeth whitening, and cosmetic correction are part of the clinic’s services.",
      },
      {
        question: "Are the treatments safe and hygienic?",
        answer:   "The clinic follows standard sterilization and hygiene practices to provide a safe and comfortable dental experience.",
      },
      {
        question: "Can I book through WhatsApp?",
        answer:   "Yes. You can contact the clinic directly on WhatsApp to request an appointment and ask about available slots.",
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
    description: "Use the form below or contact the clinic directly to schedule your dental consultation in Pune.",

    address: {
      line1:   "Dr. Motadu's Multispeciality Dental Clinic",
      line2:   "2nd Floor, Tej House, 202, MG Road",
      line3:   "Next to Marz-o-rin, opposite Budhani Waffers, Camp, Pune, Maharashtra 411001",
    },

    phone:    "098814 46168",
    email:    "",
    whatsapp: "919881446168",

    hours: [
      { day: "Mon - Sat", time: "10:00 AM - 9:00 PM" },
      { day: "Sun", time: "10:00 AM - 2:00 PM" },
    ],

    emergency: {
      show: false,
      text: "",
      phone: "",
    },

    mapEmbed: "https://www.google.com/maps?q=Dr.Motadu's+Multispeciality+Dental+Clinic,+2nd+Floor,+Tej+House,+202,+MG+Road,+Camp,+Pune,+Maharashtra+411001&z=17&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Dr.Motadu's+Multispeciality+Dental+Clinic,+Camp,+Pune",

    form: {
      title: "Book your appointment",
      concernOptions: [
        "General dental visit",
        "Tooth pain / urgent issue",
        "Teeth whitening",
        "Smile design",
        "Other",
      ],
    },
  },


/* ════════════════════════════════════════════════════════════════════════════
   📜 SECTION 14 — FOOTER
   ════════════════════════════════════════════════════════════════════════════ */

  footer: {
    tagline: "Multispeciality dental clinic in Camp, Pune.",
    credits: "© All rights reserved.",

    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Contact",        href: "#contact" },
    ],

    accreditations: [],
  },

};

export default siteConfig;
