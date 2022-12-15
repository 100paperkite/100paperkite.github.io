const site = require('./siteMetadata');
const matter = require('gray-matter');
const fs = require('fs');
const path = require('path');

module.exports = {
  siteUrl: site.url,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  outDir: 'out',

  transform: async (config, url) => {
    let updated;
    const mdxPath = path.join('.', `${url}.mdx`);

    if (fs.existsSync(mdxPath)) {
      const markdownWithMeta = fs.readFileSync(mdxPath, 'utf-8');
      ({
        data: { updated },
      } = matter(markdownWithMeta));
    }

    return {
      loc: url, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: path !== '/' ? updated : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
