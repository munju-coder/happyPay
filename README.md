# happyCoupon
###############조문주#############
2020-03-03
해피페이 html, css 소스 처음 커밋함.

git 윈도우 설치
1. https://coding-factory.tistory.com/245   설치 설명
2. https://git-scm.com/downloads            윈도우 설치 파일

git 윈도우 설치 후
1. cmd 오픈
2. git <----- 명령어 치고 엔터
3. git --version    <--- 깃 버전 확인 명령어

cmd 사용법
cd .. 상위 폴더로 이동
cd happy  happy 폴더로 이동
dir <-- 폴더 내용 확인

git 다운로드 사용법
1. git init
2. git status
3. 레파지토리 연결
4. git pull origin master

git 업로드 사용법
1. git init <-  깃 초기화
2. git status <- 깃 상태 확인
3. git add .  <--- 파일 추가
4. git commit -m "zzz"  <- desc 추가
5. git push origin master <- 깃 서버에 전송

git 저장소 연결
1. git remote add origin https://
2. git remote -v   <--- 레파지토리 연결되었는지 확인 하는 명령어
----------------------------------------------------------------------------------------------------------------
※ 깃허브(remote repositiory, 원격레파지토리) -> Local repository 
1. 같은 이름으로 파일 생성
2. git / git version 확인 ( 깃 버전 다운로드 )
3. 깃 네임 저장 git config --global user.name munjucho-corder
                    git config --global user.email dailymunju@naver.com
4. 깃허브 -> 로컬로 다운로드 git clone HTTPS주소

※ Local repository -> 깃허브
1. 변경된 내용 확인 git status (color: red;)
2. 변경된 내용 모두 추가 git add .
3. 업로드가 된 시점 기록 git commit -m "200305 PM10:00"  
    ( 프로젝트 실행 중 복구 작업 시 필요 )
4. 깃허브에 업로드 git push origin master ( git push )

----------------------------------------------------------------------------------------------------------------------

※ 깃허브 새레파지토리 형성 ( 경로 확인할 것 )
ex:
1. https://github.com/munjucho-corder/academy.git ( academy 레파지토리 형성 ) 
 로컬 디스크 (c:) -> html ->  academy 만들어줘야함.
2. git clone https://github.com/munjucho-corder/academy.git ( 레파지토리 다운로드) -> 파일생성확인.
3. 생성된 파일 경로로 이동 cd .. /cd 파일이름
4. git status 파일 확인 -> git add . -> git commit -m "기록" -> git remote -v 확인 ->git pusj origin master (똑같이 업로드)




