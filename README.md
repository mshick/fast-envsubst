# envsubst-action

> A GitHub Action which is a light wrapper around the
> [envsub](https://github.com/danday74/envsub) package, providing a GitHub
> Actions native runtime (Node.js) for envsubst-like activities.

## Usage

```yaml
- uses: mshick/envsubst-action@v1
  env:
    FOO_VALUE: cat good
    BAR_VALUE: dog food
  with:
    in-file: fixtures/example.yaml.in
    out-file: fixtures/example.yaml
```

**example.yaml.in**

```yaml
example:
  foo: ${FOO_VALUE}
  bar: ${BAR_VALUE}
```

## Features

- Fast, runs in the GitHub Actions node.js runtime; no Docker pull needed.
