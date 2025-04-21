# 0. Local Setup
## Git

Clone repository
```
git clone https://github.com/Pascal-Programming/it-house-web.git
```
Start ddev instance:
```
ddev start
```
install dependencies:
```
ddev ssh
composer install
```


# Local development

## edit styling

To compile scss run this command:
```
npm run build-css
```
You can run this comand to automatcaly check if the scss has ben changed:
```
rmp run watch-css
```