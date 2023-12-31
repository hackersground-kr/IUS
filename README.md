# International Unified Squad - 대밥

해커그라운드 해커톤에 참여하는 International Unified Squad 팀의 '대밥'입니다.

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

### 사전 준비 사항

* Azure-CLI
* Azure Account
* Github-CLI
* Github Account
* Azure Resource Group
* [Naver cloud platform](https://console.ncloud.com/dashboard)

## 시작하기
시작하기 전에, Naver cloud platform에 maps API를 등록해 주세요

## 1. cloud platform console에 접속
   
## 2. 새로운 application 등록
   <img width="255" alt="Screenshot 2023-06-22 at 7 57 36 PM" src="https://github.com/hackersground-kr/IUS/assets/101318878/4fa6f458-4359-4a84-b20a-d1f75e2834d8">

   <img width="601" alt="Screenshot 2023-06-22 at 7 56 54 PM" src="https://github.com/hackersground-kr/IUS/assets/101318878/dea38a15-8c3b-4643-b65c-d3087365b816">
   
## 3. maps에 아래에 해당하는 항목들 체크
   ## ![image](https://github.com/hackersground-kr/IUS/assets/137250351/19d3e47d-955e-4d06-b876-b974a50d3d80)
## 4. azure에서 static site의 webApp domain을 아래 **서비스 환경 등록**에 등록해 주세요.
   ## ![image](https://github.com/hackersground-kr/IUS/assets/137250351/fc56399f-b7d9-4425-acf3-445c9992dc33)
   5. maps api을 사용하기 위해 script을 적재할 때 ncpClientId parameter를 설정해야합니다.
      즉, web/public/index.html 파일 내부에 <script> 태그 ncpClientId 파라미터를 자신이 등록한 네이버 API client-Id로 교체해주세요.

   ```
   <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID"></script>
   ```

## naver cloud platform 

이 프로젝트를 자신의 깃헙에 포킹하세요.

포킹한 아이디는 deployment에 쓰입니다.

<br>

```
다음 백엔드 자동화 툴을 다운받으세요.  (윈도우 파워쉘 스크립트)
```

[백엔드 자동화 툴](./auto-deploy-project.ps1)

```
프로비저닝과 깃허브 workflows 세팅을 도와줍니다.
```

<br>

```
다운 후 우클릭 -> Powershell에서 실행,
실행 시 UI 입력 창이 뜹니다.
여기에 Azure Resource Group을 입력하면
Github ID를 입력하는 창이 뜹니다.
위 정보를 모두 기입 시 자동으로 프로세스가 진행됩니다.
(중간중간 로그인이 필요하거나 selection 작업은 사용자가 직접 해야함)
```

<br>


```
매크로 스크립트를 실행 후 포킹한 프로젝트에 가서 Actions를 활성화 합니다.

활성화 후 다음과 같은 Github workflows를 실행합니다. (윈도우 파워쉘 스크립트)
```

```
gh auth login
gh workflow run "Azure deploy" --repo {{자신의 github id}}/IUS
```
