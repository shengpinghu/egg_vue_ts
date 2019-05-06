FROM node:alpine

# 设置时区
RUN apk --update add --no-cache tzdata libpng-dev autoconf automake make g++ libtool nasm
ENV TZ=Asia/Shanghai


ADD . /deployments/
#进入到app目录下面，类似cd
WORKDIR /deployments

# add npm package
COPY package.json /deployments/package.json

RUN npm run ii && \
    npm run build && \
    chmod 700 entrypoint.sh

EXPOSE 4003

ENTRYPOINT ["./entrypoint.sh"]
CMD ["staging"]

