# VTS-Server_250724

```
docker compose up --build
```



# gpu사용을 위한 nvidia-container-toolkit활용법




필수)기본적으로 nvida 드라이버, cuda tookit(docker 사용x시), anaconda 설치 필요


참고 사이트 : <https://kenkyuanime.com/vscode로gpu사용/>


위 링크의 방법은 도커 사용하지 않을때만 사용가능, docker사용시 아래 방법 사용할 것


### 1단계: 기존 패키지 업데이트

```bash
sudo apt update
sudo apt install -y curl gnupg lsb-release

```

---

### ✅ 2단계: Docker용 NVIDIA GPG 키 추가

```bash
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg

```

---

### ✅ 3단계: NVIDIA 저장소 추가

```bash

distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list | \
  sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#' | \
  sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

```

---

### ✅ 4단계: 저장소 반영 및 설치

```bash

sudo apt update
sudo apt install -y nvidia-container-toolkit

```

---

### ✅ 5단계: Docker에 NVIDIA runtime 활성화

```bash
sudo nvidia-ctk runtime configure --runtime=docker

```

---

### ✅ 6단계: Docker 재시작

```bash
sudo systemctl restart docker

```

---

### ✅ 7단계: GPU 사용 확인

```bash

docker run --rm --gpus all nvidia/cuda:12.0-base nvidia-smi

```

이 단계 안되면 

```jsx
docker run --rm --gpus all nvidia/cuda:12.0.1-base nvidia-smi

```

12.3.0-base 도 해보기


##### 이 이후에는 push한 코드들을 사용하면 된다.
