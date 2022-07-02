install:
	npm ci
brain-games:
	node bin/brain-games.js
	node bin/brain-events.js
publish:
	npm publish --dry-run
lint:
	npx eslint .

