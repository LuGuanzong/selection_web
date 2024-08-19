# 第一阶段：构建Vue应用
FROM node:20.16.0-alpine AS build-stage
LABEL maintainer="746722756@qq.com"
# 设置工作目录
WORKDIR /app
# 复制项目文件到容器内的工作目录
COPY . /app
# 安装项目依赖
RUN npm install
# 构建Vue应用
RUN npm run viteBuild

# 第二阶段：设置Nginx服务器
# 使用Nginx的官方Alpine镜像
FROM nginx:alpine

# 复制构建好的Vue应用静态文件到Nginx的html目录
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# 暴露80端口
EXPOSE 80

# 设置容器启动时执行nginx
CMD ["nginx", "-g", "daemon off;"]
