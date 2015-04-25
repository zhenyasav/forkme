# Fork Me
A CSS based github fork ribbon for [Meteor](https://meteor.com) based on [Simon Whitaker's implementation of the ribbon](https://github.com/simonwhitaker/github-fork-ribbon-css)

## Usage
In a Meteor Spacebars template
``` html
{{>forkme url="https://github.com/your_url_here"}}
```

Align the ribbon to any corner by supplying an `align` option:
``` html
{{>forkme align="left" url="..."}}
```

Align can be one of:

- `left`
- `right`
- `left-bottom`
- `right-bottom`