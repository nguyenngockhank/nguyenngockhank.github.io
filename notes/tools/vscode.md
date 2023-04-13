# Visual Studio Code - VSCode 

[Tips & Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

## Keyboard reference sheets

![image](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/KeyboardReferenceSheet.png)

## FiraCode (Fonts)
- [Github - FiraCode](https://github.com/tonsky/FiraCode)


## Settings.json

Local: `.vscode/settings.json`

```json
{
    "editor.tabSize": 4,
    "editor.fontFamily": "Fira Code",
    "editor.fontLigatures": true,
    "[markdown]": {
        "editor.formatOnSave": true,
    }
}
```

## Search & Replace

### New line

`Shift + Enter` will be useful in this case 

### Reg exp

Use Regexp. [See this article](https://dev.to/rfornal/vs-code-search-and-replace-regex-mn2)

![My exp](@/images/vscode-search-reg.png)


## Extenstions 

### PlantUML 

[Github](https://github.com/RicardoNiepel/C4-PlantUML)

https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml#use-plantuml-server-as-render

**For Mac**

```
brew cask install java
brew install graphviz
```

### Project Manager
https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager

### Polacode
https://scotch.io/bar-talk/22-best-visual-studio-code-extensions-for-web-development

Code screenshots

### Live Server
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

### Code Runner
https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner

### Auto Rename Tag
https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag


### Prettier
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

### Better Comments
https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

### vscode-icons
https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons

### Settings Sync
https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync

- filesize
- SFTP
- Vetur
- PHP Namespace Resolver
- Bracket Pair Colorizer: Màu mè cho Các cặp brackets
- Git History / GitLens
- Copy Relative Path


## User Define snippets

https://code.visualstudio.com/docs/editor/userdefinedsnippets

settings: `"editor.tabCompletion": "on"`

`Command + Shift + P` => `Configure User Snippets`

Example
```js
{
  "For Loop": {
    "prefix": ["for", "for-const"],
    "body": ["for (const ${2:element} of ${1:array}) {", "\t$0", "}"],
    "description": "A for loop."
  }
}
```