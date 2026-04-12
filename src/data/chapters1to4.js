export const chapters1to4 = [
  {
    id: 1,
    title: "Chapter 1: Intro to Disaster Management",
    content: `
# 🌪️ SECTION 1: INTRODUCTION TO DISASTER MANAGEMENT (MD)
🌟 The word 'disaster' comes from Italian 'disastro' = 'bad star'. Ancient people blamed the stars for catastrophes. Today we know better — but disasters are still very, very bad!

## 📌 Key Definitions — Learn These Cold!
| Term | Definition | Think of it like... |
|------|------------|---------------------|
| **Hazard** | A source of potential loss/harm (natural, tech, chemical, bio, radiological) | A loaded gun — dangerous, but hasn't fired yet |
| **Emergency** | When a hazard requires IMMEDIATE coordinated response | The gun is pointed at someone — red alert! |
| **Disaster** | When emergency goes beyond what the population can handle alone | The gun fires and everyone panics |
| **Vulnerability** | Susceptibility to harm — how 'at risk' a group is | Glass vs steel — same hazard, different impact |
| **Risk** | Product of Hazard × Vulnerability | No vulnerability = no risk (e.g., cyclone in empty ocean) |
| **Capacity** | Resources/strengths to cope, withstand, and recover from disaster | Your emergency toolkit and trained team |

## 🔄 The Disaster Equation
DISASTER RISK = HAZARD × VULNERABILITY / CAPACITY
👉 More Capacity = LESS disaster impact. The formula is simple but the execution is hard!

## 🏷️ Types of Vulnerability
• **Physical Vulnerability** — Weak buildings, poor infrastructure
• **Social Vulnerability** — Children, elderly, women, marginalized groups
• **Economic Vulnerability** — Poor communities with no safety nets
• **Environmental Vulnerability** — Degraded ecosystems, deforestation

## 🏷️ Types of Capacity
• **Physical Capacity** — Equipment, buildings, roads, technology
• **Socio-economic Capacity** — Skills, social networks, financial resources

## 📊 Characteristics of Disasters
| Characteristic | What It Means |
|----------------|---------------|
| **Size and Scope** | Often beyond the local population's ability to cope alone |
| **Unpredictable** | Cannot be predicted with 100% certainty |
| **Unfamiliar** | Even repeat disasters vary by location, population density, timing |
| **Speed & Urgency** | Triggers IMMEDIATE response (think earthquake — zero warning) |
| **Threat** | Impacts not just lives/property, but psychological & economic wellbeing |

## 📌 CRED Criteria for a Disaster
CRED = Centre for Research on the Epidemiology of Disasters
For an event to be classified as a disaster, these disruptive factors must be present:
1. Death and Destruction — Emotional/psychological upheaval from losing loved ones
2. Loss of Basic Amenities — No water, no food, life at standstill
3. Disruption of Emergency Services — Hospitals in chaos
4. Destruction of Roads/Communication — Injured can't reach hospitals
5. Disorganization in Response Services — The more sudden, the more chaotic

## 🌍 Top 5 Disaster-Hit Countries (CRED Report)
| Rank | Country |
|------|---------|
| 1 | China |
| 2 | United States |
| 3 | Philippines |
| 4 | India |
| 5 | Indonesia |
    `,
    quizzes: [
      { id: "q1", type: "mcq", question: "What is the origin of the word 'disaster'?", options: ["Greek 'dis-aster'", "Italian 'disastro'", "Latin 'disastra'", "French 'désastre'"], answer: "Italian 'disastro'" },
      { id: "q2", type: "mcq", question: "What is the Disaster Equation?", options: ["Risk = Hazard + Vulnerability", "Risk = Hazard x Capacity / Vulnerability", "Risk = Hazard x Vulnerability / Capacity", "Risk = Vulnerability / Hazard"], answer: "Risk = Hazard x Vulnerability / Capacity" },
      { id: "q3", type: "mcq", question: "According to CRED, which is NOT a criterion for disaster?", options: ["Death and Destruction", "Local emergency managed easily", "Loss of Basic Amenities", "Disruption of Emergency Services"], answer: "Local emergency managed easily" },
      { id: "q4", type: "mcq", question: "Which is the most disaster-hit country according to CRED?", options: ["India", "Philippines", "China", "United States"], answer: "China" },
      { id: "q5", type: "mcq", question: "Which type of vulnerability involves weak buildings?", options: ["Social", "Physical", "Economic", "Capacity"], answer: "Physical" },
      { id: "q6", type: "short", question: "Type only the single word that means 'Resources to cope with disaster'.", answer: "capacity" },
      { id: "q7", type: "mcq", question: "How does capacity affect disaster impact?", options: ["More Capacity = MORE impact", "More Capacity = LESS impact", "It does not affect", "It causes hazards"], answer: "More Capacity = LESS impact" },
      { id: "q8", type: "short", question: "Fill the blank: ______ = Hazard x Vulnerability", answer: "risk" },
      { id: "q9", type: "mcq", question: "What does CRED stand for?", options: ["Centre for Research on the Epidemiology of Disasters", "Centre for Relief of Earth Disasters", "Council for Response to Emergency Disasters", "Center for Risk and Emergency Defense"], answer: "Centre for Research on the Epidemiology of Disasters" },
      { id: "q10", type: "mcq", question: "What triggers an immediate response with zero warning?", options: ["Speed & Urgency of a hazard", "Economic Vulnerability", "Hazard probability", "Social capacity"], answer: "Speed & Urgency of a hazard" }
    ]
  },
  {
    id: 2,
    title: "Chapter 2: Classification & Dimensions",
    content: `
## 🗂️ Classification of Disasters — The Big Picture

| Category | Sub-Type | Examples |
|----------|----------|----------|
| **NATURAL** | Meteorological | Tropical storms, extra-tropical storms, convective storms, tornadoes |
| **NATURAL** | Geophysical | Earthquakes, volcanoes, rockfall, subsidence, avalanche |
| **NATURAL** | Hydrological | General floods, storm surge/coastal floods |
| **NATURAL** | Climatological | Heat waves, cold waves, winter storms, drought, wildfire |
| **NATURAL** | Biological | Pandemics, epidemics, insect infestations |
| **NATURAL** | Extra-terrestrial | Meteor impacts, space weather |
| **MAN-MADE**| Sociological | Arson, civil disorder, terrorism |
| **MAN-MADE**| Political | War, massacre, chemical/bio/nuclear weapons, armed conflict |
| **MAN-MADE**| Industrial | Chemical spills (Bhopal 1984!), nuclear explosions, transport accidents, structural collapse |
| **MAN-MADE**| Human | Stampedes, airplane crashes, food poisoning, CO poisoning, alcohol poisoning |

💀 **The 1984 Bhopal Gas Tragedy**: 3,000+ killed when methyl isocyanate leaked from Union Carbide factory. The WORST industrial disaster in recorded history. REMEMBER THIS!

## 📐 4 Dimensions of Disasters
| Dimension | What Gets Impacted |
|-----------|--------------------|
| **Economic** | Loss of livelihoods, damage to infrastructure, GDP decline |
| **Political** | Government credibility, policy failures, international aid relations |
| **Psychological**| PTSD, trauma, community grief, depression |
| **Social** | Breakdown of family/community structures, displacement, inequality |

## 🎯 Aims of Disaster Management
Disaster Management = Activities to MINIMIZE damage using INTELLIGENT use of available resources
• Reduce impact and quantum of loss
• Create community-government teamwork
• Develop strategies to reduce/control disaster occurrences
• Formulate policies BEFORE disaster onset
🎯 **THE UNIFIED MISSION**: Reduce the quantum of loss to LIFE and PROPERTY.

## ⚖️ 15 Principles of Disaster Management (Selection)
1. Comprehensiveness — Consider ALL hazards at ALL stages
2. Prevention & Protection — Be proactive
3. Shared Responsibility — Everyone's job
4. Judicious Use of Resources — Do more with less
5. Flexibility — Have Plan B!
15. Unity — No discrimination, UNITE and work

# 📘 SECTION 2: CHAPTER 1 — DISASTER MANAGEMENT
## 🔄 The Disaster Management Cycle
M-P-R-R = 'Most People Run Randomly'
| Phase | What Happens | When? |
|-------|--------------|-------|
| **Mitigation** | Reduce long-term risks BEFORE disaster | Always — ongoing |
| **Preparedness** | Get ready — plans, training, supplies | Before disaster |
| **Response** | Immediate action during/after disaster | During & immediately after |
| **Recovery** | Rebuild, rehabilitate, restore normalcy | After disaster — can take years |
    `,
    quizzes: [
      { id: "q1", type: "mcq", question: "Which of the following is a Climatological disaster?", options: ["Earthquake", "Drought", "Terrorism", "Pandemic"], answer: "Drought" },
      { id: "q2", type: "mcq", question: "What gas leaked during the 1984 Bhopal Tragedy?", options: ["Carbon monoxide", "Methyl isocyanate", "Chlorine", "Hydrogen cyanide"], answer: "Methyl isocyanate" },
      { id: "q3", type: "mcq", question: "Which dimension of disasters involves PTSD and trauma?", options: ["Economic", "Political", "Psychological", "Social"], answer: "Psychological" },
      { id: "q4", type: "mcq", question: "Which phase of the DM cycle is 'always ongoing'?", options: ["Mitigation", "Response", "Recovery", "Preparedness"], answer: "Mitigation" },
      { id: "q5", type: "mcq", question: "What is the unified mission of disaster management aims?", options: ["Save government costs", "Reduce loss to LIFE and PROPERTY", "Enhance international aid", "Build new infrastructure"], answer: "Reduce loss to LIFE and PROPERTY" },
      { id: "q6", type: "short", question: "The mnemonic M-P-R-R stands for Mitigation, Preparedness, ________, Recovery.", answer: "response" },
      { id: "q7", type: "mcq", question: "Which sub-type of Natural disaster involves pandemics?", options: ["Meteorological", "Biological", "Hydrological", "Geophysical"], answer: "Biological" },
      { id: "q8", type: "mcq", question: "What does the 'Flexibility' principle of DM suggest?", options: ["Have Plan B", "Do more with less", "Consider all hazards", "Work alone"], answer: "Have Plan B" },
      { id: "q9", type: "short", question: "Name the worst industrial disaster in recorded history occurring in India in 1984.", answer: "bhopal" },
      { id: "q10", type: "mcq", question: "Rebuilding and rehabilitation fall under which DM cycle phase?", options: ["Mitigation", "Recovery", "Response", "Preparedness"], answer: "Recovery" }
    ]
  },
  {
    id: 3,
    title: "Chapter 3: DM Planning",
    content: `
# 📗 SECTION 3: CHAPTER 2 — DISASTER MANAGEMENT & PLANNING
📝 Benjamin Franklin said: 'By failing to prepare, you are preparing to fail.'

## 🎯 MBO — Management by Objectives
Concept by Peter Drucker (1954).
| MBO Feature | How It Applies to DM |
|-------------|----------------------|
| **Clarity** | Every worker knows their EXACT goal |
| **Timeliness** | Objectives achieved within 'operational periods' |
| **Coordination**| Emergency services work in a well-oiled network |

## 🔍 SWOT Analysis in Disaster Management
SWOT = Strengths, Weaknesses, Opportunities, Threats
| Level | What to Assess |
|-------|----------------|
| **Community Level** | Economic/social status, age groups, type of houses |
| **Regional Level** | Overall capacity, infrastructure quality |
| **National Level** | Political vulnerability, economic status |

## 🚨 Crisis Management — 3 Phases
1. **Pre-Crisis Phase**: IDENTIFY, PREVENT, PREPARE
2. **Crisis Response Phase**: RESPOND — community into action
3. **Post-Crisis Phase**: REVIEW — what went wrong?

## 🏢 Organizational Structure for DM
| Division | Responsibility |
|----------|----------------|
| Mitigation | Reduce long-term risk |
| Preparedness | Plans, training, drills |
| Response | Immediate action, rescue |
| Recovery | Rehabilitation, rebuilding |

## ⚡ Authority, Delegation & Decentralization
• **Decentralization**: Ground-level people can ACT immediately without waiting. Centralized decision-making = delays = more deaths. Decentralization saves lives!

## 🔄 Types of Control Process
| Type | How It Works |
|------|--------------|
| **Feed-Forward** | Pre-judge consequences; act proactively |
| **Concurrent** | Mid-action check: redirect if failing |
| **Feedback** | Post-action: learn from mistakes |

## 👥 Team Building — 4 Stages
1. **Forming**: Team defines problem.
2. **Storming**: Realize task is HARDER than imagined.
3. **Norming**: Accept roles, resolve conflicts.
4. **Performing**: Give BEST to meet objective.
    `,
    quizzes: [
      { id: "q1", type: "mcq", question: "Who originated the MBO concept?", options: ["Benjamin Franklin", "Peter Drucker", "Charles Richter", "Karl Marx"], answer: "Peter Drucker" },
      { id: "q2", type: "mcq", question: "In SWOT Analysis, what does 'W' stand for?", options: ["Wealth", "Warning", "Weaknesses", "Willingness"], answer: "Weaknesses" },
      { id: "q3", type: "mcq", question: "Which type of control process involves mid-action checking?", options: ["Feed-Forward", "Concurrent", "Feedback", "Reverse"], answer: "Concurrent" },
      { id: "q4", type: "mcq", question: "At which stage of team building do members realize the task is harder than imagined?", options: ["Forming", "Storming", "Norming", "Performing"], answer: "Storming" },
      { id: "q5", type: "mcq", question: "Why is decentralization important in disaster management?", options: ["Reduces costs", "Speeds up response to save lives", "Increases paperwork", "Concentrates power"], answer: "Speeds up response to save lives" },
      { id: "q6", type: "short", question: "The quote 'By failing to prepare, you are preparing to fail' is associated with Benjamin ______", answer: "franklin" },
      { id: "q7", type: "mcq", question: "Which division handles immediate action and rescue?", options: ["Mitigation", "Preparedness", "Response", "Recovery"], answer: "Response" },
      { id: "q8", type: "mcq", question: "Which crisis management phase focuses on reviewing what went wrong?", options: ["Pre-Crisis", "Crisis Response", "Post-Crisis", "Mitigation"], answer: "Post-Crisis" },
      { id: "q9", type: "short", question: "Which type of control process acts proactively before problems arise? (one word prefixed with feed-)", answer: "forward" },
      { id: "q10", type: "mcq", question: "At which SWOT level do we assess political vulnerability?", options: ["Community Level", "Regional Level", "National Level", "International Level"], answer: "National Level" }
    ]
  },
  {
    id: 4,
    title: "Chapter 4: Preparedness (Parts 1 & 2)",
    content: `
# 🛡️ SECTION 4: DISASTER PREPAREDNESS

## 📌 What IS Disaster Preparedness? (3 Elements)
1. Forecasting events and issuing WARNINGS
2. Taking PRECAUTIONARY MEASURES
3. Improving response by strengthening CAPACITY

## 🔤 The 3 A's of Disaster Preparedness
| A | What It Does |
|---|--------------|
| **AIM** | Provides Direction |
| **ACTION** | Premeditated steps to enhance ability |
| **ACCOUNTABILITY** | Explict, transparent responsibility |

## 🔬 4 Key Assessment Parameters
1. **Physical Safety**: Are structural mitigation measures effective?
2. **Hazard Awareness**: How much does community know?
3. **Organization Preparedness**: Are committees in place?
4. **Infrastructure**: Can critical services be restored?

## 6️⃣ Six Principles of Disaster Preparedness
1. Realistic Planning
2. Continuous Improvement
3. Collaboration & Coordination
4. Motivation
5. Time-Bound Implementation
6. All-Disaster Inclusiveness

## 📦 Essential Services & Logistical Readiness
Control flow of goods/services. Warehouses for medical, water, electricity & telecom.

## 📋 Contingency Planning
Plan B for when things go sideways. 3 Stages:
• **Readiness**: Resources prepared
• **Standby**: Teams on alert
• **Activation**: Plan is EXECUTED

## 👥 4 Emotional Phases of Disaster Victims
1. **Acute Phase** 😱: Pure survival instinct
2. **Reaction Stage** 🏃: Search/rescue, medical
3. **Recovery Phase** 🩹: DM teams swing into action
4. **Reorientation Phase** 🌱: Coming to terms with reality
    `,
    quizzes: [
      { id: "q1", type: "mcq", question: "What are the 3 A's of disaster preparedness?", options: ["Aim, Action, Accountability", "Alert, Assess, Act", "Aim, Aware, Alert", "Anticipate, Act, Assess"], answer: "Aim, Action, Accountability" },
      { id: "q2", type: "mcq", question: "Which emotional phase involves pure survival instinct?", options: ["Acute Phase", "Reaction Stage", "Recovery Phase", "Reorientation Phase"], answer: "Acute Phase" },
      { id: "q3", type: "mcq", question: "What is Contingency Planning?", options: ["Planning costs", "Making Plan B for unexpected failures", "Long term recovery plan", "Planning government budgets"], answer: "Making Plan B for unexpected failures" },
      { id: "q4", type: "mcq", question: "Which principle focuses on preparing for ALL hazards regardless of probability?", options: ["Realistic Planning", "All-Disaster Inclusiveness", "Continuous Improvement", "Motivation"], answer: "All-Disaster Inclusiveness" },
      { id: "q5", type: "mcq", question: "Which of the following is NOT a stage of contingency planning?", options: ["Readiness", "Standby", "Motivation", "Activation"], answer: "Motivation" },
      { id: "q6", type: "mcq", question: "Which emotional phase involves coming to terms with reality?", options: ["Reaction Stage", "Reorientation Phase", "Acute Phase", "Recovery Phase"], answer: "Reorientation Phase" },
      { id: "q7", type: "short", question: "The first A in the 3 A's of preparedness is ______", answer: "aim" },
      { id: "q8", type: "mcq", question: "Which assessment parameter focuses on whether committees are in place?", options: ["Physical Safety", "Hazard Awareness", "Organization Preparedness", "Infrastructure"], answer: "Organization Preparedness" },
      { id: "q9", type: "short", question: "The second emotional phase where victims engage in rescue is the ______ Stage.", answer: "reaction" },
      { id: "q10", type: "mcq", question: "Which of the following is one of the 3 elements of disaster preparedness?", options: ["Psychological therapy", "Forecasting events and issuing warnings", "Rebuilding infrastructure", "Tax reduction"], answer: "Forecasting events and issuing warnings" }
    ]
  }
];
