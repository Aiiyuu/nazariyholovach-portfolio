import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

// Get project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

console.log("🔧 Running Prettier formatting...");

try {
  // Run prettier to format all files
  execSync(
    `npx prettier --write "${projectRoot}/**/*.{ts,tsx,js,jsx,json,css,scss,md,html}"`,
    {
      stdio: "inherit",
    },
  );

  console.log("✅ All files formatted successfully!");
} catch (err) {
  console.error("❌ Error while formatting:", err);
  process.exit(1);
}
