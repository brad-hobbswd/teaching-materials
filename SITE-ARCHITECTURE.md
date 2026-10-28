# Little Explorers Learning Hub: Site Architecture

## Purpose

A free, practical planning and teaching hub for Early Head Start, Head Start, preschool, and pre-K educators. Organize resources around what an educator needs to do, not around when a page was created.

## Site-wide navigation

Use the same six destinations in the header and footer on every page:

1. **Home** — the starting point and overview of the Learning Hub.
2. **Curriculum** — studies, weekly plans, daily activities, and learning experiences.
3. **School Readiness** — ELOF domains, learning goals, intentional teaching, observation, documentation, and progress monitoring.
4. **Behavior & Inclusion** — positive guidance, prevention, behavior observation, individualized support, inclusive practices, and family collaboration.
5. **Resource Library** — one searchable entry point for printables, forms, visuals, classroom tools, and downloadable resources.
6. **Teacher & Family Support** — professional development, coaching, family engagement, and home learning.

Search remains a separate utility link in the header. About, Contact, and legal information stay in the relevant pages and the footer legal row.

## Canonical content map

| Resource type | Canonical location | Rule |
| --- | --- | --- |
| Home | `index.html` | Primary entry point |
| Curriculum studies directory | `studies.html` | Study directory only |
| Individual studies | `studies/<study>/index.html` | Study overview and linked weekly plans |
| Weekly lesson plans | `lesson-plans.html` and `lesson-plans/<program>/index.html` | Keep program landing pages and a single directory |
| Age-group directory | `ages/index.html` | Entry point for age filters |
| Age-group pages | `ages/early-head-start.html`, `ages/2-3.html`, `ages/3-4.html`, `ages/4-5.html` | Review duplicate `*-years.html` pages before retiring them |
| School readiness and ELOF | `school-readiness.html` | Public School Readiness hub; link to specialized Head Start materials below it |
| Assessment and documentation | `assessment-center.html` and `assessment-center/` | Directory, observation, portfolios, screening follow-up, progress monitoring |
| Behavior and inclusion | `behavior-center.html` and `library/behavior-center/` | One public entry point; specialized tools below it |
| Resource library | `library/index.html` | One searchable library landing page |
| Printables | `printables.html` and `printables/` | One printable directory; avoid a second competing library |
| Learning/interest areas | `interest-areas.html` and `interest-areas/` | One public entry point for classroom centers |
| Teacher support | `resources.html` and `library/professional-development/` | Separate practical teacher resources from professional learning |
| Family engagement | `family-engagement.html` and related library pages | One entry point, with specific tools underneath |
| Monthly resources | `resources/monthly/index.html` and `resources/monthly/<year>/` | Keep dated resources in a year-specific archive and label past, current, and upcoming months accurately |
| Search | `search.html` plus `search-index.js` | Search index must match live pages and valid links |

## Required content model for curriculum resources

Each study or lesson should include, where appropriate:

- Intended age range and developmental adaptations
- Learning objectives and observable indicators of learning
- Relevant Head Start Early Learning Outcomes Framework (ELOF) domain, subdomain, and goal
- Materials and preparation, including low-cost alternatives
- Intentional teaching strategies and open-ended questions
- Learning-center connections and play-based experiences
- Adaptations for disabilities, individual needs, and dual-language learners
- Observation/documentation suggestions
- Family connection
- Reflection and next instructional steps

Use original writing and activities. Describe alignment to the Creative Curriculum approach without reproducing proprietary text or claiming endorsement.

## Behavior and inclusion content model

Use positive, developmentally appropriate guidance. Prioritize prevention, co-regulation, teaching replacement skills, environmental adjustments, observation of antecedents and consequences, family partnership, and referrals or individualized supports when appropriate. Do not label children or present punishment, exclusion, restraint, or seclusion as routine classroom-management strategies. Include safety procedures and program policy reminders where needed.

## Reorganization rules

1. Audit inbound links and content before deleting or redirecting any page.
2. Prefer updating a page in place when it contains unique material.
3. Where duplicate pages exist, select one canonical URL, migrate unique content, update internal links and search data, then retire the duplicate.
4. Never remove an asset until all references to it have been checked.
5. Keep the shared header, footer, navigation, typography, spacing, and mobile menu consistent.
   Every published HTML page must load the shared root `script.js` using a path relative to its directory. It supplies the same six-section responsive navigation and matching footer hubs everywhere. Keep page-specific resource links in the page content rather than adding separate footer menus.
6. Check every changed page at desktop and mobile widths, verify all links and downloads, and inspect print styles.
7. Do not claim ELOF or Head Start compliance merely because a resource mentions a domain. Map goals accurately and label resources as planning supports, not official assessment instruments.

## Initial audit findings

- Similar age pages exist in pairs: `ages/2-3.html` and `ages/2-3-years.html`, with equivalent pairs for ages 3–4 and 4–5.
- Resource discovery is split among top-level pages, `resources/`, `library/`, `assessment-center/`, and `printables/`.
- Multiple style and script files appear to have overlapping responsibilities. Consolidation should be incremental and verified to avoid breaking page-specific behavior.
- The homepage presents several routes to teacher resources. Keep the six shared destinations as the primary site map and group secondary tools within their relevant hub pages.

## Work sequence

1. Standardize navigation and identify canonical landing pages.
2. Audit internal links, page titles, stylesheets, and scripts.
3. Consolidate duplicate entry points without deleting unique content.
4. Standardize page templates and accessibility.
5. Improve the ELOF-aligned curriculum, coaching, behavior, and assessment content.
6. Run a final link, mobile, accessibility, and print check.

