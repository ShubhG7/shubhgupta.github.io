import { BlogContent } from '../blogContent';

export const tubotBlog: BlogContent = {
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `**TutorApp (Tubot)** is a microservices-based tutoring backend designed to deliver **personalized learning**: quizzes, progress tracking, and explanations tailored to what a learner already cares about (sports, music, gaming, etc.).

If you've ever used an online tutor and felt the explanation didn't "click," TutorApp is built for that exact moment. Under the hood, it's also a great example of a **modern microservices stack** with observability and pluggable AI inference.

### What TutorApp Is

TutorApp is a microservices-based tutoring backend with:
- **HTTP Gateway** for client apps
- **Quiz gRPC service** for assessments and progress updates
- **Inference service** for LLM-powered content generation (with mock fallbacks)
- **Postgres + pgvector** for structured learning data and vector embeddings
- **Redis** for caching/rate-limiting foundations
- **MinIO** for S3-style storage
- **Keycloak (OIDC)** for production-grade authentication
- **Prometheus + Grafana + Jaeger** for full observability`
    },
    {
      id: 'architecture',
      title: 'Architecture',
      content: `### Core Product Flow (User Experience)

1. A user logs in and starts interacting with the learning system
2. They set **interests** (category + level), which influences how explanations are phrased
3. They can:
   - Request **personalized analogies** (interest-based explanations)
   - Take a **placement or practice quiz**
   - Submit answers and get results + progress updates

### Core System Flow (Engineering View)

- **Client → Gateway (HTTP)**: Single public entrypoint for APIs
- **Gateway → Quiz Service (gRPC)**: Quiz operations delegated to dedicated service
- **Quiz Service → Postgres**: Stores quiz sessions, answers, ability score, user state
- **Quiz Service → Inference (gRPC)**: Optional LLM-powered question generation with fallback
- **Observability everywhere**: Prometheus metrics + Jaeger traces + Grafana dashboards`
    },
    {
      id: 'running-stack',
      title: 'Running Stack',
      content: `### Docker Compose Services

TutorApp's \`docker-compose.yml\` starts the complete infrastructure:

- **Postgres (pgvector)**: Primary database + embeddings support
- **Redis**: Cache / rate limiting
- **MinIO**: S3-compatible storage for uploads/content
- **NATS**: Async messaging backbone for future event-driven flows
- **Keycloak**: OIDC authentication provider
- **Gateway**: HTTP API (public entrypoint)
- **Quiz Service**: gRPC quiz engine
- **Inference**: Model server (currently skeleton/mock in places)
- **Prometheus + Grafana**: Metrics and dashboards
- **Jaeger**: Distributed tracing`
    },
    {
      id: 'services',
      title: 'Services & Responsibilities',
      content: `### Gateway (\`gateway/\`)

Exposes HTTP routes:
- \`POST /api/login\`
- \`PUT /api/user/interests\`, \`GET /api/user/interests\`
- \`GET /api/analogy/personalized\`
- \`GET /api/quiz/templates\`, \`POST /api/quiz/start\`, etc.

Handles auth middleware:
- Simple dev JWT path (accepts \`Bearer test-token\`)
- OIDC/Keycloak validation path (for production)

Acts as the "API façade" so clients don't need to speak gRPC directly.

### Quiz Service (\`quiz-service/\`)

gRPC service implementing quiz operations:
- Start quiz (placement/practice)
- Submit quiz + score
- Update progress (ability score + level)
- Get history/templates

Uses Postgres schema with migrations (subjects/levels/quizzes/user_state). If Inference is available, it attempts LLM-based question generation; otherwise it falls back.

### Inference (\`inference/\` and \`inference-service/\`)

Two tracks in the repo:
- **FastAPI** app for future HTTP model server
- **Python gRPC server** implementing the protobuf \`InferenceService\`

The contract in \`protos/inference.proto\` supports:
- \`GenerateQuiz\`
- \`GenerateQuestion\`
- \`GenerateContent\`
- \`HealthCheck\``
    },
    {
      id: 'interest-based-learning',
      title: 'Interest-Based Learning',
      content: `### The Differentiator

TutorApp isn't only about "getting the right answer" — it's about **getting an explanation that sticks**.

### Data Model

- **user_interests**: User picks categories (sports/music/gaming/etc.) and a level (1–5)
- **analogies**: Curated analogies tagged by subject (algorithms/ai/system_design), topic + concept, and interest_category
- **analogy_feedback**: Captures user ratings and notes to improve effectiveness over time

### What It Enables

- A learner interested in **sports** gets an algorithms analogy framed like team tryouts
- A learner interested in **gaming** gets AI concepts framed like training a game opponent
- Over time, feedback can tune which analogies work best per subject/topic`
    },
    {
      id: 'database',
      title: 'Database & pgvector',
      content: `### Built for "Tutor + Retrieval"

Tutor apps naturally evolve toward "Bring your own notes/PDFs and ask questions." TutorApp prepares for that by including:

- \`documents\` and \`document_chunks\` tables
- \`embedding vector(1536)\` fields and similarity indexes

### RAG Foundation

This is the foundation for RAG-style tutoring:
- Upload → Chunk → Embed → Retrieve → Generate answers with citations`
    },
    {
      id: 'api-usage',
      title: 'API Usage',
      content: `### Dev Authentication

Most dev/testing routes use:
\`\`\`
Authorization: Bearer test-token
\`\`\`

### Personalized Analogy

\`\`\`
GET /api/analogy/personalized?subject=algorithms&topic=sorting&concept=bubble_sort
\`\`\`

Response shape:
- \`user_id\`
- \`analogy\`: interest_category, analogy_text, explanation
- \`timestamp\`

### Quiz Flow

1. **List templates**: \`GET /api/quiz/templates?subject=programming&level=L1\`
2. **Start quiz**: \`POST /api/quiz/start\`
3. **Submit answers**: \`POST /api/quiz/submit\`
4. **Review history**: \`GET /api/quiz/history\``
    },
    {
      id: 'observability',
      title: 'Observability',
      content: `### Production-Style from Day One

TutorApp is instrumented like a real distributed system:

- **Prometheus** for metrics scraping
- **Grafana** for dashboards
- **Jaeger** for distributed tracing
- **OpenTelemetry** exporter wired in the gateway

### Why This Matters

Tutoring systems mix:
- Latency-sensitive APIs (quiz start, tutor response)
- Background workloads (embedding, indexing)
- ML inference (costly + variable)

You want visibility before users report "it feels slow."`
    },
    {
      id: 'implementation-status',
      title: 'Implementation Status',
      content: `### Strong Foundation Already Present

- Microservices layout + Compose orchestration
- Protobuf contracts for quiz and inference
- Quiz progress tracking schema (subjects/levels/user_state)
- Interest-based learning schema + seed data
- Full observability stack

### Areas Intentionally In-Progress

- Some Gateway endpoints return mock responses (common early-stage pattern)
- Inference is "pluggable" but not yet a single unified production implementation
- Some payloads/scripts may not perfectly match newest handler expectations (typical while iterating)`
    },
    {
      id: 'future-work',
      title: 'Future Work',
      content: `### Where This Is Heading

- **Unify inference**: Choose one primary inference path (gRPC vs HTTP) and make the other a thin adapter
- **Connect gateway ↔ user/analogy services**: Replace mocked endpoints with real service calls
- **RAG tutor end-to-end**: Wire upload → embed → retrieve → tutor answer with citations
- **Personalization loop**: Use analogy feedback + interest signals to improve selection dynamically
- **Hardening**: Rate limiting, retries, circuit breaking, schema migrations in CI/CD`
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      content: `### Final Take

TutorApp is both:
- A **product idea** (personalized learning through interests + assessments)
- A **systems blueprint** (microservices + contracts + observability + AI integration points)

It's a solid foundation for building a full tutoring platform: start with quizzes and tailored explanations, then grow into content ingestion + retrieval + high-quality tutor answers.

### Tech Stack Summary

- **Backend**: Go (Gateway, Quiz Service), Python (Inference)
- **Communication**: gRPC, Protocol Buffers, HTTP REST
- **Database**: PostgreSQL with pgvector
- **Caching**: Redis
- **Storage**: MinIO (S3-compatible)
- **Messaging**: NATS
- **Auth**: Keycloak (OIDC)
- **Observability**: Prometheus, Grafana, Jaeger, OpenTelemetry
- **Infrastructure**: Docker, Docker Compose`
    }
  ]
};

