import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import Breadcrumb from "../components/Breadcrumb";
import Seo from "../components/Seo";
export default function Service() {
  return (
    <Layout>
      <Breadcrumb title={"İletişim"} />

      <div className="bg-base-200 py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <div className="flex justify-center items-center flex-col gap-5 mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
            <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">
              İletişime Geçin
            </h2>
            <p className="text-base-content text-md md:text-lg lg:text-xl">
              Reach out for inquiries, support, or collaboration—we’d love to
              hear from you!
            </p>
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <form className="grid gap-6 sm:max-w-full grid-cols-1">
                <div>
                  <label className="label-text" htmlFor="firstName">
                    {" "}
                    First Name{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="input"
                    id="firstName"
                    required
                  />
                </div>
                <div>
                  <label className="label-text" htmlFor="lastName">
                    {" "}
                    Last Name{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="input"
                    id="lastName"
                    required
                  />
                </div>
                <div>
                  <label className="label-text" htmlFor="email">
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    className="input"
                    placeholder="john@gmail.com"
                    id="email"
                    aria-label="john@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label className="label-text" htmlFor="textareaLabel">
                    {" "}
                    Message{" "}
                  </label>
                  <textarea
                    className="textarea"
                    placeholder="Hello!!!"
                    id="textareaLabel"
                  ></textarea>
                </div>
                <div>
                  <h3 className="font-bold mb-5">Services</h3>
                  <fieldset className="flex gap-5 justify-between flex-col lg:flex-row">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox"
                          id="defaultCheckbox1"
                        />
                        <label
                          className="label-text text-base"
                          htmlFor="defaultCheckbox1"
                        >
                          Web Design
                        </label>
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox"
                          id="defaultCheckbox2"
                        />
                        <label
                          className="label-text text-base"
                          htmlFor="defaultCheckbox2"
                        >
                          UX Design
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox"
                          id="defaultCheckbox1"
                        />
                        <label
                          className="label-text text-base"
                          htmlFor="defaultCheckbox1"
                        >
                          Content Creation
                        </label>
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="checkbox"
                          id="defaultCheckbox2"
                        />
                        <label
                          className="label-text text-base"
                          htmlFor="defaultCheckbox2"
                        >
                          Strategy & Consulting
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-next"
                  data-stepper-next-btn=""
                >
                  <span className="">Send</span>
                  <span className="icon-[tabler--send] text-primary-content size-5 rtl:rotate-180"></span>
                </button>
              </form>
            </div>
            <div>
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  className="h-80 lg:h-[600px]"
                  src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">
                    Carte démographique
                  </a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap px-4 justify-evenly gap-4 items-center sm:px-6 lg:px-8 my-12 mx-auto">
          <div className="card card-border shadow-none sm:max-w-sm">
            <div className="card-body">
              <Link to={"#"} className="w-fit p-3 bg-primary rounded-md mb-4">
                <span className="icon-[tabler--send] text-primary-content size-8 rtl:rotate-180 "></span>
              </Link>

              <h5 className="card-title mb-2.5 text-xl">Chat to Sales</h5>
              <p className="mb-4">Speak to our friendly team</p>
              <div className="card-actions">
                <button className="btn btn-outline w-full">
                  sales@gmail.com
                </button>
              </div>
            </div>
          </div>
          <div className="card card-border shadow-none sm:max-w-sm">
            <div className="card-body">
              <Link to={"#"} className="w-fit p-3 bg-primary rounded-md mb-4">
                <span className="icon-[tabler--messages] text-primary-content size-8 rtl:rotate-180 "></span>
              </Link>

              <h5 className="card-title mb-2.5 text-xl">Chat to Sales</h5>
              <p className="mb-4">Speak to our friendly team</p>
              <div className="card-actions">
                <button className="btn btn-outline w-full">
                  johndoe@gmail.com
                </button>
              </div>
            </div>
          </div>
          <div className="card card-border shadow-none sm:max-w-sm">
            <div className="card-body">
              <Link to={"#"} className="w-fit p-3 bg-primary rounded-md mb-4">
                <span className="icon-[tabler--map-pin] text-primary-content size-8 rtl:rotate-180 "></span>
              </Link>

              <h5 className="card-title mb-2.5 text-xl">Chat to Sales</h5>
              <p className="mb-4">Speak to our friendly team</p>
              <div className="card-actions">
                <button className="btn btn-outline w-full">View on maps</button>
              </div>
            </div>
          </div>
          <div className="card card-border shadow-none sm:max-w-sm">
            <div className="card-body">
              <Link to={"#"} className="w-fit p-3 bg-primary rounded-md mb-4">
                <span className="icon-[tabler--phone] text-primary-content size-8 rtl:rotate-180 "></span>
              </Link>

              <h5 className="card-title mb-2.5 text-xl">Chat to Sales</h5>
              <p className="mb-4">Speak to our friendly team</p>
              <div className="card-actions">
                <button className="btn btn-outline w-full">
                  +90 536 461 35 55
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title={"İletişim"} />;
