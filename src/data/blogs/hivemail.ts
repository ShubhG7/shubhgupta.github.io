import { BlogContent } from '../blogContent';

export const hivemailBlog: BlogContent = {
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `HiveMail is built around a simple idea: your inbox already contains everything you need — it’s just scattered across a thousand threads like puzzle pieces thrown in the air.

I built it to feel like a **hive mind for your email**, where every message contributes to shared context and the system gets smarter the more it sees, **without becoming creepy or invasive**.`
    },
    {
      id: 'hive-mind-concept',
      title: 'The “Hive Mind” Concept',
      content: `The “hive mind” part means HiveMail doesn’t treat emails as isolated documents. It understands them as **connected conversations**.

A receipt links to a shipment update, which links to a return policy thread, which links to your follow-up. HiveMail organizes those relationships, remembers what matters, and helps you pull the right context instantly — whether you’re searching or chatting.

Instead of you being the brain that holds everything together, HiveMail becomes the **memory layer**: it can answer questions like:

- “What did I decide?”
- “Where is that invoice?”
- “Which threads need a reply?”

…using your inbox as the source of truth.`
    },
    {
      id: 'when-to-think',
      title: 'Rules First, AI When It Matters',
      content: `Most emails are predictable, so HiveMail uses **quick rules** for the obvious stuff and saves AI for the moments where understanding actually matters.

Then it stores helpful signals like **categories**, **participants**, **summaries**, and meaning-based “fingerprints” (**embeddings**) so future queries are faster and more accurate.`
    },
    {
      id: 'privacy',
      title: 'Privacy + BYOK (Bring Your Own Key)',
      content: `Privacy is core. You stay in control of what gets shared with an AI provider:

- Full content
- Redacted content
- Summaries only

The hive mind stays inside your walls. BYOK also keeps **cost** and **data** under your control.`
    },
    {
      id: 'what-makes-it-real',
      title: 'What Makes the “Hive Mind of Emails” Real',
      content: `A few things that make the concept practical:

- Threads become shared memory, not scattered messages
- Chat + search use both keywords and meaning, so you can ask naturally
- Summaries + entities make long conversations digestible
- Rules-first intelligence keeps it fast and cost-efficient
- BYOK + privacy modes keep data and cost under your control
- Resilient fallbacks keep the hive working even when AI fails`
    },
    {
      id: 'tech-stack',
      title: 'Tech Stack (High-Level)',
      content: `- **Frontend**: Next.js (TypeScript) on Vercel
- **Worker**: Python on GCP Cloud Run
- **Queue / async jobs**: Cloud Tasks
- **Database**: PostgreSQL + pgvector (Prisma ORM)
- **Agent pipeline**: LangGraph
- **Analytics**: DuckDB + Parquet exports
- **Security**: Encrypted storage for OAuth tokens, API keys, and email content`
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      content: `HiveMail turns your inbox into a structured memory system: connected threads, fast retrieval, and privacy-first intelligence that only “thinks hard” when it needs to.

It’s a practical take on augmenting email — not by replacing your workflow, but by making the *context* instantly available when you need it.`
    }
  ]
};

