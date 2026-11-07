// Database personalizzato esercizi - Workout Builder Carlo Ratto
// CDN jsDelivr collegata al repository open-source yuhonas/free-exercise-db
// Immagini verificate: 0.jpg (Partenza) e 1.jpg (Arrivo)

const BASE_IMG = "https://cdn.jsdelivr.net/gh/yuhonas/free-exercise-db@main/exercises";

const EXERCISE_DB = [
  // ==========================================
  // --- GAMBE & GLUTEI ---
  // ==========================================
  {
    id: "hack_squat",
    name: "Hack Squat",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Hack_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Hack_Squat/1.jpg`
  },
  {
    id: "leg_press_orizzontale",
    name: "Leg Press Orizzontale",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Leg_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Leg_Press/1.jpg`
  },
  {
    id: "leg_press_45",
    name: "Leg Press 45°",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Leg_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Leg_Press/1.jpg`
  },
  {
    id: "leg_press_monopodalica",
    name: "Leg Press Monopodalica",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Leg_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Leg_Press/1.jpg`
  },
  {
    id: "leg_extension",
    name: "Leg Extension",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Leg_Extensions/0.jpg`,
    imgEnd: `${BASE_IMG}/Leg_Extensions/1.jpg`
  },
  {
    id: "leg_extension_monopodalica",
    name: "Leg Extension Monopodalica",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Leg_Extensions/0.jpg`,
    imgEnd: `${BASE_IMG}/Leg_Extensions/1.jpg`
  },
  {
    id: "pendulum_squat",
    name: "Pendulum Squat",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Hack_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Hack_Squat/1.jpg`
  },
  {
    id: "belt_squat",
    name: "Belt Squat",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Barbell_Full_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Full_Squat/1.jpg`
  },
  {
    id: "hip_thrust_machine",
    name: "Hip Thrust Machine",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Barbell_Hip_Thrust/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Hip_Thrust/1.jpg`
  },
  {
    id: "glute_kickback_machine",
    name: "Glute Kick Back Machine",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Glute_Kickback/0.jpg`,
    imgEnd: `${BASE_IMG}/Glute_Kickback/1.jpg`
  },
  {
    id: "gluteus_machine",
    name: "Gluteus Machine",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Glute_Kickback/0.jpg`,
    imgEnd: `${BASE_IMG}/Glute_Kickback/1.jpg`
  },
  {
    id: "adductor",
    name: "Adductor Machine",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Side_Lunge_With_Dumbbells/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_Lunge_With_Dumbbells/1.jpg`
  },
  {
    id: "abductor",
    name: "Abductor Machine",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Glute_Kickback/0.jpg`,
    imgEnd: `${BASE_IMG}/Glute_Kickback/1.jpg`
  },
  {
    id: "leg_curl_seduto",
    name: "Leg Curl Seduto",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Seated_Leg_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Leg_Curl/1.jpg`
  },
  {
    id: "leg_curl_monopodalico",
    name: "Leg Curl Monopodalico",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Standing_Leg_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Leg_Curl/1.jpg`
  },
  {
    id: "leg_curl_sdraiato",
    name: "Leg Curl Sdraiato",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Lying_Leg_Curls/0.jpg`,
    imgEnd: `${BASE_IMG}/Lying_Leg_Curls/1.jpg`
  },
  {
    id: "leg_curl_in_piedi",
    name: "Leg Curl in Piedi",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Standing_Leg_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Leg_Curl/1.jpg`
  },
  {
    id: "standing_calf_raise_machine",
    name: "Standing Calf Raise Machine",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Standing_Calf_Raises/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Calf_Raises/1.jpg`
  },
  {
    id: "seated_calf_raise_machine",
    name: "Seated Calf Raise Machine",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Seated_Calf_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Calf_Raise/1.jpg`
  },
  {
    id: "back_squat",
    name: "Back Squat",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Barbell_Full_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Full_Squat/1.jpg`
  },
  {
    id: "front_squat",
    name: "Front Squat",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Front_Barbell_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Front_Barbell_Squat/1.jpg`
  },
  {
    id: "box_squat",
    name: "Box Squat",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Box_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Box_Squat/1.jpg`
  },
  {
    id: "pin_squat",
    name: "Pin Squat",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Barbell_Full_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Full_Squat/1.jpg`
  },
  {
    id: "squat_safety_bar",
    name: "Squat Safety Bar",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Barbell_Full_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Full_Squat/1.jpg`
  },
  {
    id: "squat_multipower",
    name: "Squat al Multipower",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Smith_Machine_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Smith_Machine_Squat/1.jpg`
  },
  {
    id: "front_squat_multipower",
    name: "Front Squat al Multipower",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Smith_Machine_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Smith_Machine_Squat/1.jpg`
  },
  {
    id: "split_squat_multipower",
    name: "Split Squat al Multipower",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Split_Squats/0.jpg`,
    imgEnd: `${BASE_IMG}/Split_Squats/1.jpg`
  },
  {
    id: "squat_bulgaro_multipower",
    name: "Squat Bulgaro al Multipower",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Split_Squats/0.jpg`,
    imgEnd: `${BASE_IMG}/Split_Squats/1.jpg`
  },
  {
    id: "sumo_squat_multipower",
    name: "Sumo Squat al Multipower",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Wide_Stance_Barbell_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Wide_Stance_Barbell_Squat/1.jpg`
  },
  {
    id: "goblet_squat",
    name: "Goblet Squat",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Goblet_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Goblet_Squat/1.jpg`
  },
  {
    id: "squat_manubri",
    name: "Squat Manubri",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Dumbbell_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Squat/1.jpg`
  },
  {
    id: "sumo_squat_manubrio",
    name: "Sumo Squat Manubrio",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Goblet_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Goblet_Squat/1.jpg`
  },
  {
    id: "squat_bulgaro_manubri",
    name: "Squat Bulgaro Manubri",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Split_Squats/0.jpg`,
    imgEnd: `${BASE_IMG}/Split_Squats/1.jpg`
  },
  {
    id: "affondi_avanti_manubri",
    name: "Affondi Avanti con Manubri",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Dumbbell_Lunges/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Lunges/1.jpg`
  },
  {
    id: "affondi_indietro_manubri",
    name: "Affondi Indietro con Manubri",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Dumbbell_Rear_Lunge/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Rear_Lunge/1.jpg`
  },
  {
    id: "affondi_laterali_manubri",
    name: "Affondi Laterali con Manubri",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Side_Lunge_With_Dumbbells/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_Lunge_With_Dumbbells/1.jpg`
  },
  {
    id: "affondi_incrociati",
    name: "Affondi Incrociati",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Dumbbell_Lunges/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Lunges/1.jpg`
  },
  {
    id: "step_up",
    name: "Step Up",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Dumbbell_Step_Ups/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Step_Ups/1.jpg`
  },
  {
    id: "pistol_squat",
    name: "Pistol Squat",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Single_Leg_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Single_Leg_Squat/1.jpg`
  },
  {
    id: "kettlebell_sumo_squat",
    name: "Kettlebell Sumo Squat",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Goblet_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Goblet_Squat/1.jpg`
  },
  {
    id: "stacco_da_terra",
    name: "Stacco da Terra",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Barbell_Deadlift/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Deadlift/1.jpg`
  },
  {
    id: "romanian_deadlift",
    name: "Romanian Deadlift Bilanciere/Manubri",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Romanian_Deadlift/0.jpg`,
    imgEnd: `${BASE_IMG}/Romanian_Deadlift/1.jpg`
  },
  {
    id: "stacco_rumeno_monopodalico",
    name: "Stacco Rumeno Monopodalico",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Romanian_Deadlift/0.jpg`,
    imgEnd: `${BASE_IMG}/Romanian_Deadlift/1.jpg`
  },
  {
    id: "stacco_rumeno_multipower",
    name: "Stacco Rumeno al Multipower",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Stiff-Legged_Barbell_Deadlift/0.jpg`,
    imgEnd: `${BASE_IMG}/Stiff-Legged_Barbell_Deadlift/1.jpg`
  },
  {
    id: "deficit_deadlift",
    name: "Deficit Deadlift",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Barbell_Deadlift/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Deadlift/1.jpg`
  },
  {
    id: "stacco_gambe_tese",
    name: "Stacco Gambe Tese",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Stiff-Legged_Barbell_Deadlift/0.jpg`,
    imgEnd: `${BASE_IMG}/Stiff-Legged_Barbell_Deadlift/1.jpg`
  },
  {
    id: "trap_bar",
    name: "Trap Bar",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Barbell_Deadlift/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Deadlift/1.jpg`
  },
  {
    id: "good_morning_bilanciere",
    name: "Good Morning Bilanciere",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Good_Morning/0.jpg`,
    imgEnd: `${BASE_IMG}/Good_Morning/1.jpg`
  },
  {
    id: "pull_through",
    name: "Pull Through",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Cable_Pull_Through/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Pull_Through/1.jpg`
  },
  {
    id: "kettlebell_deadlift",
    name: "Kettlebell Deadlift",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Kettlebell_Deadlift/0.jpg`,
    imgEnd: `${BASE_IMG}/Kettlebell_Deadlift/1.jpg`
  },
  {
    id: "kettlebell_swing",
    name: "Kettlebell Swing",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Kettlebell_Swing/0.jpg`,
    imgEnd: `${BASE_IMG}/Kettlebell_Swing/1.jpg`
  },
  {
    id: "back_extension_45",
    name: "Back Extension 45°",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Hyperextensions_Back_Extensions/0.jpg`,
    imgEnd: `${BASE_IMG}/Hyperextensions_Back_Extensions/1.jpg`
  },
  {
    id: "hip_thrust_bilanciere",
    name: "Hip Thrust Bilanciere",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Barbell_Hip_Thrust/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Hip_Thrust/1.jpg`
  },
  {
    id: "hip_thrust_multipower",
    name: "Hip Thrust Multipower",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Barbell_Hip_Thrust/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Hip_Thrust/1.jpg`
  },
  {
    id: "hip_thrust_monopodalico",
    name: "Hip Thrust Monopodalico",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Barbell_Hip_Thrust/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Hip_Thrust/1.jpg`
  },
  {
    id: "kickback_al_cavo",
    name: "Kickback al Cavo",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Glute_Kickback/0.jpg`,
    imgEnd: `${BASE_IMG}/Glute_Kickback/1.jpg`
  },
  {
    id: "abduzione_al_cavo",
    name: "Abduzione al Cavo",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Glute_Kickback/0.jpg`,
    imgEnd: `${BASE_IMG}/Glute_Kickback/1.jpg`
  },
  {
    id: "adduzione_al_cavo",
    name: "Adduzione al Cavo",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Side_Lunge_With_Dumbbells/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_Lunge_With_Dumbbells/1.jpg`
  },
  {
    id: "lateral_band_walk",
    name: "Lateral Band Walk",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Side_Lunge_With_Dumbbells/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_Lunge_With_Dumbbells/1.jpg`
  },
  {
    id: "calf_raise_step",
    name: "Calf Raise Step",
    muscle: "Gambe",
    imgStart: `${BASE_IMG}/Standing_Dumbbell_Calf_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Dumbbell_Calf_Raise/1.jpg`
  },

  // ==========================================
  // --- PETTO ---
  // ==========================================
  {
    id: "panca_piana",
    name: "Panca Piana Bilanciere",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Barbell_Bench_Press_-_Medium_Grip/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Bench_Press_-_Medium_Grip/1.jpg`
  },
  {
    id: "panca_inclinata_manubri",
    name: "Panca Inclinata con Manubri",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Incline_Dumbbell_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Incline_Dumbbell_Press/1.jpg`
  },
  {
    id: "croci_cavi",
    name: "Croci ai Cavi Medi",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Cable_Crossover/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Crossover/1.jpg`
  },

  // ==========================================
  // --- DORSO ---
  // ==========================================
  {
    id: "trazioni_sbarra",
    name: "Trazioni alla Sbarra",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Pullups/0.jpg`,
    imgEnd: `${BASE_IMG}/Pullups/1.jpg`
  },
  {
    id: "lat_machine",
    name: "Lat Machine Presa Neutra",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Wide-Grip_Lat_Pulldown/0.jpg`,
    imgEnd: `${BASE_IMG}/Wide-Grip_Lat_Pulldown/1.jpg`
  },
  {
    id: "rematore_bilanciere",
    name: "Rematore con Bilanciere",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Bent_Over_Barbell_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Bent_Over_Barbell_Row/1.jpg`
  },

  // ==========================================
  // --- SPALLE & BRACCIA ---
  // ==========================================
  {
    id: "military_press",
    name: "Military Press / Lento Avanti",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Standing_Military_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Military_Press/1.jpg`
  },
  {
    id: "alzate_laterali",
    name: "Alzate Laterali",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Side_Lateral_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_Lateral_Raise/1.jpg`
  },
  {
    id: "curl_manubri",
    name: "Curl Bicipiti con Manubri",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Dumbbell_Bicep_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Bicep_Curl/1.jpg`
  },
  {
    id: "french_press",
    name: "French Press Tricipiti",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Decline_EZ_Bar_Triceps_Extension/0.jpg`,
    imgEnd: `${BASE_IMG}/Decline_EZ_Bar_Triceps_Extension/1.jpg`
  }
];
