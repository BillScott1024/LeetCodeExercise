/**
 * Desc: Promise 并发控制
 * Date: 2021-03-11
 * Author: Akimoto
 */
export class PromiseControll {

    /**
     * 点击事件
     * @param btnLabel 按钮文字
     * @returns 
     */
    public clickBtn(btnLabel: string): Promise<any> {
        return new Promise<any>(resolve => {
            console.log(btnLabel);
            resolve(null);
        });
    }



    /**
     * 入口方法
     */
    public async onLoad() {
        console.log("onLoad!");
        await this.clickBtn("A");
        await this.clickBtn("B");
        await this.clickBtn("C");
        await this.clickBtn("A");
        await this.clickBtn("C");
        await this.clickBtn("B");
        console.log("finished!");
    }
}
console.log("test");
const mockClick = new PromiseControll();
mockClick.onLoad();
