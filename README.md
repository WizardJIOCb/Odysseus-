# Odysseus xedoc.ru

Публичная витрина и рабочая заметка для идеи Odysseus: self-hosted AI workspace с агентами, памятью, документами, research-потоками и понятной дорожной картой запуска.

## Что это

Видео, с которого началась идея: <https://www.youtube.com/watch?v=7cmBOj_PZGI>

Этот репозиторий пока не пытается копировать upstream Odysseus. Здесь собрана легкая фронтенд-витрина для домена `odysseus.xedoc.ru`, чтобы зафиксировать:

- что именно интересно в Odysseus;
- какие агенты и сценарии стоит попробовать;
- какой следующий технический план у self-hosted запуска.

## Локальный запуск

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
```

## Деплой

Статические файлы появляются в `dist/`. Их можно отдавать через nginx с `root /var/www/odysseus.xedoc.ru/dist;`.

Пример nginx-конфига лежит в `deploy/nginx-odysseus.xedoc.ru.conf`.
