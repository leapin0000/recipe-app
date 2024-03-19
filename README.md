# 外部 API を利用するための準備

## Edamam API の API キーの設定

Edamam の Recipe Search API を利用するための準備を行います。

1. [EDAMAM ](https://www.edamam.com/)にサインアップ（Signup API）
   Choose your plan は「Recipe Search API: - Deveolper」を選択
2. Application ID と Key を取得
   Accounts > Edamam APIs > Go to Dashboard > Applicaions タグ選択 > Recipe Search API の View を押してキーを取得

・[Edamam Recipe Search API v2 のドキュメント](https://developer.edamam.com/edamam-docs-recipe-api)

## DeepL API の API キーの設定

DeepL API Free プランに登録して、DeeL API を利用する手順を説明します。
１ヶ月 50 万文字まで無料で利用できますが、あらかじめ個人情報とクレジットカード番号の登録が必要ですので、こちらの API の登録（事前準備）は必須ではありません。

1. [DeepL API](https://www.deepl.com/ja/pro-api?cta=header-pro-api)に DeepL API Free プランに登録
2. 画面右上のアカウントアイコン > アカウント から「ご利用中の DeepL アカウント」に移動
3. アカウントタグを選択して、「DeepL API で使用する認証キー」を取得

・[DeepL API のドキュメント](https://www.deepl.com/ja/docs-api/translate-text/translate-text)

## Firebase の設定

レシピ情報をブックマークする機能を追加するために、firestore を導入する。

[サンプルアプリの Firebase](https://console.firebase.google.com/u/0/project/recipe-app-83770/overview?hl=ja)

## .env ファイルへの記述

ルートディレクトリに `.env` ファイルを生成して、取得した ID とキーを`.env`に追加してください。

```
# 外部APIのキー
VITE_EDAMAM_API_ID=
VITE_EDAMAM_API_KEY=
VITE_DEEPL_API_KEY=

# Firebaseの設定
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```
