# Designer Portfolio

## Current State
WorkSection shows 3 project cards with a hover overlay saying "View Case Study" but clicking does nothing -- no link, no modal, no navigation.

## Requested Changes (Diff)

### Add
- Case study detail modal that opens when a project card is clicked
- Each project gets `caseStudyContent` with: overview, role, tools, problem, solution, outcome fields
- A `caseStudyUrl` field so an external Figma/Notion/Behance link can also be provided
- Close button and keyboard (Escape) support on modal

### Modify
- WorkSection project cards: wrap in a clickable element that opens the case study modal
- Projects data: add real placeholder case study content for each sample project

### Remove
- Nothing removed

## Implementation Plan
1. Add case study fields to each project in WorkSection data
2. Create CaseStudyModal component with full case study layout
3. Wire card click to open modal with selected project's data
4. Add external link button inside modal if caseStudyUrl is provided
