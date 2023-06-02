const router = require("express").Router();

router.post("/register", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const id = req.body.id;
  console.log("받은" + email);
  try {
    const existingUser = await req.app.db
      .collection("user")
      .findOne({ id: id });

    // 중복 회원 검사
    if (existingUser) {
      return res.status(409).json({
        status: "error",
        message: "이미 가입된 사용자입니다. 다른 아이디를 사용해주세요.",
      });
    }
    // 중복이 아닌 경우 사용자 추가
    await req.app.db
      .collection("user")
      .insertOne({ username: username, id: id, pw: password });
    res
      .status(200)
      .json({ status: "success", message: "회원가입이 완료되었습니다." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "서버 오류" });
  }
});

// router.post("/login", function (req, res) {
//   const password = req.body.password;
//   const email = req.body.email;
//   console.log("받은" + req.body);
//   req.app.db.collection("user").find({ email: email, pw: password });
// });
module.exports = router;
