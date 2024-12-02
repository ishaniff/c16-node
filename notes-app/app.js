const FileSystem = require("fs");
// FileSystem.writeFileSync("notes.txt", "my name is issiah");

// append msg to notes.txt, use appendFileSync
FileSystem.appendFileSync("notes.txt", " i am learning node");
