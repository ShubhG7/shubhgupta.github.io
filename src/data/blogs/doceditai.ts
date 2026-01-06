import { BlogContent } from '../blogContent';

export const doceditaiBlog: BlogContent = {
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `**DocEdit AI** is a Notion-like document editor with an AI assistant that can *propose and apply edits directly into the document*. The core idea is to combine a familiar rich-text editing experience with an AI workflow that feels actionable (structured edits, suggestion blocks, one-click apply), not just conversational.

This was built as a fast prototype in **~24 hours**, focusing on end-to-end functionality: auth, persistence, AI streaming, and a usable editing UX.`
    },
    {
      id: 'problem',
      title: 'What Problem This Solves',
      content: `Most "AI writing" tools stop at generating text. DocEdit AI goes one step further: it turns AI output into **structured edit operations** that can be applied to the editor reliably (insert, replace, find & replace, delete, inline suggestions). This reduces the copy/paste loop and makes iteration faster.`
    },
    {
      id: 'key-features',
      title: 'Key Features',
      content: `### Core Capabilities

- **Document dashboard**: create, rename, delete, and open documents
- **Rich-text editing**: TipTap editor with a clean writing surface
- **AI chat sidebar (streaming)**: responses stream in real time for fast feedback

### Structured AI Edits (Tool-Calling Based)

- Insert at cursor
- Replace selection
- Append to end
- Find-and-replace (with auto-locate + fuzzy fallback)
- Delete operations

### Additional Features

- **Inline suggestion blocks**: AI can insert an in-document "suggestion card" with Accept/Reject
- **Auto-save**: document content saves automatically as you type (debounced)
- **Chat persistence per document**: chat history is stored and reloaded when reopening a doc
- **Version history + rollback**: snapshots stored in DB; user can rollback the editor to a previous version
- **Authentication**: Google OAuth via Supabase`
    },
    {
      id: 'architecture',
      title: 'Architecture',
      content: `The app is a **Next.js App Router** project with a server/client split:

### Server Components Handle:
- Authentication checks
- Fetching the document + chat history before rendering the editor view

### Client Components Handle:
- TipTap editor rendering and interaction
- Chat UI and streaming updates
- Applying AI edits and managing suggestion blocks

State is coordinated via **Zustand** stores so both the editor and chat features can reference the same editor instance and selection context.`
    },
    {
      id: 'ai-integration',
      title: 'AI Integration',
      content: `The AI layer is designed around **tool calling** rather than plain text parsing.

### How It Works

- The chat UI streams responses from a Next.js route handler (\`/api/ai\`) running on the **Edge runtime**
- The model emits structured tool calls like:
  - \`apply_edit\` → returns an edit operation with \`mode\` + \`contentHtml\` (+ optional targeting hints)
  - \`update_document_title\` → proposes a metadata title change

### Key Design Choice

**Edits are applied client-side.** This approach:
- Keeps the UX fast (cursor/selection aware, immediate preview/apply)
- Enables in-editor constructs like suggestion blocks

To reduce risk, AI-provided HTML is **sanitized** before insertion.`
    },
    {
      id: 'database-model',
      title: 'Database Model',
      content: `### Supabase Postgres

There are three primary tables (all protected by **Row Level Security**):

#### documents
- Stores a document's \`title\`, \`content\` (**HTML**), and \`user_id\` (owner)

#### chats
- One row per document (enforced by unique \`document_id\`)
- Stores \`messages\` as \`JSONB\` for chat persistence

#### document_versions
- Many rows per document
- Stores version snapshots: \`content_html\`, \`title\`, \`description\`, \`version_type\`, and a short \`version_hash\`

This supports a clean MVP loop: **write → chat → apply edit → auto-save → version snapshot**.`
    },
    {
      id: 'edge-cases',
      title: 'Edge Cases Handled',
      content: `### Auth + Ownership
- Redirects if unauthenticated
- Server-side doc ownership checks + Supabase RLS

### Streaming Quirks
- Deduping streamed messages (prevents duplicate UI rows / key collisions)
- Fallback parsing when message shape isn't what the SDK expects
- Timeout escape hatch if streaming state gets stuck

### Selection/Cursor Issues
- Store selection before sending a chat message (because focus moves away)
- Fallback behavior if selection is missing when a replace edit arrives

### Find-and-Replace Reliability
- Attempt exact match first, then fuzzy fallback to locate the target

### Persistence
- Chat saves best-effort during usage + \`sendBeacon\` on unload
- Versions are saved in the background and patched into the UI once persisted`
    },
    {
      id: 'tradeoffs',
      title: 'Trade-offs (24-Hour Constraints)',
      content: `### HTML Storage Instead of ProseMirror JSON
- Fast to implement + integrates well with AI "insert HTML"
- Weaker for precise diffs, migrations, and robust edit anchoring

### Heuristic Targeting for Find/Replace
- Works well for common cases, can fail in long/complex documents

### Prototype-Level Safety Posture
- Sanitization exists, but a full security review/strict policy wasn't the goal

### Minimal Tests
- Core logic has a starting unit test, but coverage is not comprehensive yet`
    },
    {
      id: 'future-improvements',
      title: 'Future Improvements',
      content: `### More Robust Edit Anchoring
- Represent targets as ProseMirror positions/marks instead of fuzzy text matching

### Better Diff UX
- Show before/after diffs for edits and suggestions (not just "apply")

### Stronger Validation & Safety
- Stricter sanitization policy + server-side validation of tool payloads

### Real Collaboration
- Multi-user editing via Yjs + realtime sync layer

### Expanded Editor Features
- Tables, images, embeds, slash commands, markdown shortcuts

### Testing
- Editor selection flows, suggestion accept/reject, and streaming edge cases`
    },
    {
      id: 'tech-stack',
      title: 'Tech Stack',
      content: `### Frontend
- **Next.js** (App Router)
- **React**
- **TipTap** (ProseMirror-based editor)

### AI
- **Anthropic Claude** via \`ai\` SDK (streaming + tool calling)

### Auth/Database
- **Supabase** (Postgres + RLS, Google OAuth)

### State Management
- **Zustand**

### UI/Styling
- **Tailwind CSS**
- **shadcn/ui**`
    },
    {
      id: 'takeaways',
      title: 'Personal Takeaways',
      content: `This project reinforced a key pattern for AI-powered products: **treat AI outputs as structured actions**, not just text. 

Tool calling + an edit-application pipeline created a smoother UX and made the system easier to reason about than prompt-only parsing.

Building this in 24 hours demonstrated that with the right architectural choices and modern tooling, it's possible to create a fully functional AI-powered document editor with:
- End-to-end authentication
- Real-time streaming
- Persistent storage
- Version control
- A polished editing experience`
    }
  ]
};

