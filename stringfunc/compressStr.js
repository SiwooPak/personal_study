function compressString(str) {
    // 처리한 문자를 담을 배열
    let compress_str_arr = [];
    // 문자열이 빈 문자열일 경우
    if(!str) return "";
    //초기 문자 할당
    let before_char = str[0];
    // 초기 카운트 할당
    let char_cnt = 1;
    // 할당한 초기 문자 제외한 문자열
    str = str.slice(1)+' ';
    // 
    for(let char of str) {
      if(char === before_char) {
        char_cnt++;
      } else {
        if(char_cnt >= 3) {
          compress_str_arr.push(char_cnt+before_char);
        } else {
          compress_str_arr.push(before_char.repeat(char_cnt));
        }
        before_char = char;
        char_cnt = 1;
      }
    }
    return compress_str_arr.join("");
  }
  