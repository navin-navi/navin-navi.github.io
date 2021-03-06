---
title: CSS Flexbox
date: "2019-09-24"
description: Notes taken while learning CSS Flexbox
---

## 🚀 [Flexbox Zombies](https://flexboxzombies.com/p/flexbox-zombies)

![Hero Image](images/fbz-banner.jpg)

👨‍💻 By [Dave Geddes](http://gedd.ski/)

### 🎈 CSS Properties

#### 🌹 Flex Group

#### 🌟 Display

Display - `display: flex;`

#### 🌟 Directions

```css
flex-direction: row;
flex-direction: row-reverse;
flex-direction: column;
flex-direction: column-reverse;
```

#### 🌟 Justify Content

```css
justify-content: flex-start;
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
```

#### 🌟 Align Items

```css
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: stretch;
align-items: space-between;
align-items: space-around;
```

#### 🌹 Flex Items

```css
align-self: flex-start;
align-self: stretch;
align-self: center;
align-self: flex-end;
```

#### 🌟 Flex-Grow

- Fills the empty space

```css
flex-grow: 1;
```

#### 🌟 Flex-Shrink

- Fills the empty space

```css
flex-shrink: 1;
```

#### 🌟 Flex-Basis

- Fills the width based on pixel(px)
- `width` is completely ignored.
- If `width` is `300px` with `flex-basis: 100px` then `flex-basis: 100px`
- If `min-width` is `300px` with `flex-basis: 100px` then `flex-basis: 300px`
- If `max-width` is `30px` with `flex-basis: 100px` then `flex-basis: 30px`
- Default: `flex-basis: auto`
- `flex-basis` is just a hypothetical size before any growing or shrinking begins.

```css
flex-basis: 100px;
```

#### 🌟 Order

- Order on items
- Items with no Order will be moved to front in the same flex
- `order: -1` comes to front when other items are not in order

```css
order: 2;
```

#### 🌟 Flex-wrap

```css
flex-wrap: wrap;
flex-wrap: wrap-reverse;
```

#### 🌟 Flex-wrap

```css
align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-around;
```

#### 🌟 Shorthand

```css
flex-flow: row-reverse wrap;
flex: 1 1 auto;
```
