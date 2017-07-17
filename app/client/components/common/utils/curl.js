/**
 * 前端封装的curl方法，在vue组件内直接  this.$curl 使用
 * 对API的返回格式有要求，我们约定，否则该统一方法无法识别请求的正确与否
 *
 * @example
 *
 * this.$curl(options).then().catch();
 *
 * succeed时 resolve:
 * {
 *   data,
 *   metadata
 * }
 *
 * error时 reject:
 * {
 *   code,
 *   message
 * }
 *
 * 1. 按照约定规范进行格式化，分析调用接口正确与否
 */

const curl = ({
  url,
  method = 'post',        // 业务的发送http的类型，目前支持  post/get/upload
  query = {},             // url query
  data = {},              // post data
  responseType = 'json',  // response data type
  timeout = 15000,        // request timeout
}) => {
  // 每个ajax请求加上 ctoken query
  const params = {
    ...query,
  };

  // 基础的ajax设置
  const ajaxSetting = {
    url,
    params,
    method,
    responseType,
    timeout,
    data,
  };

  return axios.request(ajaxSetting).then(response => {
    const resData = response.data || {};
    // 后端API返回格式严格按照项目规范
    const { error, data, metadata } = resData;
    // 业务逻辑层处理
    // 如果接口返回有 error key，该方法也是 reject，这样就不需要前端每次调用都去自己处理接口返回的格式
    if (error) {
      // 业务处理失败
      const { code, message } = error;
      return Promise.reject({
        message,
        code,
      });
    }
    // 业务处理成功
    return Promise.resolve({ data, metadata });
  }).catch(error => {
    // axios 异常情况处理，把异常 reject 回去
    const { message } = error;
    if (message.match(/timeout/)) {
      return Promise.reject({
        message: 'Request Timeout',
        code: 99999,
      });
    }
    return Promise.reject({
      message,
    });
  });
};

module.exports = curl;
