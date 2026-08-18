import React from "react";
import "../index.css";

function Footer() {
  return (
    <footer className="zerodha-footer">
      <div className="zerodha-footer-container">

        <div className="zerodha-footer-grid">

          <div className="zerodha-footer-brand">
            <img
              src="/media/logo.svg"
              alt="Zerodha"
              className="zerodha-footer-logo"
            />

            <p className="zerodha-footer-description">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="zerodha-footer-social">
              <a href="#">𝕏</a>
              <a href="#">f</a>
              <a href="#">◎</a>
              <a href="#">in</a>
            </div>

            <hr />

            <div className="zerodha-footer-social zerodha-footer-second-social">
              <a href="#">▶</a>
              <a href="#">◉</a>
              <a href="#">➤</a>
            </div>

            <div className="zerodha-footer-apps">
              <img src="/media/google.svg" alt="Google Play" />
              <img src="/media/appstore.svg" alt="App Store" />
            </div>
          </div>

          <div className="zerodha-footer-column">
            <h5>Account</h5>

            <a href="#">Open demat account</a>
            <a href="#">Minor demat account</a>
            <a href="#">NRI demat account</a>
            <a href="#">HUF demat account</a>
            <a href="#">Commodity</a>
            <a href="#">Dematerialisation</a>
            <a href="#">Fund transfer</a>
            <a href="#">MTF</a>
          </div>

          <div className="zerodha-footer-column">
            <h5>Support</h5>

            <a href="#">Contact us</a>
            <a href="#">Support portal</a>
            <a href="#">How to file a complaint?</a>
            <a href="#">Status of your complaints</a>
            <a href="#">Bulletin</a>
            <a href="#">Circular</a>
            <a href="#">Z-Connect blog</a>
            <a href="#">Downloads</a>
          </div>

          <div className="zerodha-footer-column">
            <h5>Company</h5>

            <a href="#">About</a>
            <a href="#">Philosophy</a>
            <a href="#">Press & media</a>
            <a href="#">Careers</a>
            <a href="#">Zerodha Cares (CSR)</a>
            <a href="#">Zerodha.tech</a>
            <a href="#">Open source</a>
            <a href="#">Referral program</a>
          </div>

          <div className="zerodha-footer-column">
            <h5>Quick links</h5>

            <a href="#">Upcoming IPOs</a>
            <a href="#">Brokerage charges</a>
            <a href="#">Market holidays</a>
            <a href="#">Economic calendar</a>
            <a href="#">Calculators</a>
            <a href="#">Markets</a>
            <a href="#">Sectors</a>
            <a href="#">Gift Nifty</a>
          </div>

        </div>

        <div className="zerodha-footer-legal">

          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on{" "}
            <a href="#">SEBI SCORES</a>: Register on SCORES portal.
            Mandatory details for filing complaints on SCORES: Name, PAN,
            Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
            Speedy redressal of the grievances
          </p>

          <p>
            <a href="#">Smart Online Dispute Resolution</a>
            {" | "}
            <a href="#">Grievances Redressal Mechanism</a>
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE.{" "}
            <a href="#">NSE broker factsheet</a>
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly
            from Exchange/Depositories on your mobile/email at the end of the
            day. Issued in the interest of investors. KYC is one time exercise
            while dealing in securities markets.
          </p>

          <p>
            Dear Investor, if you are subscribing to an IPO, there is no need
            to issue a cheque. Please write the Bank account number and sign
            the IPO application form to authorize your bank to make payment
            in case of allotment. In case of non allotment the funds will
            remain in your bank account.
          </p>

          <p>
            As a business we don't give stock tips, and have not authorized
            anyone to trade on behalf of others. If you find anyone claiming
            to be part of Zerodha and offering such services, please{" "}
            <a href="#">create a ticket here</a>.
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism.
          </p>

          <p>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited is acting solely as a distributor for these products.
            Fixed deposits are regulated by the Reserve Bank of India (RBI).
          </p>

        </div>

        <div className="zerodha-footer-bottom">
          <a href="#">NSE</a>
          <a href="#">BSE</a>
          <a href="#">MCX</a>
          <a href="#">MSEI</a>
          <a href="#">Terms & conditions</a>
          <a href="#">Policies & procedures</a>
          <a href="#">Privacy policy</a>
          <a href="#">Disclosure</a>
          <a href="#">For investor's attention</a>
          <a href="#">Investor charter</a>
          <a href="#">Sitemap</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;