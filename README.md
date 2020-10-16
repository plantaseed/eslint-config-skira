# eslint-config-skira

## Welcome to Skira's eslint config

### Install command

`yarn add --dev https://github.com/plantaseed/eslint-config-skira.git`

### Install peer dependencioes

`yarn add --dev prettier eslint`

### Add a .eslintrc

```
{
  "extends": "skira"
}
```

#### Note

Some editor plugins for `prettier` will attempt to use the `.prettierrc` file in your project and ignore any other forms of configuration. To use the `prettier` rules for this configuration, make sure your editor plugins support `eslint --fix` and do not have an error warning of a missing `.prettierrc` file.
