FROM nvidia/cuda:12.2.0-runtime-ubuntu20.04

ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Seoul

# Python 3.10 설치
RUN apt update && \
    apt install -y software-properties-common && \
    add-apt-repository ppa:deadsnakes/ppa && \
    apt update && \
    apt install -y \
    python3.10 python3.10-venv python3.10-distutils \
    libgl1 libglib2.0-0 ffmpeg wget tzdata && \
    ln -sf /usr/bin/python3.10 /usr/bin/python && \
    wget https://bootstrap.pypa.io/get-pip.py && \
    python get-pip.py && \
    rm get-pip.py && \
    rm -rf /var/lib/apt/lists/*

# requirements 복사 및 설치
COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install torch==2.1.0+cu121 torchvision==0.16.0+cu121 --extra-index-url https://download.pytorch.org/whl/cu121 && \
    pip install --no-cache-dir -r requirements.txt

WORKDIR /app
COPY . .

EXPOSE 8080
CMD ["python", "main.py"]
