let head = `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<!-- <link rel="stylesheet" href="resume.css"> -->
<link rel="stylesheet" href="output.css"> 
<style>


*,
::before,
::after {
box-sizing: border-box;
/* 1 */
border-width: 0;
/* 2 */
border-style: solid;
/* 2 */
border-color: #e5e7eb;
/* 2 */
}

::before,
::after {
--tw-content: '';
}


html,
:host {
line-height: 1.5;
/* 1 */
-webkit-text-size-adjust: 100%;
/* 2 */
-moz-tab-size: 4;
/* 3 */
-o-tab-size: 4;
tab-size: 4;
/* 3 */
font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
/* 4 */
font-feature-settings: normal;
/* 5 */
font-variation-settings: normal;
/* 6 */
-webkit-tap-highlight-color: transparent;
/* 7 */
}


body {
margin: 0;
/* 1 */
line-height: inherit;
/* 2 */
}


hr {
height: 0;
/* 1 */
color: inherit;
/* 2 */
border-top-width: 1px;
/* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
-webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}


h1,
h2,
h3,
h4,
h5,
h6 {
font-size: inherit;
font-weight: inherit;
}


a {
color: inherit;
text-decoration: inherit;
}


b,
strong {
font-weight: bolder;
}


code,
kbd,
samp,
pre {
font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
/* 1 */
font-feature-settings: normal;
/* 2 */
font-variation-settings: normal;
/* 3 */
font-size: 1em;
/* 4 */
}


small {
font-size: 80%;
}


sub,
sup {
font-size: 75%;
line-height: 0;
position: relative;
vertical-align: baseline;
}

sub {
bottom: -0.25em;
}

sup {
top: -0.5em;
}


table {
text-indent: 0;
/* 1 */
border-color: inherit;
/* 2 */
border-collapse: collapse;
/* 3 */
}

button,
input,
optgroup,
select,
textarea {
font-family: inherit;
/* 1 */
font-feature-settings: inherit;
/* 1 */
font-variation-settings: inherit;
/* 1 */
font-size: 100%;
/* 1 */
font-weight: inherit;
/* 1 */
line-height: inherit;
/* 1 */
letter-spacing: inherit;
/* 1 */
color: inherit;
/* 1 */
margin: 0;
/* 2 */
padding: 0;
/* 3 */
}

button,
select {
text-transform: none;
}
button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
-webkit-appearance: button;
/* 1 */
background-color: transparent;
/* 2 */
background-image: none;
/* 2 */
}


:-moz-focusring {
outline: auto;
}


:-moz-ui-invalid {
box-shadow: none;
}


progress {
vertical-align: baseline;
}


::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
height: auto;
}


[type='search'] {
-webkit-appearance: textfield;
/* 1 */
outline-offset: -2px;
/* 2 */
}


::-webkit-search-decoration {
-webkit-appearance: none;
}


::-webkit-file-upload-button {
-webkit-appearance: button;
/* 1 */
font: inherit;
/* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
display: list-item;
}


blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
margin: 0;
}

fieldset {
margin: 0;
padding: 0;
}

legend {
padding: 0;
}

ol,
ul,
menu {
list-style: none;
margin: 0;
padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
padding: 0;
}


textarea {
resize: vertical;
}


input::-moz-placeholder, textarea::-moz-placeholder {
opacity: 1;
/* 1 */
color: #9ca3af;
/* 2 */
}

input::placeholder,
textarea::placeholder {
opacity: 1;
/* 1 */
color: #9ca3af;
/* 2 */
}

button,
[role="button"] {
cursor: pointer;
}


:disabled {
cursor: default;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
display: block;
/* 1 */
vertical-align: middle;
/* 2 */
}


img,
video {
max-width: 100%;
height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
display: none;
}

*, ::before, ::after {
--tw-border-spacing-x: 0;
--tw-border-spacing-y: 0;
--tw-translate-x: 0;
--tw-translate-y: 0;
--tw-rotate: 0;
--tw-skew-x: 0;
--tw-skew-y: 0;
--tw-scale-x: 1;
--tw-scale-y: 1;
--tw-pan-x:  ;
--tw-pan-y:  ;
--tw-pinch-zoom:  ;
--tw-scroll-snap-strictness: proximity;
--tw-gradient-from-position:  ;
--tw-gradient-via-position:  ;
--tw-gradient-to-position:  ;
--tw-ordinal:  ;
--tw-slashed-zero:  ;
--tw-numeric-figure:  ;
--tw-numeric-spacing:  ;
--tw-numeric-fraction:  ;
--tw-ring-inset:  ;
--tw-ring-offset-width: 0px;
--tw-ring-offset-color: #fff;
--tw-ring-color: rgb(59 130 246 / 0.5);
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--tw-shadow: 0 0 #0000;
--tw-shadow-colored: 0 0 #0000;
--tw-blur:  ;
--tw-brightness:  ;
--tw-contrast:  ;
--tw-grayscale:  ;
--tw-hue-rotate:  ;
--tw-invert:  ;
--tw-saturate:  ;
--tw-sepia:  ;
--tw-drop-shadow:  ;
--tw-backdrop-blur:  ;
--tw-backdrop-brightness:  ;
--tw-backdrop-contrast:  ;
--tw-backdrop-grayscale:  ;
--tw-backdrop-hue-rotate:  ;
--tw-backdrop-invert:  ;
--tw-backdrop-opacity:  ;
--tw-backdrop-saturate:  ;
--tw-backdrop-sepia:  ;
--tw-contain-size:  ;
--tw-contain-layout:  ;
--tw-contain-paint:  ;
--tw-contain-style:  ;
}

::backdrop {
--tw-border-spacing-x: 0;
--tw-border-spacing-y: 0;
--tw-translate-x: 0;
--tw-translate-y: 0;
--tw-rotate: 0;
--tw-skew-x: 0;
--tw-skew-y: 0;
--tw-scale-x: 1;
--tw-scale-y: 1;
--tw-pan-x:  ;
--tw-pan-y:  ;
--tw-pinch-zoom:  ;
--tw-scroll-snap-strictness: proximity;
--tw-gradient-from-position:  ;
--tw-gradient-via-position:  ;
--tw-gradient-to-position:  ;
--tw-ordinal:  ;
--tw-slashed-zero:  ;
--tw-numeric-figure:  ;
--tw-numeric-spacing:  ;
--tw-numeric-fraction:  ;
--tw-ring-inset:  ;
--tw-ring-offset-width: 0px;
--tw-ring-offset-color: #fff;
--tw-ring-color: rgb(59 130 246 / 0.5);
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--tw-shadow: 0 0 #0000;
--tw-shadow-colored: 0 0 #0000;
--tw-blur:  ;
--tw-brightness:  ;
--tw-contrast:  ;
--tw-grayscale:  ;
--tw-hue-rotate:  ;
--tw-invert:  ;
--tw-saturate:  ;
--tw-sepia:  ;
--tw-drop-shadow:  ;
--tw-backdrop-blur:  ;
--tw-backdrop-brightness:  ;
--tw-backdrop-contrast:  ;
--tw-backdrop-grayscale:  ;
--tw-backdrop-hue-rotate:  ;
--tw-backdrop-invert:  ;
--tw-backdrop-opacity:  ;
--tw-backdrop-saturate:  ;
--tw-backdrop-sepia:  ;
--tw-contain-size:  ;
--tw-contain-layout:  ;
--tw-contain-paint:  ;
--tw-contain-style:  ;
}

.container {
width: 100%;
}

@media (min-width: 640px) {
.container {
max-width: 640px;
}
}

@media (min-width: 768px) {
.container {
max-width: 768px;
}
}

@media (min-width: 1024px) {
.container {
max-width: 1024px;
}
}

@media (min-width: 1280px) {
.container {
max-width: 1280px;
}
}

@media (min-width: 1536px) {
.container {
max-width: 1536px;
}
}

.visible {
visibility: visible;
}

.collapse {
visibility: collapse;
}

.relative {
position: relative;
}

.m-1 {
margin: 0.25rem;
}

.m-2 {
margin: 0.5rem;
}

.m-3 {
margin: 0.75rem;
}

.m-6 {
margin: 1.5rem;
}

.mx-3 {
margin-left: 0.75rem;
margin-right: 0.75rem;
}

.my-3 {
margin-top: 0.75rem;
margin-bottom: 0.75rem;
}

.my-4 {
margin-top: 1rem;
margin-bottom: 1rem;
}

.my-5 {
margin-top: 1.25rem;
margin-bottom: 1.25rem;
}

.mb-5 {
margin-bottom: 1.25rem;
}

.block {
display: block;
}

.flex {
display: flex;
}

.table {
display: table;
}

.contents {
display: contents;
}

.hidden {
display: none;
}

.h-fit {
height: -moz-fit-content;
height: fit-content;
}

.w-80 {
width: 20rem;
}

.min-w-96 {
min-width: 24rem;
}

.min-w-5 {
min-width: 1.25rem;
}

.min-w-52 {
min-width: 13rem;
}

.min-w-4 {
min-width: 1rem;
}

.min-w-44 {
min-width: 11rem;
}

.flex-grow {
flex-grow: 1;
}

.grow {
flex-grow: 1;
}

.border-collapse {
border-collapse: collapse;
}

.transform {
transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.resize {
resize: both;
}

.justify-between {
justify-content: space-between;
}

.border {
border-width: 1px;
}

.bg-slate-600 {
--tw-bg-opacity: 1;
background-color: rgb(71 85 105 / var(--tw-bg-opacity));
}

.p-4 {
padding: 1rem;
}

.p-1 {
padding: 0.25rem;
}

.text-center {
text-align: center;
}

.align-middle {
vertical-align: middle;
}

.text-4xl {
font-size: 2.25rem;
line-height: 2.5rem;
}

.text-\[12px\] {
font-size: 12px;
}

.text-sm {
font-size: 0.875rem;
line-height: 1.25rem;
}

.font-semibold {
font-weight: 600;
}

.leading-3 {
line-height: .75rem;
}

.tracking-wide {
letter-spacing: 0.025em;
}

.text-blue-500 {
--tw-text-opacity: 1;
color: rgb(59 130 246 / var(--tw-text-opacity));
}

.underline {
text-decoration-line: underline;
}

.opacity-70 {
opacity: 0.7;
}

.outline {
outline-style: solid;
}
</style>
</head>
`
module.exports = head