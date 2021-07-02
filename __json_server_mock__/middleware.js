module.exports = (req, res, next) => {
  // console.log('%c 🍧 req: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', req);
  if (req.method === "POST" && req.path === "login") {
    if (req.body.username === "fff" && req.body.password === "123456") {
      return res.status(200).json({
        user: {
          token: "asdsadsadsa1231#@DF2DDD",
        },
      });
    } else {
      return res.status(400).json({
        messge: "用户名或者密码错误",
      });
    }
  }
  next();
};
