// fileManager.js
// File CRUD operations using the fs module

const fs = require("fs");

const filePath = "./test.txt";

console.log("Creating File...");
fs.writeFile(filePath, "Hello Node.js", (err) => {
  if (err) {
    console.log("Error creating file:", err.message);
    return;
  }
  console.log("File Created");

  console.log("Reading File");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err.message);
      return;
    }
    console.log(data);

    console.log("File Updated");
    fs.appendFile(filePath, "\nLearning FS Module", (err) => {
      if (err) {
        console.log("Error updating file:", err.message);
        return;
      }

      // Read again to show updated content
      fs.readFile(filePath, "utf8", (err, updatedData) => {
        if (err) {
          console.log("Error reading updated file:", err.message);
          return;
        }
        console.log(updatedData);

        console.log("File Deleted");
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log("Error deleting file:", err.message);
            return;
          }
          console.log("Done - file operations completed successfully");
        });
      });
    });
  });
});
