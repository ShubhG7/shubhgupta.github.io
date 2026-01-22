import { BlogContent } from '../blogContent';

export const patchpilotBlog: BlogContent = {
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `**PatchPilot** is a production-ready, GitHub-integrated autonomous maintenance agent that automatically fixes bugs by reading GitHub issues, generating code patches, running tests, and creating pull requests — **without human intervention**.

This project demonstrates end-to-end AI agent development: orchestration with **LangGraph**, robust **error handling**, practical **guardrails**, and **CI/CD** integration. In demo runs, the agent fixed **3 different types of bugs on the first attempt**, showcasing real-world reliability.`
    },
    {
      id: 'the-problem',
      title: 'The Problem',
      content: `Software maintenance is time-consuming. Developers spend hours:

- Reading bug reports
- Reproducing issues
- Writing fixes
- Testing changes
- Creating PRs

What if an AI agent could handle this autonomously? **PatchPilot** answers that question with a production-grade implementation.`
    },
    {
      id: 'architecture',
      title: 'Architecture',
      content: `### Core Components

#### 1. **LangGraph Orchestration**
- State machine with **12** distinct nodes
- Handles retry logic, error recovery, and conditional routing
- Maintains typed state using **Pydantic** models

#### 2. **LLM Integration (Gemini)**
- Swappable provider interface for easy model switching
- Auto-fallback logic for API version compatibility
- Structured prompting for reliable diff generation

#### 3. **Guardrails System**
- YAML-based configuration (\`agent_rules.yml\`)
- Path allow/block lists
- Diff size limits (max files, max lines)
- Automatic validation before applying changes

#### 4. **GitHub Integration**
- REST API client for issues, comments, PRs
- GitHub Actions workflow with proper permissions
- Automatic issue closure via PR descriptions`
    },
    {
      id: 'workflow',
      title: 'Workflow',
      content: `\`\`\`text
Issue Created (with agent:fix label)
    ↓
GitHub Actions Triggers
    ↓
Agent Reads Issue + Comments
    ↓
Checks Out Repro Branch
    ↓
Selects Relevant Context Files
    ↓
LLM Generates Plan → Posts Comment
    ↓
LLM Generates Unified Diff
    ↓
Validates Diff (git apply --check)
    ↓
Applies Patch → Creates Branch
    ↓
Runs Lint (ruff) + Tests (pytest)
    ↓
If Pass: Commits, Pushes, Creates PR
If Fail: Retry (up to 3 attempts)
    ↓
Posts Summary Comment
\`\`\``
    },
    {
      id: 'challenges-diff-generation',
      title: 'Key Technical Challenges & Solutions — Reliable Diff Generation',
      content: `**Problem**: LLMs struggle with exact line numbers and unified diff format. Early attempts produced:

- JSON-wrapped diffs
- Wrong line counts in hunk headers
- Missing trailing newlines
- Context lines that don’t match files

**Solutions**:
1. **Line numbers in context**: Added \`N| content\` format so the model sees exact line numbers
2. **Auto-fix hunk headers**: \`_fix_hunk_headers()\` recalculates line counts from actual content
3. **Fuzzy matching**: \`git apply -C1\` tolerates minor line number errors
4. **Strict prompt engineering**: Explicitly forbids JSON and requires raw diffs only`
    },
    {
      id: 'challenges-error-handling',
      title: 'Key Technical Challenges & Solutions — Robust Error Handling',
      content: `**Problem**: The agent needs to retry intelligently, not just fail on first error.

**Solutions**:
1. **Retry loop with context**: Failed attempts include full test output in repair context
2. **State preservation**: Lint/test results are preserved across retries for model feedback
3. **Routing logic**: Conditional edges route retries back to \`propose_patch\`, not \`finalize\`
4. **Verbose test output**: Switched from \`pytest -q\` to \`pytest -v --tb=short\` for detailed failures`
    },
    {
      id: 'challenges-guardrails',
      title: 'Key Technical Challenges & Solutions — Guardrails Without Blocking',
      content: `**Problem**: Safety limits are necessary, but they can’t block legitimate fixes.

**Solutions**:
1. **Pre-validation**: \`git apply --check\` before creating branches (catches corrupt patches early)
2. **Path matching**: Switched from \`PurePosixPath.match()\` to \`fnmatch.fnmatchcase()\` for robust glob matching
3. **Diff parsing**: Tolerant parser handles various diff header styles
4. **Hunk validation**: Ensures every line has required prefix (\` \`, \`+\`, or \`-\`)`
    },
    {
      id: 'challenges-actions',
      title: 'Key Technical Challenges & Solutions — GitHub Actions Integration',
      content: `**Problem**: Workflow needs correct permissions, git identity, and observability.

**Solutions**:
1. **Permissions**: \`contents: write\`, \`pull-requests: write\`, \`issues: write\`
2. **Git config**: Set \`user.name\` and \`user.email\` for commits
3. **Artifact uploads**: JSONL logs uploaded for debugging
4. **Event filtering**: Only triggers on \`issues.labeled\` with \`agent:fix\` label`
    },
    {
      id: 'results',
      title: 'Results',
      content: `### Success Metrics

- ✅ **3/3 bugs fixed** on first attempt (after initial debugging)
- ✅ **100% test pass rate** on successful patches
- ✅ **Zero guardrail violations** in production runs
- ✅ **Sub-30 second** average fix time (excluding LLM API calls)

### Demo Issues Fixed

1. **Issue #1**: \`divide()\` should raise \`ZeroDivisionError\`
   - Fixed: Changed \`return 0.0\` to \`raise ZeroDivisionError(...)\`
   - Result: PR created and merged

2. **Issue #2**: \`mean()\` should ignore \`None\` values
   - Fixed: Added \`filtered_values = [v for v in values if v is not None]\`
   - Result: All tests pass

3. **Issue #5**: \`normalize_whitespace()\` should strip ends
   - Fixed: Added \`.strip()\` to return statement
   - Result: All tests pass`
    },
    {
      id: 'tech-stack',
      title: 'Technical Stack',
      content: `- **Language**: Python 3.11
- **Orchestration**: LangGraph (state machine)
- **LLM**: Google Gemini (with OpenAI provider stub)
- **Testing**: pytest
- **Linting**: ruff
- **CI/CD**: GitHub Actions
- **API**: GitHub REST API
- **Data Models**: Pydantic v2
- **Config**: YAML (PyYAML)`
    },
    {
      id: 'key-learnings',
      title: 'Key Learnings',
      content: `1. **LLMs need structure**: Raw diffs work better than JSON-wrapped. Explicit format requirements in prompts are essential.
2. **Validation is critical**: Pre-validating diffs with \`git apply --check\` catches most format errors before applying.
3. **Context matters**: Line numbers, test output, and failure details dramatically improve retry success rates.
4. **Guardrails are safety nets**: They catch edge cases but shouldn’t be so strict that they block legitimate fixes.
5. **Observability is essential**: JSONL logging at every step makes debugging production issues possible.`
    },
    {
      id: 'future-enhancements',
      title: 'Future Enhancements',
      content: `- **Multi-file fixes**: Extend beyond single-file patches to cross-file refactors
- **Test generation**: Generate tests for fixes when none exist
- **Code review comments**: Add inline PR comments explaining changes
- **Confidence scoring**: Rate fix quality before opening a PR
- **Model comparison**: A/B test different LLMs (GPT-4, Claude, etc.)`
    },
    {
      id: 'repo-structure',
      title: 'Repository Structure',
      content: `\`\`\`text
PatchPilot/
├── agent/              # Core agent logic
│   ├── graph.py        # LangGraph workflow (12 nodes)
│   ├── state.py        # Pydantic state models
│   ├── config.py       # Config loading
│   ├── guardrails/     # Safety rules
│   ├── llm/            # LLM providers
│   ├── tools/          # Git, GitHub, runner utilities
│   └── logging/        # JSONL logger
├── src/demo_app/       # Demo codebase (with bugs)
├── tests/              # Test suite
├── .github/workflows/  # GitHub Actions
├── agent_config.yml    # Repo-specific config
├── agent_rules.yml     # Guardrails config
└── AGENT_POLICY.md     # Human-readable policy
\`\`\``
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      content: `PatchPilot demonstrates that autonomous code maintenance is not just possible, but can be reliable and production-ready. By combining structured orchestration, robust error handling, and careful prompt engineering, it can fix real bugs with minimal human intervention.

This project showcases:
- **Full-stack AI agent development** (from LLM calls to CI/CD)
- **Production-grade error handling** (retries, validation, guardrails)
- **Real-world problem solving** (fixing actual bugs, not toy examples)
- **Clean, maintainable architecture** (typed models, modular design)

**Status**: Production-ready demo. Successfully deployed and tested on GitHub.

---

*Built with Python, LangGraph, and Gemini. Open source and ready for extension.*`
    }
  ]
};

