# ChatVRM

以下リポジトリをフォークしたリポジトリです。  
https://github.com/pixiv/ChatVRM

変更点は後述。

## 変更点
- TTSに使うツールをvoicevox nemoに変更
- ChatGPTをサーバサイドで実行するようにした
- ライブラリの更新
  - openaiを3系から4系に変更

## 実行
ローカル環境で実行する場合はこのリポジトリをクローンするか、ダウンロードしてください。

```bash
git clone git@github.com:pixiv/ChatVRM.git
```

必要なパッケージをインストールしてください。
```bash
npm install
```

パッケージのインストールが完了した後、以下のコマンドで開発用のWebサーバーを起動します。
```bash
npm run dev
```

実行後、以下のURLにアクセスして動作を確認して下さい。

[http://localhost:3000](http://localhost:3000) 


---

## ChatGPT API

ChatVRMでは返答文の生成にChatGPT APIを使用しています。

ChatGPT APIの仕様や利用規約については以下のリンクや公式サイトをご確認ください。

- [https://platform.openai.com/docs/api-reference/chat](https://platform.openai.com/docs/api-reference/chat)
- [https://openai.com/policies/api-data-usage-policies](https://openai.com/policies/api-data-usage-policies)


## VOICEVOX NEMO
サーバ構築方法は以下リポジトリを参照  
https://github.com/VOICEVOX/voicevox_nemo_engine