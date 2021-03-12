/**
 * Desc: Promise all 错误处理
 * Date: 2021-03-12
 * Author: Akimto
 * 异步请求通过 Promise.all 处理，怎么让其中失败的所有请求重试。

    Promise.all([A, B, C, D])
    4 个请求完成后发现 AD 请求失败了，如果让 AD 请求重试
 */

export class PromiseAll {
    private retryTimes: number = 3;


    /**
     * 模拟延迟
     * @param time 延迟时间 秒
     * @returns 
     */
    private sleep(time): Promise<any> {
        return new Promise<any>(resolve => {
            setTimeout(() => {
                resolve(null);
            }, time * 1000);
        });
    }

    private postRequest(param: string) {
        return new Promise(async resolve => {
            let retryTimes = this.retryTimes;
            const request = async (param) => {
                const requestDelay = Math.random() * 2;
                //模拟请求延迟和请求失败
                await this.sleep(requestDelay);
                let resMsg = ``;
                const isFailed = (param == "A" || param == "D");
                if (isFailed) {
                    resMsg = `请求:${param} 失败 重试次数: ${this.retryTimes - retryTimes} 耗时: ${requestDelay.toFixed(2)}ms`;
                    if (retryTimes > 0) {
                        retryTimes--;
                        console.log(`${param} retryTimes: ${retryTimes}`);
                        request(param);
                    } else {
                        resolve(resMsg);
                    }

                } else {
                    resMsg = `请求:${param} 成功 耗时: ${requestDelay.toFixed(2)}ms`;
                    resolve(resMsg);
                }
            }
            request(param);
        });
    }

    public async main() {
        console.log("main");
        const requestA = this.postRequest("A");
        const requestB = this.postRequest("B");
        const requestC = this.postRequest("C");
        const requestD = this.postRequest("D");

        await Promise.all([requestA, requestB, requestC, requestD]).then(result => {
            console.log(result);
        }).catch(error => {
            console.error(error);
        });

        console.log("finished");
    }

}

const promiseAll = new PromiseAll();
promiseAll.main();