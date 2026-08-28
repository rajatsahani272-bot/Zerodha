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
              <a href="https://twitter.com/zerodhaonline" target="_blank" rel="noreferrer">𝕏</a>
              <a href="https://www.facebook.com/zerodhaonline" target="_blank" rel="noreferrer">f</a>
              <a href="https://www.instagram.com/zerodhaonline/" target="_blank" rel="noreferrer">◎</a>
              <a href="https://www.linkedin.com/company/zerodha/" target="_blank" rel="noreferrer">in</a>
            </div>

            <hr />

            <div className="zerodha-footer-social zerodha-footer-second-social">
              <a href="https://www.youtube.com/c/zerodhaonline" target="_blank" rel="noreferrer">▶</a>
              <a href="https://zerodha.com/z-connect/" target="_blank" rel="noreferrer">◉</a>
              <a href="https://t.me/zerodhain" target="_blank" rel="noreferrer">➤</a>
            </div>

            <div className="zerodha-footer-apps">
              <img src="/media/google.svg" alt="Google Play" />
              <img src="/media/appstore.svg" alt="App Store" />
            </div>
          </div>

          <div className="zerodha-footer-column">
            <h5>Account</h5>

            <a href="/open-account">Open demat account</a>
            <a href="/open-account">Minor demat account</a>
            <a href="/open-account">NRI demat account</a>
            <a href="/open-account">HUF demat account</a>
            <a href="/commodities">Commodity</a>
            <a href="/dematerialisation">Dematerialisation</a>
            <a href="/fund-transfer">Fund transfer</a>
            <a href="/mtf">MTF</a>
          </div>

          <div className="zerodha-footer-column">
            <h5>Support</h5>

            <a href="/contact">Contact us</a>
            <a href="/support">Support portal</a>
            <a href="/complaints">How to file a complaint?</a>
            <a href="/complaints">Status of your complaints</a>
            <a href="/bulletin">Bulletin</a>
            <a href="/circulars">Circular</a>
            <a href="/z-connect">Z-Connect blog</a>
            <a href="/downloads">Downloads</a>
          </div>

          <div className="zerodha-footer-column">
            <h5>Company</h5>

            <a href="/about">About</a>
            <a href="/about">Philosophy</a>
            <a href="/press">Press & media</a>
            <a href="/careers">Careers</a>
            <a href="/csr">Zerodha Cares (CSR)</a>
            <a href="/tech">Zerodha.tech</a>
            <a href="/open-source">Open source</a>
            <a href="/referral">Referral program</a>
          </div>

          <div className="zerodha-footer-column">
            <h5>Quick links</h5>

            <a href="/ipo">Upcoming IPOs</a>
            <a href="/charges">Brokerage charges</a>
            <a href="/market-holidays">Market holidays</a>
            <a href="/calendar">Economic calendar</a>
            <a href="/calculators">Calculators</a>
            <a href="/markets">Markets</a>
            <a href="/sectors">Sectors</a>
            <a href="/gift-nifty">Gift Nifty</a>
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
            <a href="https://scores.sebi.gov.in/" target="_blank" rel="noreferrer">
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>

          <p>
            <a href="/dispute-resolution">Smart Online Dispute Resolution</a>
            {" | "}
            <a href="/grievances">Grievances Redressal Mechanism</a>
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
            <a href="https://zerodha.com/brokerage/" target="_blank" rel="noreferrer">
              NSE broker factsheet
            </a>
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
            <a href="/support">create a ticket here</a>.
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
          <a href="https://www.nseindia.com/" target="_blank" rel="noreferrer">NSE</a>
          <a href="https://www.bseindia.com/" target="_blank" rel="noreferrer">BSE</a>
          <a href="https://www.mcxindia.com/" target="_blank" rel="noreferrer">MCX</a>
          <a href="https://www.msei.in/" target="_blank" rel="noreferrer">MSEI</a>

          <a href="/terms-and-conditions">Terms & conditions</a>
          <a href="/policies">Policies & procedures</a>
          <a href="/privacy-policy">Privacy policy</a>
          <a href="/disclosure">Disclosure</a>
          <a href="/investor-attention">For investor's attention</a>
          <a href="/investor-charter">Investor charter</a>
          <a href="/sitemap">Sitemap</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;