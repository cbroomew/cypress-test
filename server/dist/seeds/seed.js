import db from "../config/connection.js";
import { Question } from "../models/index.js";
import cleanDB from "./cleanDb.js";
import { pythonQuestions } from "./pythonQuestions.js";
try {
    await db();
    await cleanDB();
    // bulk create each model
    await Question.insertMany(pythonQuestions);
    console.log("Seeding completed successfully!");
    process.exit(0);
}
catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
}
