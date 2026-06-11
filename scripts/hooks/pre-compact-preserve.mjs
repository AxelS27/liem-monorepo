/*
 * PreCompact hook: when the conversation is about to be summarized, make sure the
 * things models tend to drop survive the compaction. Rule decay after compaction is
 * the main way long sessions start violating the design system.
 */
const lines = [
  'Compaction notice - preserve these in the summary and re-apply them after:',
  '- AGENTS.md remains the law; re-read its UI Critical Rules before further apps/web work.',
  '- Sector work routes to subagents (web-builder, api-builder, db-engineer); UI changes are not done until design-reviewer returns PASS.',
  '- Carry over: which files were changed this session, pending gates (design-reviewer, pnpm run verify), and any docs/engineering/PROGRESS.md updates still owed.',
];

console.log(
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'PreCompact',
      additionalContext: lines.join('\n'),
    },
  }),
);
