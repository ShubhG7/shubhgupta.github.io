import { BlogContent } from '../blogContent';

export const hivemailBlog: BlogContent = {
  sections: [
    {
      id: 'title',
      title: 'Building Hivemail: An Agentic AI Email CRM with Privacy at its Core',
      content: `Email management is a universal problem. Most solutions either compromise on privacy, become prohibitively expensive to scale, or lack the intelligence users expect. We built Hivemail to solve all three constraints simultaneously. Here's how we engineered a privacy-first, cost-effective email management system powered by agentic AI orchestration.`
    },
    {
      id: 'architecture',
      title: 'The Architecture: Microservices Meets Agentic Orchestration',
      content: `We split the system into two services: a Next.js frontend on Vercel for the UI and authentication, and a Python worker on GCP Cloud Run for email processing and AI operations. This separation allows us to scale the worker independently and keep sensitive operations isolated from the web layer.

The core innovation is our **agentic email processing pipeline** built with LangGraph. Each email flows through a stateful, orchestrated workflow: fetch from Gmail → parse → detect sensitive content → classify (hybrid rules + LLM) → extract entities → generate embeddings → persist. LangGraph provides explicit state management, visualizable workflows, and error handling at each step. This agentic orchestration makes the pipeline debuggable, testable, and easy to extend with new processing steps.

**Key engineering decisions:**
- **Agentic orchestration with LangGraph**: Stateful workflows that maintain context across processing steps, enabling complex multi-step reasoning
- **Hybrid classification**: Rule-based heuristics handle ~70% of emails (newsletters, receipts, shipping) instantly at zero cost, with LLMs only for ambiguous cases
- **Privacy controls**: Three redaction modes (OFF, REDACT_BEFORE_LLM, SUMMARIES_ONLY) let users control what data is sent to LLMs
- **BYOK architecture**: Users bring their own LLM API keys (Gemini, OpenAI, Anthropic, or custom), giving them cost control and provider choice while we avoid LLM costs
- **Graceful degradation**: If LLM calls fail, the system falls back to rule-based classification so emails are still processed`
    },
    {
      id: 'rag-chat-agent',
      title: 'The RAG-Powered Chat Agent',
      content: `Our chat agent uses retrieval-augmented generation (RAG) to answer questions about emails. It combines text search (SQL) for exact matches with vector search (pgvector) for semantic similarity. Thread embeddings stored in PostgreSQL enable fast similarity queries without a separate vector database. The agent orchestrates context assembly from relevant threads, messages, email statistics, and chat history, then sends it to the LLM with structured prompts to produce answers with citations and suggested actions.

**Technical highlights:**
- **Hybrid search**: SQL for precision, vector similarity for recall
- **Multi-provider support**: Unified interface supporting Gemini, OpenAI, Anthropic, and OpenAI-compatible custom APIs
- **Error resilience**: Comprehensive error classification (rate limits, invalid keys, quota exceeded) with user-friendly messages and automatic retries`
    },
    {
      id: 'performance-analytics',
      title: 'Performance and Analytics: Inspired by msgvault',
      content: `We were inspired by Wes McKinney's [msgvault](https://wesmckinney.com/blog/announcing-msgvault/) approach to email analytics. While we didn't adopt its local-first architecture (we're a hosted service), we borrowed key techniques: DuckDB for fast analytics queries and Parquet for efficient columnar storage. Email metadata is exported to Parquet files (cached hourly), and DuckDB queries these files for sub-second analytics on large datasets. This separates analytics workloads from the transactional PostgreSQL database, keeping both fast.

**Why this matters:**
- Analytics queries that took 5-30 seconds now complete in under 1 second
- No additional infrastructure—DuckDB reads Parquet files directly
- PostgreSQL stays focused on transactional operations`
    },
    {
      id: 'security-deployment',
      title: 'Security and Deployment',
      content: `Everything sensitive is encrypted: LLM API keys (AES-256), email bodies (at rest), and OAuth tokens. We hash email bodies for deduplication without storing plaintext. The system is deployed serverless-first: Vercel for the frontend (automatic scaling, edge network) and Cloud Run for the worker (scales to zero, pay-per-request). Email processing is asynchronously orchestrated via Cloud Tasks queues, enabling non-blocking user experience, automatic retries, and scheduled periodic syncs.

The result is a privacy-first, cost-effective email management system that scales. Every technology choice—from LangGraph's agentic orchestration to BYOK to pgvector's semantic search—was made to balance functionality, privacy, cost, and scalability. The architecture is designed to evolve, with LangGraph making it easy to add new processing steps and the multi-provider system supporting new LLM providers as they emerge.

*Hivemail is open source. Check out the code on [GitHub](https://github.com/ShubhG7/HiveMail).*`
    }
  ]
};

