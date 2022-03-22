const fs = require('fs');

const title = process.env.npm_config_title ?? 'draft';

const titleToSlug = (title) => title.replace(/[^\w ]+/g, '').replace(/ +/g, '-');

const frontMatter = `
---
title: ${title}
description:
uploaded:
updated:
tags: []
draft: true
---
`.trim();

fs.writeFileSync(`./posts/${titleToSlug(title)}.mdx`, frontMatter);
