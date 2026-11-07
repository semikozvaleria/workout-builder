// Database personalizzato esercizi - Workout Builder Carlo Ratto
// Immagini collegate al repository open-source yuhonas/free-exercise-db
const EXERCISE_DB = [
  // ==========================================
  // --- GAMBE & GLUTEI (Elenco Completo) ---
  // ==========================================
  {
    id: "hack_squat",
    name: "Hack Squat",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sled_Hack_Squat/0.jpg"
  },
  {
    id: "leg_press_orizzontale",
    name: "Leg Press Orizzontale",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Leg_Press/0.jpg"
  },
  {
    id: "leg_press_45",
    name: "Leg Press 45°",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sled_45_Degrees_Leg_Press/0.jpg"
  },
  {
    id: "leg_press_monopodalica",
    name: "Leg Press Monopodalica",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sled_One_Leg_45_Degrees_Leg_Press/0.jpg"
  },
  {
    id: "leg_extension",
    name: "Leg Extension",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/0.jpg"
  },
  {
    id: "leg_extension_monopodalica",
    name: "Leg Extension Monopodalica",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Single_Leg_Leg_Extension/0.jpg"
  },
  {
    id: "pendulum_squat",
    name: "Pendulum Squat",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sled_Hack_Squat/0.jpg"
  },
  {
    id: "belt_squat",
    name: "Belt Squat",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Squats/0.jpg"
  },
  {
    id: "hip_thrust_machine",
    name: "Hip Thrust Machine",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lever_Hip_Thrust/0.jpg"
  },
  {
    id: "glute_kickback_machine",
    name: "Glute Kick Back Machine",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lever_Kickback/0.jpg"
  },
  {
    id: "gluteus_machine",
    name: "Gluteus Machine",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lever_Kickback/1.jpg"
  },
  {
    id: "adductor_machine",
    name: "Adductor Machine",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Thigh_Adductor/0.jpg"
  },
  {
    id: "abductor_machine",
    name: "Abductor Machine",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Thigh_Abductor/0.jpg"
  },
  {
    id: "leg_curl_seduto",
    name: "Leg Curl Seduto",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Leg_Curl/0.jpg"
  },
  {
    id: "leg_curl_monopodalico",
    name: "Leg Curl Monopodalico",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Single_Leg_Leg_Extension/0.jpg"
  },
  {
    id: "leg_curl_sdraiato",
    name: "Leg Curl Sdraiato",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/0.jpg"
  },
  {
    id: "leg_curl_in_piedi",
    name: "Leg Curl in Piedi",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Leg_Curl/0.jpg"
  },
  {
    id: "standing_calf_raise_machine",
    name: "Standing Calf Raise Machine",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/0.jpg"
  },
  {
    id: "seated_calf_raise_machine",
    name: "Seated Calf Raise Machine",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/0.jpg"
  },
  {
    id: "back_squat",
    name: "Back Squat",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg"
  },
  {
    id: "front_squat",
    name: "Front Squat",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/0.jpg"
  },
  {
    id: "box_squat",
    name: "Box Squat",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Squat/0.jpg"
  },
  {
    id: "pin_squat",
    name: "Pin Squat",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/1.jpg"
  },
  {
    id: "squat_safety_bar",
    name: "Squat Safety Bar",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg"
  },
  {
    id: "squat_multipower",
    name: "Squat al Multipower",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Squat/0.jpg"
  },
  {
    id: "front_squat_multipower",
    name: "Front Squat al Multipower",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Squat/1.jpg"
  },
  {
    id: "split_squat_multipower",
    name: "Split Squat al Multipower",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Single-Leg_Split_Squat/0.jpg"
  },
  {
    id: "squat_bulgaro_multipower",
    name: "Squat Bulgaro al Multipower",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Single-Leg_Split_Squat/1.jpg"
  },
  {
    id: "sumo_squat_multipower",
    name: "Sumo Squat al Multipower",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide_Stance_Barbell_Squat/0.jpg"
  },
  {
    id: "goblet_squat",
    name: "Goblet Squat",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/0.jpg"
  },
  {
    id: "squat_manubri",
    name: "Squat con Manubri",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Squat/0.jpg"
  },
  {
    id: "sumo_squat_manubrio",
    name: "Sumo Squat Manubrio",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plie_Dumbbell_Squat/0.jpg"
  },
  {
    id: "squat_bulgaro_manubri",
    name: "Squat Bulgaro con Manubri",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Squats/0.jpg"
  },
  {
    id: "affondi_avanti_manubri",
    name: "Affondi Avanti con Manubri",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges/0.jpg"
  },
  {
    id: "affondi_indietro_manubri",
    name: "Affondi Indietro con Manubri",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Rear_Lunge/0.jpg"
  },
  {
    id: "affondi_laterali_manubri",
    name: "Affondi Laterali con Manubri",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lunge_With_Dumbbells/0.jpg"
  },
  {
    id: "affondi_incrociati",
    name: "Affondi Incrociati (Curtsy Lunge)",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Curtsy_Lunge/0.jpg"
  },
  {
    id: "step_up",
    name: "Step Up con Manubri",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Step_Ups/0.jpg"
  },
  {
    id: "pistol_squat",
    name: "Pistol Squat",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Single_Leg_Squat/0.jpg"
  },
  {
    id: "kettlebell_sumo_squat",
    name: "Kettlebell Sumo Squat",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Sumo_Squat/0.jpg"
  },
  {
    id: "stacco_da_terra",
    name: "Stacco da Terra",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg"
  },
  {
    id: "romanian_deadlift",
    name: "Romanian Deadlift Bilanciere/Manubri",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/0.jpg"
  },
  {
    id: "stacco_rumeno_monopodalico",
    name: "Stacco Rumeno Monopodalico",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Single_Leg_Romanian_Deadlift/0.jpg"
  },
  {
    id: "stacco_rumeno_multipower",
    name: "Stacco Rumeno al Multipower",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Stiff_Legged_Deadlift/0.jpg"
  },
  {
    id: "deficit_deadlift",
    name: "Deficit Deadlift",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/1.jpg"
  },
  {
    id: "stacco_gambe_tese",
    name: "Stacco Gambe Tese",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stiff-Legged_Barbell_Deadlift/0.jpg"
  },
  {
    id: "trap_bar_deadlift",
    name: "Trap Bar Deadlift",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Trap_Bar_Deadlift/0.jpg"
  },
  {
    id: "good_morning_bilanciere",
    name: "Good Morning Bilanciere",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Good_Morning/0.jpg"
  },
  {
    id: "pull_through",
    name: "Pull Through ai Cavi",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Pull_Through/0.jpg"
  },
  {
    id: "kettlebell_deadlift",
    name: "Kettlebell Deadlift",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Deadlift/0.jpg"
  },
  {
    id: "kettlebell_swing",
    name: "Kettlebell Swing",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Swing/0.jpg"
  },
  {
    id: "back_extension_45",
    name: "Back Extension 45°",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_Back_Extensions/0.jpg"
  },
  {
    id: "hip_thrust_bilanciere",
    name: "Hip Thrust Bilanciere",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/0.jpg"
  },
  {
    id: "hip_thrust_multipower",
    name: "Hip Thrust Multipower",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Hip_Thrust/0.jpg"
  },
  {
    id: "hip_thrust_monopodalico",
    name: "Hip Thrust Monopodalico",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Single_Leg_Glute_Bridge/0.jpg"
  },
  {
    id: "kickback_al_cavo",
    name: "Kickback al Cavo",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Kickback/0.jpg"
  },
  {
    id: "abduzione_al_cavo",
    name: "Abduzione al Cavo",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Hip_Adduction/0.jpg"
  },
  {
    id: "adduzione_al_cavo",
    name: "Adduzione al Cavo",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Hip_Adduction/1.jpg"
  },
  {
    id: "lateral_band_walk",
    name: "Lateral Band Walk",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_To_Side_Box_Shuffle/0.jpg"
  },
  {
    id: "calf_raise_step",
    name: "Calf Raise su Step",
    muscle: "Gambe",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Calf_Raise/0.jpg"
  },

  // ==========================================
  // --- PETTO ---
  // ==========================================
  {
    id: "panca_piana",
    name: "Panca Piana Bilanciere",
    muscle: "Petto",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg"
  },
  {
    id: "panca_inclinata_manubri",
    name: "Panca Inclinata con Manubri",
    muscle: "Petto",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/0.jpg"
  },
  {
    id: "croci_cavi",
    name: "Croci ai Cavi Medi",
    muscle: "Petto",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crossover/0.jpg"
  },

  // ==========================================
  // --- DORSO ---
  // ==========================================
  {
    id: "trazioni_sbarra",
    name: "Trazioni alla Sbarra",
    muscle: "Dorso",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg"
  },
  {
    id: "lat_machine",
    name: "Lat Machine Presa Neutra",
    muscle: "Dorso",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Lat_Pulldown/0.jpg"
  },
  {
    id: "rematore_bilanciere",
    name: "Rematore con Bilanciere",
    muscle: "Dorso",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg"
  },

  // ==========================================
  // --- SPALLE & BRACCIA ---
  // ==========================================
  {
    id: "military_press",
    name: "Military Press / Lento Avanti",
    muscle: "Spalle",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Military_Press/0.jpg"
  },
  {
    id: "alzate_laterali",
    name: "Alzate Laterali",
    muscle: "Spalle",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg"
  },
  {
    id: "curl_manubri",
    name: "Curl Bicipiti con Manubri",
    muscle: "Braccia",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/0.jpg"
  },
  {
    id: "french_press",
    name: "French Press Tricipiti",
    muscle: "Braccia",
    img: "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_EZ_Bar_Triceps_Extension/0.jpg"
  }
];
