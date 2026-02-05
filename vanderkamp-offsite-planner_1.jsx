import { useState } from 'react';

// === DATA ===
const focusAreas = [
  { id: 'quarterly', label: 'Quarterly Review & Planning', desc: 'Review past 90 days, set intentions for the next' },
  { id: 'annual', label: 'Annual Strategic Planning', desc: 'Big picture reflection and goal setting' },
  { id: 'career', label: 'Career Direction', desc: 'Navigate a transition, promotion, or pivot' },
  { id: 'business', label: 'Business Strategy', desc: 'Work on your business, not in it' },
  { id: 'balance', label: 'Work-Life Realignment', desc: 'Recalibrate what you\'re paying attention to' },
  { id: 'creative', label: 'Creative Project', desc: 'Writing, designing, building something meaningful' },
  { id: 'spiritual', label: 'Personal/Spiritual Goals', desc: 'Deeper reflection on meaning and purpose' },
  { id: 'recovery', label: 'Mental Reset', desc: 'Recover from burnout, regain clarity' },
];

const workStyles = [
  { id: 'lodge', label: 'Private Lodge', desc: 'Flip chart, comfortable seating, complete privacy', icon: '🏠' },
  { id: 'library', label: 'Kempwick Library & Bar', desc: 'Browse the stacks, work around others', icon: '📚' },
  { id: 'outdoor', label: 'Outdoor Work Tables', desc: 'Tables nestled in the woods', icon: '🌲' },
  { id: 'lounge', label: 'Spa Lounge', desc: 'Semi-private, serene atmosphere', icon: '🛋️' },
];

const mindClearing = [
  { id: 'forest', label: 'Mind Clearing Loop', desc: 'Blue trail with forest bathing stops', icon: '🌿', duration: '45 min' },
  { id: 'labyrinth', label: 'Walk the Labyrinth', desc: 'Ancient practice for working through questions', icon: '🌀', duration: '20 min' },
  { id: 'salt', label: 'Salt Room Meditation', desc: 'Quiet contemplation in the salt room', icon: '🧘', duration: '30 min' },
  { id: 'hydro', label: 'Hydrotherapy Circuit', desc: 'Cold plunge and sauna for mental reset', icon: '🧊', duration: '45 min' },
  { id: 'thinking', label: 'The Thinking Loop', desc: 'Trail with reflection markers and prompts', icon: '💭', duration: '60 min' },
  { id: 'stargazing', label: 'Night Stargazing', desc: 'Telescope at the beach, gain perspective', icon: '✨', duration: '30 min' },
];

const movement = [
  { id: 'sup', label: 'Paddleboard/Kayak', desc: 'Get on the water', icon: '🚣' },
  { id: 'fitness', label: 'Fitness Room', desc: 'Full gym equipment', icon: '💪' },
  { id: 'yoga', label: 'Personal Yoga', desc: 'Guided session (add-on)', icon: '🧘‍♀️' },
  { id: 'hike', label: 'Property Exploration', desc: '850 acres of trails', icon: '🥾' },
];

const mealPreferences = [
  { id: 'cognitive', label: 'Cognitive Performance', desc: 'Optimized for sustained focus and energy' },
  { id: 'comfort', label: 'Elevated Comfort', desc: 'Restorative, locally sourced favorites' },
  { id: 'light', label: 'Light & Clean', desc: 'Simple, energizing fare' },
];

const dietaryOptions = [
  { id: 'none', label: 'No restrictions' },
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'gf', label: 'Gluten-free' },
  { id: 'dairy', label: 'Dairy-free' },
];

const addOns = [
  { id: 'coaching', label: 'Executive Coaching Session', desc: 'Pre-retreat planning call with Emergent', price: '$350' },
  { id: 'massage', label: 'Massage Therapy', desc: 'Deep tissue or relaxation', price: '$150' },
  { id: 'yoga', label: 'Private Yoga Session', desc: 'Customized practice', price: '$125' },
  { id: 'health', label: 'Health Coach Consultation', desc: 'Nutrition and wellness guidance', price: '$200' },
];

const durations = [
  { id: '2', label: '2 Nights', desc: 'Focused intensity' },
  { id: '3', label: '3 Nights', desc: 'Deeper immersion (recommended)' },
];

