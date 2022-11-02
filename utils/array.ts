const chunk = (arr, size) =>
arr.reduce((memo, value, index) => {
    if (index % (arr.length / size) == 0 && index !== 0) memo.push([])
    memo[memo.length - 1].push(value)
    return memo
}, [[]]);

export {chunk};
