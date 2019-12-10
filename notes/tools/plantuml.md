# PlantUML 

Sử dụng dưới dạng Extension của VSCode, ngoài ra chắc còn cách khác nhưng mình ko quan tâm ... ahihi

Để vẽ: `Use Case Diagram`, `C4 Model`, ...

## Cài đặt 
- [Link for extension](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml)
- [Link for c4 plug in](https://github.com/RicardoNiepel/C4-PlantUML)


## Preview Feature

### Mac

```
brew cask install java
brew install graphviz
```

### Windows
Chạy trên quyền Admin 

```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

choco install plantuml
```