// === AGENDA GENERATOR ===
function generateAgenda(data) {
  const { duration, focusAreas: focuses, workStyles: workPrefs, mindClearing: mindPrefs, movement: movePrefs, arrivalTime } = data;
  const nights = parseInt(duration);
  const isEarlyArrival = arrivalTime === 'morning';
  
  const has = (arr, id) => arr?.includes(id);
  const getMindActivity = (preferred, fallback) => {
    const activity = mindClearing.find(m => has(mindPrefs, m.id) && m.id === preferred) || 
                     mindClearing.find(m => has(mindPrefs, m.id)) ||
                     mindClearing.find(m => m.id === fallback);
    return activity;
  };

  const agenda = [];

  // === DAY 1: ARRIVAL & DESCENT ===
  const day1 = {
    day: 1,
    theme: 'Arrival & Descent',
    tagline: 'Transition from doing to thinking',
    sessions: []
  };

  if (isEarlyArrival) {
    day1.sessions.push({ time: '10:00 AM', title: 'Arrival at Your Lodge', desc: 'Welcome package waiting: Field Guide, journal, compass. Take your time settling in.', type: 'arrival' });
    day1.sessions.push({ time: '11:00 AM', title: 'Property Orientation', desc: 'Brief tour of your cognitive workspace options and the 850 acres.', type: 'orientation' });
    day1.sessions.push({ time: '12:00 PM', title: 'Lunch: "Sustained Energy"', desc: 'High protein, low carb to avoid afternoon fog.', type: 'meal' });
    day1.sessions.push({ time: '1:00 PM', title: 'Digital Descent', desc: 'Optional: Lock your phone in the wooden lockbox. Begin the transition.', type: 'ritual', highlight: true });
    
    const afternoonMind = getMindActivity('forest', 'forest');
    day1.sessions.push({ time: '2:00 PM', title: afternoonMind.label, desc: afternoonMind.desc, type: 'clearing', duration: afternoonMind.duration });
    
    day1.sessions.push({ time: '4:00 PM', title: 'Field Guide: Opening Reflection', desc: 'First journaling session. What brought you here? What do you want to leave with?', type: 'work', highlight: true });
  } else {
    day1.sessions.push({ time: '3:00 PM', title: 'Arrival at Your Lodge', desc: 'Welcome package waiting: Field Guide, journal, compass. Take your time settling in.', type: 'arrival' });
    day1.sessions.push({ time: '4:00 PM', title: 'Property Orientation', desc: 'Brief tour of your cognitive workspace options.', type: 'orientation' });
    day1.sessions.push({ time: '5:00 PM', title: 'Digital Descent', desc: 'Optional: Lock your phone in the wooden lockbox. Begin the transition.', type: 'ritual', highlight: true });
  }

  day1.sessions.push({ time: '6:30 PM', title: 'Dinner: "Restorative"', desc: 'Comfort food, locally sourced. Let the day settle.', type: 'meal' });

  if (has(mindPrefs, 'stargazing')) {
    day1.sessions.push({ time: '8:30 PM', title: 'Stargazing at the Beach', desc: 'Telescope provided. Gain perspective under the night sky.', type: 'clearing' });
  } else {
    day1.sessions.push({ time: '8:30 PM', title: 'Evening Free', desc: 'Rest, read from the library, or begin journaling by firelight.', type: 'free' });
  }

  agenda.push(day1);

  // === DAY 2: DEEP WORK ===
  const day2 = {
    day: 2,
    theme: 'Deep Work',
    tagline: 'The main event—uninterrupted strategic thinking',
    sessions: []
  };

  day2.sessions.push({ time: '7:00 AM', title: 'The Coffee Ritual', desc: 'French press with local beans. A forced 4-minute slowdown to begin the day.', type: 'ritual' });

  if (has(movePrefs, 'yoga')) {
    day2.sessions.push({ time: '7:30 AM', title: 'Private Morning Yoga', desc: 'Guided session to awaken body and mind.', type: 'movement' });
  } else if (has(movePrefs, 'fitness')) {
    day2.sessions.push({ time: '7:30 AM', title: 'Morning Movement', desc: 'Fitness room session to energize.', type: 'movement' });
  }

  day2.sessions.push({ time: '8:30 AM', title: 'Breakfast: "Brain Fuel"', desc: 'Fuel for sustained cognitive performance.', type: 'meal' });

  // Morning deep work block based on focus areas
  let morningWorkTitle = 'Deep Work Block I';
  let morningWorkDesc = 'Your first uninterrupted thinking session.';
  
  if (has(focuses, 'quarterly') || has(focuses, 'annual')) {
    morningWorkTitle = 'Review: Looking Back';
    morningWorkDesc = 'Field Guide exercises: What went well? What didn\'t? What did you learn?';
  } else if (has(focuses, 'business')) {
    morningWorkTitle = 'Strategic Analysis';
    morningWorkDesc = 'Work ON your business. Flip chart available for mapping.';
  } else if (has(focuses, 'creative')) {
    morningWorkTitle = 'Creative Deep Work';
    morningWorkDesc = 'Uninterrupted time for your project.';
  }

  const preferredWorkspace = workStyles.find(w => has(workPrefs, w.id));
  if (preferredWorkspace) {
    morningWorkDesc += ` (${preferredWorkspace.label})`;
  }

  day2.sessions.push({ time: '9:30 AM', title: morningWorkTitle, desc: morningWorkDesc, type: 'work', highlight: true, duration: '2.5 hrs' });

  day2.sessions.push({ time: '12:00 PM', title: 'Lunch: "Sustained Energy"', desc: 'Refuel without the afternoon crash.', type: 'meal' });

  // Midday clearing
  const middayMind = getMindActivity('labyrinth', 'thinking');
  day2.sessions.push({ time: '1:00 PM', title: middayMind.label, desc: has(focuses, 'career') || has(focuses, 'balance') ? 'Walk with a specific question in mind.' : middayMind.desc, type: 'clearing', duration: middayMind.duration });

  // Afternoon deep work
  let afternoonWorkTitle = 'Deep Work Block II';
  let afternoonWorkDesc = 'Second focused session.';

  if (has(focuses, 'quarterly') || has(focuses, 'annual')) {
    afternoonWorkTitle = 'Planning: Looking Forward';
    afternoonWorkDesc = 'What do you want to be paying attention to? Set intentions for next 90 days.';
  } else if (has(focuses, 'balance')) {
    afternoonWorkTitle = 'Realignment Session';
    afternoonWorkDesc = 'What needs to change? What boundaries need setting?';
  } else if (has(focuses, 'career')) {
    afternoonWorkTitle = 'Decision Mapping';
    afternoonWorkDesc = 'Map out your options and the paths forward.';
  }

  day2.sessions.push({ time: '2:30 PM', title: afternoonWorkTitle, desc: afternoonWorkDesc, type: 'work', highlight: true, duration: '2 hrs' });

  // Late afternoon
  if (has(mindPrefs, 'hydro')) {
    day2.sessions.push({ time: '4:30 PM', title: 'Hydrotherapy Reset', desc: 'Cold plunge and sauna circuit. Clear the mental fog.', type: 'clearing' });
  } else if (has(movePrefs, 'sup')) {
    day2.sessions.push({ time: '4:30 PM', title: 'Time on the Water', desc: 'Paddleboard or kayak. Different perspective, different thoughts.', type: 'movement' });
  } else {
    day2.sessions.push({ time: '4:30 PM', title: 'Free Time', desc: 'Integration time. Walk, rest, or continue working.', type: 'free' });
  }

  day2.sessions.push({ time: '6:30 PM', title: 'Dinner: "Restorative"', desc: 'Evening meal. Savor it slowly.', type: 'meal' });

  if (has(mindPrefs, 'thinking')) {
    day2.sessions.push({ time: '8:00 PM', title: 'Evening Thinking Loop', desc: 'Walk the trail with reflection markers. Optional journaling at each stop.', type: 'clearing' });
  } else {
    day2.sessions.push({ time: '8:00 PM', title: 'Evening Reflection', desc: 'Journal, stargaze, or rest. Let the day\'s insights settle.', type: 'free' });
  }

  agenda.push(day2);

  // === DAY 3 (if 3 nights) or DEPARTURE DAY ===
  if (nights === 3) {
    const day3 = {
      day: 3,
      theme: 'Integration',
      tagline: 'From insight to action',
      sessions: []
    };

    day3.sessions.push({ time: '7:00 AM', title: 'The Coffee Ritual', desc: 'Morning slowdown.', type: 'ritual' });
    
    if (has(mindPrefs, 'salt')) {
      day3.sessions.push({ time: '7:30 AM', title: 'Salt Room Meditation', desc: 'Quiet contemplation before the final work session.', type: 'clearing' });
    } else if (has(movePrefs, 'hike')) {
      day3.sessions.push({ time: '7:30 AM', title: 'Morning Trail Walk', desc: 'Move the body, settle the mind.', type: 'movement' });
    }

    day3.sessions.push({ time: '8:30 AM', title: 'Breakfast', desc: 'Final morning fuel.', type: 'meal' });

    day3.sessions.push({ time: '9:30 AM', title: 'Action Planning', desc: 'Translate insights into concrete next steps. What will you do in the first week back?', type: 'work', highlight: true, duration: '2 hrs' });

    day3.sessions.push({ time: '12:00 PM', title: 'Lunch', desc: 'Midday refuel.', type: 'meal' });

    const afternoonActivity = getMindActivity('forest', 'labyrinth');
    day3.sessions.push({ time: '1:00 PM', title: 'Final ' + afternoonActivity.label, desc: 'One more immersion before tomorrow\'s departure.', type: 'clearing' });

    if (data.selectedAddOns?.includes('massage')) {
      day3.sessions.push({ time: '3:00 PM', title: 'Massage Therapy', desc: 'Release physical tension before returning.', type: 'addon' });
    } else {
      day3.sessions.push({ time: '3:00 PM', title: 'Free Afternoon', desc: 'Explore, rest, or continue refining your plan.', type: 'free' });
    }

    day3.sessions.push({ time: '6:30 PM', title: 'Final Dinner', desc: 'Celebratory meal. You\'ve done the work.', type: 'meal' });
    day3.sessions.push({ time: '8:00 PM', title: 'Time Capsule Letter', desc: 'Write a letter to your future self. Seal it with wax. We\'ll mail it in 90 days.', type: 'ritual', highlight: true });

    agenda.push(day3);
  }

  // === DEPARTURE DAY ===
  const departureDay = {
    day: nights === 3 ? 4 : 3,
    theme: 'Departure',
    tagline: 'Return with clarity',
    sessions: []
  };

  departureDay.sessions.push({ time: '7:30 AM', title: 'Final Morning', desc: 'Coffee ritual one last time. Quick journal entry: How do you feel?', type: 'ritual' });
  departureDay.sessions.push({ time: '8:30 AM', title: 'Breakfast', desc: 'Final meal before departure.', type: 'meal' });
  
  if (nights === 2) {
    departureDay.sessions.push({ time: '9:30 AM', title: 'Time Capsule Letter', desc: 'Write a letter to your future self. Seal it with wax. We\'ll mail it in 90 days.', type: 'ritual', highlight: true });
  } else {
    departureDay.sessions.push({ time: '9:30 AM', title: 'Final Reflection', desc: 'Review your Field Guide notes. Capture any last insights.', type: 'work' });
  }

  departureDay.sessions.push({ time: '11:00 AM', title: 'Departure', desc: 'Return home clear, reenergized, with a plan to realign with what matters.', type: 'departure' });
  departureDay.sessions.push({ time: '', title: 'The Drive Home', desc: 'Use this time to let insights settle. We suggest: no radio until you\'re an hour out.', type: 'note' });

  agenda.push(departureDay);

  return agenda;
}

