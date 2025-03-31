---
title: 'Projects Collection'
description: 'How to add projects to your portfolio.'
publishDate: 2024-03-20
category: 'Tutorial'
readTime: '3 min read'
author:
  { name: 'Szymon Dziemak', image: '/images/author.jpg', fallback: 'SD', bio: 'Software Developer' }
featuredImage: '/images/blog/projects.jpg'
imageAlt: 'Projects collection guide'
imageCaption: 'Learn how to manage your project portfolio'
tags:
  - tutorial
  - projects
---

---

## Working with the `projects` collection

The `projects` collections is found in `src/content/projects`.

```
📁 /src/content/projects
└── 📁 project-1
      └── 📄 index.md
└── 📁 project-2
      └── 📄 index.mdx
```

In the above example, two project posts will be generated with the folder name representing the id.

- `https://example.com/projects/project-1`
- `https://example.com/projects/project-2`

---

## Provide metadata

```astro
---
title: "Astro Micro";
description: "Astro Micro is an accessible theme for Astro.";
date: "2024-03-20";
draft: false;
---
```

| Field       | Req | Type    | Remarks                                          |
| :---------- | :-- | :------ | :----------------------------------------------- |
| title       | Yes | string  | Title of the content. Used in SEO and RSS.       |
| description | Yes | string  | Description of the content. Used in SEO and RSS. |
| date        | Yes | string  | Must be a valid date string (able to be parsed). |
| draft       | No  | boolean | If draft: true, content will not be published.   |
| demoURL     | No  | string  | Link to live project demo, if available.         |
| repoURL     | No  | string  | Link to project repo, if available.              |

---

All that's left to do is write the content under the metadata.

```astro
---
title: "Astro Micro";
description: "Astro Micro is an accessible theme for Astro";
date: "2024-03-20";
draft: false;
---

## Astro Micro 🔬
<!-- content -->
```
