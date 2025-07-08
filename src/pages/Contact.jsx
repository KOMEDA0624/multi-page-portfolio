import React, { useState } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const Section = ({ title, children, className = "" }) => (
  <motion.section
    className={`mb-16 ${className}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.h2
      className="text-3xl font-semibold mb-6 border-b border-[#656565] pb-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    <motion.div
      className="leading-relaxed text-[#656565]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  </motion.section>
);

export default function Contact() {
  const [showTemplate, setShowTemplate] = useState(false);

  const pricing = [
    { service: "各種配信画面デザイン", price: "9,000円（税込）" },
    { service: "配信画面4枚セット（3,000円引き）", price: "33,000円（税込）" },
    { service: "静止画の待機画面、終了画面に簡単なアニメーションを追加。（1枚当たり）", price: "5,000円（税込）" },
    { service: "PSD納品", price: "5,000円（税込）" },
    { service: "実績掲載不可", price: "10,000円（税込）" },
    { service: "3回目以降のリテイク（一回当たり）", price: "2,000円（税込）" },
    { service: "その他", price: "応相談" },
  ];

  const flowItems = [
    {
      title: "ヒアリング・お見積もり",
      description: (
        <>
          <p>
            メールまたはSNSのDM、ディスコードにて
            <button
              onClick={() => setShowTemplate(!showTemplate)}
              className="underline font-bold text-[#656565] cursor-pointer"
              aria-expanded={showTemplate}
              aria-controls="hearing-template"
            >
              ヒアリングシート（クリックで展開）
            </button>
            をコピーしてご記入のうえ、ご連絡ください。
          </p>
          <p>不明な点やご相談もどうぞお気軽にお問い合わせくださいませ。</p>
          <p>ご依頼内容が未定でも柔軟にご相談いただけます。</p>
          <p>
            または、{" "}
            <a
              href="https://tayori.com/form/6b101edc7ef04e3c7f5fe298d04f913a6731cacb/" // ←ここにご依頼用フォームのURLを入れてください
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold text-[#656565]"
            >
              ご依頼用フォーム
            </a>
            から送信いただくことも可能です。
          </p>
          {showTemplate && (
            <pre
              id="hearing-template"
              className="mt-4 p-4 border border-gray-300 rounded bg-white whitespace-pre-wrap text-sm"
            >
{`【ヒアリングテンプレート】

 ◇配信画面内容（雑談、ゲーム、歌枠など） 
└ 

 ◇雰囲気 (かっこいい系、かわいい系、サイバー系、和風、衣装に合う雰囲気）など。複数ある場合、全て書いてください。 
 └

 ◇メインカラー、サブカラー （メインカラーは〇色、サブカラーに〇色、衣装に合うカラーなど、何色でも構いません。）
 └

 ◇加えて欲しいモチーフ・文字・模様など 　
※イメージの共有のため立ち絵、ロゴなどをお持ちでしたらご提出ください。
 └

◇XID、ハッシュタグ、時計スペース（配信時間）、テロップスペース、タイトルスペースの有無 （複数枚ご希望の場合、それぞれ書いてください。）
 └

※XIDやハッシュタグをデザイン内にあらかじめ入れることも可能です。
ご要望の場合はXIDとハッシュタグを記載してください。

※時計のツールに関しましてはOBSなどの配信ソフトでご自身でご用意頂くことになります。

◇納品希望日
└

◇完成した後のSNS・ポートフォリオへの掲載の可否を教えてください。
└

 ◇レイアウトテンプレートの送付の有無（立ち絵の左右の位置などを相談したい場合）
 └

 < ! >イメージを共有するため、ご希望に近い配信画面や画像をご提示して頂くことを強くお勧めします！やり取りが大変スムーズに行えます。お持ちでない場合は構いません。
`}
            </pre>
          )}
        </>
      ),
    },
    {
      title: "ご入金・制作開始",
      description: (
        <>
          お見積もりにご同意いただいた後、指定の方法にてご入金をお願いいたします。<br />
          入金確認後に制作を開始いたします。
        </>
      ),
    },
    {
      title: "デザインのご提出",
      description: (
        <>
          着彩デザイン案を1案ご提出いたします。<br />
          ご意見・ご要望をお聞かせください。
        </>
      ),
    },
    {
      title: "リテイク（修正）",
      description: (
        <>
          最大2回まで無料で修正を承ります。<br />
          ※大幅な変更や3回目以降は追加料金が発生します。
        </>
      ),
    },
    {
      title: "最終デザインのご確認",
      description: (
        <>
          修正完了後、完成デザインをご確認いただきます。<br />
          問題なければ納品へ進みます。
        </>
      ),
    },
    {
      title: "納品",
      description: <>PNGやJPG形式にて納品いたします。</>,
    },
    {
      title: "アフターサポート",
      description: (
        <>
          納品後1週間以内の軽微な修正は1回あたり3,000円で対応します。<br />
          それ以降や大幅な変更は別途ご相談ください。
        </>
      ),
    },
  ];

  return (
    <Layout>
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: "url('/シンプル背景4.png')" }}
      />
      <div className="min-h-screen px-6 py-28 max-w-4xl mx-auto text-[#656565]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-6xl font-light tracking-widest mt-20 text-[#656565]">
            CONTACT
          </h2>
          <p className="text-sm font-semibold text-[#656565] mt-2">お問い合わせ</p>
        </motion.div>

        <Section title="連絡先">
          <p className="mb-4 text-lg leading-relaxed">
            このページの内容をすべてご確認のうえ、下記のメールアドレス、ディスコードまたはまでご連絡ください。
              デザイン内容がまだお決まりでない場合は、ご予算やご希望の配信画面、素材などを併せてお知らせいただけますと幸いです。<br />
            ※ディスコードではチャット形式でのやり取りのみとさせて頂いております。
          </p>
          <p className="text-2xl font-bold mb-2">
            Email: <span className="text-[#656565]">komeda0624@gmail.com</span>
          </p>
          <p className="text-2xl font-bold mb-2">
            XID: <span className="text-[#656565]">@KOMEDA__h</span>
          </p>
          <p className="text-2xl font-bold ">
            Discord ID: <span className="text-[#656565]">komeda</span>
          </p>
        </Section>

        <Section title="料金表">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b border-[#656565] pb-2">サービス内容</th>
                <th className="border-b border-[#656565] pb-2">料金（税込）</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map(({ service, price }) => (
                <tr key={service} className="odd:bg-[#e8e8e8]">
                  <td className="py-3">{service}</td>
                  <td className="py-3">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section title="作製の流れ">
          <div className="space-y-6">
            {flowItems.map(({ title, description }) => (
              <div key={title} className="flex items-start space-x-3">
                <span className="text-xl font-bold">・</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <div>{description}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="作製期間">
          <p>
            製作期間は通常2〜3週間ほどいただいております。<br />
             お急ぎのご希望がございましたら、スケジュールの状況によっては対応可能な場合もございますので、
            お手数ですがお申し付けくださいませ。
          </p>
        </Section>

                   {/* リテイク（アニメーション付き） */}
        <Section title="リテイク">
          <ul className="leading-relaxed list-disc pl-5 space-y-2">
            <li>ご提出後のリテイクは2回まで無料で対応いたします。</li>
            <li>無料リテイクの範囲は、初回ヒアリングの内容に基づいた微調整となります（例：色味の調整、文字位置の変更など）。</li>
            <li>大幅なデザイン変更（構図の変更・全体配色のやり直し等）や、ヒアリング後に追加されたご要望については、別途追加料金を頂戴いたします。</li>
            <li>無料リテイクの回数（2回）を超える修正は、1回あたり3,000円にて対応可能です。</li>
            <li>ただし、3回目以降の修正内容が大きい場合や作業時間を要する場合は、内容に応じて追加料金が変動する場合がございます。</li>
            <li>また、内容によっては修正対応ができない場合もございますので、あらかじめご了承いただけますと幸いです。</li>
            <li>修正内容によってはお時間をいただく場合がございますので、スケジュールには余裕をもってご依頼ください。</li>
            <li>納品完了後（取引が完了された後）の修正対応は原則行っておりませんが、納品から1週間以内であれば、1回あたり3,000円にて対応可能です。</li>
          </ul>
        </Section>

        {/* 注意事項（アニメーション付き） */}
        <Section title="ご利用に関する注意事項">
          <ul className="leading-relaxed list-disc pl-5 space-y-4 text-[#656565]">
            <li>
              <strong className="text-xl">著作権・禁止事項</strong><br />
              デザインの著作権は放棄しておりません。<br />
              以下の行為は禁止とさせていただきます：<br />
              ・二次配布・転売・自作発言<br />
              ・AI学習素材としての利用<br />
              ・NFT・ブロックチェーン関連サービスでの使用<br />
              ・公序良俗に反する配信、誹謗中傷や違法行為を目的とした使用<br />
              ・他素材・他画面と組み合わせる場合でも、当デザインが「改変・再配布」に該当するような使用はご遠慮ください。<br />
              ・加工や用途外利用をご希望の際は、必ず事前にご相談ください。
            </li>
            <li>
              <strong className="text-xl">使用範囲・商用利用</strong><br />
              ご購入いただいたデザインは「購入者ご本人の配信活動」の範囲でのみご利用可能です。<br />
              第三者への譲渡やシェア利用はお控えください。<br />
              配信以外（グッズ制作、広告、書籍など）でのご使用は、必ず事前にご相談ください。<br />
              収益化されたチャンネル（YouTube、Twitch等）でのご利用は「商用利用」とみなし、
              <strong>追加料金（5,000円）</strong>を頂戴します。<br />
              収益化の有無にかかわらず、法人・企業でのご使用は必ず事前にご相談ください。
            </li>
            <li>
              <strong className="text-xl">納品データ・形式</strong><br />
              納品形式は基本的に<strong>PNG（またはJPG）</strong>となります。<br />
              PSDなどの編集可能データは原則お渡ししておりません（※別途料金にて対応可能）。<br />
              データの再送対応は、納品後1ヶ月以内までとさせていただきます。大切に保管をお願いいたします。
            </li>
            <li>
              <strong className="text-xl">免責事項・トラブル対応</strong><br />
              配信ソフト（OBSなど）の設定や環境による表示不具合への対応は行っておりません。<br />
              本サービスの利用により発生したトラブル・損害に関して、当方は一切の責任を負いかねます。<br />
              お取引中に2週間以上ご連絡が無い場合はキャンセル扱いとさせていただきます（事前に複数回ご連絡いたします）。
            </li>
            <li>
              <strong className="text-xl">クレジット表記（任意）</strong><br />
              クレジット表記は任意ですが、「Design by KOMEDA」などご記載いただけますと励みになります。
            </li>
          </ul>
          <p className="mt-6 text-[#656565]">ご不明点やご相談は、お気軽にご連絡ください。</p>
        </Section>

      </div>

      <footer className="w-full text-sm text-[#656565] text-center border-t border-[#656565] py-6">
        &copy; {new Date().getFullYear()} KOMEDA Design. All rights reserved.
      </footer>
    </Layout>
  );
}
