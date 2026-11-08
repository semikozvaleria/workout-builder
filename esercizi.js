// Database definitivo esercizi - Workout Builder Carlo Ratto
// CDN jsDelivr collegata al repository open-source yuhonas/free-exercise-db
// Immagini verificate: 0.jpg (Partenza) e 1.jpg (Arrivo)

const BASE_IMG = "https://cdn.jsdelivr.net/gh/yuhonas/free-exercise-db@main/exercises";

const EXERCISE_DB = [
  // ==========================================
  // --- SPALLE ---
  // ==========================================
  {
    id: "shoulder_press_machine",
    name: "Shoulder Press Machine",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Lever_Shoulder_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_Shoulder_Press/1.jpg`
  },
  {
    id: "lateral_raise_machine_seduta",
    name: "Lateral Raise Machine Seduta",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Lever_Lateral_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_Lateral_Raise/1.jpg`
  },
  {
    id: "lateral_raise_machine_in_piedi",
    name: "Lateral Raise Machine in Piedi",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Lever_Lateral_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_Lateral_Raise/1.jpg`
  },
  {
    id: "rear_delt_machine",
    name: "Rear Delt Machine",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Rear_Delt_Machine/0.jpg`,
    imgEnd: `${BASE_IMG}/Rear_Delt_Machine/1.jpg`
  },
  {
    id: "reverse_pec_deck",
    name: "Reverse Pec Deck",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Rear_Delt_Machine/0.jpg`,
    imgEnd: `${BASE_IMG}/Rear_Delt_Machine/1.jpg`
  },
  {
    id: "military_press_bilanciere",
    name: "Military Press Bilanciere",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Standing_Military_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Military_Press/1.jpg`
  },
  {
    id: "overhead_press_seduto",
    name: "Overhead Press Seduto",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Seated_Barbell_Military_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Barbell_Military_Press/1.jpg`
  },
  {
    id: "push_press",
    name: "Push Press",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Push_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Push_Press/1.jpg`
  },
  {
    id: "push_jerk",
    name: "Push Jerk",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Push_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Push_Press/1.jpg`
  },
  {
    id: "split_jerk",
    name: "Split Jerk",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Split_Jerk/0.jpg`,
    imgEnd: `${BASE_IMG}/Split_Jerk/1.jpg`
  },
  {
    id: "strict_press",
    name: "Strict Press",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Standing_Military_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Military_Press/1.jpg`
  },
  {
    id: "z_press",
    name: "Z Press",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Seated_Barbell_Military_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Barbell_Military_Press/1.jpg`
  },
  {
    id: "shoulder_press_multipower",
    name: "Shoulder Press al Multipower",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Smith_Machine_Overhead_Shoulder_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Smith_Machine_Overhead_Shoulder_Press/1.jpg`
  },
  {
    id: "upright_row_bilanciere",
    name: "Upright Row Bilanciere",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Upright_Barbell_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Upright_Barbell_Row/1.jpg`
  },
  {
    id: "shoulder_press_manubri_seduto",
    name: "Shoulder Press Manubri Seduto",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Seated_Dumbbell_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Dumbbell_Press/1.jpg`
  },
  {
    id: "shoulder_press_manubri_in_piedi",
    name: "Shoulder Press Manubri in Piedi",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Standing_Dumbbell_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Dumbbell_Press/1.jpg`
  },
  {
    id: "arnold_press",
    name: "Arnold Press",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Arnold_Dumbbell_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Arnold_Dumbbell_Press/1.jpg`
  },
  {
    id: "alzate_laterali_manubri",
    name: "Alzate Laterali Manubri",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Side_Lateral_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_Lateral_Raise/1.jpg`
  },
  {
    id: "alzate_laterali_seduto",
    name: "Alzate Laterali da Seduto",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Seated_Side_Lateral_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Side_Lateral_Raise/1.jpg`
  },
  {
    id: "alzate_laterali_panca_inclinata",
    name: "Alzate Laterali su Panca Inclinata",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Side_Lateral_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_Lateral_Raise/1.jpg`
  },
  {
    id: "alzate_frontali_manubri",
    name: "Alzate Frontali Manubri",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Front_Dumbbell_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Front_Dumbbell_Raise/1.jpg`
  },
  {
    id: "reverse_fly_manubri",
    name: "Reverse Fly Manubri",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench/0.jpg`,
    imgEnd: `${BASE_IMG}/Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench/1.jpg`
  },
  {
    id: "reverse_fly_panca_inclinata",
    name: "Reverse Fly su Panca Inclinata",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Incline_Bench_Two_Arm_Dumbbell_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Incline_Bench_Two_Arm_Dumbbell_Row/1.jpg`
  },
  {
    id: "y_raise_manubri",
    name: "Y Raise Manubri",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Side_Lateral_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_Lateral_Raise/1.jpg`
  },
  {
    id: "alzate_laterali_cavo_basso",
    name: "Alzate Laterali al Cavo Basso",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Cable_One_Arm_Lateral_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_One_Arm_Lateral_Raise/1.jpg`
  },
  {
    id: "alzate_laterali_cavo_dietro",
    name: "Alzate Laterali al Cavo Dietro il Corpo",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Cable_One_Arm_Lateral_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_One_Arm_Lateral_Raise/1.jpg`
  },
  {
    id: "alzate_laterali_bilaterali_cavi",
    name: "Alzate Laterali Bilaterali ai Cavi",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Cable_One_Arm_Lateral_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_One_Arm_Lateral_Raise/1.jpg`
  },
  {
    id: "alzate_frontali_cavo",
    name: "Alzate Frontali al Cavo",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Front_Cable_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Front_Cable_Raise/1.jpg`
  },
  {
    id: "reverse_fly_cavi",
    name: "Reverse Fly ai Cavi",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Cable_Rear_Delt_Fly/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Rear_Delt_Fly/1.jpg`
  },
  {
    id: "face_pull_cavo_alto",
    name: "Face Pull al Cavo Alto",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Face_Pull/0.jpg`,
    imgEnd: `${BASE_IMG}/Face_Pull/1.jpg`
  },
  {
    id: "cable_y_raise",
    name: "Cable Y Raise",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Cable_One_Arm_Lateral_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_One_Arm_Lateral_Raise/1.jpg`
  },
  {
    id: "cable_upright_row",
    name: "Cable Upright Row",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Upright_Cable_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Upright_Cable_Row/1.jpg`
  },
  {
    id: "extrarotazioni_cavo",
    name: "Extrarotazioni al Cavo",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Cable_External_Rotation/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_External_Rotation/1.jpg`
  },
  {
    id: "intrarotazioni_cavo",
    name: "Intrarotazioni al Cavo",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Cable_Internal_Rotation/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Internal_Rotation/1.jpg`
  },
  {
    id: "extrarotazioni_elastico",
    name: "Extrarotazioni con Elastico",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Cable_External_Rotation/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_External_Rotation/1.jpg`
  },
  {
    id: "band_pull_apart",
    name: "Band Pull Apart",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Band_Pull_Apart/0.jpg`,
    imgEnd: `${BASE_IMG}/Band_Pull_Apart/1.jpg`
  },
  {
    id: "shrug_manubri",
    name: "Shrug Manubri",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Dumbbell_Shrug/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Shrug/1.jpg`
  },
  {
    id: "shrug_bilanciere",
    name: "Shrug Bilanciere",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Barbell_Shrug/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Shrug/1.jpg`
  },
  {
    id: "shrug_multipower",
    name: "Shrug al Multipower",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Smith_Machine_Shrug/0.jpg`,
    imgEnd: `${BASE_IMG}/Smith_Machine_Shrug/1.jpg`
  },
  {
    id: "shrug_trap_bar",
    name: "Shrug alla Trap Bar",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Trap_Bar_Deadlift/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Shrug/1.jpg`
  },
  {
    id: "scapular_push_up",
    name: "Scapular Push-Up",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Pushups/0.jpg`,
    imgEnd: `${BASE_IMG}/Pushups/0.jpg`
  },
  {
    id: "wall_slide",
    name: "Wall Slide",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Standing_Military_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Military_Press/1.jpg`
  },
  {
    id: "prone_y_t_w_raise",
    name: "Prone Y-T-W Raise",
    muscle: "Spalle",
    imgStart: `${BASE_IMG}/Hyperextensions_Back_Extensions/0.jpg`,
    imgEnd: `${BASE_IMG}/Hyperextensions_Back_Extensions/1.jpg`
  },

  // ==========================================
  // --- BICIPITI ---
  // ==========================================
  {
    id: "biceps_curl_machine",
    name: "Biceps Curl Machine",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Lever_Preacher_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_Preacher_Curl/1.jpg`
  },
  {
    id: "preacher_curl_machine",
    name: "Preacher Curl Machine",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Lever_Preacher_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_Preacher_Curl/1.jpg`
  },
  {
    id: "curl_bilanciere_dritto",
    name: "Curl Bilanciere Dritto",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Barbell_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Curl/1.jpg`
  },
  {
    id: "curl_bilanciere_ez",
    name: "Curl Bilanciere EZ",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/EZ-Bar_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/EZ-Bar_Curl/1.jpg`
  },
  {
    id: "preacher_curl_ez",
    name: "Preacher Curl Bilanciere EZ",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Preacher_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Preacher_Curl/1.jpg`
  },
  {
    id: "spider_curl_ez",
    name: "Spider Curl Bilanciere EZ",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Spider_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Spider_Curl/1.jpg`
  },
  {
    id: "curl_manubri",
    name: "Curl Manubri",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Dumbbell_Bicep_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Bicep_Curl/1.jpg`
  },
  {
    id: "curl_manubri_seduto",
    name: "Curl Manubri da Seduto",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Seated_Dumbbell_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Dumbbell_Curl/1.jpg`
  },
  {
    id: "curl_manubri_panca_inclinata",
    name: "Curl Manubri su Panca Inclinata",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Incline_Dumbbell_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Incline_Dumbbell_Curl/1.jpg`
  },
  {
    id: "hammer_curl",
    name: "Hammer Curl",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Hammer_Curls/0.jpg`,
    imgEnd: `${BASE_IMG}/Hammer_Curls/1.jpg`
  },
  {
    id: "concentration_curl",
    name: "Concentration Curl",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Concentration_Curls/0.jpg`,
    imgEnd: `${BASE_IMG}/Concentration_Curls/1.jpg`
  },
  {
    id: "preacher_curl_manubrio",
    name: "Preacher Curl Manubrio",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/One_Arm_Dumbbell_Preacher_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/One_Arm_Dumbbell_Preacher_Curl/1.jpg`
  },
  {
    id: "spider_curl_manubri",
    name: "Spider Curl Manubri",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Spider_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Spider_Curl/1.jpg`
  },
  {
    id: "curl_cavo_basso_barra",
    name: "Curl al Cavo Basso con Barra",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Cable_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Curl/1.jpg`
  },
  {
    id: "curl_cavo_basso_corda",
    name: "Curl al Cavo Basso con Corda",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Cable_Hammer_Curls_-_Rope_Attachment/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Hammer_Curls_-_Rope_Attachment/1.jpg`
  },
  {
    id: "curl_cavo_unilaterale",
    name: "Curl al Cavo Unilaterale",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Cable_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Curl/1.jpg`
  },
  {
    id: "bayesian_curl",
    name: "Bayesian Curl",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Cable_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Curl/1.jpg`
  },
  {
    id: "high_cable_curl",
    name: "High Cable Curl",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Overhead_Cable_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Overhead_Cable_Curl/1.jpg`
  },
  {
    id: "preacher_curl_cavo",
    name: "Preacher Curl al Cavo",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Cable_Preacher_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Preacher_Curl/1.jpg`
  },
  {
    id: "hammer_curl_cavo",
    name: "Hammer Curl al Cavo",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Cable_Hammer_Curls_-_Rope_Attachment/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Hammer_Curls_-_Rope_Attachment/1.jpg`
  },
  {
    id: "reverse_curl_cavo",
    name: "Reverse Curl al Cavo",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Reverse_Cable_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Reverse_Cable_Curl/1.jpg`
  },

  // ==========================================
  // --- TRICIPITI ---
  // ==========================================
  {
    id: "triceps_extension_machine",
    name: "Triceps Extension Machine",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Lever_Triceps_Extension/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_Triceps_Extension/1.jpg`
  },
  {
    id: "dip_machine",
    name: "Dip Machine",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Lever_Seated_Dip/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_Seated_Dip/1.jpg`
  },
  {
    id: "panca_stretta_multipower",
    name: "Panca Presa Stretta al Multipower",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Smith_Machine_Close-Grip_Bench_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Smith_Machine_Close-Grip_Bench_Press/1.jpg`
  },
  {
    id: "jm_press",
    name: "JM Press",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Close-Grip_Barbell_Bench_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Close-Grip_Barbell_Bench_Press/1.jpg`
  },
  {
    id: "french_press_ez",
    name: "French Press Bilanciere EZ",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Decline_EZ_Bar_Triceps_Extension/0.jpg`,
    imgEnd: `${BASE_IMG}/Decline_EZ_Bar_Triceps_Extension/1.jpg`
  },
  {
    id: "french_press_manubrio_singolo",
    name: "French Press Manubrio Singolo",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/One_Arm_Pronated_Dumbbell_Triceps_Extension/0.jpg`,
    imgEnd: `${BASE_IMG}/One_Arm_Pronated_Dumbbell_Triceps_Extension/1.jpg`
  },
  {
    id: "french_press_due_manubri",
    name: "French Press Due Manubri",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Dumbbell_Lying_Pronated_Triceps_Extension/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Lying_Pronated_Triceps_Extension/1.jpg`
  },
  {
    id: "estensioni_tricipiti_sopra_testa_manubrio",
    name: "Estensioni Tricipiti Sopra Testa Manubrio",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Standing_Dumbbell_Triceps_Extension/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Dumbbell_Triceps_Extension/1.jpg`
  },
  {
    id: "kickback_manubrio",
    name: "Kickback Manubrio",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Tricep_Dumbbell_Kickback/0.jpg`,
    imgEnd: `${BASE_IMG}/Tricep_Dumbbell_Kickback/1.jpg`
  },
  {
    id: "pushdown_barra_dritta",
    name: "Pushdown Barra Dritta",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Triceps_Pushdown/0.jpg`,
    imgEnd: `${BASE_IMG}/Triceps_Pushdown/1.jpg`
  },
  {
    id: "pushdown_barra_v",
    name: "Pushdown Barra a V",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Triceps_Pushdown_-_V-Bar_Attachment/0.jpg`,
    imgEnd: `${BASE_IMG}/Triceps_Pushdown_-_V-Bar_Attachment/1.jpg`
  },
  {
    id: "pushdown_corda",
    name: "Pushdown Corda",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Triceps_Pushdown_-_Rope_Attachment/0.jpg`,
    imgEnd: `${BASE_IMG}/Triceps_Pushdown_-_Rope_Attachment/1.jpg`
  },
  {
    id: "pushdown_presa_inversa",
    name: "Pushdown Presa Inversa",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Reverse_Grip_Triceps_Pushdown/0.jpg`,
    imgEnd: `${BASE_IMG}/Reverse_Grip_Triceps_Pushdown/1.jpg`
  },
  {
    id: "pushdown_unilaterale",
    name: "Pushdown Unilaterale",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Cable_One_Arm_Tricep_Extension/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_One_Arm_Tricep_Extension/1.jpg`
  },
  {
    id: "pushdown_unilaterale_inversa",
    name: "Pushdown Unilaterale Presa Inversa",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Cable_One_Arm_Tricep_Extension/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_One_Arm_Tricep_Extension/1.jpg`
  },
  {
    id: "overhead_extension_corda",
    name: "Overhead Extension Corda",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Cable_Rope_Overhead_Triceps_Extension/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Rope_Overhead_Triceps_Extension/1.jpg`
  },
  {
    id: "overhead_extension_barra",
    name: "Overhead Extension Barra",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Cable_Rope_Overhead_Triceps_Extension/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Rope_Overhead_Triceps_Extension/1.jpg`
  },
  {
    id: "overhead_extension_unilaterale",
    name: "Overhead Extension Unilaterale",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Cable_One_Arm_Tricep_Extension/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_One_Arm_Tricep_Extension/1.jpg`
  },
  {
    id: "cross_body_triceps_extension",
    name: "Cross Body Triceps Extension",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Cable_One_Arm_Tricep_Extension/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_One_Arm_Tricep_Extension/1.jpg`
  },
  {
    id: "kickback_al_cavo_triceps",
    name: "Kickback al Cavo",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Tricep_Dumbbell_Kickback/0.jpg`,
    imgEnd: `${BASE_IMG}/Tricep_Dumbbell_Kickback/1.jpg`
  },
  {
    id: "estensioni_tricipiti_cavo_sdraiato",
    name: "Estensioni Tricipiti al Cavo da Sdraiato",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Cable_Lying_Triceps_Extension/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Lying_Triceps_Extension/1.jpg`
  },
  {
    id: "dip_triceps",
    name: "Dip",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Dips_-_Triceps_Version/0.jpg`,
    imgEnd: `${BASE_IMG}/Dips_-_Triceps_Version/1.jpg`
  },
  {
    id: "bodyweight_triceps_extension",
    name: "Bodyweight Triceps Extension",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Close-Grip_Push-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Close-Grip_Push-Up/1.jpg`
  },
  {
    id: "ring_triceps_extension",
    name: "Ring Triceps Extension",
    muscle: "Braccia",
    imgStart: `${BASE_IMG}/Close-Grip_Push-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Close-Grip_Push-Up/1.jpg`
  },

  // ==========================================
  // --- ADDOME / CORE / LOMBARI ---
  // ==========================================
  {
    id: "abdominal_crunch_machine",
    name: "Abdominal Crunch Machine",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Lever_Seated_Crunch/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_Seated_Crunch/1.jpg`
  },
  {
    id: "cable_crunch_ginocchio",
    name: "Cable Crunch in Ginocchio",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Kneeling_Cable_Crunch/0.jpg`,
    imgEnd: `${BASE_IMG}/Kneeling_Cable_Crunch/1.jpg`
  },
  {
    id: "pallof_press",
    name: "Pallof Press",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Cable_Internal_Rotation/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Internal_Rotation/1.jpg`
  },
  {
    id: "cable_rotation",
    name: "Cable Rotation",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Cable_Internal_Rotation/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Internal_Rotation/1.jpg`
  },
  {
    id: "crunch_classico",
    name: "Crunch",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Crunches/0.jpg`,
    imgEnd: `${BASE_IMG}/Crunches/1.jpg`
  },
  {
    id: "reverse_crunch",
    name: "Reverse Crunch",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Reverse_Crunch/0.jpg`,
    imgEnd: `${BASE_IMG}/Reverse_Crunch/1.jpg`
  },
  {
    id: "bicycle_crunch",
    name: "Bicycle Crunch",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Air_Bike/0.jpg`,
    imgEnd: `${BASE_IMG}/Air_Bike/1.jpg`
  },
  {
    id: "sit_up",
    name: "Sit-Up",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Sit-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Sit-Up/1.jpg`
  },
  {
    id: "v_up",
    name: "V-Up",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Jackknife_Sit-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Jackknife_Sit-Up/1.jpg`
  },
  {
    id: "toe_touch_crunch",
    name: "Toe Touch Crunch",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Crunches/0.jpg`,
    imgEnd: `${BASE_IMG}/Crunches/1.jpg`
  },
  {
    id: "dead_bug",
    name: "Dead Bug",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Dead_Bug/0.jpg`,
    imgEnd: `${BASE_IMG}/Dead_Bug/1.jpg`
  },
  {
    id: "dead_bug_elastico",
    name: "Dead Bug con Elastico",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Dead_Bug/0.jpg`,
    imgEnd: `${BASE_IMG}/Dead_Bug/1.jpg`
  },
  {
    id: "bird_dog",
    name: "Bird Dog",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Bird_Dog/0.jpg`,
    imgEnd: `${BASE_IMG}/Bird_Dog/1.jpg`
  },
  {
    id: "plank",
    name: "Plank",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Front_Plank/0.jpg`,
    imgEnd: `${BASE_IMG}/Front_Plank/0.jpg`
  },
  {
    id: "plank_zavorrato",
    name: "Plank Zavorrato",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Front_Plank/0.jpg`,
    imgEnd: `${BASE_IMG}/Front_Plank/0.jpg`
  },
  {
    id: "plank_sollevamento_gamba",
    name: "Plank con Sollevamento Gamba",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Front_Plank/0.jpg`,
    imgEnd: `${BASE_IMG}/Front_Plank/0.jpg`
  },
  {
    id: "side_plank",
    name: "Side Plank",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Side_Plank/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_Plank/0.jpg`
  },
  {
    id: "side_plank_abduzione",
    name: "Side Plank con Abduzione",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Side_Plank/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_Plank/0.jpg`
  },
  {
    id: "hollow_body_hold",
    name: "Hollow Body Hold",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Jackknife_Sit-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Jackknife_Sit-Up/0.jpg`
  },
  {
    id: "hollow_rock",
    name: "Hollow Rock",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Jackknife_Sit-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Jackknife_Sit-Up/1.jpg`
  },
  {
    id: "superman",
    name: "Superman",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Superman/0.jpg`,
    imgEnd: `${BASE_IMG}/Superman/1.jpg`
  },
  {
    id: "mountain_climber",
    name: "Mountain Climber",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Mountain_Climbers/0.jpg`,
    imgEnd: `${BASE_IMG}/Mountain_Climbers/1.jpg`
  },
  {
    id: "bear_crawl",
    name: "Bear Crawl",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Bear_Crawl/0.jpg`,
    imgEnd: `${BASE_IMG}/Bear_Crawl/1.jpg`
  },
  {
    id: "bear_plank",
    name: "Bear Plank",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Front_Plank/0.jpg`,
    imgEnd: `${BASE_IMG}/Front_Plank/0.jpg`
  },
  {
    id: "russian_twist",
    name: "Russian Twist",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Russian_Twist/0.jpg`,
    imgEnd: `${BASE_IMG}/Russian_Twist/1.jpg`
  },
  {
    id: "scissor_kick",
    name: "Scissor Kick",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Flutter_Kicks/0.jpg`,
    imgEnd: `${BASE_IMG}/Flutter_Kicks/1.jpg`
  },
  {
    id: "leg_raise_terra",
    name: "Leg Raise a Terra",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Flat_Bench_Lying_Leg_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Flat_Bench_Lying_Leg_Raise/1.jpg`
  },
  {
    id: "dragon_flag",
    name: "Dragon Flag",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Dragon_Flag/0.jpg`,
    imgEnd: `${BASE_IMG}/Dragon_Flag/1.jpg`
  },
  {
    id: "copenhagen_plank",
    name: "Copenhagen Plank",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Side_Plank/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_Plank/0.jpg`
  },
  {
    id: "hanging_knee_raise",
    name: "Hanging Knee Raise",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Hanging_Knee_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Hanging_Knee_Raise/1.jpg`
  },
  {
    id: "hanging_leg_raise",
    name: "Hanging Leg Raise",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Hanging_Leg_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Hanging_Leg_Raise/1.jpg`
  },
  {
    id: "toes_to_bar",
    name: "Toes-to-Bar",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Hanging_Leg_Raise/0.jpg`,
    imgEnd: `${BASE_IMG}/Hanging_Leg_Raise/1.jpg`
  },
  {
    id: "l_sit_parallele",
    name: "L-Sit Parallele",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Dips_-_Chest_Version/0.jpg`,
    imgEnd: `${BASE_IMG}/Dips_-_Chest_Version/0.jpg`
  },
  {
    id: "l_sit_sbarra",
    name: "L-Sit Sbarra",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Hanging_Leg_Raise/1.jpg`,
    imgEnd: `${BASE_IMG}/Hanging_Leg_Raise/1.jpg`
  },
  {
    id: "l_sit_anelli",
    name: "L-Sit Anelli",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Dips_-_Chest_Version/0.jpg`,
    imgEnd: `${BASE_IMG}/Dips_-_Chest_Version/0.jpg`
  },
  {
    id: "ab_wheel_rollout",
    name: "Ab Wheel Rollout",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Ab_Roller/0.jpg`,
    imgEnd: `${BASE_IMG}/Ab_Roller/1.jpg`
  },
  {
    id: "trx_body_saw",
    name: "TRX Body Saw",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Front_Plank/0.jpg`,
    imgEnd: `${BASE_IMG}/Front_Plank/0.jpg`
  },
  {
    id: "trx_knee_tuck",
    name: "TRX Knee Tuck",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Seated_Flat_Bench_Leg_Pull-In/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Flat_Bench_Leg_Pull-In/1.jpg`
  },
  {
    id: "fitball_crunch",
    name: "Fitball Crunch",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Exercise_Ball_Crunch/0.jpg`,
    imgEnd: `${BASE_IMG}/Exercise_Ball_Crunch/1.jpg`
  },
  {
    id: "back_extension_isometrica",
    name: "Back Extension Isometrica",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Hyperextensions_Back_Extensions/0.jpg`,
    imgEnd: `${BASE_IMG}/Hyperextensions_Back_Extensions/1.jpg`
  },
  {
    id: "suitcase_carry",
    name: "Suitcase Carry",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Farmers_Walk/0.jpg`,
    imgEnd: `${BASE_IMG}/Farmers_Walk/1.jpg`
  },
  {
    id: "overhead_carry",
    name: "Overhead Carry",
    muscle: "Addome",
    imgStart: `${BASE_IMG}/Standing_Dumbbell_Press/1.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Dumbbell_Press/1.jpg`
  },

  // ==========================================
  // --- SKILL & CORPO LIBERO ---
  // ==========================================
  {
    id: "bar_muscle_up",
    name: "Bar Muscle-Up",
    muscle: "Skill",
    imgStart: `${BASE_IMG}/Muscle_Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Muscle_Up/1.jpg`
  },
  {
    id: "bar_muscle_up_zavorrato",
    name: "Bar Muscle-Up Zavorrato",
    muscle: "Skill",
    imgStart: `${BASE_IMG}/Muscle_Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Muscle_Up/1.jpg`
  },
  {
    id: "bar_muscle_up_elastico",
    name: "Bar Muscle-Up con Elastico",
    muscle: "Skill",
    imgStart: `${BASE_IMG}/Muscle_Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Muscle_Up/1.jpg`
  },
  {
    id: "ring_muscle_up",
    name: "Ring Muscle-Up",
    muscle: "Skill",
    imgStart: `${BASE_IMG}/Muscle_Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Muscle_Up/1.jpg`
  },
  {
    id: "ring_muscle_up_assistito",
    name: "Ring Muscle-Up Assistito",
    muscle: "Skill",
    imgStart: `${BASE_IMG}/Muscle_Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Muscle_Up/1.jpg`
  },
  {
    id: "handstand_muro",
    name: "Handstand al Muro",
    muscle: "Skill",
    imgStart: `${BASE_IMG}/Handstand_Push-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Handstand_Push-Up/0.jpg`
  },
  {
    id: "handstand_libera",
    name: "Handstand",
    muscle: "Skill",
    imgStart: `${BASE_IMG}/Handstand_Push-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Handstand_Push-Up/0.jpg`
  },
  {
    id: "handstand_push_up",
    name: "Handstand Push-Up",
    muscle: "Skill",
    imgStart: `${BASE_IMG}/Handstand_Push-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Handstand_Push-Up/1.jpg`
  },
  {
    id: "pike_push_up",
    name: "Pike Push-Up",
    muscle: "Skill",
    imgStart: `${BASE_IMG}/Handstand_Push-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Handstand_Push-Up/1.jpg`
  },
  {
    id: "elevated_pike_push_up",
    name: "Elevated Pike Push-Up",
    muscle: "Skill",
    imgStart: `${BASE_IMG}/Handstand_Push-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Handstand_Push-Up/1.jpg`
  },

  // ==========================================
  // --- CARDIO MACCHINE ---
  // ==========================================
  {
    id: "row_erg",
    name: "RowErg – Vogatore",
    muscle: "Cardio",
    imgStart: `${BASE_IMG}/Rowing_Stationary/0.jpg`,
    imgEnd: `${BASE_IMG}/Rowing_Stationary/1.jpg`
  },
  {
    id: "skierg",
    name: "SkiErg",
    muscle: "Cardio",
    imgStart: `${BASE_IMG}/Cable_Pull_Through/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Pull_Through/1.jpg`
  },
  {
    id: "air_bike",
    name: "Air Bike",
    muscle: "Cardio",
    imgStart: `${BASE_IMG}/Bicycling_Stationary/0.jpg`,
    imgEnd: `${BASE_IMG}/Bicycling_Stationary/1.jpg`
  },
  {
    id: "bike_erg",
    name: "BikeErg",
    muscle: "Cardio",
    imgStart: `${BASE_IMG}/Bicycling_Stationary/0.jpg`,
    imgEnd: `${BASE_IMG}/Bicycling_Stationary/1.jpg`
  },
  {
    id: "cyclette",
    name: "Cyclette",
    muscle: "Cardio",
    imgStart: `${BASE_IMG}/Bicycling_Stationary/0.jpg`,
    imgEnd: `${BASE_IMG}/Bicycling_Stationary/1.jpg`
  },
  {
    id: "ellittica",
    name: "Ellittica",
    muscle: "Cardio",
    imgStart: `${BASE_IMG}/Elliptical_Trainer/0.jpg`,
    imgEnd: `${BASE_IMG}/Elliptical_Trainer/1.jpg`
  },
  {
    id: "tapis_roulant",
    name: "Tapis Roulant",
    muscle: "Cardio",
    imgStart: `${BASE_IMG}/Running_Treadmill/0.jpg`,
    imgEnd: `${BASE_IMG}/Running_Treadmill/1.jpg`
  },

  // ==========================================
  // --- PETTO (Precedentemente integrati) ---
  // ==========================================
  {
    id: "chest_press_orizzontale",
    name: "Chest Press Orizzontale",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Lever_Chest_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_Chest_Press/1.jpg`
  },
  {
    id: "incline_chest_press_30",
    name: "Incline Chest Press 30°",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Lever_Incline_Chest_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_Incline_Chest_Press/1.jpg`
  },
  {
    id: "incline_chest_press_45",
    name: "Incline Chest Press 45°",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Lever_Incline_Chest_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_Incline_Chest_Press/1.jpg`
  },
  {
    id: "decline_chest_press",
    name: "Decline Chest Press",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Decline_Dumbbell_Bench_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Decline_Dumbbell_Bench_Press/1.jpg`
  },
  {
    id: "pec_fly_machine",
    name: "Pec Fly Machine",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Butterfly/0.jpg`,
    imgEnd: `${BASE_IMG}/Butterfly/1.jpg`
  },
  {
    id: "panca_piana_bilanciere",
    name: "Panca Piana Bilanciere",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Barbell_Bench_Press_-_Medium_Grip/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Bench_Press_-_Medium_Grip/1.jpg`
  },
  {
    id: "panca_inclinata_bilanciere",
    name: "Panca Inclinata Bilanciere",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Incline_Bench_Press_-_Medium_Grip/1.jpg`
  },
  {
    id: "panca_declinata_bilanciere",
    name: "Panca Declinata Bilanciere",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Decline_Barbell_Bench_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Decline_Barbell_Bench_Press/1.jpg`
  },
  {
    id: "panca_piana_presa_stretta",
    name: "Panca Piana Presa Stretta",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Close-Grip_Barbell_Bench_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Close-Grip_Barbell_Bench_Press/1.jpg`
  },
  {
    id: "chest_dip_machine",
    name: "Chest Dip Machine",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Machine_Bench_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Machine_Bench_Press/1.jpg`
  },
  {
    id: "floor_press_bilanciere",
    name: "Floor Press Bilanciere",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Floor_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Floor_Press/1.jpg`
  },
  {
    id: "panca_piana_multipower",
    name: "Panca Piana al Multipower",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Smith_Machine_Bench_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Smith_Machine_Bench_Press/1.jpg`
  },
  {
    id: "panca_inclinata_multipower",
    name: "Panca Inclinata al Multipower",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Smith_Machine_Incline_Bench_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Smith_Machine_Incline_Bench_Press/1.jpg`
  },
  {
    id: "panca_declinata_multipower",
    name: "Panca Declinata al Multipower",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Smith_Machine_Decline_Bench_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Smith_Machine_Decline_Bench_Press/1.jpg`
  },
  {
    id: "panca_piana_manubri",
    name: "Panca Piana Manubri",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Dumbbell_Bench_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Bench_Press/1.jpg`
  },
  {
    id: "panca_inclinata_manubri",
    name: "Panca Inclinata Manubri",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Incline_Dumbbell_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Incline_Dumbbell_Press/1.jpg`
  },
  {
    id: "panca_declinata_manubri",
    name: "Panca Declinata Manubri",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Decline_Dumbbell_Bench_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Decline_Dumbbell_Bench_Press/1.jpg`
  },
  {
    id: "croci_panca_piana",
    name: "Croci Panca Piana",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Dumbbell_Flyes/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Flyes/1.jpg`
  },
  {
    id: "croci_panca_inclinata",
    name: "Croci Panca Inclinata",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Incline_Dumbbell_Flyes/0.jpg`,
    imgEnd: `${BASE_IMG}/Incline_Dumbbell_Flyes/1.jpg`
  },
  {
    id: "croci_panca_declinata",
    name: "Croci Panca Declinata",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Decline_Dumbbell_Flyes/0.jpg`,
    imgEnd: `${BASE_IMG}/Decline_Dumbbell_Flyes/1.jpg`
  },
  {
    id: "floor_press_manubri",
    name: "Floor Press Manubri",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Floor_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Floor_Press/1.jpg`
  },
  {
    id: "pullover_manubrio",
    name: "Pullover Manubrio",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Straight-Arm_Dumbbell_Pullover/0.jpg`,
    imgEnd: `${BASE_IMG}/Straight-Arm_Dumbbell_Pullover/1.jpg`
  },
  {
    id: "croci_cavi_alti",
    name: "Croci ai Cavi Alti",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Cable_Crossover/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Crossover/1.jpg`
  },
  {
    id: "croci_cavi_bassi",
    name: "Croci ai Cavi Bassi",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Low_Cable_Crossover/0.jpg`,
    imgEnd: `${BASE_IMG}/Low_Cable_Crossover/1.jpg`
  },
  {
    id: "chest_press_cavi",
    name: "Chest Press ai Cavi",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Standing_Cable_Chest_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Cable_Chest_Press/1.jpg`
  },
  {
    id: "cable_fly_su_panca",
    name: "Cable Fly su Panca",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Incline_Cable_Flye/0.jpg`,
    imgEnd: `${BASE_IMG}/Incline_Cable_Flye/1.jpg`
  },
  {
    id: "push_up_classico",
    name: "Push-Up Classico",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Pushups/0.jpg`,
    imgEnd: `${BASE_IMG}/Pushups/1.jpg`
  },
  {
    id: "push_up_inclinato",
    name: "Push-Up Inclinato",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Incline_Push-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Incline_Push-Up/1.jpg`
  },
  {
    id: "push_up_declinato",
    name: "Push-Up Declinato",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Decline_Push-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Decline_Push-Up/1.jpg`
  },
  {
    id: "push_up_presa_stretta",
    name: "Push-Up Presa Stretta",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Close-Grip_Push-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Close-Grip_Push-Up/1.jpg`
  },
  {
    id: "diamond_push_up",
    name: "Diamond Push-Up",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Diamond_Push-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Diamond_Push-Up/1.jpg`
  },
  {
    id: "push_up_zavorrato",
    name: "Push-Up Zavorrato",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Pushups/0.jpg`,
    imgEnd: `${BASE_IMG}/Pushups/1.jpg`
  },
  {
    id: "deficit_push_up",
    name: "Deficit Push-Up",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Pushups/0.jpg`,
    imgEnd: `${BASE_IMG}/Pushups/1.jpg`
  },
  {
    id: "archer_push_up",
    name: "Archer Push-Up",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Pushups/0.jpg`,
    imgEnd: `${BASE_IMG}/Pushups/1.jpg`
  },
  {
    id: "ring_push_up",
    name: "Ring Push-Up",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Pushups/0.jpg`,
    imgEnd: `${BASE_IMG}/Pushups/1.jpg`
  },
  {
    id: "dip_alle_parallele",
    name: "Dip alle Parallele",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Dips_-_Chest_Version/0.jpg`,
    imgEnd: `${BASE_IMG}/Dips_-_Chest_Version/1.jpg`
  },
  {
    id: "dip_zavorrate",
    name: "Dip Zavorrate",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Dips_-_Chest_Version/0.jpg`,
    imgEnd: `${BASE_IMG}/Dips_-_Chest_Version/1.jpg`
  },
  {
    id: "dip_assistite",
    name: "Dip Assistite",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Assisted_Chest_Dip/0.jpg`,
    imgEnd: `${BASE_IMG}/Assisted_Chest_Dip/1.jpg`
  },
  {
    id: "ring_dip",
    name: "Ring Dip",
    muscle: "Petto",
    imgStart: `${BASE_IMG}/Dips_-_Chest_Version/0.jpg`,
    imgEnd: `${BASE_IMG}/Dips_-_Chest_Version/1.jpg`
  },

  // ==========================================
  // --- DORSO (Precedentemente integrati) ---
  // ==========================================
  {
    id: "lat_machine_prona",
    name: "Lat Machine Presa Prona",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Wide-Grip_Lat_Pulldown/0.jpg`,
    imgEnd: `${BASE_IMG}/Wide-Grip_Lat_Pulldown/1.jpg`
  },
  {
    id: "lat_machine_supina",
    name: "Lat Machine Presa Supina",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Underhand_Cable_Pulldowns/0.jpg`,
    imgEnd: `${BASE_IMG}/Underhand_Cable_Pulldowns/1.jpg`
  },
  {
    id: "lat_machine_triangolo",
    name: "Lat Machine Triangolo",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/V-bar_Pull_Down/0.jpg`,
    imgEnd: `${BASE_IMG}/V-bar_Pull_Down/1.jpg`
  },
  {
    id: "lat_machine_unilaterale",
    name: "Lat Machine Unilaterale",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Wide-Grip_Lat_Pulldown/0.jpg`,
    imgEnd: `${BASE_IMG}/Wide-Grip_Lat_Pulldown/1.jpg`
  },
  {
    id: "pullover_machine",
    name: "Pullover Machine",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Straight-Arm_Pulldown/0.jpg`,
    imgEnd: `${BASE_IMG}/Straight-Arm_Pulldown/1.jpg`
  },
  {
    id: "chin_up_machine",
    name: "Chin-Up Machine",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Assisted_Pull-up/0.jpg`,
    imgEnd: `${BASE_IMG}/Assisted_Pull-up/1.jpg`
  },
  {
    id: "pulley_presa_stretta",
    name: "Pulley Presa Stretta",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Seated_Cable_Rows/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Cable_Rows/1.jpg`
  },
  {
    id: "pulley_presa_larga",
    name: "Pulley Presa Larga",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Seated_Cable_Rows/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Cable_Rows/1.jpg`
  },
  {
    id: "pulley_presa_neutra",
    name: "Pulley Presa Neutra",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Seated_Cable_Rows/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Cable_Rows/1.jpg`
  },
  {
    id: "pulley_presa_supina",
    name: "Pulley Presa Supina",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Seated_Cable_Rows/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Cable_Rows/1.jpg`
  },
  {
    id: "pulley_unilaterale",
    name: "Pulley Unilaterale",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Seated_Cable_Rows/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Cable_Rows/1.jpg`
  },
  {
    id: "high_row_machine",
    name: "High Row Machine",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Lever_High_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_High_Row/1.jpg`
  },
  {
    id: "mid_row_machine",
    name: "Mid Row Machine",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Lever_Seated_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_Seated_Row/1.jpg`
  },
  {
    id: "low_row_machine",
    name: "Low Row Machine",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Lever_Seated_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_Seated_Row/1.jpg`
  },
  {
    id: "t_bar_row_appoggio",
    name: "T-Bar Row con Appoggio",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Lever_T-bar_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_T-bar_Row/1.jpg`
  },
  {
    id: "t_bar_row_senza_appoggio",
    name: "T-Bar Row Senza Appoggio",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/T-Bar_Row_with_Handle/0.jpg`,
    imgEnd: `${BASE_IMG}/T-Bar_Row_with_Handle/1.jpg`
  },
  {
    id: "seated_row",
    name: "Seated Row",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Lever_Seated_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Lever_Seated_Row/1.jpg`
  },
  {
    id: "rematore_bilanciere_prona",
    name: "Rematore Bilanciere Presa Prona",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Bent_Over_Barbell_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Bent_Over_Barbell_Row/1.jpg`
  },
  {
    id: "rematore_bilanciere_supina",
    name: "Rematore Bilanciere Presa Supina",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Reverse_Grip_Bent-Over_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Reverse_Grip_Bent-Over_Row/1.jpg`
  },
  {
    id: "pendlay_row",
    name: "Pendlay Row",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Pendlay_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Pendlay_Row/1.jpg`
  },
  {
    id: "rematore_manubrio_unilaterale",
    name: "Rematore Manubrio Unilaterale",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/One-Arm_Dumbbell_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/One-Arm_Dumbbell_Row/1.jpg`
  },
  {
    id: "rematore_due_manubri",
    name: "Rematore Due Manubri",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Bent_Over_Two-Dumbbell_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Bent_Over_Two-Dumbbell_Row/1.jpg`
  },
  {
    id: "rematore_manubri_panca_inclinata",
    name: "Rematore Manubri su Panca Inclinata",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Incline_Bench_Two_Arm_Dumbbell_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Incline_Bench_Two_Arm_Dumbbell_Row/1.jpg`
  },
  {
    id: "rematore_manubri_gomiti_larghi",
    name: "Rematore Manubri Gomiti Larghi",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Bent_Over_Two-Dumbbell_Row_With_Palms_In/0.jpg`,
    imgEnd: `${BASE_IMG}/Bent_Over_Two-Dumbbell_Row_With_Palms_In/1.jpg`
  },
  {
    id: "renegade_row",
    name: "Renegade Row",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Alternate_Hammer_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/One-Arm_Dumbbell_Row/1.jpg`
  },
  {
    id: "dumbbell_pullover",
    name: "Dumbbell Pullover",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Straight-Arm_Dumbbell_Pullover/0.jpg`,
    imgEnd: `${BASE_IMG}/Straight-Arm_Dumbbell_Pullover/1.jpg`
  },
  {
    id: "lat_pulldown_unilaterale_cavo",
    name: "Lat Pulldown Unilaterale al Cavo",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Wide-Grip_Lat_Pulldown/0.jpg`,
    imgEnd: `${BASE_IMG}/Wide-Grip_Lat_Pulldown/1.jpg`
  },
  {
    id: "pulldown_braccia_tese",
    name: "Pulldown Braccia Tese",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Straight-Arm_Pulldown/0.jpg`,
    imgEnd: `${BASE_IMG}/Straight-Arm_Pulldown/1.jpg`
  },
  {
    id: "pullover_al_cavo",
    name: "Pullover al Cavo",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Straight-Arm_Pulldown/0.jpg`,
    imgEnd: `${BASE_IMG}/Straight-Arm_Pulldown/1.jpg`
  },
  {
    id: "rematore_unilaterale_cavo",
    name: "Rematore Unilaterale al Cavo",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Single_Arm_Cable_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Single_Arm_Cable_Row/1.jpg`
  },
  {
    id: "rematore_bilaterale_cavi",
    name: "Rematore Bilaterale ai Cavi",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Seated_Cable_Rows/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Cable_Rows/1.jpg`
  },
  {
    id: "high_cable_row",
    name: "High Cable Row",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Cable_Standing_High_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Standing_High_Row/1.jpg`
  },
  {
    id: "low_cable_row",
    name: "Low Cable Row",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Seated_Cable_Rows/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Cable_Rows/1.jpg`
  },
  {
    id: "face_pull",
    name: "Face Pull",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Face_Pull/0.jpg`,
    imgEnd: `${BASE_IMG}/Face_Pull/1.jpg`
  },
  {
    id: "pull_up_prona",
    name: "Pull-Up Presa Prona",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Pullups/0.jpg`,
    imgEnd: `${BASE_IMG}/Pullups/1.jpg`
  },
  {
    id: "pull_up_neutra",
    name: "Pull-Up Presa Neutra",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Parallel_Grip_Pull-up/0.jpg`,
    imgEnd: `${BASE_IMG}/Parallel_Grip_Pull-up/1.jpg`
  },
  {
    id: "chin_up",
    name: "Chin-Up",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Chin-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Chin-Up/1.jpg`
  },
  {
    id: "pull_up_larga",
    name: "Pull-Up Presa Larga",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Wide-Grip_Rear_Pull-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Wide-Grip_Rear_Pull-Up/1.jpg`
  },
  {
    id: "chest_to_bar_pull_up",
    name: "Chest-to-Bar Pull-Up",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Pullups/0.jpg`,
    imgEnd: `${BASE_IMG}/Pullups/1.jpg`
  },
  {
    id: "scapular_pull_up",
    name: "Scapular Pull-Up",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Pullups/0.jpg`,
    imgEnd: `${BASE_IMG}/Pullups/0.jpg`
  },
  {
    id: "australian_pull_up",
    name: "Australian Pull-Up",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Inverted_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Inverted_Row/1.jpg`
  },
  {
    id: "ring_row",
    name: "Ring Row",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Inverted_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Inverted_Row/1.jpg`
  },
  {
    id: "ring_pull_up",
    name: "Ring Pull-Up",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Pullups/0.jpg`,
    imgEnd: `${BASE_IMG}/Pullups/1.jpg`
  },
  {
    id: "ring_chin_up",
    name: "Ring Chin-Up",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Chin-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Chin-Up/1.jpg`
  },
  {
    id: "dead_hang",
    name: "Dead Hang",
    muscle: "Dorso",
    imgStart: `${BASE_IMG}/Pullups/0.jpg`,
    imgEnd: `${BASE_IMG}/Pullups/0.jpg`
  },

  // ==========================================
  // --- GAMBE & GLUTEI (Precedentemente integrati) ---
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
    imgStart: "https://i.postimg.cc/3Rj0qWqY/legpressorizzontale.jpg",
    imgEnd: "https://i.postimg.cc/3Rj0qWqY/legpressorizzontale.jpg"
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
    imgStart: "https://i.postimg.cc/yNjzrHTb/Leg-press-monopodalica.jpg",
    imgEnd: "https://i.postimg.cc/yNjzrHTb/Leg-press-monopodalica.jpg"
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
    imgStart: "https://i.postimg.cc/JhP95Qrw/Leg-Extension-Monopodalica.jpg",
    imgEnd: "https://i.postimg.cc/JhP95Qrw/Leg-Extension-Monopodalica.jpg"
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
    imgStart: "https://i.postimg.cc/v8VGbp8D/Belt-Squat.jpg",
    imgEnd: "https://i.postimg.cc/v8VGbp8D/Belt-Squat.jpg"
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
    imgStart: "https://i.postimg.cc/pdSy1zC4/Gluteus-Machine0.jpg",
    imgEnd: "https://i.postimg.cc/d0fDSr6f/Gluteus-Machine1.jpg"
  },
  {
    id: "adductor",
    name: "Adductor Machine",
    muscle: "Gambe",
    imgStart: "https://i.postimg.cc/jj1CkPc8/Adductor-Machine0.jpg",
    imgEnd: "https://i.postimg.cc/KYW4sBfp/Adductor-Machine1.jpg"
  },
  {
    id: "abductor",
    name: "Abductor Machine",
    muscle: "Gambe",
    imgStart: "https://i.postimg.cc/YSPjyYRd/Abductor-Machine0.jpg",
    imgEnd: "https://i.postimg.cc/1zd4YwBY/Abductor-Machine1.jpg"
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
    imgStart: "https://i.postimg.cc/jSLb39F9/Leg-Curl-Monopodalico.avif",
    imgEnd: "https://i.postimg.cc/jSLb39F9/Leg-Curl-Monopodalico.avif"
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
    imgStart: `https://i.postimg.cc/L8ZW1M7h/Pin-Squat.jpg`,
    imgEnd: `https://i.postimg.cc/L8ZW1M7h/Pin-Squat.jpg`
  },
  {
    id: "squat_safety_bar",
    name: "Squat Safety Bar",
    muscle: "Gambe",
    imgStart: "https://i.postimg.cc/fT12Zrb6/safety-bar-squat-800.jpg",
    imgEnd: "https://i.postimg.cc/fT12Zrb6/safety-bar-squat-800.jpg"
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
    imgStart: "https://i.postimg.cc/SstLdn2t/Split-Squat-al-Multipower.png",
    imgEnd: "https://i.postimg.cc/SstLdn2t/Split-Squat-al-Multipower.png"
  },
  {
    id: "squat_bulgaro_multipower",
    name: "Squat Bulgaro al Multipower",
    muscle: "Gambe",
    imgStart: "https://i.postimg.cc/SstLdn2t/Split-Squat-al-Multipower.png",
    imgEnd: "https://i.postimg.cc/SstLdn2t/Split-Squat-al-Multipower.png"
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
    imgStart: "https://i.postimg.cc/X75k7nX5/goblet-squat-800.jpg",
    imgEnd: "https://i.postimg.cc/X75k7nX5/goblet-squat-800.jpg"
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
    imgStart: "https://i.postimg.cc/KY8TLbcn/squabulgaromanubri0.jpg",
    imgEnd: "https://i.postimg.cc/BvnFD3ZH/squabulgaromanubri1.jpg"
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
    imgStart: "https://i.postimg.cc/xd8k8Pgm/Affondi-Laterali-con-Manubri.jpg",
    imgEnd: "https://i.postimg.cc/xd8k8Pgm/Affondi-Laterali-con-Manubri.jpg"
  },
  {
    id: "affondi_incrociati",
    name: "Affondi Incrociati",
    muscle: "Gambe",
    imgStart: "https://i.postimg.cc/VN0Y2ZDp/Affondi-incrociati.jpg",
    imgEnd: "https://i.postimg.cc/bvSz4V35/Affondi-incrociati1.jpg"
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
    imgStart: "https://i.postimg.cc/pLhbdhzv/pistol-squat.jpg",
    imgEnd: "https://i.postimg.cc/JzDVhDZL/pistol-squat1.jpg"
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
    imgStart: "https://i.postimg.cc/7YjtmBJk/stacco-rumeno-mono.avif",
    imgEnd: "https://i.postimg.cc/7YjtmBJk/stacco-rumeno-mono.avif"
  },
  {
    id: "deficit_deadlift",
    name: "Deficit Deadlift",
    muscle: "Gambe",
    imgStart: "https://i.postimg.cc/YSM3sTr0/deficit-deadlift.png",
    imgEnd: "https://i.postimg.cc/YSM3sTr0/deficit-deadlift.png"
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
  // --- FUNZIONALI ---
  // ==========================================
  {
    id: "sled_push",
    name: "Sled Push",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Sled_Push/0.jpg`,
    imgEnd: `${BASE_IMG}/Sled_Push/1.jpg`
  },
  {
    id: "sled_pull",
    name: "Sled Pull",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Sled_Pull/0.jpg`,
    imgEnd: `${BASE_IMG}/Sled_Pull/1.jpg`
  },
  {
    id: "sled_drag_indietro",
    name: "Sled Drag all'Indietro",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Sled_Pull/0.jpg`,
    imgEnd: `${BASE_IMG}/Sled_Pull/1.jpg`
  },
  {
    id: "sled_drag_avanti",
    name: "Sled Drag in Avanti",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Sled_Push/0.jpg`,
    imgEnd: `${BASE_IMG}/Sled_Push/1.jpg`
  },
  {
    id: "farmer_carry",
    name: "Farmer Carry",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Farmers_Walk/0.jpg`,
    imgEnd: `${BASE_IMG}/Farmers_Walk/1.jpg`
  },
  {
    id: "suitcase_carry_kettlebell",
    name: "Suitcase Carry Kettlebell",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Farmers_Walk/0.jpg`,
    imgEnd: `${BASE_IMG}/Farmers_Walk/1.jpg`
  },
  {
    id: "walking_lunge_sandbag",
    name: "Walking Lunge con Sandbag",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Dumbbell_Lunges/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Lunges/1.jpg`
  },
  {
    id: "box_jump",
    name: "Box Jump",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Box_Jump/0.jpg`,
    imgEnd: `${BASE_IMG}/Box_Jump/1.jpg`
  },
  {
    id: "box_step_up",
    name: "Box Step-Up",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Dumbbell_Step_Ups/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Step_Ups/1.jpg`
  },
  {
    id: "lateral_box_jump",
    name: "Lateral Box Jump",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Side_To_Side_Box_Shuffle/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_To_Side_Box_Shuffle/1.jpg`
  },
  {
    id: "broad_jump",
    name: "Broad Jump",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Box_Jump/0.jpg`,
    imgEnd: `${BASE_IMG}/Box_Jump/1.jpg`
  },
  {
    id: "squat_jump",
    name: "Squat Jump",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Jump_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Jump_Squat/1.jpg`
  },
  {
    id: "skater_jump",
    name: "Skater Jump",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Side_To_Side_Box_Shuffle/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_To_Side_Box_Shuffle/1.jpg`
  },
  {
    id: "jumping_lunge",
    name: "Jumping Lunge",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Scissor_Jumps/0.jpg`,
    imgEnd: `${BASE_IMG}/Scissor_Jumps/1.jpg`
  },
  {
    id: "jumping_jack",
    name: "Jumping Jack",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Jumping_Jacks/0.jpg`,
    imgEnd: `${BASE_IMG}/Jumping_Jacks/1.jpg`
  },
  {
    id: "high_knees",
    name: "High Knees",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/High_Knees/0.jpg`,
    imgEnd: `${BASE_IMG}/High_Knees/1.jpg`
  },
  {
    id: "burpee",
    name: "Burpee",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Burpee/0.jpg`,
    imgEnd: `${BASE_IMG}/Burpee/1.jpg`
  },
  {
    id: "american_kettlebell_swing",
    name: "American Kettlebell Swing",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Kettlebell_Swing/0.jpg`,
    imgEnd: `${BASE_IMG}/Kettlebell_Swing/1.jpg`
  },
  {
    id: "single_arm_kettlebell_swing",
    name: "Single Arm Kettlebell Swing",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/One-Arm_Kettlebell_Swings/0.jpg`,
    imgEnd: `${BASE_IMG}/One-Arm_Kettlebell_Swings/1.jpg`
  },
  {
    id: "double_kettlebell_swing",
    name: "Double Kettlebell Swing",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Kettlebell_Swing/0.jpg`,
    imgEnd: `${BASE_IMG}/Kettlebell_Swing/1.jpg`
  },
  {
    id: "kettlebell_clean",
    name: "Kettlebell Clean",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Kettlebell_Clean/0.jpg`,
    imgEnd: `${BASE_IMG}/Kettlebell_Clean/1.jpg`
  },
  {
    id: "kettlebell_snatch",
    name: "Kettlebell Snatch",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Kettlebell_Snatch/0.jpg`,
    imgEnd: `${BASE_IMG}/Kettlebell_Snatch/1.jpg`
  },
  {
    id: "kettlebell_high_pull",
    name: "Kettlebell High Pull",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Kettlebell_Sumo_High_Pull/0.jpg`,
    imgEnd: `${BASE_IMG}/Kettlebell_Sumo_High_Pull/1.jpg`
  },
  {
    id: "kettlebell_thruster",
    name: "Kettlebell Thruster",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Kettlebell_Thruster/0.jpg`,
    imgEnd: `${BASE_IMG}/Kettlebell_Thruster/1.jpg`
  },
  {
    id: "kettlebell_push_press",
    name: "Kettlebell Push Press",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Kettlebell_Push_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Kettlebell_Push_Press/1.jpg`
  },
  {
    id: "kettlebell_windmill",
    name: "Kettlebell Windmill",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Kettlebell_Windmill/0.jpg`,
    imgEnd: `${BASE_IMG}/Kettlebell_Windmill/1.jpg`
  },
  {
    id: "turkish_get_up",
    name: "Turkish Get-Up",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Turkish_Get-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Turkish_Get-Up/1.jpg`
  },
  {
    id: "kettlebell_halo",
    name: "Kettlebell Halo",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Kettlebell_Halo/0.jpg`,
    imgEnd: `${BASE_IMG}/Kettlebell_Halo/1.jpg`
  },
  {
    id: "kettlebell_bottom_up_press",
    name: "Kettlebell Bottom-Up Press",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Kettlebell_Push_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Kettlebell_Push_Press/1.jpg`
  },
  {
    id: "double_kettlebell_front_squat",
    name: "Double Kettlebell Front Squat",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Kettlebell_Front_Squats/0.jpg`,
    imgEnd: `${BASE_IMG}/Kettlebell_Front_Squats/1.jpg`
  },
  {
    id: "dumbbell_snatch",
    name: "Dumbbell Snatch",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Dumbbell_One-Arm_Snatch/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_One-Arm_Snatch/1.jpg`
  },
  {
    id: "dumbbell_clean",
    name: "Dumbbell Clean",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Dumbbell_Clean/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Clean/1.jpg`
  },
  {
    id: "dumbbell_hang_clean",
    name: "Dumbbell Hang Clean",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Dumbbell_Clean/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Clean/1.jpg`
  },
  {
    id: "dumbbell_thruster",
    name: "Dumbbell Thruster",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Dumbbell_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Dumbbell_Press/1.jpg`
  },
  {
    id: "dumbbell_push_press",
    name: "Dumbbell Push Press",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Standing_Dumbbell_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Dumbbell_Press/1.jpg`
  },
  {
    id: "dumbbell_devil_press",
    name: "Dumbbell Devil Press",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Burpee/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_One-Arm_Snatch/1.jpg`
  },
  {
    id: "dumbbell_ground_to_overhead",
    name: "Dumbbell Ground to Overhead",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Dumbbell_One-Arm_Snatch/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_One-Arm_Snatch/1.jpg`
  },
  {
    id: "power_clean",
    name: "Power Clean",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Power_Clean/0.jpg`,
    imgEnd: `${BASE_IMG}/Power_Clean/1.jpg`
  },
  {
    id: "hang_power_clean",
    name: "Hang Power Clean",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Hang_Clean/0.jpg`,
    imgEnd: `${BASE_IMG}/Hang_Clean/1.jpg`
  },
  {
    id: "squat_clean",
    name: "Squat Clean",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Power_Clean/0.jpg`,
    imgEnd: `${BASE_IMG}/Power_Clean/1.jpg`
  },
  {
    id: "clean_and_jerk",
    name: "Clean and Jerk",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Clean_and_Jerk/0.jpg`,
    imgEnd: `${BASE_IMG}/Clean_and_Jerk/1.jpg`
  },
  {
    id: "power_snatch",
    name: "Power Snatch",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Snatch/0.jpg`,
    imgEnd: `${BASE_IMG}/Snatch/1.jpg`
  },
  {
    id: "hang_power_snatch",
    name: "Hang Power Snatch",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Hang_Snatch/0.jpg`,
    imgEnd: `${BASE_IMG}/Hang_Snatch/1.jpg`
  },
  {
    id: "squat_snatch",
    name: "Squat Snatch",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Snatch/0.jpg`,
    imgEnd: `${BASE_IMG}/Snatch/1.jpg`
  },
  {
    id: "hang_snatch",
    name: "Hang Snatch",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Hang_Snatch/0.jpg`,
    imgEnd: `${BASE_IMG}/Hang_Snatch/1.jpg`
  },
  {
    id: "clean_pull",
    name: "Clean Pull",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Power_Clean/0.jpg`,
    imgEnd: `${BASE_IMG}/Power_Clean/0.jpg`
  },
  {
    id: "snatch_pull",
    name: "Snatch Pull",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Snatch/0.jpg`,
    imgEnd: `${BASE_IMG}/Snatch/0.jpg`
  },
  {
    id: "barbell_thruster",
    name: "Barbell Thruster",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Front_Barbell_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Push_Press/1.jpg`
  },
  {
    id: "wall_ball",
    name: "Wall Ball",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Medicine_Ball_Chest_Pass/0.jpg`,
    imgEnd: `${BASE_IMG}/Medicine_Ball_Chest_Pass/1.jpg`
  },
  {
    id: "medicine_ball_slam",
    name: "Medicine Ball Slam",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Overhead_Slam/0.jpg`,
    imgEnd: `${BASE_IMG}/Overhead_Slam/1.jpg`
  },
  {
    id: "slam_ball_over_shoulder",
    name: "Slam Ball Over Shoulder",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Overhead_Slam/0.jpg`,
    imgEnd: `${BASE_IMG}/Overhead_Slam/1.jpg`
  },
  {
    id: "sandbag_clean",
    name: "Sandbag Clean",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Power_Clean/0.jpg`,
    imgEnd: `${BASE_IMG}/Power_Clean/1.jpg`
  },
  {
    id: "sandbag_squat",
    name: "Sandbag Squat",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Barbell_Full_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Barbell_Full_Squat/1.jpg`
  },
  {
    id: "sandbag_thruster",
    name: "Sandbag Thruster",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Push_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Push_Press/1.jpg`
  },
  {
    id: "sandbag_front_lunge",
    name: "Sandbag Front Lunge",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Dumbbell_Lunges/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Lunges/1.jpg`
  },
  {
    id: "jump_rope_single_under",
    name: "Jump Rope Single Under",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Rope_Jumping/0.jpg`,
    imgEnd: `${BASE_IMG}/Rope_Jumping/1.jpg`
  },
  {
    id: "jump_rope_double_under",
    name: "Jump Rope Double Under",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Rope_Jumping/0.jpg`,
    imgEnd: `${BASE_IMG}/Rope_Jumping/1.jpg`
  },
  {
    id: "battle_rope",
    name: "Battle Rope",
    muscle: "Funzionali",
    imgStart: `${BASE_IMG}/Battling_Ropes/0.jpg`,
    imgEnd: `${BASE_IMG}/Battling_Ropes/1.jpg`
  },
  // ==========================================
  // --- TRX ---
  // ==========================================
  {
    id: "trx_squat",
    name: "TRX Squat",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Bodyweight_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Bodyweight_Squat/1.jpg`
  },
  {
    id: "trx_jump_squat",
    name: "TRX Jump Squat",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Jump_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Jump_Squat/1.jpg`
  },
  {
    id: "trx_assisted_split_squat",
    name: "TRX Assisted Split Squat",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Split_Squats/0.jpg`,
    imgEnd: `${BASE_IMG}/Split_Squats/1.jpg`
  },
  {
    id: "trx_reverse_lunge",
    name: "TRX Reverse Lunge",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Dumbbell_Rear_Lunge/0.jpg`,
    imgEnd: `${BASE_IMG}/Dumbbell_Rear_Lunge/1.jpg`
  },
  {
    id: "trx_bulgarian_split_squat",
    name: "TRX Bulgarian Split Squat",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Split_Squats/0.jpg`,
    imgEnd: `${BASE_IMG}/Split_Squats/1.jpg`
  },
  {
    id: "trx_pistol_squat_assistito",
    name: "TRX Pistol Squat Assistito",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Single_Leg_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Single_Leg_Squat/1.jpg`
  },
  {
    id: "trx_hamstring_curl",
    name: "TRX Hamstring Curl",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Lying_Leg_Curls/0.jpg`,
    imgEnd: `${BASE_IMG}/Lying_Leg_Curls/1.jpg`
  },
  {
    id: "trx_hip_bridge",
    name: "TRX Hip Bridge",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Single_Leg_Glute_Bridge/0.jpg`,
    imgEnd: `${BASE_IMG}/Single_Leg_Glute_Bridge/1.jpg`
  },
  {
    id: "trx_row",
    name: "TRX Row",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Inverted_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Inverted_Row/1.jpg`
  },
  {
    id: "trx_high_row",
    name: "TRX High Row",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Inverted_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Inverted_Row/1.jpg`
  },
  {
    id: "trx_wide_row",
    name: "TRX Wide Row",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Inverted_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Inverted_Row/1.jpg`
  },
  {
    id: "trx_single_arm_row",
    name: "TRX Single Arm Row",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Inverted_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Inverted_Row/1.jpg`
  },
  {
    id: "trx_power_pull",
    name: "TRX Power Pull",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Inverted_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Inverted_Row/1.jpg`
  },
  {
    id: "trx_face_pull",
    name: "TRX Face Pull",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Face_Pull/0.jpg`,
    imgEnd: `${BASE_IMG}/Face_Pull/1.jpg`
  },
  {
    id: "trx_y_fly",
    name: "TRX Y Fly",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Inverted_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_Lateral_Raise/1.jpg`
  },
  {
    id: "trx_t_fly",
    name: "TRX T Fly",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Inverted_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Rear_Delt_Fly/1.jpg`
  },
  {
    id: "trx_biceps_curl",
    name: "TRX Biceps Curl",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Inverted_Row/0.jpg`,
    imgEnd: `${BASE_IMG}/Cable_Curl/1.jpg`
  },
  {
    id: "trx_chest_press",
    name: "TRX Chest Press",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Pushups/0.jpg`,
    imgEnd: `${BASE_IMG}/Pushups/1.jpg`
  },
  {
    id: "trx_chest_fly",
    name: "TRX Chest Fly",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Pushups/0.jpg`,
    imgEnd: `${BASE_IMG}/Butterfly/1.jpg`
  },
  {
    id: "trx_push_up",
    name: "TRX Push-Up",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Pushups/0.jpg`,
    imgEnd: `${BASE_IMG}/Pushups/1.jpg`
  },
  {
    id: "trx_triceps_extension",
    name: "TRX Triceps Extension",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Close-Grip_Push-Up/0.jpg`,
    imgEnd: `${BASE_IMG}/Close-Grip_Push-Up/1.jpg`
  },
  {
    id: "trx_atomic_push_up",
    name: "TRX Atomic Push-Up",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Pushups/0.jpg`,
    imgEnd: `${BASE_IMG}/Seated_Flat_Bench_Leg_Pull-In/1.jpg`
  },
  {
    id: "trx_fallout",
    name: "TRX Fallout",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Front_Plank/0.jpg`,
    imgEnd: `${BASE_IMG}/Front_Plank/0.jpg`
  },
  {
    id: "trx_mountain_climber",
    name: "TRX Mountain Climber",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Mountain_Climbers/0.jpg`,
    imgEnd: `${BASE_IMG}/Mountain_Climbers/1.jpg`
  },
  {
    id: "trx_side_plank",
    name: "TRX Side Plank",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Side_Plank/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_Plank/0.jpg`
  },
  {
    id: "trx_pendulum",
    name: "TRX Pendulum",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Front_Plank/0.jpg`,
    imgEnd: `${BASE_IMG}/Side_Plank/0.jpg`
  },
  {
    id: "trx_hamstring_runner",
    name: "TRX Hamstring Runner",
    muscle: "TRX",
    imgStart: `${BASE_IMG}/Lying_Leg_Curls/0.jpg`,
    imgEnd: `${BASE_IMG}/Lying_Leg_Curls/1.jpg`
  },

  // ==========================================
  // --- MOBILITÀ ---
  // ==========================================
  {
    id: "cat_cow",
    name: "Cat-Cow",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Cat_Cow_Pose/0.jpg`,
    imgEnd: `${BASE_IMG}/Cat_Cow_Pose/1.jpg`
  },
  {
    id: "childs_pose",
    name: "Child's Pose",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Childs_Pose/0.jpg`,
    imgEnd: `${BASE_IMG}/Childs_Pose/1.jpg`
  },
  {
    id: "worlds_greatest_stretch",
    name: "World's Greatest Stretch",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Worlds_Greatest_Stretch/0.jpg`,
    imgEnd: `${BASE_IMG}/Worlds_Greatest_Stretch/1.jpg`
  },
  {
    id: "90_90_hip_switch",
    name: "90/90 Hip Switch",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Butterfly/0.jpg`,
    imgEnd: `${BASE_IMG}/Butterfly/1.jpg`
  },
  {
    id: "90_90_hip_rotation",
    name: "90/90 Hip Rotation",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Butterfly/0.jpg`,
    imgEnd: `${BASE_IMG}/Butterfly/1.jpg`
  },
  {
    id: "hip_cars",
    name: "Hip CARs",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Standing_Leg_Curl/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Leg_Curl/1.jpg`
  },
  {
    id: "shoulder_cars",
    name: "Shoulder CARs",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Arm_Circles/0.jpg`,
    imgEnd: `${BASE_IMG}/Arm_Circles/1.jpg`
  },
  {
    id: "thoracic_rotation_quadrupedia",
    name: "Thoracic Rotation Quadrupedia",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Bird_Dog/0.jpg`,
    imgEnd: `${BASE_IMG}/Bird_Dog/1.jpg`
  },
  {
    id: "open_book",
    name: "Open Book",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Spine_Twist/0.jpg`,
    imgEnd: `${BASE_IMG}/Spine_Twist/1.jpg`
  },
  {
    id: "deep_squat_hold",
    name: "Deep Squat Hold",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Bodyweight_Squat/1.jpg`,
    imgEnd: `${BASE_IMG}/Bodyweight_Squat/1.jpg`
  },
  {
    id: "ankle_dorsiflexion_mobilization",
    name: "Ankle Dorsiflexion Mobilization",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Calf_Stretch_with_Rope/0.jpg`,
    imgEnd: `${BASE_IMG}/Calf_Stretch_with_Rope/1.jpg`
  },
  {
    id: "couch_stretch",
    name: "Couch Stretch",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Quad_Stretch/0.jpg`,
    imgEnd: `${BASE_IMG}/Quad_Stretch/1.jpg`
  },
  {
    id: "hip_flexor_stretch",
    name: "Hip Flexor Stretch",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Kneeling_Hip_Flexor/0.jpg`,
    imgEnd: `${BASE_IMG}/Kneeling_Hip_Flexor/1.jpg`
  },
  {
    id: "hamstring_dynamic_stretch",
    name: "Hamstring Dynamic Stretch",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Hamstring_Stretch/0.jpg`,
    imgEnd: `${BASE_IMG}/Hamstring_Stretch/1.jpg`
  },
  {
    id: "adductor_rock_back",
    name: "Adductor Rock Back",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Side_Lunge_With_Dumbbells/1.jpg`,
    imgEnd: `${BASE_IMG}/Side_Lunge_With_Dumbbells/1.jpg`
  },
  {
    id: "pectoral_doorway_stretch",
    name: "Pectoral Doorway Stretch",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Doorway_Chest_Stretch/0.jpg`,
    imgEnd: `${BASE_IMG}/Doorway_Chest_Stretch/1.jpg`
  },
  {
    id: "lat_stretch",
    name: "Lat Stretch",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Overhead_Lat_Stretch/0.jpg`,
    imgEnd: `${BASE_IMG}/Overhead_Lat_Stretch/1.jpg`
  },
  {
    id: "band_shoulder_dislocation",
    name: "Band Shoulder Dislocation",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Band_Pull_Apart/0.jpg`,
    imgEnd: `${BASE_IMG}/Band_Pull_Apart/1.jpg`
  },
  {
    id: "scapular_retraction_elastico",
    name: "Scapular Retraction con Elastico",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Band_Pull_Apart/0.jpg`,
    imgEnd: `${BASE_IMG}/Band_Pull_Apart/1.jpg`
  },
  {
    id: "serratus_wall_slide",
    name: "Serratus Wall Slide",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Standing_Military_Press/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Military_Press/1.jpg`
  },
  {
    id: "glute_bridge_march",
    name: "Glute Bridge March",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Single_Leg_Glute_Bridge/0.jpg`,
    imgEnd: `${BASE_IMG}/Single_Leg_Glute_Bridge/1.jpg`
  },
  {
    id: "single_leg_balance",
    name: "Single Leg Balance",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Single_Leg_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Single_Leg_Squat/0.jpg`
  },
  {
    id: "terminal_knee_extension_elastico",
    name: "Terminal Knee Extension con Elastico",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Standing_Calf_Raises/0.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Calf_Raises/1.jpg`
  },
  {
    id: "spanish_squat",
    name: "Spanish Squat",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Bodyweight_Squat/0.jpg`,
    imgEnd: `${BASE_IMG}/Bodyweight_Squat/1.jpg`
  },
  {
    id: "wall_sit",
    name: "Wall Sit",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Bodyweight_Squat/1.jpg`,
    imgEnd: `${BASE_IMG}/Bodyweight_Squat/1.jpg`
  },
  {
    id: "isometric_split_squat",
    name: "Isometric Split Squat",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Split_Squats/1.jpg`,
    imgEnd: `${BASE_IMG}/Split_Squats/1.jpg`
  },
  {
    id: "calf_isometric_hold",
    name: "Calf Isometric Hold",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Standing_Calf_Raises/1.jpg`,
    imgEnd: `${BASE_IMG}/Standing_Calf_Raises/1.jpg`
  },
  {
    id: "dead_bug_fitball",
    name: "Dead Bug con Fitball",
    muscle: "Mobilità",
    imgStart: `${BASE_IMG}/Dead_Bug/0.jpg`,
    imgEnd: `${BASE_IMG}/Dead_Bug/1.jpg`
  }
];
