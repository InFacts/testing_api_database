# Use an official Ubuntu Xenial as a parent image
FROM ubuntu:18.04
LABEL maintainer="Sorawit <dolab.founder@gmail.com>"
ENV LANG C.UTF-

# ENV TERM=xterm \
#     DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y --no-install-recommends \
        build-essential \
        curl \
        libfreetype6-dev \
        libhdf5-serial-dev \
        libzmq3-dev \
        pkg-config \
        rsync \
        software-properties-common \
        sudo \
        nano \
        curl \
        jq \
        git \
        wget \
        make \
        && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN apt-get clean
RUN apt-get update && apt-get -y install gpg-agent

# Install Node.js 8 and npm 5
RUN sudo apt-get -y install software-properties-common 
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash
RUN apt-get -y install nodejs

# Set the working directory to /workdir
WORKDIR /workdir


# docker build -t testing_api/backend .
# docker run  -it -d  --name testing_api_backend -p 10000:3000 -p 10001:3001 -v $(pwd):/workdir testing_api/backend
# docker exec -it reactapp bash

