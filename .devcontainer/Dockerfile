FROM oven/bun:1.2.18-alpine

RUN apk update && apk add --no-cache git pre-commit openssh bash bash-completion
RUN mkdir -p /home/bun/.cache/pre-commit && chown -R bun /home/bun/.cache/pre-commit
