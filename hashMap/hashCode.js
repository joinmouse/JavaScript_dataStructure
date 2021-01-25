// 散列函数实现
const handleHashCode = (key = "") => {
    let hashCode = 0;
    for(let i=0; i<key.length; i++) {
        // 注: charCodeAt() 方法可返回指定位置的字符的 Unicode 编码
        hashCode += key.charCodeAt(i)
    }
    // console.log("hashCode: ", hashCode % 11)
    // 素数: 997 1009 1013 1019 1021 1031 1033 1039 1049 1051 1061
    return hashCode % 11
}

module.exports = {
    handleHashCode
}