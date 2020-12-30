#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------

FROM python:3

# Copy default endpoint specific user settings overrides into container to specify Python path
# COPY .devcontainer/settings.vscode.json /root/.vscode-remote/data/Machine/settings.json

ENV PYTHONUNBUFFERED 1
ENV WEBAPP_DIR /workspace
ENV SHELL /bin/bash

RUN pip install --upgrade pip

COPY ./requirements.txt ./
RUN pip install -r requirements.txt

RUN mkdir $WEBAPP_DIR
WORKDIR $WEBAPP_DIR

# Install node for building the front end
RUN apt-get update
RUN apt-get -y install curl gnupg apt-utils
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs

# Install git, process tools
RUN apt-get update && apt-get -y install git procps

# Gunicorn logs fils
RUN mkdir -p /var/log/gunicorn

COPY package*.json ./
RUN npm install

ADD . $WEBAPP_DIR/

RUN npm run build

# Clean up
RUN apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# run the command to start uWSGI
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8080"]
ENTRYPOINT ["sh", "./entrypoint.sh"]
# CMD ["/bin/bash"]