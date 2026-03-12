# Longhorn Fire Alarm Design

Next.js, React, TypeScript, Tailwind CSS
Deployed on Vercel: https://longhorn-fa.vercel.app
Production: https://longhornfirealarmdesign.com
Local dev: http://localhost:3000

## Run Agents

WORK=/Users/brandonhopkins/Projects/longhorn-fa/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/longhorn-fa/agents/content-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/longhorn-fa/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/longhorn-fa/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
