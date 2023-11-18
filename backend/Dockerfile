# Using a slim version for a smaller base image
FROM python:3.11-slim-bookworm as deps

ARG DEV_MODE
ENV DEV_MODE=$DEV_MODE

# Install GEOS library, Rust, and other dependencies, then clean up
RUN apt-get update && apt-get -y upgrade && apt-get install --no-install-recommends -y \
    libgeos-dev \
    libcurl4-openssl-dev \
    libssl-dev \
    pandoc \
    binutils \
    curl \
    git \
    build-essential && \
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y && \
    rm -rf /var/lib/apt/lists/* && apt-get clean

# Add Rust binaries to the PATH
ENV PATH="/root/.cargo/bin:$PATH"

# RUN useradd --create-home appuser
# WORKDIR /home/appuser
# USER appuser

RUN python -m venv /opt/venv
# Make sure we use the virtualenv:
ENV PATH="/opt/venv/bin:$PATH"

# Copy just the requirements first
COPY ./requirements.txt .

# Upgrade pip
RUN pip install --upgrade pip

# Increase timeout to wait for the new installation
RUN pip install --no-cache-dir -r requirements.txt --timeout 200

RUN if [ "$DEV_MODE" = "true" ]; then pip install --no-cache debugpy --timeout 200; fi

# app stage
# Copy the rest of the application
FROM python:3.11-slim-bookworm as app

COPY --from=deps /opt/venv /opt/venv

ENV PATH="/opt/venv/bin:$PATH"

# Copy the rest of the application
COPY . .

RUN apt-get update && apt-get -y upgrade && rm -rf /var/lib/apt/lists/* && apt-get clean

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "5050", "--workers", "6"]
