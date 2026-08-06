# Homepage Banner Rollback: Pre Animated Background

Saved before the animated homepage hero background updates.

To restore the previous static photo treatment, replace the `.hero-field`
block in `src/app/globals.css` with:

```css
.hero-field {
  --hero-image: url("/brand/generated/v006/debt-relief-budget-couple-v006.png");

  background:
    linear-gradient(
      90deg,
      rgb(15 29 41 / 92%) 0%,
      rgb(21 37 52 / 84%) 45%,
      rgb(21 37 52 / 62%) 100%
    ),
    radial-gradient(circle at 20% 10%, rgb(255 255 255 / 10%), transparent 28%),
    linear-gradient(
      135deg,
      var(--color-brand-blue) 0%,
      color-mix(in srgb, var(--color-brand-blue) 76%, black) 54%,
      color-mix(in srgb, var(--color-brand-blue) 58%, black) 100%
    ),
    var(--hero-image);
  background-position: center;
  background-size: auto, auto, auto, cover;
}
```

Also remove the decorative `.hero-background` element from
`src/components/hero.tsx`, remove `hero.backgroundImage` from
`src/lib/site-config.ts`, and remove any `.hero-field::before`,
`.hero-field > *`, and `.hero-background` rules added for the static
background-image treatment.
