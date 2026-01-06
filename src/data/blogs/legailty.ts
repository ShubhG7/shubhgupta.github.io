import { BlogContent } from '../blogContent';

export const legailtyBlog: BlogContent = {
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `When people say "legal paperwork is just filling blanks," they're not wrong — they're just missing the painful part: you don't know what half the blanks *mean*, and switching between "Google it" and "fill the form" destroys flow.

So I built **LegAIlity** (also labeled **Lexsy AI** in the backend/docs): a web app where you upload a \`.docx\` legal document (SAFE agreements, contracts, etc.), the system detects everything that needs to be filled, then you complete it using a **split-screen** experience:

- **Left panel**: focused "current field" + progress + navigation
- **Right panel**: always-on conversational AI that explains legal terms and gives examples
- **Finish**: generate a filled \`.docx\` while preserving formatting

Built in **48 hours** as a hackathon-style project.`
    },
    {
      id: 'user-journey',
      title: 'User Journey',
      content: `### How the Product Works

1. **Login** (JWT auth; optional Google sign-in flow exists)
2. **Upload** a \`.docx\`
3. Backend returns:
   - Detected **placeholders/fields**
   - **Document text**
   - A short **AI analysis** explaining what the document is
4. User fills fields via:
   - Direct typing into the current field input
   - Asking the AI "what does this mean?" / "give me an example"
   - (Optionally) free-form chat that can extract structured field values
5. **Generate & download** the completed \`.docx\``
    },
    {
      id: 'split-screen-ux',
      title: 'The Split-Screen UX',
      content: `### The "Aha" Moment

Most form-fillers force a single mode:
- Either you're "filling fields,"
- Or you're "chatting with AI."

LegAIlity merges them. The UI is intentionally opinionated:

### No Context Switching
The AI is always visible while you fill.

### One-Click Help
- **Explain this field** button
- **Give example** button

### Systematic Progress
- Clear progress bar
- "Remaining fields" badge
- A clickable list showing completed vs pending fields

This is what makes the app feel like a *copilot* instead of a chatbot bolted onto a form.`
    },
    {
      id: 'tech-stack',
      title: 'Tech Stack',
      content: `### Frontend
- **Next.js 14** (App Router) + React + TypeScript
- **Tailwind** + **shadcn/ui** (fast, consistent components)
- **Zustand** (simple state store)
- **Axios** (API calls)
- **Framer Motion** (polish + transitions)

### Backend
- **FastAPI** (clean APIs, fast iteration)
- **python-docx** + **docxtpl** + **mailmerge** (robust \`.docx\` handling)
- **Google Gemini** (\`gemini-2.5-flash\`) for:
  - Placeholder extraction
  - Document summary
  - Conversational assistance
  - Optional value normalization`
    },
    {
      id: 'architecture',
      title: 'Architecture Overview',
      content: `### Frontend (Next.js)
- \`UploadZone\` → calls \`POST /api/parse-gemini\`
- \`SplitScreenChat\` → calls \`POST /api/chat/conversational\` and \`POST /api/fields/normalize\`
- \`DocumentPreview\` → calls \`POST /api/fill-no-auth\` then downloads via \`/api/download-no-auth/{filename}\`

### Backend (FastAPI)
- Parses & stores uploaded \`.docx\` temporarily (in a writable temp folder)
- Serves generated documents via a mounted \`/static\` directory
- Uses Gemini for understanding + extraction`
    },
    {
      id: 'api-endpoints',
      title: 'Key API Endpoints',
      content: `### Auth
- \`POST /api/auth/login\`
- \`POST /api/auth/register\`
- \`POST /api/auth/google\`
- \`GET /api/auth/me\`

### Document Parsing
- \`POST /api/parse-gemini\` → placeholders + \`document_text\` + AI analysis
- \`POST /api/parse-no-auth\` → simplified analysis (still extracts placeholders)

### Conversational AI
- \`POST /api/chat/conversational\` → natural-language response + optional \`extracted_fields\`

### Field Normalization
- \`POST /api/fields/normalize\` → rule-based normalization + optional Gemini refinement

### Filling + Download
- \`POST /api/fill-no-auth\` → returns a generated filename + download URL
- \`GET /api/download-no-auth/{filename}\` → direct file download
- \`/static/{filename}\` → served from backend temp directory`
    },
    {
      id: 'placeholder-detection',
      title: 'Placeholder Detection',
      content: `### Two-Layer Approach

#### AI-First Placeholder Extraction
Gemini is prompted to scan the entire doc and return a JSON array of placeholders (names like "Company Name", "Valuation Cap", signature fields, etc.).

#### Regex Fallback
If AI fails, regex-based extraction looks for patterns like \`[Field]\`, \`$[Field]\`, and underscore blanks with legal-ish context. A cleaner standardizes naming.

This approach prioritizes **recall** (don't miss fields), which is crucial for legal docs: missing a signature/date field is worse than having one extra field the user can ignore.`
    },
    {
      id: 'docx-filling',
      title: 'How .docx Filling Preserves Formatting',
      content: `Filling \`.docx\` is deceptively hard: naive string replacement breaks runs, formatting, tables, headers/footers, content controls, and signature lines.

### Robust Strategy

1. **If Word merge fields exist** → use MailMerge (best case)
2. **Else** → transform bracket placeholders to Jinja variables, then render with \`docxtpl\`

### Post-Processing
- Fill content controls (SDTs)
- Fill underscore-based signature blocks contextually ("By: ___", "Name: ___", etc.)
- Values are normalized (money/date/email/name casing) to keep output consistent`
    },
    {
      id: 'build-timeline',
      title: 'The 48-Hour Build Story',
      content: `### Hour 0–4: Define Scope + Pick the Killer UX
- Chose **split-screen** as the signature experience
- Locked the "happy path": upload → detect fields → fill → download
- Picked \`.docx\` only (PDF parsing is a rabbit hole)

### Hour 4–12: Backend Skeleton + Doc Handling
- FastAPI app with CORS + file upload handling
- Writable temp directory + \`/static\` mounting for generated downloads
- Implemented \`.docx\` text extraction across paragraphs + tables
- First pass of placeholder extraction logic

### Hour 12–20: Gemini Integration
- Wired Gemini client (\`gemini-2.5-flash\`) and prompts for:
  - Placeholder extraction
  - Document analysis (under ~200 words, plain text)
- Focused on making outputs **UI-safe** (no markdown, no weird formatting)

### Hour 20–30: Frontend Flow + State Management
- Next.js App Router layout + design system (shadcn + Tailwind)
- Zustand store to hold: document metadata, placeholders, filled values, analysis + document text, auth token
- Built the 3-step page flow: Upload → Fill → Download

### Hour 30–40: Split-Screen Filling Experience
- **Left panel**: current field, progress, navigation (prev/skip/save), clickable field list with completion states
- **Right panel**: conversational chat UI, persistent "currently working on X" indicator, auto-scroll without hijacking page scroll
- Added one-click "Explain" and "Give example" actions

### Hour 40–46: Filling + Normalization + Guardrails
- Implemented robust \`.docx\` filler strategy (merge fields → template render → post-process)
- Added \`/fields/normalize\`: deterministic rules first, optional AI refinement
- Added client-side guardrails so chat doesn't accidentally save random sentences as field values

### Hour 46–48: Polish + Docs + Deployment Readiness
- Wrote usage docs and deployment notes
- Ensured environment variables are the only place secrets live
- Documented production hardening steps (DB, bcrypt, rate limiting, etc.)`
    },
    {
      id: 'hard-parts',
      title: 'Hard Parts & Solutions',
      content: `### .docx is Not Plain Text
The fix was using purpose-built libraries and a multi-stage fill strategy instead of naive replacements.

### AI Responses Must Be Reliable for UI
Prompts force plain text and strict JSON sections where needed, plus parsing fallbacks.

### Avoiding "Chat Auto-Filling the Wrong Thing"
The conversational endpoint can return structured \`extracted_fields\`, but the frontend only saves values when it has high confidence (and normalizes them).`
    },
    {
      id: 'future-improvements',
      title: 'Future Improvements',
      content: `### If I Had Another Week

- **Database-backed users + documents** (replace in-memory auth storage)
- **True multi-tenant doc storage** (instead of temp files)
- **Better placeholder UX** (group fields by section: parties, economics, signatures)
- **Validation per field** (e.g., date pickers, money inputs, jurisdiction suggestions)
- **Audit trail** ("who filled what, when")
- **Rate limiting + abuse protection**
- **PDF support** (with clear tradeoffs and a separate parsing pipeline)`
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      content: `LegAIlity works because it treats AI as a **pair-programmer for legal comprehension**, not just an autocomplete engine. 

The real unlock wasn't "add a chat box" — it was designing a flow where users can **learn and complete** the document in the same screen, without losing momentum.

### Key Insights

- **Split-screen UX** removes context switching between understanding and doing
- **Structured field detection** makes the filling process systematic
- **AI as explainer** rather than auto-filler puts the user in control
- **Format preservation** is critical for legal documents

This 48-hour build demonstrates that with focused scope and the right architectural decisions, it's possible to create a genuinely useful AI-powered tool that solves a real pain point in legal document workflows.`
    }
  ]
};

