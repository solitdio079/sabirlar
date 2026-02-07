import * as React from "react";

export default function FAQ() {
  return (
    <div>
      <div className="flex my-12 p-10 flex-col gap-6 w-full justify-center text-center">
        <h5 className="uppercase text-sm text-primary">
          our Expert Team Members
        </h5>
        <h2 className="text-2xl lg:text-6xl font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="accordion divide-neutral/20 divide-y mb-12">
        <div className="accordion-item active" id="payment-arrow-right">
          <button
            className="accordion-toggle inline-flex items-center justify-between text-start"
            aria-controls="payment-arrow-right-collapse"
            aria-expanded="true"
          >
            When is payment taken for my order?
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
                Payment is taken during the checkout process when you pay for
                your order. The order number that appears on the confirmation
                screen indicates payment has been successfully processed.
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
            How would you ship my order?
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
                For large products, we deliver your product via a third party
                logistics company offering you the “room of choice” scheduled
                delivery service. For small products, we offer free parcel
                delivery.
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
            Can I cancel my order?
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
                Scheduled delivery orders can be cancelled 72 hours prior to
                your selected delivery date for full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
