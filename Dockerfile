FROM denoland/deno:alpine-1.39.4

ENV AppPath /app

WORKDIR ${AppPath}

COPY . ${AppPath}

EXPOSE 8000

RUN deno cache main.ts

CMD ["run", "--allow-all", "main.ts"]
