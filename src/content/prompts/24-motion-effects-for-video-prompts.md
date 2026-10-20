---
title: "24 Motion Effects for Better AI Video Prompts"
summary: "A practical reference of 24 animation effects and a reusable prompt structure for precisely directing AI-generated motion graphics."
kind: "prompt"
category: "Motion Design"
tags: ["Motion graphics", "Animation vocabulary", "GSAP", "Prompt engineering"]
sourceNote: "Adapted from social-media screenshots credited to @osetup.ia and @omatheusdaia; the original post URL was not provided."
relatedUrl: "https://gsap.com/"
---

## How to use this reference

Generic instructions like “make the video modern and dynamic” do not specify **what moves, when it moves, or how it settles**. Use named effects as building blocks and describe the affected element, direction, duration, easing, and transition into the next scene.

### 24 practical motion effects

#### Entrance effects

- **Fade in:** Increase opacity from 0 to 1 over a defined duration.
- **Slide in:** Move an element from a specified direction into its final position.
- **Scale in:** Expand an element from a smaller scale to its actual size.
- **Pop in:** Combine a short scale-up with a restrained overshoot before settling.
- **Blur in:** Reduce blur while the element becomes fully visible.
- **Stagger:** Reveal multiple elements one after another with a consistent offset.

#### Motion and rhythm

- **Ease in-out:** Start and end softly while moving faster through the middle.
- **Spring:** Approach the final value with a damped spring-like response.
- **Bounce:** Rebound after contacting a surface, with decreasing height.
- **Overshoot:** Temporarily pass the target then settle at the intended value.
- **Elastic:** Stretch or oscillate briefly before returning to the resting state.
- **Loop:** Repeat a movement seamlessly with no visible jump at the boundary.

#### Text and numbers

- **Typewriter:** Reveal characters progressively with a cursor when appropriate.
- **Word by word:** Introduce individual words in reading order.
- **Text reveal:** Uncover typography using a mask or clipped region.
- **Kinetic type:** Use position, rotation, size, and timing to make typography expressive.
- **Count up:** Interpolate a number from a start value to an exact final value.
- **Highlight sweep:** Move a highlight across a selected word or sentence.

#### Shapes and transitions

- **Draw-on:** Animate the appearance of a vector stroke along its path.
- **Mask reveal:** Reveal content inside a growing or moving mask.
- **Wipe:** Introduce the next scene by sweeping a defined edge across the frame.
- **Punch zoom:** Use a brief, intentional fast zoom to emphasize a specific subject.
- **Bar grow:** Expand a bar to its final value with the proper scale and label.
- **Morph:** Smoothly transform one compatible shape into another.

## Copy-ready prompt template

```text
Act as an experienced motion designer and create a [DURATION]-second,
[WIDTH]×[HEIGHT], [FPS] fps video for [SUBJECT] using [GSAP / Remotion / CSS].

Brand elements: [TEXT], [LOGO], [COLORS], [ASSETS].
Target audience and message: [AUDIENCE] / [KEY_MESSAGE].

Scene 1 ([START_1]–[END_1]):
- [SUBJECT_1] should [FADE IN / SLIDE IN / POP IN] from [START_STATE]
  to [END_STATE] in [DURATION_1] seconds using [EASING_1].
- Introduce [OTHER_ELEMENTS] with [STAGGER_OFFSET] seconds between items.

Scene 2 ([START_2]–[END_2]):
- Animate [NUMBER] from [INITIAL_VALUE] to exactly [FINAL_VALUE] using
  COUNT UP over [COUNT_DURATION] seconds.
- Apply a subtle [HIGHLIGHT SWEEP] to [IMPORTANT_WORD].
- Use a [PUNCH ZOOM] on [FOCAL_POINT], then transition with a [WIPE].

Scene 3 ([START_3]–[END_3]):
- Transform [SHAPE_A] into [SHAPE_B] using a smooth MORPH,
  followed by a MASK REVEAL of [FINAL_TEXT].
- Hold the final frame for [HOLD_DURATION] seconds.

Implementation and QA:
- Use a deterministic frame or timeline-driven animation.
- Specify the start/end time and easing for every major action.
- Preserve legible contrast, safe text margins, and consistent hierarchy.
- Avoid using every effect in one video; prioritize storytelling.
- Preview at scene boundaries and validate the actual exported file.
- Deliver the project source, a timestamped storyboard, and export steps.
```

## Worked example: make a vague request concrete

**Vague:** “Make a modern, dynamic product trailer.”

**Better:**

```text
At 0.0s, fade in the title over 0.6s.
Stagger the three supporting words 0.14s apart.
At 2.0s, count the highlighted metric from 0 to 25 over 1.1s,
with ease-out easing and a final-value hold of 0.6s.
At 3.7s, punch-zoom into the metric over 0.22s.
Then wipe left-to-right into the next scene over 0.5s.
```

## Practical constraints

- **Choose effects for meaning.** The emphasis should support what the audience needs to understand.
- **Keep easing intentional.** “Spring” and “elastic” are not interchangeable; excessive oscillation may look unprofessional.
- **Check numeric accuracy.** For count-up and bar animations, make the final displayed value match the supplied data.
- **Mind frame rate and export.** Browser animations need a separate rendering and encoding step to produce a reliable MP4.
- **Review accessibility.** Avoid frequent flashes and provide a reduced-motion option for interactive previews.

## Provenance

Independently adapted into English from a multi-slide social-media reference credited in the provided screenshots to @osetup.ia and @omatheusdaia. This entry is an educational effect glossary and prompt pattern, **not** an installable software package or a transcription of the original slides.
