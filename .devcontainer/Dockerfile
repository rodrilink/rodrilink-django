#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------

FROM python:3

# Copy default endpoint specific user settings overrides into container to specify Python path
# COPY .devcontainer/settings.vscode.json /root/.vscode-remote/data/Machine/settings.json

ENV PYTHONUNBUFFERED 1

RUN mkdir /workspace
WORKDIR /workspace

ENV SHELL /bin/bash

# Install node for building the front end
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs

# Install git, process tools
RUN apt-get update && apt-get -y install git procps

# COPY requirements.txt /workspace/
COPY requirements.txt /workspace/
RUN pip install -r requirements.txt

# Clean up
RUN apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*