
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two,

    Three
}

/**
 * Custom blocks
 */
//% weight=100 color=#ff4500 icon=""
namespace custom {
    /**
     * TODO: エージェントがブロックを1つ置いて左に移動する
     * @param block describe block name, eg: GRASS
     */
    //% block
    export function ブロックを1つおく(block: string): void {
        agent.setItem(block, 1, 1)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
    }

    /**
     * TODO: エージェントがブロックを指定した長さだけ左に並べていく
     * @param block describe block name, eg: GRASS
     * @param length describe how many blocks agent sets, eg: 5
     */
    //% block
    export function ブロックを1列ならべる(block: string, length: number): void {
        for (let index = 0; index < length - 1; index++) {
            agent.setItem(block, 1, 1)
            agent.place(FORWARD)
            agent.move(LEFT, 1)
        }
    }

    /**
     * TODO: エージェントが次の位置へ移動する
     * @param length number of blocks agent moves to right, eg: 5
     */
    export function 次の位置に移動する(length: number): void {
        agent.move(UP, 1)
        agent.move(RIGHT, length)
    }
}
