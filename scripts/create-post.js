const fs = require('fs');

const frontMatter = `
---
title: Draft
description:
created: '${new Date().toISOString()}'
updated:
tags: []
public: false
---
`.trim();

const slug = process.env.npm_config_slug ?? 'draft';
fs.writeFileSync(`./posts/${slug}.mdx`, frontMatter);
