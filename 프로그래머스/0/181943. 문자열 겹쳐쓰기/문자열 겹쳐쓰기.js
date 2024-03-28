function solution(my_string, overwrite_string, s) {
    const targetStr = [...my_string]
    targetStr.splice(s, overwrite_string.length, overwrite_string)
    return targetStr.join('')
}