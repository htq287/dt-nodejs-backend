# Run the container with `docker run -p 4106:4106 -t dt_nodehgq`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=4106

WORKDIR /app

RUN addgroup --system dt_nodehgq && \
          adduser --system -G dt_nodehgq dt_nodehgq

COPY dist/dt_nodehgq dt_nodehgq
RUN chown -R dt_nodehgq:dt_nodehgq .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm --prefix dt_nodehgq --omit=dev -f install

CMD [ "node", "dt_nodehgq" ]
