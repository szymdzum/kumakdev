---
title: "Chronological pagination example"
description: "Pagination works regardless of folder name."
publishDate: 2024-03-21
category: "Example"
readTime: "1 min read"
author:
  { name: "Szymon Dziemak", image: "/images/author.jpg", fallback: "SD", bio: "Software Developer" }
featuredImage: "/images/blog/pagination.jpg"
imageAlt: "Chronological pagination example"
imageCaption: "Understanding blog post pagination"
tags:
  - example
  - pagination
---

This post should show up in proper chronological order even though its folder comes last in the `content/blog` directory.

The `Previous Post` and `Next Post` buttons under each blog post should also keep the proper chronological order, based on the frontmatter `date` field.
