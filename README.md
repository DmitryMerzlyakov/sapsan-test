# Поиск изображений на Unsplash

> Приложение для поиска и просмотра фотографий с использованием [Unsplash API](https://unsplash.com/developers). Поддерживает десктоп и мобильные устройства, бесконечную прокрутку и просмотр в полноэкранном режиме.

## Технологии

- **Vite** — сборка
- **React 18** + **TypeScript**
- **React Router DOM** — параметры URL
- **React Query (TanStack Query)** — управление данными, пагинация, кэширование
- **React Infinite Scroll Component** — бесконечная прокрутка
- **Axios** — HTTP-запросы к Unsplash API
- **CSS Modules** — стили

## 🚀 Деплой

Приложение задеплоено на Vercel:

[https://unsplash-search-demo.vercel.app](https://unsplash-search-demo.vercel.app)



## Запуск проекта локально

### 1. Клонируем репозиторий
```bash
git clone https://github.com/ваше-имя/unsplash-search.git
cd unsplash-search
```
### 2. Установка зависимостей
```bash
npm install
```
### 3. Создай файл .env в корне проекта
```bash
VITE_UNSPLASH_ACCESS_KEY=ваш-ключ
```
(При разработке использовался ключ из примера в Figma)

### 4. Запуск сервера
```bash
npm run dev
```
