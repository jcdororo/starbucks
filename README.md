# starbucks
# 패스트캠퍼스 프론트엔드 강의 스타벅스 예제 실습

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


git status  

git commit -m 'Add README.md'  
git log  

git remote add origin 'https://github/jcdororo'
git push origin master

test
