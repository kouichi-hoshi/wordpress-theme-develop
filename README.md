# wordpress-theme-develop
node.jsとnpm-scriptsとMAMPを使用したWordPress子テーマ開発環境。（Mac用）
親テーマ（デフォルトではunderscoresを採用）をリソースとして配置し、その子テーマが作成できる。

## 特徴
Sassをコンパイル。
FLOCSSの構造に沿ったCSSディリクトリ構成。ワイルドカード使用し下層にディリクトリ追加可能。
rollup.jsによりimport文によるバンドル。
babelによりトランスパイル。
Browsersyncによるライブリロード。
親テーマをリソースとして配置し、WordPressテーマディリクトリにコピー。

### 未実装
CSS、JSファイルのminify

## リソース
node.js
MAMP
underscores
FLOCSS

## ディリクトリ構成
themes/wordpress-theme-develop
├─dist
├─src
  ├─assets
  ├─images
  ├─php
  ├─public
  ├─theme

## 注意事項
利用環境によりカスタマイズが必要になる場合がある。
wordpress-theme-developは、ローカルサーバー環境はMAMPを前提としている。MAMP環境下に展開することを推奨する。
ファイル生成先のパス指定がMac用となっている。
