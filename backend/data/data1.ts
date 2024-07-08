import { Datex } from "datex-core-legacy/datex.ts";
import { UIX } from "uix";
import { LoginData, Exercise, Workout, TrainingSession } from "../userManagement1.ts";

/**
 * Version information on the backend
 */
export const denoVersion = Deno.version.deno;
export const datexVersion = Datex.Runtime.VERSION;
export const uixVersion = UIX.version;

/*
	Vordefinierte Objekte für Test- und Demonstrationszwecke
*/


//////////////////////////////////
// Alle Daten in ein Objekt?
//////////////////////////////////
export const loginData: LoginData[] = eternal ?? $$([
    {
      id: 1,
      username: "Alice123",
      password: "Password123",
    },
    {
      id: 2,
      username: "Bob456",
      password: "SecurePwd123",
    },
    {
      id: 3,
      username: "Charlie789",
      password: "PwdSecure123",
    },
]);

export const exerciseData: Exercise[] = [
  {
    name: "Bench Press",
    muscleGroup: "Chest",
    synonyms: ["Barbell Bench Press", "Flat Bench Press"],
    imageUrl: "https://example.com/images/bench-press.jpg",
    videoUrl: "https://example.com/videos/bench-press.mp4",
    description: "A compound exercise that targets the chest muscles.",
    sets: 3,
    repetitions: 10,
    weight: 100
  },
  {
    name: "Squat",
    muscleGroup: "Quads",
    synonyms: ["Barbell Squat", "Back Squat"],
    imageUrl: "https://example.com/images/squat.jpg",
    videoUrl: "https://example.com/videos/squat.mp4",
    description: "A compound exercise that targets the leg muscles.",
    sets: 4,
    repetitions: 12,
    weight: 150
  }
];

export const workoutData: Workout[] = eternal ?? $$([
  {
    id: 1,
    name: "Morning Routine",
    category: "Chest",
    exercises: [exerciseData[0], exerciseData[1]]  // Bench Press
  },
  {
    id: 2,
    name: "Evening Routine",
    category: "Legs",
    exercises: [exerciseData[1]]  // Squat
  },
  {
    id: 3,
    name: "Midnight Routine",
    category: "Legs",
    exercises: [exerciseData[0]]  // Squat
  }
]);

export const trainingSessions: TrainingSession[] = eternal ?? $$([
  {
      date: new Date('2023-09-01'),
      start: new Date('2023-09-01T09:00:00'),
      end: new Date('2023-09-01T10:00:00'),
      duration: 60,
      //training: workoutData[0].name,
      training: workoutData[0],
      difficulty: 2
  },
  {
      date: new Date('2023-09-01'),
      start: new Date('2023-09-01T11:00:00'),
      end: new Date('2023-09-01T12:30:00'),
      duration: 90,
      //training: workoutData[1].name,
      training: workoutData[1],
      difficulty: 4
  }
]);

export const userData = eternal ?? $$([    // type user
  {
    id: 1,
    name: "Alice Mustermann",
    gender: "female",
    age: 20,
    height: 173,
    weight: 60,
    ethnicity: "Asian",
    experience: "Beginner",
    gymName: "FitX",
    avatarUrl: "",
    progress: {
      endurance: 0,             
      enduranceMilestone: 100,  // in minuten
      consistency: 1,           
      consistencyMilestone: 3,  // === wie oft will ich in der woche trainieren?
      strength: 0,              
      strengthMilestone: 4      //in tonnen
    },
    level: 1,
    xp: 25,
    levelMilestone: 100,
    workouts: [{
                name: "PPL",
                exercises: [
                  {
                    name: "bench press",
                    muscleGroup: "chest",
                    synonyms: "",
                    imageUrl: "",
                    videoUrl: "",
                    description: "...",
                    sets: 3,
                    repetitions: 10,
                    weight: 25,
                  },
                  {
                    name: "Lat pull down",
                    muscleGroup: "back",
                    synonyms: "",
                    imageUrl: "",
                    videoUrl: "",
                    description: "...",
                    sets: 3,
                    repetitions: 10,
                    weight: 50,
                  },
                  {
                    name: "glute bridges",
                    muscleGroup: "legs",
                    synonyms: "",
                    imageUrl: "",
                    videoUrl: "",
                    description: "...",
                    sets: 3,
                    repetitions: 10,
                    weight: 80,
                  }
                ]
    }],
    trainingsHistory: [{
                        date: "2011-10-10",
                        start: "14:48:00",   // nochmal prüfen
                        end: "16:00:00",
                        duration: 72,
                        training: "PPL",
                        difficulty: "easy"
    }],
    achievements: [
      {
        title: "First Achievement",
        description: "You have reached level 1",
        icon: "🎉",
      }
    ],
    friends: []

  }
]);

// export const exerciseData = eternal ?? $$([     //type exercise
//     {
//       name: "bench press",
//       muscleGroup: "chest",
//       synonyms: "",
//       imageUrl: "",
//       videoUrl: "",
//       description: "..."
//     },
//     {
//       name: "Lat pull down",
//       muscleGroup: "back",
//       synonyms: "",
//       imageUrl: "",
//       videoUrl: "",
//       description: "..."
//     },
//     {
//       name: "glute bridges",
//       muscleGroup: "legs",
//       synonyms: "",
//       imageUrl: "",
//       videoUrl: "",
//       description: "..."
//     }
// ]);