const { createClient } = require("@supabase/supabase-js");
var path = require("path");
const fs = require("fs");

const testFolder =
  "/Users/felix/Documents/DEV/ECV/competition-2022/public/assets/img/";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://lzolvfzuahuxrhhsizwg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6b2x2Znp1YWh1eHJoaHNpendnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU4OTkwNjgsImV4cCI6MTk3MTQ3NTA2OH0.PFyJ3Aww4mpZmjB-RaefXJbXSiRrDQeu1wWjCxoRBKk"
);

fs.readdirSync(testFolder).forEach(async (file) => {
  const image = fs.readFileSync(`${testFolder}${file}`);
  const type = path.extname(`${testFolder}${file}`);
  let mime = "image/svg+xml";
  if (type === ".jpg") mime = "image/jpeg";
  if (type === ".png") mime = "image/png";

  const { error } = await supabase.storage.from("images").upload(file, image, {
    upsert: false,
    contentType: mime,
  });
  if (error) console.log(file, error);
});
