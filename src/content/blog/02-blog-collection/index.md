---
title: "Blog Collection"
description: "How to add posts to the blog."
publishDate: 2024-03-21
category: "Tutorial"
readTime: "4 min read"
author:
  { name: "Szymon Dziemak", image: "/images/author.jpg", fallback: "SD", bio: "Software Developer" }
featuredImage: "/images/blog/blog-collection.jpg"
imageAlt: "Blog collection in Astro Micro"
imageCaption: "Understanding blog collections in Astro Micro"
tags:
  - tutorial
---

---

## Working with the `blog` collection:

The `blog` collection is found in `src/content/blog`.

```
📁 /src/content/blog
└── 📁 post-1
      └── 📄 index.md
└── 📁 post-2
      └── 📄 index.mdx
```

In the above example, two blog posts will be generated with the folder name representing the id.

- `https://example.com/blog/post-1`
- `https://example.com/blog/post-2`

---

## Provide metadata

Metadata is required for each post.

```astro
---
title: "Blog Collection";
description: "How to add posts to the blog.";
date: "2024-03-21";
draft: false;
tags: -tutorial;
---
```

| Field       | Req | Type         | Remarks                                          |
| :---------- | :-- | :----------- | :----------------------------------------------- |
| title       | Yes | string       | Title of the content. Used in SEO and RSS.       |
| description | Yes | string       | Description of the content. Used in SEO and RSS. |
| date        | Yes | string       | Must be a valid date string (able to be parsed). |
| draft       | No  | boolean      | If draft: true, content will not be published.   |
| tags        | No  | string array | Tags to organize content                         |

---

All that's left to do is write the content under the metadata.

```astro
---
title: "Blog Collection";
description: "How to add posts to the blog.";
date: "2024-03-21";
draft: false;
tags: -tutorial;
---

## Working with the blog collection
<!-- content -->
```