// === MAIN COMPONENT ===
export default function VanderkampOffsitePlanner() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    arrivalDate: '',
    arrivalTime: 'afternoon',
    duration: '3',
    focusAreas: [],
    keyQuestion: '',
    workStyles: [],
    mindClearing: [],
    movement: [],
    mealPreference: '',
    dietary: [],
    selectedAddOns: [],
    notes: '',
  });
  const [agenda, setAgenda] = useState(null);

  const updateForm = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));
  const toggleSelection = (field, id) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(id) ? prev[field].filter(x => x !== id) : [...prev[field], id]
    }));
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);
  const generateFinalAgenda = () => {
    setAgenda(generateAgenda(formData));
    nextStep();
  };

  // === STYLES ===
  const s = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(170deg, #1c2a1f 0%, #0f1a12 40%, #0a110c 100%)',
      fontFamily: "'EB Garamond', Georgia, serif",
      color: '#e5e1d8',
    },
    noise: {
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.025,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    },
    header: { textAlign: 'center', padding: '52px 24px 28px', position: 'relative', zIndex: 1 },
    logo: { fontSize: '11px', letterSpacing: '5px', textTransform: 'uppercase', color: '#7d8b6f', marginBottom: '6px', fontFamily: "'DM Sans', sans-serif", fontWeight: 600 },
    title: { fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 400, margin: '0 0 6px 0', color: '#f7f5f0', lineHeight: 1.15 },
    subtitle: { fontSize: '17px', color: '#a09a8a', fontStyle: 'italic', fontWeight: 400 },
    content: { maxWidth: '680px', margin: '0 auto', padding: '20px 24px', position: 'relative', zIndex: 1 },
    steps: { display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '36px' },
    stepDot: (active, done) => ({ width: '8px', height: '8px', borderRadius: '50%', background: done ? '#7d8b6f' : active ? '#c4b896' : 'transparent', border: `1.5px solid ${active || done ? '#7d8b6f' : '#3d4a38'}`, transition: 'all 0.3s' }),
    card: { background: 'rgba(255,255,255,0.025)', borderRadius: '14px', padding: '36px', border: '1px solid rgba(125,139,111,0.12)', backdropFilter: 'blur(16px)' },
    stepTitle: { fontSize: '26px', fontWeight: 400, marginBottom: '6px', color: '#f7f5f0' },
    stepDesc: { fontSize: '15px', color: '#a09a8a', marginBottom: '28px', lineHeight: 1.55 },
    label: { display: 'block', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#7d8b6f', marginBottom: '8px', fontFamily: "'DM Sans', sans-serif", fontWeight: 600 },
    input: { width: '100%', padding: '13px 15px', fontSize: '16px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(125,139,111,0.2)', borderRadius: '7px', color: '#e5e1d8', fontFamily: "'EB Garamond', Georgia, serif", marginBottom: '18px', outline: 'none' },
    textarea: { width: '100%', padding: '13px 15px', fontSize: '16px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(125,139,111,0.2)', borderRadius: '7px', color: '#e5e1d8', fontFamily: "'EB Garamond', Georgia, serif", marginBottom: '18px', outline: 'none', minHeight: '90px', resize: 'vertical' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '22px' },
    optionCard: (sel) => ({ padding: '15px 17px', background: sel ? 'rgba(125,139,111,0.15)' : 'rgba(0,0,0,0.22)', border: `1.5px solid ${sel ? '#7d8b6f' : 'rgba(125,139,111,0.12)'}`, borderRadius: '9px', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left' }),
    optionTitle: { fontSize: '16px', fontWeight: 500, color: '#f7f5f0', marginBottom: '3px' },
    optionDesc: { fontSize: '13px', color: '#a09a8a', lineHeight: 1.35 },
    optionIcon: { fontSize: '20px', marginBottom: '6px' },
    radioGroup: { display: 'flex', gap: '10px', marginBottom: '18px', flexWrap: 'wrap' },
    radio: (sel) => ({ padding: '11px 18px', background: sel ? 'rgba(125,139,111,0.18)' : 'transparent', border: `1.5px solid ${sel ? '#7d8b6f' : 'rgba(125,139,111,0.22)'}`, borderRadius: '20px', cursor: 'pointer', fontSize: '14px', color: sel ? '#f7f5f0' : '#a09a8a', transition: 'all 0.2s', fontFamily: "'EB Garamond', Georgia, serif" }),
    btnRow: { display: 'flex', gap: '12px', marginTop: '28px' },
    btnPrimary: { flex: 1, padding: '15px 28px', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', background: 'linear-gradient(135deg, #7d8b6f 0%, #5d6b4f 100%)', color: '#0f1a12', border: 'none', borderRadius: '7px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
    btnSecondary: { padding: '15px 22px', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', background: 'transparent', color: '#7d8b6f', border: '1.5px solid rgba(125,139,111,0.35)', borderRadius: '7px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
    // Agenda styles
    agendaHeader: { textAlign: 'center', marginBottom: '36px', paddingBottom: '28px', borderBottom: '1px solid rgba(125,139,111,0.15)' },
    promise: { fontSize: '15px', color: '#c4b896', fontStyle: 'italic', marginTop: '12px' },
    dayCard: { marginBottom: '32px' },
    dayLabel: { fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#c4b896', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, marginBottom: '4px' },
    dayTheme: { fontSize: '22px', fontWeight: 400, color: '#f7f5f0', marginBottom: '2px' },
    dayTagline: { fontSize: '14px', color: '#7d8b6f', fontStyle: 'italic', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid rgba(125,139,111,0.12)' },
    session: (hl) => ({ display: 'flex', gap: '16px', padding: '14px 0', borderLeft: hl ? '2px solid #c4b896' : '2px solid transparent', paddingLeft: hl ? '14px' : '16px', marginLeft: '-16px' }),
    sessionTime: { fontSize: '12px', color: '#7d8b6f', fontFamily: "'DM Sans', sans-serif", fontWeight: 500, minWidth: '75px', paddingTop: '3px' },
    sessionTitle: { fontSize: '16px', fontWeight: 500, color: '#f7f5f0', marginBottom: '2px' },
    sessionDesc: { fontSize: '14px', color: '#a09a8a', lineHeight: 1.4 },
    sessionDuration: { fontSize: '11px', color: '#7d8b6f', marginTop: '4px', fontFamily: "'DM Sans', sans-serif" },
    summaryBox: { background: 'rgba(0,0,0,0.2)', borderRadius: '10px', padding: '20px', marginBottom: '24px' },
    summaryLabel: { fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#7d8b6f', fontFamily: "'DM Sans', sans-serif", marginBottom: '8px' },
    pills: { display: 'flex', flexWrap: 'wrap', gap: '6px' },
    pill: { padding: '5px 12px', background: 'rgba(125,139,111,0.12)', borderRadius: '14px', fontSize: '13px', color: '#c4b896' },
    footer: { textAlign: 'center', padding: '44px 24px', fontSize: '12px', color: '#4a5a44', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.5px' },
  };

  const totalSteps = 6;
  
  const renderStep = () => {
    switch(step) {
      case 0:
        return (
          <div style={s.card}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '56px', marginBottom: '20px', opacity: 0.9 }}>🧭</div>
              <h2 style={s.stepTitle}>Your Personal Offsite Begins Here</h2>
              <p style={{ ...s.stepDesc, maxWidth: '420px', margin: '0 auto 8px' }}>
                In the next few minutes, we'll design a 72-hour cognitive performance retreat tailored to exactly what you need.
              </p>
              <p style={{ ...s.stepDesc, fontSize: '16px', color: '#c4b896', fontStyle: 'italic' }}>
                Arrive with a cluttered mind. Depart clear, reenergized, with a plan to realign with what matters.
              </p>
              <button style={{ ...s.btnPrimary, marginTop: '12px' }} onClick={nextStep}>Begin Planning</button>
            </div>
          </div>
        );

      case 1:
        return (
          <div style={s.card}>
            <h2 style={s.stepTitle}>The Basics</h2>
            <p style={s.stepDesc}>When are you coming, and for how long?</p>
            
            <label style={s.label}>Your Name</label>
            <input style={s.input} value={formData.name} onChange={e => updateForm('name', e.target.value)} placeholder="First name is fine" />
            
            <label style={s.label}>Email</label>
            <input style={s.input} type="email" value={formData.email} onChange={e => updateForm('email', e.target.value)} placeholder="Where we'll send your personalized agenda" />
            
            <label style={s.label}>Arrival Date</label>
            <input style={s.input} type="date" value={formData.arrivalDate} onChange={e => updateForm('arrivalDate', e.target.value)} />
            
            <label style={s.label}>Arrival Time</label>
            <div style={s.radioGroup}>
              <div style={s.radio(formData.arrivalTime === 'morning')} onClick={() => updateForm('arrivalTime', 'morning')}>Morning (before noon)</div>
              <div style={s.radio(formData.arrivalTime === 'afternoon')} onClick={() => updateForm('arrivalTime', 'afternoon')}>Afternoon (after 2pm)</div>
            </div>
            
            <label style={s.label}>Duration</label>
            <div style={s.grid}>
              {durations.map(d => (
                <div key={d.id} style={s.optionCard(formData.duration === d.id)} onClick={() => updateForm('duration', d.id)}>
                  <div style={s.optionTitle}>{d.label}</div>
                  <div style={s.optionDesc}>{d.desc}</div>
                </div>
              ))}
            </div>
            
            <div style={s.btnRow}>
              <button style={s.btnSecondary} onClick={prevStep}>Back</button>
              <button style={s.btnPrimary} onClick={nextStep}>Continue</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div style={s.card}>
            <h2 style={s.stepTitle}>What Are You Working On?</h2>
            <p style={s.stepDesc}>Select all that apply. This shapes your "deep work" sessions.</p>
            
            <div style={s.grid}>
              {focusAreas.map(f => (
                <div key={f.id} style={s.optionCard(formData.focusAreas.includes(f.id))} onClick={() => toggleSelection('focusAreas', f.id)}>
                  <div style={s.optionTitle}>{f.label}</div>
                  <div style={s.optionDesc}>{f.desc}</div>
                </div>
              ))}
            </div>
            
            <label style={s.label}>What's the one question you want to answer? (Optional)</label>
            <textarea style={s.textarea} value={formData.keyQuestion} onChange={e => updateForm('keyQuestion', e.target.value)} placeholder="The question you'll hold in mind throughout your retreat..." />
            
            <div style={s.btnRow}>
              <button style={s.btnSecondary} onClick={prevStep}>Back</button>
              <button style={s.btnPrimary} onClick={nextStep}>Continue</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div style={s.card}>
            <h2 style={s.stepTitle}>How Do You Work Best?</h2>
            <p style={s.stepDesc}>Select your preferred environments for deep thinking.</p>
            
            <label style={s.label}>Work Spaces</label>
            <div style={s.grid}>
              {workStyles.map(w => (
                <div key={w.id} style={s.optionCard(formData.workStyles.includes(w.id))} onClick={() => toggleSelection('workStyles', w.id)}>
                  <div style={s.optionIcon}>{w.icon}</div>
                  <div style={s.optionTitle}>{w.label}</div>
                  <div style={s.optionDesc}>{w.desc}</div>
                </div>
              ))}
            </div>
            
            <label style={s.label}>Mind-Clearing Activities</label>
            <div style={s.grid}>
              {mindClearing.map(m => (
                <div key={m.id} style={s.optionCard(formData.mindClearing.includes(m.id))} onClick={() => toggleSelection('mindClearing', m.id)}>
                  <div style={s.optionIcon}>{m.icon}</div>
                  <div style={s.optionTitle}>{m.label}</div>
                  <div style={s.optionDesc}>{m.desc}</div>
                </div>
              ))}
            </div>
            
            <label style={s.label}>Movement</label>
            <div style={s.grid}>
              {movement.map(m => (
                <div key={m.id} style={s.optionCard(formData.movement.includes(m.id))} onClick={() => toggleSelection('movement', m.id)}>
                  <div style={s.optionIcon}>{m.icon}</div>
                  <div style={s.optionTitle}>{m.label}</div>
                  <div style={s.optionDesc}>{m.desc}</div>
                </div>
              ))}
            </div>
            
            <div style={s.btnRow}>
              <button style={s.btnSecondary} onClick={prevStep}>Back</button>
              <button style={s.btnPrimary} onClick={nextStep}>Continue</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div style={s.card}>
            <h2 style={s.stepTitle}>Cognitive Fuel</h2>
            <p style={s.stepDesc}>Your meals will be prepped and labeled, ready when you need them.</p>
            
            <label style={s.label}>Meal Style</label>
            <div style={s.grid}>
              {mealPreferences.map(m => (
                <div key={m.id} style={s.optionCard(formData.mealPreference === m.id)} onClick={() => updateForm('mealPreference', m.id)}>
                  <div style={s.optionTitle}>{m.label}</div>
                  <div style={s.optionDesc}>{m.desc}</div>
                </div>
              ))}
            </div>
            
            <label style={s.label}>Dietary Restrictions</label>
            <div style={s.radioGroup}>
              {dietaryOptions.map(d => (
                <div key={d.id} style={s.radio(formData.dietary.includes(d.id))} onClick={() => toggleSelection('dietary', d.id)}>{d.label}</div>
              ))}
            </div>
            
            <label style={s.label}>Add-On Services (Optional)</label>
            <div style={s.grid}>
              {addOns.map(a => (
                <div key={a.id} style={s.optionCard(formData.selectedAddOns.includes(a.id))} onClick={() => toggleSelection('selectedAddOns', a.id)}>
                  <div style={s.optionTitle}>{a.label}</div>
                  <div style={s.optionDesc}>{a.desc}</div>
                  <div style={{ fontSize: '13px', color: '#7d8b6f', marginTop: '6px' }}>{a.price}</div>
                </div>
              ))}
            </div>
            
            <div style={s.btnRow}>
              <button style={s.btnSecondary} onClick={prevStep}>Back</button>
              <button style={s.btnPrimary} onClick={nextStep}>Continue</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div style={s.card}>
            <h2 style={s.stepTitle}>Anything Else?</h2>
            <p style={s.stepDesc}>Special requests, allergies, or context that would help us prepare.</p>
            
            <textarea style={{ ...s.textarea, minHeight: '120px' }} value={formData.notes} onChange={e => updateForm('notes', e.target.value)} placeholder="E.g., I'm an early riser, I take my coffee black, I'd like extra time at the labyrinth..." />
            
            <div style={s.btnRow}>
              <button style={s.btnSecondary} onClick={prevStep}>Back</button>
              <button style={s.btnPrimary} onClick={generateFinalAgenda}>Generate My Agenda</button>
            </div>
          </div>
        );

      case 6:
        return (
          <div style={s.card}>
            <div style={s.agendaHeader}>
              <h2 style={{ ...s.stepTitle, fontSize: '30px' }}>{formData.name ? `${formData.name}'s` : 'Your'} Personal Offsite</h2>
              <p style={{ fontSize: '15px', color: '#a09a8a' }}>
                {parseInt(formData.duration) + 1} Days at Vanderkamp
                {formData.arrivalDate && ` · ${new Date(formData.arrivalDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`}
              </p>
              <p style={s.promise}>Arrive cluttered. Depart clear.</p>
            </div>

            {formData.focusAreas.length > 0 && (
              <div style={s.summaryBox}>
                <div style={s.summaryLabel}>Your Focus</div>
                <div style={s.pills}>
                  {formData.focusAreas.map(f => {
                    const focus = focusAreas.find(x => x.id === f);
                    return <span key={f} style={s.pill}>{focus?.label}</span>;
                  })}
                </div>
                {formData.keyQuestion && (
                  <p style={{ marginTop: '12px', fontSize: '15px', color: '#c4b896', fontStyle: 'italic' }}>
                    "{formData.keyQuestion}"
                  </p>
                )}
              </div>
            )}

            {agenda?.map((day, i) => (
              <div key={i} style={s.dayCard}>
                <div style={s.dayLabel}>Day {day.day}</div>
                <div style={s.dayTheme}>{day.theme}</div>
                <div style={s.dayTagline}>{day.tagline}</div>
                {day.sessions.map((sess, j) => (
                  <div key={j} style={s.session(sess.highlight)}>
                    <div style={s.sessionTime}>{sess.time}</div>
                    <div style={{ flex: 1 }}>
                      <div style={s.sessionTitle}>{sess.title}</div>
                      <div style={s.sessionDesc}>{sess.desc}</div>
                      {sess.duration && <div style={s.sessionDuration}>{sess.duration}</div>}
                    </div>
                  </div>
                ))}
              </div>
            ))}

            <div style={{ background: 'rgba(196,184,150,0.08)', borderRadius: '10px', padding: '24px', marginTop: '28px', textAlign: 'center' }}>
              <p style={{ fontSize: '16px', color: '#c4b896', marginBottom: '6px', fontStyle: 'italic' }}>
                "What you pay attention to defines you."
              </p>
              <p style={{ fontSize: '14px', color: '#7d8b6f' }}>
                This agenda is your starting point. We'll refine it together when you arrive.
              </p>
            </div>

            <div style={{ ...s.btnRow, justifyContent: 'center', marginTop: '32px' }}>
              <button style={s.btnSecondary} onClick={() => { setStep(0); setAgenda(null); }}>Start Over</button>
              <button style={s.btnPrimary} onClick={() => window.print()}>Save / Print</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={s.container}>
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <div style={s.noise} />
      
      <header style={s.header}>
        <div style={s.logo}>Vanderkamp</div>
        <h1 style={s.title}>Personal Offsite Planner</h1>
        <p style={s.subtitle}>72 hours to step outside the day-to-day</p>
      </header>
      
      {step > 0 && step < 6 && (
        <div style={s.steps}>
          {[1,2,3,4,5].map(n => <div key={n} style={s.stepDot(step === n, step > n)} />)}
        </div>
      )}
      
      <main style={s.content}>{renderStep()}</main>
      
      <footer style={s.footer}>
        850 acres · Upstate New York · A Cognitive Performance Facility
      </footer>
    </div>
  );
}
