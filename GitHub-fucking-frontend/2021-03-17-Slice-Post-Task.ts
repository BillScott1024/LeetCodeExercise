/**
 * Desc: 数据排重

 * 对一个很长的名字数组，做分片更新名字请求：
 * 1. 分片里的更新是并行的，执行 changeName
 * 2. 各个分片间是串行的，执行 sleep
 * 这个函数接受三个参数，名字列表、分片数量，每次分片后的等待时间
 * 比如：
 * slicePostTask(['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh'], 2, 2000)
 * // => ['aa', 'bb']
 * waiting 2s
 * // => ['cc', 'dd']
 * waiting 2s
 * // => ['ee', 'ff']
 * waiting 2s
 * // => ['gg', 'hh']

const changeName = (name) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(name), 1000)
  })

  const sleep = time => new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })

  const slicePostTask = async (names, chunkSize, time) => {
    // todo
  }
 * */


const changeName = (name: string) => new Promise((resolve, reject) => {
    console.log(`changeName... ${name}`);
    setTimeout(() => resolve(name), Math.random() * 1000)
})

const sleep = (time: number) => new Promise((resolve, reject) => {
    console.log(`waiting... ${time}`);
    setTimeout(resolve, time)
})

const slicePostTask = async (names: string[], chunkSize: number, time: number) => {
    // todo
    if (!names || names.length == 0) {
        return null;
    }

    const chunkSubArray = names.splice(0, chunkSize);
    const changedNamesTask = [];
    for (let index = 0; index < chunkSubArray.length; index++) {
        const chunkName = chunkSubArray[index];
        changedNamesTask.push(changeName(chunkName));
    }
    const resultArray = await Promise.all(changedNamesTask);
    console.log(`=> ${JSON.stringify(resultArray)}`)
    await sleep(time);
    return slicePostTask(names, chunkSize, time);

}
console.log("start!");

slicePostTask(['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh'], 2, 2000);



