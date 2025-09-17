## MyungHyun (Daniel) Lee — Portfolio

정적 포트폴리오 사이트(HTML/CSS/JS, 무프레임워크). GitHub Pages 호스팅을 전제로 합니다.

### 파일 구조
- `index.html`: 메인, 히어로/링크/테마 토글
- `about.html`: 상세 포트폴리오 섹션(교육, 경험, 프로젝트, CVE, CTF 등)
- `assets/styles.css`: 라이트/다크 테마 변수, 전환, 접근성 스타일
- `assets/theme.js`: 로컬 스토리지 기반 테마, 시스템 선호도 기본값, 토글 노출
- `assets/anim.js`: IntersectionObserver 기반 진입 애니메이션(.reveal)
- `assets/main.js`: 단축키, 부드러운 앵커 이동, ARIA 라이브 알림
- `LICENSE`: MIT 라이선스

### 로컬 실행
브라우저로 `index.html`을 직접 열면 됩니다. 별도 빌드/서버 불필요.

### GitHub Pages 배포
1. 이 저장소를 GitHub에 푸시합니다.
2. GitHub → Repository Settings → Pages → Branch를 `main`(또는 기본 브랜치) / `/root`로 설정합니다.
3. 저장 후 제공되는 Pages URL로 접속합니다.

모든 리소스는 상대 경로를 사용하므로 `username.github.io/repo` 서브패스에서도 동작합니다.

### 단축키(접근성 및 탐색)
- `g`: GitHub 링크 포커스
- `b`: Blog 링크 포커스
- `e`: Email 링크 포커스
- `t`: 테마 토글(light/dark)

### 접근성 메모
- `prefers-reduced-motion: reduce`를 존중하여 애니메이션을 비활성화합니다.
- 키보드 `:focus-visible` 아웃라인을 명확하게 제공합니다.
- 테마 변경 시 `aria-live` 리전에 변경 사실을 공지합니다.
- JS 비활성화 시에도 콘텐츠는 모두 보이며, `details/summary`는 기본 동작으로 접고 펼칠 수 있습니다.

### 테마 저장 방식
- 우선순위: `localStorage.theme` → 시스템 설정(`prefers-color-scheme`) → 기본(light)
- 토글 시 `localStorage.theme`에 저장되고, 다음 방문 시 유지됩니다.

### 라이선스
MIT. 상세 내용은 `LICENSE` 파일을 참조하세요.

# MYounbg0_Website
MYoung_Website Dev
