export const chapters9to12 = [
  {
    id: 9,
    title: "Chapter 9: Cyclone",
    content: `
# 🌀 SECTION 9: CYCLONE
💨 India's 8,041 km coastline is very vulnerable!

## 📌 Definition of Cyclone
An intense whirl in the atmosphere with very strong winds circulating in an anti-clockwise direction (in the Northern Hemisphere). It has a low-pressure center.

## 🌍 What's a Cyclone Called Around the World?
| Name | Where |
|------|-------|
| **Hurricanes** 🌀 | Atlantic Ocean and Eastern Pacific Ocean |
| **Typhoons** 🌀 | Western Pacific Ocean, north of equator |
| **Cyclones** 🌀 | Indian Ocean |

## ⚙️ How Cyclones Form — Key Requirements
• Warm ocean water greater than 26°C
• Coriolis force (why cyclones don't form within 5° of equator)
• High humidity
• Pre-existing weather disturbance
• Low wind shear

## 📊 Indian Meteorological Department Cyclone Classification
| Classification | Wind Speed (km/h) |
|----------------|-------------------|
| Deep Depression| < 52 km/h |
| Cyclonic Storm | 52–88 km/h |
| Severe Cyclonic | 89–117 km/h |
| Very Severe | 118–167 km/h |
| Extremely Severe| 168–221 km/h |
| Super Cyclonic | > 221 km/h |

## ⚠️ Cyclone Warning System — 4 Stages
1. **Pre-Cyclone Watch**: > 72 hours before
2. **Cyclone Alert**: 48 hours before
3. **Cyclone Warning**: 24 hours before
4. **Post-Landfall Outlook**: After cyclone crosses coast

## ✅ Do's and Don'ts for Cyclone
• **WHEN Cyclone Starts**: Stay away from windows. Open windows on the side OPPOSITE to wind direction. Don't go outdoors.
• **POST-CYCLONE**: Beware of snakes in flooded areas. Check electricals.
    `,
    quizzes: [
      { id: "q1", type: "mcq", question: "What is a cyclone called in the Atlantic Ocean?", options: ["Typhoon", "Hurricane", "Tornado", "Cyclone"], answer: "Hurricane" },
      { id: "q2", type: "mcq", question: "What temperature must the ocean water be for a cyclone to form?", options: ["Greater than 26°C", "Less than 20°C", "0°C", "Greater than 40°C"], answer: "Greater than 26°C" },
      { id: "q3", type: "mcq", question: "Why don't cyclones form within 5° of the equator?", options: ["Lack of Coriolis force", "Water is too warm", "High wind shear", "No humidity"], answer: "Lack of Coriolis force" },
      { id: "q4", type: "mcq", question: "At what wind speed is a storm classified as a Super Cyclonic Storm?", options: ["> 100 km/h", "> 150 km/h", "> 221 km/h", "> 500 km/h"], answer: "> 221 km/h" },
      { id: "q5", type: "mcq", question: "In the Northern Hemisphere, which direction do cyclone winds circulate?", options: ["Clockwise", "Anti-clockwise", "Straight up", "Straight down"], answer: "Anti-clockwise" },
      { id: "q6", type: "short", question: "Fill the blank: A Cyclone Warning is issued ______ hours before. (Type the number)", answer: "24" },
      { id: "q7", type: "mcq", question: "Which of these is a requirement for cyclone formation?", options: ["High wind shear", "Low humidity", "Warm ocean water > 26°C", "High pressure center"], answer: "Warm ocean water > 26°C" },
      { id: "q8", type: "mcq", question: "During a cyclone, on which side should you open windows?", options: ["Facing the wind", "Opposite to the wind", "Both sides", "No windows should be opened"], answer: "Opposite to the wind" },
      { id: "q9", type: "short", question: "India's coastline length is approximately ______ km. (Type the number only based on notes)", answer: "8041" },
      { id: "q10", type: "mcq", question: "What is the 1st stage of the Cyclone Warning System?", options: ["Cyclone Alert", "Pre-Cyclone Watch", "Cyclone Warning", "Post-Landfall Outlook"], answer: "Pre-Cyclone Watch" }
    ]
  },
  {
    id: 10,
    title: "Chapter 10: Earthquake",
    content: `
# 🏔️ SECTION 10: EARTHQUAKE
🌍 An earthquake releases millions of years of built-up stress.

## 📌 Definition
Shaking of Earth's surface resulting from a sudden release of energy in the LITHOSPHERE that creates seismic waves.

## 📖 Key Terminology
| Term | Definition |
|------|------------|
| **Focus (Hypocenter)**| Point ON THE FAULT underground where rupture occurs |
| **Epicenter** | Point on surface directly above the focus |
| **Fault Line** | Break/fracture where plates moved |

## 🔧 Types of Faults
| Fault Type | Movement | Caused By |
|------------|----------|-----------|
| **Normal** | Hanging wall moves DOWN | Tension |
| **Reverse**| Hanging wall moves UP | Compression |
| **Strike-Slip**| Rocks slip PAST each other | Shear stress |

## 🌊 Types of Seismic Waves
| Wave Type | Category | Key Properties |
|-----------|----------|----------------|
| **P-waves** | Body | Fastest; travels through solids AND liquids |
| **S-waves** | Body | Slower; CANNOT travel through liquids |
| **Love Waves** | Surface | Horizontal movement; very destructive |
| **Rayleigh Waves**| Surface | Slowest; MOST DAMAGING |

## 📏 Measuring Strength
**Richter Scale**: Logarithm base 10 of max amplitude at 100 km from epicenter.
• < 2.0: Micro
• 5.0–5.9: Moderate
• 8.0+: Great

## 🚨 Response During Earthquake
• **IF INSIDE**: DROP, COVER, and HOLD ON. Stay away from windows.
• **IF OUTSIDE**: Move away from buildings/power lines.
    `,
    quizzes: [
      { id: "q1", type: "mcq", question: "What is the point on the Earth's surface directly above the focus?", options: ["Hypocenter", "Epicenter", "Fault Line", "Richter point"], answer: "Epicenter" },
      { id: "q2", type: "mcq", question: "Which seismic waves cannot travel through liquids?", options: ["P-waves", "S-waves", "Love Waves", "Rayleigh Waves"], answer: "S-waves" },
      { id: "q3", type: "mcq", question: "Which surface waves are the most damaging?", options: ["Love Waves", "Rayleigh Waves", "P-waves", "S-waves"], answer: "Rayleigh Waves" },
      { id: "q4", type: "mcq", question: "What is the primary action to take during an earthquake inside?", options: ["Run outside", "Stand by a window", "Drop, Cover, and Hold On", "Yell for help"], answer: "Drop, Cover, and Hold On" },
      { id: "q5", type: "mcq", question: "Which fault type is caused by compression?", options: ["Normal Fault", "Reverse Fault", "Strike-Slip Fault", "None of these"], answer: "Reverse Fault" },
      { id: "q6", type: "short", question: "The Richter scale uses a logarithm to base ______. (Type number)", answer: "10" },
      { id: "q7", type: "mcq", question: "Which body wave is the fastest?", options: ["S-waves", "P-waves", "Rayleigh Waves", "Love Waves"], answer: "P-waves" },
      { id: "q8", type: "mcq", question: "What is the underground point where an earthquake rupture occurs called?", options: ["Epicenter", "Focus", "Fault Scarp", "Tectonic plate"], answer: "Focus" },
      { id: "q9", type: "short", question: "Fill the blank: ______ stress causes Strike-Slip Faults.", answer: "shear" },
      { id: "q10", type: "mcq", question: "What effect is the single most important secondary effect of earthquakes?", options: ["Tsunamis", "Fires", "Landslides", "Liquefaction"], answer: "Fires" }
    ]
  },
  {
    id: 11,
    title: "Chapter 11: Flood",
    content: `
# 🌊 SECTION 11: FLOOD
💧 Floods cover 40 million hectares in India and are the MOST COMMON natural disaster.

## 📌 Definition
An overflow of water when flow rate exceeds the channel capacity, breaks levees, or accumulates from rain/tides.

## 🗺️ Flood-Prone Areas of India
• **Uttar Pradesh**: 21.90% — HIGHEST
• **Bihar**: 12.71%
• **West Bengal**: 9.40%
• **Assam**: 7.91%
• **Total in India**: 40 million hectares (12% of total area).

## 🏗️ Flood Management — Structural vs Non-Structural
| Structural Measures | Non-Structural Measures |
|---------------------|-------------------------|
| Dams & Reservoirs | Flood forecasting |
| Embankments | Flood plain zoning |
| Channel improvement | Flood fighting (sandbags)|

## 🚨 Flood Evacuation — Critical Do's & Don'ts
| DO ✅ | DON'T ❌ |
|-------|----------|
| Stay off bridges over fast water| Don't walk/swim/drive through water |
| Keep family together | Avoid storm drains |
| Wait for official 'all-clear' | Don't drink tap water until safe |

## 🏞️ Mahanadi Flood Management — Case Study
**Hirakud Dam** regulates the Mahanadi River in Odisha. It is one of the longest earthen dams (4.8 km) in the world. It manages floods AND generates hydroelectricity.
    `,
    quizzes: [
      { id: "q1", type: "mcq", question: "Which state in India has the highest flood-prone area percentage?", options: ["Bihar", "Odisha", "Uttar Pradesh", "Assam"], answer: "Uttar Pradesh" },
      { id: "q2", type: "mcq", question: "What percentage of India's total geographical area is flood-prone?", options: ["5%", "12%", "25%", "40%"], answer: "12%" },
      { id: "q3", type: "mcq", question: "Which of the following is a Non-Structural measure for flood management?", options: ["Dams", "Embankments", "Floodplain zoning", "Channel improvement"], answer: "Floodplain zoning" },
      { id: "q4", type: "mcq", question: "What does the Hirakud Dam regulate?", options: ["Ganges River", "Mahanadi River", "Brahmaputra River", "Godavari River"], answer: "Mahanadi River" },
      { id: "q5", type: "mcq", question: "Which of the following should you NOT do during a flood?", options: ["Stay off bridges", "Wait for all-clear", "Drive through floodwaters", "Keep family together"], answer: "Drive through floodwaters" },
      { id: "q6", type: "short", question: "The Hirakud Dam is located in which state?", answer: "odisha" },
      { id: "q7", type: "mcq", question: "How long is the Hirakud Dam according to the notes?", options: ["2.1 km", "4.8 km", "10 km", "1.5 km"], answer: "4.8 km" },
      { id: "q8", type: "mcq", question: "Using sandbags falls under which type of non-structural measure?", options: ["Flood plain zoning", "Flood forecasting", "Flood fighting", "Flood insurance"], answer: "Flood fighting" },
      { id: "q9", type: "short", question: "Fill the blank: Floods are the MOST ______ natural disaster in India.", answer: "common" },
      { id: "q10", type: "mcq", question: "Which of these is the deadliest flood in history based on the notes?", options: ["2004 Indian Ocean Tsunami", "1931 China Floods", "1887 Yellow River Flood", "1971 Hanoi Flood"], answer: "1931 China Floods" }
    ]
  },
  {
    id: 12,
    title: "Chapter 12: Drought",
    content: `
# 🌵 SECTION 12: DROUGHT
☀️ Drought is the 'silent disaster' — a creeping disaster with a slow onset.

## 📌 Definition & Nature
Prolonged period of abnormally low rainfall. It is a CLIMATOLOGICAL DISASTER.
Unlike others: Slow onset, no clear end/beginning.

## 🗂️ Types of Drought
| Type | Definition |
|------|------------|
| **Meteorological** | Below-normal rainfall (triggers others) |
| **Agricultural** | Soil moisture falls below minimum needed |
| **Hydrological** | Deficit in surface/groundwater |
| **Socio-economic** | Water shortage affects economy & food |

## 🇮🇳 Drought in India
• 10% deficit in South-West Monsoon = drought conditions.
• **Nodal Ministry**: Dept. of Agriculture & Cooperation.

## 🛡️ Drought Preparedness Measures
1. **Water Conservation**: Rainwater harvesting, drip irrigation.
2. **Agricultural Adaptation**: Drought-resistant crops (millets).
3. **Community Preparedness**: Food/fodder reserves.

## 🚨 Response Strategies
• **Immediate**: Emergency water, fodder camps.
• **Short-Term**: Crop compensation.
• **Long-Term**: Interlinking rivers, major irrigation projects.

## 📋 Mitigation Measures
• **Structural**: Dams, river interlinking, desalination plants.
• **Non-Structural**: National Water Policy, Crop insurance.

💡 **PRO TIP**: Drought is the ONE disaster where PREVENTION is vastly more effective than response.
    `,
    quizzes: [
      { id: "q1", type: "mcq", question: "Which type of drought is the first to occur and triggers the others?", options: ["Hydrological", "Agricultural", "Meteorological", "Socio-economic"], answer: "Meteorological" },
      { id: "q2", type: "mcq", question: "What is drought often referred to as?", options: ["Rapid disaster", "Silent disaster", "Noisy disaster", "Wet disaster"], answer: "Silent disaster" },
      { id: "q3", type: "mcq", question: "Which Indian ministry is the Nodal Ministry for drought management?", options: ["Ministry of Home Affairs", "Ministry of Water", "Department of Agriculture & Cooperation", "Ministry of Defense"], answer: "Department of Agriculture & Cooperation" },
      { id: "q4", type: "mcq", question: "What type of disaster is a drought classified as?", options: ["Hydrological", "Climatological", "Geophysical", "Biological"], answer: "Climatological" },
      { id: "q5", type: "mcq", question: "Which crop type is recommended as a drought-resistant agricultural adaptation?", options: ["Rice", "Millets", "Sugarcane", "Wheat"], answer: "Millets" },
      { id: "q6", type: "short", question: "Fill the blank: A ______% deficit in monsoon rainfall equals drought conditions. (Type number)", answer: "10" },
      { id: "q7", type: "mcq", question: "What is an example of structural mitigation for drought?", options: ["Crop insurance", "National Water Policy", "Desalination plants", "Awareness campaigns"], answer: "Desalination plants" },
      { id: "q8", type: "mcq", question: "What occurs when water shortage begins to affect people's economic activities?", options: ["Hydrological Drought", "Agricultural Drought", "Socio-economic Drought", "Meteorological Drought"], answer: "Socio-economic Drought" },
      { id: "q9", type: "short", question: "Fill the blank: Drought has a ______ onset.", answer: "slow" },
      { id: "q10", type: "mcq", question: "Why is prevention vastly more effective than response for drought?", options: ["It's cheaper", "Effects are difficult to reverse quickly", "People don't care about drought", "It cures everything"], answer: "Effects are difficult to reverse quickly" }
    ]
  }
];
