# LESSON1 畑を作ってみよう
```block
player.onChat("run", function () {
    agent.teleport(world(19, -21, -1), EAST)
    for (let index = 0; index < 5; index++) {
        ブロックをおく.ニンジンをうえる()
    }
})
```

```template
player.onChat("run", function () {
	
})
```

## エージェントを動かすプログラムを作ろう @unplugged
<p>エージェントにニンジンをうえさせよう！</p>
<img style="display: block; margin: auto;" height="50%" width="90%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_complete1.gif">

## 目標（もくひょう）
<p>まずはこれから作るものの形をかくにんしよう！</p>
<p>・チャットで「run」と入力したら、エージェントが５ブロックぶんニンジンをうえる</p>
<p>・エージェントは、はじめにワールド19 -21 -1、東(xのプラス方向)にテレポートする</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_cultivate1.gif"></p>

## エージェントをテレポートさせよう
<p>`||agent.エージェント||`ボタンをクリックして、`||agent.エージェントを…へ西(xのマイナス方向)向きにテレポートさせる||`と書いてあるブロックを`||player.チャットコマンドrunを入力した時||`の上にドラックしてみましょう</p>
<p>`||agent.西(xのマイナス方向)▼||`をクリックして`||agent.東(xのプラス方向)▼||`にしましょう</p>
```block
player.onChat("run", function () {
    agent.teleport(world(19, -21, -1), EAST)
})
```

## エージェントの動きをかくにんしよう
<p>`||ブロックをおく.ブロックをおく||`にある、`||ブロックをおく.ニンジンをうえる||`のうごきをかくにんしよう！</p>
<p>このブロックをつかうと、エージェントは目の前にニンジンをうえて、左に１ブロック移動します。</p>
<p>これをつかって、**何ブロック分ニンジンをうえれば良いかかんがえよう！**</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_movement_set1.gif"></p>

## 「くりかえし」のつかいかた
<p>`||loops.ループ||`にある`||loops.くりかえし ○回||`は、**このコードではさんだ部分を、指定した数だけくりかえしてくれます**。</p>
<p>たとえば、`||loops.くりかえし 10回||`で`||mobs.生き物をスポーンさせる||`をはさむと、`||mobs.生き物をスポーンさせる||`**を１０こならべたのと同じ意味になります！**</p>
<p>`||loops.くりかえし ○回||`をつかって、エージェントにニンジンをくりかえしうえさせましょう！</p>

## 3.エージェントにニンジンを植えてもらいましょう
<p>`||loops.ループ||`にある`||loops.くりかえし ○回||`と、`||ブロックをおく.ブロックをおく||`にある`||ブロックをおく.ニンジンをうえる||`をくみあわせて、**エージェントにニンジンを５つうえさせよう！**</p>
<p><img style="width:100%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson4/L4_complete1.gif"></p>
```block
player.onChat("run", function () {
    agent.teleport(world(19, -21, -1), EAST)
    for (let index = 0; index < 5; index++) {
        ブロックをおく.ニンジンをうえる()
    }
})
```

## 8.『実行』ボタンをクリックしましょう
<p>画面右下にある緑の『▶』ボタンをクリックして作ったプログラムを実行し、チャットコマンドで`||player.run||`と入力してみましょう</p>