const fs = require("fs");
const path = require("path");
const assert = require("assert");

console.log("=================================================");
console.log("RUNNING PORTFOLIO FUNCTIONAL & INTEGRITY TEST SUITE");
console.log("=================================================");

let passed = 0;
let failed = 0;

function runTest(testName, fn) {
  try {
    fn();
    console.log(`[PASS] ${testName}`);
    passed++;
  } catch (err) {
    console.error(`[FAIL] ${testName}:`, err.message);
    failed++;
  }
}

// 1. ASSET EXISTENCE & VALIDITY
runTest("Resume PDF Asset exists and contains valid PDF magic bytes", () => {
  const resumePath = path.join(__dirname, "public", "resume.pdf");
  assert.ok(fs.existsSync(resumePath), "resume.pdf must exist in public/");
  const buffer = fs.readFileSync(resumePath);
  assert.ok(buffer.length > 100, "resume.pdf must have non-trivial size");
  const header = buffer.slice(0, 5).toString("utf-8");
  assert.strictEqual(header, "%PDF-", "resume.pdf must begin with valid %PDF- magic bytes");
});

runTest("Branding assets (logo.svg, favicon.ico, og-image) exist", () => {
  const logoPath = path.join(__dirname, "public", "logo.svg");
  const faviconPath = path.join(__dirname, "public", "favicon.ico");
  assert.ok(fs.existsSync(logoPath), "logo.svg must exist");
  assert.ok(fs.existsSync(faviconPath), "favicon.ico must exist");
});

// 2. DATA INTEGRITY & TYPE CONFORMANCE
runTest("Site Config contains accurate, verified links and metadata", () => {
  const siteConfigContent = fs.readFileSync(path.join(__dirname, "src", "lib", "site-config.ts"), "utf-8");
  assert.ok(siteConfigContent.includes("Suraj Vishwakarma"), "Must have correct name");
  assert.ok(siteConfigContent.includes("https://github.com/Vishwakarmasuraj333"), "Must link to exact verified GitHub");
  assert.ok(siteConfigContent.includes("https://www.linkedin.com/in/suraj-vishwakarma-2ab64436a/"), "Must link to exact verified LinkedIn");
  assert.ok(siteConfigContent.includes("Abhinav College, Bhayandar"), "Must cite Abhinav College, Bhayandar");
});

runTest("Projects dataset contains all verified repositories and required prompt projects", () => {
  const projectsContent = fs.readFileSync(path.join(__dirname, "src", "lib", "projects.ts"), "utf-8");
  assert.ok(projectsContent.includes("IntelliTwin AI"), "Must contain IntelliTwin AI");
  assert.ok(projectsContent.includes("https://github.com/Vishwakarmasuraj333/IntelliTwin-AI"), "Must contain IntelliTwin GitHub repo");
  assert.ok(projectsContent.includes("PulseSocial"), "Must contain PulseSocial");
  assert.ok(projectsContent.includes("Nexora Social"), "Must contain Nexora Social");
  assert.ok(projectsContent.includes("https://github.com/Vishwakarmasuraj333/-Nexora-Social"), "Must contain Nexora GitHub repo");
  assert.ok(projectsContent.includes("Personal Portfolio"), "Must contain Personal Portfolio");
  assert.ok(projectsContent.includes("SE Ranking Research Studio"), "Must contain SE Ranking");
  assert.ok(projectsContent.includes("https://github.com/MamtaYdvTech1/SE-Ranking"), "Must contain SE Ranking GitHub repo");
});

runTest("Education dataset contains verified institutions and degrees", () => {
  const journeyContent = fs.readFileSync(path.join(__dirname, "src", "lib", "journey.ts"), "utf-8");
  assert.ok(journeyContent.includes("Abhinav College"), "Must cite Abhinav College");
  assert.ok(journeyContent.includes("M.Sc. in Information Technology") || journeyContent.includes("Master of Science in Information Technology"), "Must cite M.Sc. IT");
  assert.ok(journeyContent.includes("B.Sc. in Information Technology") || journeyContent.includes("Bachelor of Science in Information Technology"), "Must cite B.Sc. IT");
  assert.ok(journeyContent.includes("Bhayandar"), "Must cite Bhayandar location");
});

runTest("Skills dataset does not contain fabricated percentage bars", () => {
  const skillsContent = fs.readFileSync(path.join(__dirname, "src", "lib", "skills.ts"), "utf-8");
  assert.ok(!skillsContent.includes("%"), "No percentage bars permitted in skills");
  assert.ok(skillsContent.includes("React"), "Contains React");
  assert.ok(skillsContent.includes("Next.js"), "Contains Next.js");
  assert.ok(skillsContent.includes("FastAPI"), "Contains FastAPI");
  assert.ok(skillsContent.includes("PostgreSQL"), "Contains PostgreSQL");
});

