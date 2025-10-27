import SEO from "@/components/SEO";

export default function Privacy() {
  return (
    <>
      <SEO
        title="プライバシーポリシー - Shooonブログ"
        description="Shooonブログのプライバシーポリシーについて"
      />
      <div className="py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">プライバシーポリシー</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">最終更新日: 2025年1月</p>

            <h2>個人情報の収集について</h2>
            <p>
              当ブログでは、お問い合わせやニュースレター登録の際に、お名前やメールアドレスなどの個人情報をご提供いただく場合があります。
            </p>

            <h2>個人情報の利用目的</h2>
            <p>収集した個人情報は、以下の目的で利用します：</p>
            <ul>
              <li>お問い合わせへの対応</li>
              <li>ニュースレターの配信</li>
              <li>サービスの改善</li>
            </ul>

            <h2>個人情報の第三者への開示</h2>
            <p>
              当ブログは、個人情報を適切に管理し、以下の場合を除いて第三者に開示することはありません：
            </p>
            <ul>
              <li>ご本人の同意がある場合</li>
              <li>法令に基づき開示が必要な場合</li>
            </ul>

            <h2>Cookie（クッキー）について</h2>
            <p>
              当ブログでは、より良いサービスを提供するため、Cookieを使用しています。
              Cookieの使用を望まない場合は、ブラウザの設定でCookieを無効にすることができます。
            </p>

            <h2>アクセス解析ツールについて</h2>
            <p>
              当ブログでは、アクセス解析のためにGoogle Analyticsなどのツールを使用しています。
              これらのツールはトラフィックデータの収集のためにCookieを使用しています。
            </p>

            <h2>免責事項</h2>
            <p>
              当ブログに掲載されている情報の正確性には万全を期していますが、
              利用者が当ブログの情報を用いて行う一切の行為について、責任を負いません。
            </p>

            <h2>プライバシーポリシーの変更</h2>
            <p>
              当ブログは、個人情報に関して適用される日本の法令を遵守するとともに、
              本ポリシーの内容を適宜見直し、その改善に努めます。
            </p>

            <h2>お問い合わせ</h2>
            <p>
              本ポリシーに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

