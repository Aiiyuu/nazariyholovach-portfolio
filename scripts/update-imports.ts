import { Project, ImportDeclaration, SourceFile } from "ts-morph";
import path from "path";

interface UpdateImportsConfig {
  tsConfigPath: string;
  srcDir: string;
  fileGlob: string;
}

class ImportUpdater {
  private project: Project;
  private config: UpdateImportsConfig;
  private changedCount: number = 0;

  constructor(config: UpdateImportsConfig) {
    this.config = config;
    this.project = new Project({
      tsConfigFilePath: config.tsConfigPath,
    });
  }

  private updateImportPath(importDecl: ImportDeclaration): boolean {
    const importPath = importDecl.getModuleSpecifierValue();

    // Only change relative imports that use ..
    if (importPath.startsWith("..")) {
      const currentFileDir = importDecl.getSourceFile().getDirectoryPath();
      const absolutePath = path.resolve(currentFileDir, importPath);
      const relativePath = path.relative(this.config.srcDir, absolutePath);
      const normalizedPath = relativePath.replace(/\\/g, "/");
      const newPath = `@/${normalizedPath}`;

      importDecl.setModuleSpecifier(newPath);
      return true;
    }

    return false;
  }

  private processFile(file: SourceFile): boolean {
    let modified = false;

    for (const importDecl of file.getImportDeclarations()) {
      if (this.updateImportPath(importDecl)) {
        modified = true;
      }
    }

    return modified;
  }

  async run(): Promise<void> {
    const files = this.project.getSourceFiles(this.config.fileGlob);
    console.log(`🔍 Found ${files.length} files to check...`);

    for (const file of files) {
      if (this.processFile(file)) {
        file.saveSync();
        this.changedCount++;
      }
    }

    await this.project.save();
    console.log(`✅ Updated imports in ${this.changedCount} files.`);
  }
}

// Main execution
const config: UpdateImportsConfig = {
  tsConfigPath: "tsconfig.json",
  srcDir: path.resolve("src"),
  fileGlob: "src/**/*.{ts,tsx,js,jsx}",
};

const updater = new ImportUpdater(config);
updater.run().catch((error) => {
  console.error("❌ Error updating imports:", error);
  process.exit(1);
});