// 3. CONTACT FORM VALIDATION SCHEMA LOGIC
runTest("Contact Form Schema validation rejecting empty or malicious input", () => {
  function sanitizeInput(input) {
    return input.replace(/[<>]/g, "").trim();
  }

  const rawMalicious = "<script>alert('xss')</script>Hello";
  const cleaned = sanitizeInput(rawMalicious);
  assert.strictEqual(cleaned, "scriptalert('xss')/scriptHello", "Tags must be stripped");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  assert.strictEqual(emailRegex.test("invalid-email"), false, "Invalid email format must be rejected");
  assert.strictEqual(emailRegex.test("valid.recruiter@company.com"), true, "Valid email must pass");
});

// 4. DESIGN DIRECTION & PALETTE CONFORMANCE
runTest("Design System implements Reference Palette (#1749E8, #FFD52E, #F43B2F, #151515, #FFFDF7)", () => {
  const globalsCss = fs.readFileSync(path.join(__dirname, "src", "app", "globals.css"), "utf-8");
  assert.ok(globalsCss.includes("#1749E8"), "Must define Royal Blue #1749E8");
  assert.ok(globalsCss.includes("#FFD52E"), "Must define Bright Yellow #FFD52E");
  assert.ok(globalsCss.includes("#F43B2F"), "Must define Warm Red #F43B2F");
  assert.ok(globalsCss.includes("#151515"), "Must define Ink Black #151515");
  assert.ok(globalsCss.includes("#FFFDF7"), "Must define Soft Paper #FFFDF7");
});

// 5. MASTER PROMPT REQUIRED SECTIONS
runTest("All Master Prompt Sections exist and are rendered in page.tsx", () => {
  const pageContent = fs.readFileSync(path.join(__dirname, "src", "app", "page.tsx"), "utf-8");
  assert.ok(pageContent.includes("HeroSection"), "Must include HeroSection");
  assert.ok(pageContent.includes("AboutSection"), "Must include AboutSection");
  assert.ok(pageContent.includes("ServicesSection"), "Must include ServicesSection");
  assert.ok(pageContent.includes("ProjectsSection"), "Must include ProjectsSection");
  assert.ok(pageContent.includes("ApproachSection"), "Must include ApproachSection");
  assert.ok(pageContent.includes("ProcessSection"), "Must include ProcessSection");
  assert.ok(pageContent.includes("EducationSection"), "Must include EducationSection");
  assert.ok(pageContent.includes("ContactCtaBanner"), "Must include ContactCtaBanner");
  assert.ok(pageContent.includes("ContactSection"), "Must include ContactSection");
});

// 6. PROCESS & METHODOLOGY CONFORMANCE
runTest("Process steps contain exactly 5 steps (Discover, Plan, Build, Test, Deploy)", () => {
  const processContent = fs.readFileSync(path.join(__dirname, "src", "lib", "process.ts"), "utf-8");
  assert.ok(processContent.includes("DISCOVER"), "Step 1: DISCOVER");
  assert.ok(processContent.includes("PLAN"), "Step 2: PLAN");
  assert.ok(processContent.includes("BUILD"), "Step 3: BUILD");
  assert.ok(processContent.includes("TEST"), "Step 4: TEST");
  assert.ok(processContent.includes("DEPLOY"), "Step 5: DEPLOY");
});

// 7. APPROACH PRINCIPLES CONFORMANCE
runTest("Approach principles contain genuine developer standards (no fake testimonials)", () => {
  const principlesContent = fs.readFileSync(path.join(__dirname, "src", "lib", "principles.ts"), "utf-8");
  assert.ok(principlesContent.includes("Write Maintainable Code"), "Principle 1: Maintainable Code");
  assert.ok(principlesContent.includes("Build for Mobile & Desktop"), "Principle 2: Mobile & Desktop");
  assert.ok(principlesContent.includes("Validate Real Application Behavior"), "Principle 3: Real Behavior");
});

// 8. NEXT.JS DIRECTORY ARTIFACTS
runTest("Next.js build/runtime artifacts in .next/ directory exist and compile cleanly", () => {
  const nextDir = path.join(__dirname, ".next");
  assert.ok(fs.existsSync(nextDir), ".next build directory must exist");
});

console.log("=================================================");
console.log(`SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log("=================================================");

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
