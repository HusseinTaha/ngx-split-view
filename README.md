# Split View

A split view component for Angular applications that allows users to resize the panes within it.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Examples](#examples)
4. [Documentation](#documentation)
   * [SplitViewComponent](#splitviewcomponent)
   * [SplitPaneDirective](#splitpanedirective)
   * [SplitViewGutterDirective](#splitviewgutterdirective)
5. [Thanks](#thanks)

## Installation

Install using npm in the usual way

```bash
$ npm install ngx-split-view --save
```

## Usage

1. Once you have installed ngx-split-view, you can import it in your `AppModule`:

```typescript
// a. Import SplitViewModule
import { SplitViewModule } from 'ngx-split-view';

@NgModule({
  // ....

  imports: [
    // b. Add SplitViewModule to your NgModule imports
    SplitViewModule
  ]
})
export class AppModule { }
```

2. Start using the `split-view` component in your templates

```html
<split-view>
  <div splitPane [splitRatio]="2">Left pane (2/3rds size)</div>
  <div splitPane [splitRatio]="1">Right pane (1/3rd size)</div>
</split-view>
```

**Important Note**: Always place the square brackets around the `splitRatio` attribute.

## Examples

### Minimum size pane

```html
<split-view>
  <div splitPane [splitRatio]="2">Left pane (2/3rds size)</div>
  <div splitPane [splitRatio]="1" minSize="300">Right pane (1/3rd size)</div>
</split-view>
```

## Horizontal split

```html
<split-view direction="horizontal">
  <div splitPane [splitRatio]="2">Left pane (2/3rds size)</div>
  <div splitPane [splitRatio]="1">Right pane (1/3rd size)</div>
</split-view>
```

### Custom gutter template
```html
<split-view direction="horizontal">
  <div splitPane [splitRatio]="2">Left pane (2/3rds size)</div>
  <div splitPane [splitRatio]="1">Right pane (1/3rd size)</div>
  <div *gutterTemplate style="background: green"></div>
</split-view>
```

## Documentation

### SplitViewComponent

The container for split view panes. It will render all content with `SplitPaneDirective`, ignoring all other content.

Selector: `split-view`

#### Properties

| Name                                    | Description                                 | Default      |
|-----------------------------------------|---------------------------------------------|--------------|
| `@Input() expandToMin: boolean`         | Grow initial sizes to minSize on each pane  | `false`      |
| `@Input() gutterSize: number`           | Gutter size in pixels                       | `10`         |
| `@Input() gutterAlign: GutterAlignment` | Gutter alignment between elements           | `center`     |
| `@Input() snapOffset: number`           | Snap to minimum size offset in pixels       | `30`         |
| `@Input() dragInterval: number`         | Number of pixels to drag                    | `1`          |
| `@Input() direction: SplitDirection`    | Direction to split: horizontal or vertical  | `horizontal` |

#### Events

| Name                                           | Description           |
|------------------------------------------------|-----------------------|
| `@Output() dragging: EventEmitter<DragEvent>`  | Called while dragging |
| `@Output() dragStart: EventEmitter<DragEvent>` | Called on drag start  |
| `@Output() dragEnd: EventEmitter<DragEvent>`   | Called on drag end    |

#### Notes

These options map one-to-one with those exposed by _split.js_. Please [see the documentation for more information](https://github.com/nathancahill/split/tree/master/packages/splitjs)

### SplitPaneDirective

Pane selection directive. Allows specifying the ratio and minimum size of panes within the `split-view`. Content without this directive will not be displayed.

Selector: `[splitPane]`

#### Properties

| Name                          | Description                     | Default      |
|-------------------------------|---------------------------------|--------------|
| `@Input() splitRatio: number` | The size of the pane as a ratio | `1`          |
| `@Input() minSize: number`    | Minimum sizes pane in pixels    | `100`        |

### SplitViewGutterDirective

The gutter definition for the `split-view`. Captures the template gutters.

Selector: `[gutterTemplate]`

## Thanks

This component uses the excellent [split.js](https://github.com/nathancahill/split) library by Nathan Cahill to do the heavy lifting.
