// scripts/update-imports.js
import { Project } from "ts-morph";
import path from "path";

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

const srcDir = path.resolve("src");

const files = project.getSourceFiles("src/**/*.{ts,tsx,js,jsx}");
console.log(`🔍 Found ${files.length} files to check...`);

let changedCount = 0;

for (const file of files) {
  let modified = false;

  for (const imp of file.getImportDeclarations()) {
    const importPath = imp.getModuleSpecifierValue();

    // Only change relative imports
    if (importPath.startsWith("..")) {
      const absPath = path.resolve(file.getDirectoryPath(), importPath);
      const relToSrc = path.relative(srcDir, absPath).replace(/\\/g, "/");
      const newPath = `@/${relToSrc}`;
      imp.setModuleSpecifier(newPath);
      modified = true;
    }
  }

  if (modified) {
    file.saveSync();
    changedCount++;
  }
}

await project.save();
console.log(`✅ Updated imports in ${changedCount} files.`);
