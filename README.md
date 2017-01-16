# React Dual List Box

A dual list box component for React, with search feature.

## Installation

```bash
$ npm install react-dual-list-box --save

```

## Usage
There is a basic example on [examples folder](/examples/components/App.jsx), which is also live [here](http://altayaydemir.com/react-dual-list-box).

*Requirement*: This plugin requires the use of font-awesome icons for the button icons. See available props below.

| Prop | Type | Default Value |
| :----: |:-------------:|:-----:|
| **options** | arrayOf(shape({ value: string or number, label: node })) | [ ] |
| **initialValue** | arrayOf(string or number) | [ ] |
| **valueType** | string | "string" |
| **onChange** | func | - |
| **disabled** | bool | false |
| **leftButtonIcon** | string (font awesome icon) | angle-double-right |
| **rightButtonIcon** | string (font awesome icon) | angle-double-left |

Since HTML select tag auto formats its option values as string, if your `value` prop is a number (eg: id), you need to pass `valueType="number"` prop to DualListBox component.

## Contribution

This project has initialized from [react-component-starter](https://github.com/altayaydemir/react-component-starter), which contains detailed documentation about installation, development and build flow of the package.
