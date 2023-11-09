const { body, validationResult } = require('express-validator');

// 단일 요청에 유효성 검사
const validate = function (req, res, next) {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
  } else {
    res.status(400).json({
      errorMessage: errors.array().map((w, idx) => `${w.msg}`),
    });
  }
};

// 유효성 체크
module.exports = {
  // 회원가입
  register: [
    body('name').trim().notEmpty().withMessage('이름을 입력해주세요.'),
    body('email').isEmail().normalizeEmail().withMessage('이메일 형식이 아닙니다. 확인해주세요.'),
    body('password')
      .custom((value, { req }) => {
        if (value != req.body.confirmPassword) {
          throw new Error('확인 비밀번호와 일치하지 않습니다.');
        } else {
          return value;
        }
      })
      .trim()
      .isLength({ min: 6 })
      .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
      .withMessage('숫자와 문자를 포함한 6자리 이상의 비밀번호를 입력해주세요.'),
    validate,
  ],
  // 로그인
  login: [
    body('email').isEmail().withMessage('이메일 형식이 아닙니다. 확인해주세요.'),
    body('password')
      .trim()
      .isLength({ min: 6 })
      .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
      .withMessage('숫자와 문자를 포함한 6자리 이상의 비밀번호를 입력해주세요.'),
    validate,
  ],
  // 게시글 생성
  createPost: [
    body('title').trim().notEmpty().withMessage('제목을 입력해주세요.'),
    body('content').trim().isLength({ min: 5 }).withMessage('5글자 이상을 입력하셔야 합니다.'),
    validate,
  ],
};
