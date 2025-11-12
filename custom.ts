
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two,
    //% block="three"
    Three,
    //% block="four"
    Four
}

/**
 * Custom blocks
 */
//% weight=100 color=#ff4500 icon=""
namespace ブロックをおく {
    /**
     * エージェントがブロックを1つ置いて左に移動する
     * @param block describe block ID
     */
    //% block
    export function ブロックを1つおく(block: number = GRASS): void {
        agent.setItem(block, 1, 1)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
    }

    /**
     * エージェントがブロックを指定した長さだけ左に並べていく
     * @param block describe block ID, eg: GRASS
     * @param length describe how many blocks agent sets, eg: 3
     */
    //% block
    //% block.defl = Block.Grass
    export function ブロックを1列ならべる(block: number = GRASS, length: number = 3): void {
        for (let index = 0; index < length - 1; index++) {
            agent.setItem(block, 1, 1)
            agent.place(FORWARD)
            agent.move(LEFT, length)
        }
    }

    /**
     * エージェントが次の位置へ移動する
     * @param length number of blocks agent moves to right, eg: 3
     */
    //% block
    export function 次の位置に移動する(length: number = 3): void {
        agent.move(UP, 1)
        agent.move(RIGHT, length)
    }

    /**
     * エージェントがニンジンをうえて左に移動する
     */
    //% block
    export function ニンジンをうえる(): void {
        agent.setItem(CARROT, 1, 1)
        agent.till(FORWARD)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
    }
}
