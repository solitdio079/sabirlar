import * as React from "react";

export default function FAQ() {
  return (
    <div>
      <div className="flex my-12 p-10 flex-col gap-6 w-full justify-center text-center">
        <h5 className="uppercase text-sm text-primary">
          bize sorun
        </h5>
        <h2 className="text-2xl lg:text-6xl font-bold">
        Sıkça Sorulan Sorular
        </h2>
      </div>

      <div className="accordion divide-neutral/20 divide-y mb-12">
        <div className="accordion-item active" id="payment-arrow-right">
          <button
            className="accordion-toggle inline-flex items-center justify-between text-start"
            aria-controls="payment-arrow-right-collapse"
            aria-expanded="true"
          >
           Siparişim için ödeme ne zaman alınır?
            <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
          </button>
          <div
            id="payment-arrow-right-collapse"
            className="accordion-content w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="payment-arrow-right"
            role="region"
          >
            <div className="px-5 pb-4">
              <p className="text-base-content/80 font-normal">
              Ödeme, siparişiniz için ödeme yaptığınız ödeme sayfasında alınır. Onay ekranında görünen sipariş numarası, ödemenizin başarıyla işlendiğini gösterir.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" id="delivery-arrow-right">
          <button
            className="accordion-toggle inline-flex items-center justify-between text-start"
            aria-controls="delivery-arrow-right-collapse"
            aria-expanded="false"
          >
            Siparişim nasıl gönderilecek?
            <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
          </button>
          <div
            id="delivery-arrow-right-collapse"
            className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="delivery-arrow-right"
            role="region"
          >
            <div className="px-5 pb-4">
              <p className="text-base-content/80 font-normal">
              Büyük ürünler için, ürününüzü kendi lojistik şirketimiz aracılığıyla “tercih edilen oda” planlı teslimat hizmetiyle ulaştırıyoruz. Küçük ürünlerde ise ücretsiz paket teslimatı sunuyoruz.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" id="cancel-arrow-right">
          <button
            className="accordion-toggle inline-flex items-center justify-between text-start"
            aria-controls="cancel-arrow-right-collapse"
            aria-expanded="false"
          >
           Siparişimi iptal edebilir miyim?
            <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
          </button>
          <div
            id="cancel-arrow-right-collapse"
            className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="cancel-arrow-right"
            role="region"
          >
            <div className="px-5  pb-4">
              <p className="text-base-content/80 font-normal">
              Planlı teslimat siparişleri, seçtiğiniz teslimat tarihinden 72 saat önce iptal edilebilir ve tam iade sağlanır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
