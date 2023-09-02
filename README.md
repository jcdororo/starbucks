# starbucks
# 패스트캠퍼스 프론트엔드 강의 스타벅스 예제 실습

# netly 배포
https://profound-malasada-58cf7f.netlify.app/

## Start
# Git을 활용한 버전관리

## 버전 확인
git --version 



# 개행 문자(newLine) 설정
## macOS
$ git config --global core.autocrlf input  

## windows
git config --global core.autocrlf true  

# 사용자 정보
## 커밋(버전 생성)을 위한 정보 등록
git config --global user.name ''  
git config --global user.email ''  

# 구성 확인
## Q키를 눌러서 종료
git config --global --list  


# 현재 프로젝트에서 변경사항 추적(버전 관리)을 시작.
git init  

# 변경사항을 추적할 특정 파일(index.html)을 지정.
$ git add index.html

# 모든 파일의 변경사항을 추적하도록 지정.
$ git add .  

# 메시지(-m)와 함께 버전을 생성.
$ git commit -m "프로젝트 생성"

# origin 이란 별칭으로 원격 저장소를 연결.
$git remote add origin 'https://github.com/jcdororo/...'

# origin이란 별칭의 원격 저장소로 버전 내역 전송.
$ git push origin main(master)

# 브랜치 확인
$ git branch

# 로컬 브랜치 목록 확인
$ git branch -a 

# 원격 브랜치 목록 확인
$ git branch -r

# 브랜치 생성
$ git branch "signin" // signin 브랜치 생성

# 로컬 브랜치 변경
$ git checkout "signin" // 브랜치 signin으로 변경    

# 원격 브랜치 가져오기
$ git checktout "-t origin/signin"

# 브랜치 삭제하기
$ git branch -d "signin"


# 프로젝트 복제
$ git clone 

# vscode 현재 디렉토리 가져오기
$ cd "원하는 디렉토리"  

$ code . -r

# 버전(커밋내역) 되돌리기
$ git reset --hard HEAD~1 // 한번  

$ git reset --hard HEAD~2 // 두번
## 되돌린것 철회하기 (한번 가능)
$ git reset --hard ORIG_HEAD


# 브랜치 이름 변경
$ git branch -m master main

# git의 기본 브랜치 이름 설정
$ git config --global init.defaultBranch main

# 버전 관리 하지 않을 폴더 및 파일 설정(.gitignore)
.gitignore 파일을 생성하여 버전관리 하지 않을 파일 및 폴더를 작성하면 된다.

# gitignore를 미쳐 못한 파일 및 폴더가 있을 경우
$ git rm -r --cached .



# Git 브랜치 전략 - Git Flow
## main(master) - 기본/메인/제품 브랜치  
## dev(develop) - 다음 제품 출시를 위해 여러 기능을 병합하는 브랜치
## feature/* - 각 기능 개발을 위한 브랜치
## release - 이번 제품 출시 직전 최종 테스트(QA)를 위한 브랜치
## hotfix - 제품에 버그가 확인되었을 때 긴급 수정을 위한 브랜치
