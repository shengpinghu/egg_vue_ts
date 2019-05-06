FROM node:12-alpine

# 设置时区
RUN apk --update add --no-cache tzdata
ENV TZ=Asia/Shanghai

ADD . /deployments/
#进入到app目录下面，类似cd
WORKDIR /deployments


RUN npm run ii && \
    npm run build && \
    chmod 700 entrypoint.sh

EXPOSE 4003

ENTRYPOINT ["./entrypoint.sh"]
CMD ["staging"]

