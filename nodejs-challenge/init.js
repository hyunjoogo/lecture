// 서버 시작시 처음 로드 되는 것

import app from "./src/index";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

// app import (node_module에서 import하고 express 호출 → app이라고 정의 : app.js에서)
// 4000번 포트에 listen해
//→ listening 할 때 handelListening이라는 함수호출해줘

// 🙌🙌🙌🙌 얘는 올릴 필요가 없어요!
