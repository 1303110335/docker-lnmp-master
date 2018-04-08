######
# See: https://hub.docker.com/_/php/
######

FROM php:7.0.5-fpm
MAINTAINER micooz <micooz@hotmail.com>

######
# You can install php extensions using docker-php-ext-install
######

RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng12-dev \
    && docker-php-ext-install -j$(nproc) iconv mcrypt bcmath soap mysqli\
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
    && curl -L -o /tmp/redis.tar.gz https://github.com/phpredis/phpredis/archive/3.1.6.tar.gz \
    && tar xfz /tmp/redis.tar.gz \
    && rm -r /tmp/redis.tar.gz \
    && mv phpredis-3.1.6 /usr/src/php/ext/redis \
    && docker-php-ext-install redis
