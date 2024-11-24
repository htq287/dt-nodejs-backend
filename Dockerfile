# Run the container with `docker run -p 4106:4106 -t dt_hgqbe`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=4106

WORKDIR /app

RUN addgroup --system dt_hgqbe && \
          adduser --system -G dt_hgqbe dt_hgqbe

COPY dist/dt_hgqbe dt_hgqbe
RUN chown -R dt_hgqbe:dt_hgqbe .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm --prefix dt_hgqbe --omit=dev -f install

CMD [ "node", "dt_hgqbe" ]
