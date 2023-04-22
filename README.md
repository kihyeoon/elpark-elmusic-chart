# 프로젝트 소개
지원자: 방기현

## 1. 구현 화면

- **차트 페이지**
![Apr-22-2023 15-53-35](https://user-images.githubusercontent.com/102677317/233768136-3c9fbe9d-63a6-496a-a4e7-9bb898a2e7fd.gif)

- **반응형**
<img width="500" alt="image" src="https://user-images.githubusercontent.com/102677317/233768187-dfe3460d-5c39-44ed-9e06-8e151a7ef71a.png">

- **상세 페이지**
<img width="1649" alt="image" src="https://user-images.githubusercontent.com/102677317/233768166-d31a7a48-2ab7-42e3-8221-2fae93aa4cea.png">

## 2. 설치 및 실행방법

```
1. npm install
2. npm start
```

## 3. 구현 요구 사항 목록

**필수 구현**

- [x] URL을 통해 받은 JSON 데이터를 이용하여 Top 100 차트 페이지와 상세 페이지를 구현 합니다.
- [x] 음원 이름으로 검색을 할 수 있어야 합니다.
- [x] 음원 이름으로 정렬 (오름차순 / 내림차순) 할 수 있어야 합니다.
- [x] Top 100 차트에서 각 음원을 클릭하면 상세 페이지로 이동 됩니다.
- [x] 크로스 브라우징: Chrome, Firefox, Edge 또는 Safari 브라우저에서도 잘 보여야 합니다.

**추가 사항**

- [x] PC, 태블릿, 모바일 화면에서 UI가 깨지지 않습니다.
- [x] Scroll to top 버튼을 클릭하면 페이지 최상단으로 이동합니다.

## 4. 사용 기술

- **React**
- **TypeScript**
- **React-Router-Dom**

## 5. 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📜const.ts
 ┃ ┗ 📜getChart.ts
 ┣ 📂components
 ┃ ┣ 📂ChartFilter
 ┃ ┃ ┣ 📜ChartFilter.module.css
 ┃ ┃ ┗ 📜ChartFilter.tsx
 ┃ ┣ 📂ChartItem
 ┃ ┃ ┣ 📜ChartItem.module.css
 ┃ ┃ ┗ 📜ChartItem.tsx
 ┃ ┗ 📂ScrollToTop
 ┃ ┃ ┣ 📜ScrollToTop.module.css
 ┃ ┃ ┗ 📜ScrollToTop.tsx
 ┣ 📂pages
 ┃ ┣ 📂AlbumDetail
 ┃ ┃ ┣ 📜AlbumDetail.module.css
 ┃ ┃ ┗ 📜AlbumDetail.tsx
 ┃ ┗ 📂Chart
 ┃ ┃ ┣ 📜Chart.module.css
 ┃ ┃ ┗ 📜Chart.tsx
 ┣ 📂style
 ┃ ┗ 📜reset.css
 ┣ 📂types
 ┃ ┗ 📜chart.type.ts
 ┣ 📂utils
 ┃ ┗ 📜formatDateAndTime.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜Router.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

## 6. 과제 진행 시 주안점

- **스타일링**

  - 전문적이지 않아도 깔끔하게 보이는 디자인을 고민했고, 레이아웃을 잡는 데에는 flex를 사용했습니다.

  - 반응형을 고려해서 스타일링을 했고, 각 브라우저와 테블릿, 모바일폰까지 확인했습니다.

  - CSS Module을 사용해서 스타일링을 했고, reset.css를 사용해서 브라우저마다 다른 기본 스타일을 초기화했습니다.

- **컴포넌트**

  - 컴포넌트는 기능별로 분리해서 작성했고, 재사용성을 고려해서 작성했습니다.

- **상태 관리**

  - 디테일 페이지는 useLocation을 통해 받은 데이터를 사용했습니다. 받아온 데이터를 객체 분해 할당을 통해 가공하여 사용했습니다.

## 7. 구현하지 못한 사항

- 도메인 로직을 커스텀 훅으로 분리

- 검색 결과가 없을 때 화면

- 스티키 필터 컴포넌트

- 검색 인풋 비우기 버튼

- 검색 결과가 없을 때 화면
