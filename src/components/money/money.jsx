import './money.css'

const Money = () => {
    return (
      <section id="money">
        <h2 className="section-title">Money/Banking</h2>
        <h3>Starting Funds</h3>
        <p>
          Before you fly out, I recommend contacting either your US bank or a
          currency exchange to get ~$400-$500 USD worth of HK cash, if at all
          possible. This way you can hit the ground running, financially. The
          initial expenses for groceries, meals, transportation, and any
          necessary items (a can opener or a coffee maker, for instance) can add
          up fast.
        </p>
        <p>
          It sometimes takes Disney a while to deposit our salary advance into
          our HK accounts. (On the other hand, sometimes it happens within the
          first week of work.) We will likely do the banking paperwork to set up
          our HK accounts on day 1 or 2 of the contract, and then it takes the
          bank 1-2 weeks to mail our ATM cards to Disney, at which point our
          stage managers deliver them to us. All this is to say...it could be a
          while before you have easy access to any of your Disney income or our
          salary advance. Best to have some HKD cash ready for those first 3-4
          weeks. 😉
        </p>
        <p>
          One could also visit a currency exchange at the airport after you
          arrive in HK, but exchange rates are notoriously bad at airports.
          Better to acquire HKD another way.
        </p>
        <p>
          Once we have been moved to our primary housing at{" "}
          <a href="#HPRC">HPRC</a>, a currency exchange is conveniently very
          close, in the attached shopping mall, should you still need to convert
          funds.
        </p>
        <h3>HK Currency</h3>
        <h4>The Hong Kong Dollar</h4>
        <p>
          Hong Kong's local currency is the Hong Kong Dollar, aka HK$ or HKD.
          The exchange rate is pegged to the US Dollar, and sits right around
          $1.00 USD = $7.8 HKD. While some places do accept the Chinese Renmibi
          (or yuan) currency, and while some places even accept US dollars, you
          will likely conduct the vast majority of your transactions with the
          local HKD currency.
        </p>
        <p>
          Unlike the US, which issues its bills from one centralized bank, HK's
          bills come from four different authorized banks. What this means is
          that you will see a great variety of designs on bills of the same
          value. i.e. There are at least four different HK$10 bills: one issued
          by HSBC, one by SCHK, one by Bank of China, etc.
        </p>
        <p>
          You'll come to learn the different colors and designs of each
          denomination of bill fairly quickly. Here's a picture of one of their
          gorgeous HK$10 bills (about US$1.27, for reference)
        </p>
        <img
          src="assets/HKD 10 Bill.jpg"
          id="HKD10bill"
          alt="A Hong Kong Ten Dollar Bill"
        />
        <p className="img-caption">A HK$10 bill</p>
        <h3>Our Bank & Info You Need to Transfer Funds to the US</h3>
        <h4>
          Our Bank,{" "}
          <a target="_blank" rel="noreferrer" href="https://www.sc.com/hk/">
            Standard Chartered HK
          </a>
          {/* Locations? */}
        </h4>
        <p>
          For the past several years, Disney has guided us through setting up
          our bank accounts with Standard Chartered HK. SCHK is a large,
          international banking corporation, like HSBC or Citibank.
        </p>
        <p>
          SCHK provides us with two basic accounts: 'savings' and 'current.'
          Your income will be direct deposited into your SCHK{" "}
          <strong>
            <em>savings</em>
          </strong>{" "}
          account, and it will likely be the only account you interact with.
        </p>
        <p>
          Your 'current' account, on the other hand, will start with (and likely
          remain at) HK$0. My understanding from light research is that a
          current account is more relevant for businesses and people who have to
          write checks, as checkbooks are connected to a current account but not
          to a savings account. It is entirely possible that you will not
          use/need your current account at all. But it is provided to you when
          we sign up with SCHK, so it's worth the brief explanation.
        </p>
        <p>
          Also worth noting is that our savings accounts are also multi-currency
          accounts, meaning that they can hold not only HK$ but also US$ (and
          currency from several other financial powers like China, Singapore,
          Australia, etc.)
        </p>
        <p>
          Our ATM cards can access either your savings or current accounts for
          withdrawals. Our ATM cards are also connected to the UnionPay
          financial network. UnionPay is kind of like the Visa, Mastercard,
          Cirrus, or Plus networks that enable you to make purchases or
          withdrawals anywhere those networks are accepted. Effectively, this
          makes your ATM card work as a debit card most places where UnionPay is
          accepted. I've used it at grocery stores and restaurants, for example.
        </p>
        <img
          id="unionpaylogo"
          src="assets/400px-UnionPay_logo.svg.png"
          alt="union pay logo"
        />
        <p className="img-caption">The UnionPay logo.</p>
        <h4>PIN and Online Banking codes</h4>
        <p>
          During your first few days at Disney, there will be a guided bank
          account sign-up session. Among other items,{" "}
          <strong>
            you will be given a small paper that contains your six-digit PIN
            code
          </strong>
          . Obviously, this will be a very important paper to hold onto. It can
          be a bit confusing to recognize its importance in the moment because
          you don't receive your ATM card at the same time. In fact, you may not
          see an ATM card for another 1-2 weeks (an SM will pick it up from the
          Disney mailroom and give it to you). But you will need that PIN number
          to conduct any banking business, with or without the ATM card. Keep it
          safe!
        </p>
        <p>
          Another item you receive during banking sign-up is a small paper that
          contains instructions and a personal code for signing up for online
          banking. Save it, and take note of it if you intend to use that
          feature.
        </p>
        <h4>Accessing/Depositing Your Salary Advance</h4>
        <p>
          At a certain point shortly after signing up for our bank accounts, we
          will likely receive our salary advance in the form of a paper check
          from Disney that we must deposit in order to access the funds. Direct
          deposit will likely not be available for this advance. Instead, bring
          your PASSPORT and the unendorsed check with you to a bank branch. The
          teller will walk you through endorsing and depositing the check. You
          will then be able to withdraw funds if you need them.
        </p>
        <h4>Account Number, Routing Number, and your US bank SWIFT code</h4>
        <p>
          It is worth recording the following items somewhere to have them handy
          when you want to execute a wire transfer of funds to your US bank:
        </p>
        <ol className="money-ol">
          <li>Your US bank name (i.e. Bank of America or Citibank)</li>
          <li>The account number of your US account</li>
          <li>
            The routing number of your US account (usually nine digits long,
            found along the bottom of your checks, next to your account number.
            Most banks also provide this info somewhere in your online banking.)
          </li>
          <li>
            Your US bank SWIFT/Clearing Code. This is easy to google. Or ask
            your bank to be sure. (Bank of America's SWIFT Code is 'BOFAUS3N,'
            for instance.)
          </li>
        </ol>
        <p>
          Visit a branch of Standard Chartered to execute a wire transfer. They
          will likely suggest that you convert the funds into US Dollars before
          transferring them. This is a good idea, as you will get a better
          exchange rate doing so than if you send HK Dollars to your US bank and
          then have the US bank convert the amount into US Dollars. You will
          have to fill out transfer forms, verify your PIN code, and sign your
          name exactly as it appears on your passport.{" "}
        </p>
        <h4 className="special-note">
          Always bring your <strong>PASSPORT</strong> when conducting any
          banking business in HK!
        </h4>
        <p>
          It is also possible to conduct a wire transfer via online banking.
          There is no chance that I can cleanly explain it here. But I have done
          it: it is a bit confusing, but possible. 😂 Contact me in HK if you
          need assistance with this, and we'll find a time to walk through the
          process.
        </p>
        <h4>When/How Much to Transfer</h4>
        <p>
          Some carolers make regular transfers throughout the contract because
          they have bills to be paid back home. And some wait until the end of
          the contract to transfer a larger sum, since each wire transfer incurs
          costs from both the HK and US banks.
        </p>
        <p>
          And some carolers just arrange to withdraw a large amount of US cash
          at the end of the contract, which they then protect with their life.
          It might mean stuffing large sums of cash into your pants and/or bra
          to take that money with you on the plane. 😂 I'm not kidding. Real
          stories here. In any case, take note that any wire transfers of
          $10,000 or more are supposed to be automatically reported to the IRS.
          As a result, people usually max out any wire transfer at $9,999.99.
        </p>
        <h4>End of Contract Banking</h4>
        <p className="special-note">
          It is to your advantage to convert your income into US Dollars before
          you leave HK. That said, arranging for your funds to be converted into
          USD and withdrawn/transferred can be a source of great stress at the
          end of the contract, both because the process requires some work on
          our parts and because of weekends and holidays that always coincide
          with the end of our contract, making it harder to nail down a time to
          do this banking business. Here is some of what we have learned about
          handling your money in this situation.
        </p>
        <p>
          If you plan to withdraw your money in the form of USD at the end of
          the contract, it is likely to be a larger sum of US bills than the
          bank usually has available on any given day. Branches tend to have
          US$2500 or less available on a normal day, and you might be
          withdrawing several times that amount! Therefore, it is{" "}
          <em>
            <strong>
              extremely important to call the bank branch from which you intend
              to withdraw A WEEK PRIOR to your withdrawal
            </strong>
          </em>{" "}
          to let them know you plan to make a large withdrawal of USD. This
          head's up gives the bank time to ensure that it has enough US bills
          available for your withdrawal.
        </p>
        <p>
          If, at the end of the contract, you do not alert the bank branch ahead
          of time, it may not have enough US bills available to convert all of
          your funds into USD. You will be forced to withdraw the remainder in
          HKD, do a wire transfer, or leave the funds in the account.
        </p>
        <p className="special-note">
          You can always convert HKD back to USD after you return to the US, but
          the exchange rate is significantly better if you do it in HK, and
          since we are talking about large amounts of money, that difference
          adds up.
        </p>
        <p>
          I have absolutely had a scenario where, at the end of the contract, I
          wire transferred some US funds back to my US bank, then withdrew as
          much USD I could, and finally withdrew the remainder of my funds in
          HKD before my account was entirely empty. I then had to find a
          currency exchange in HK to convert those HKD into USD before I then
          went to the airport to catch my flight home. It was a lot to deal with
          in a very compressed, stressful time frame, but it saved me a lot of
          money as well.
        </p>
        <p>
          It is not strictly necessary to formally close our accounts once we
          have emptied them of funds. However, many carolers do just that since
          we never truly know if we will ever be back again, and many would
          rather not have an empty account in their name.
        </p>
        <p>
          If you choose to close the account, the teller may tell you that there
          is a fee associated with closing an account that hasn't been open for
          more than a year (or six months, or whatever). But we have always been
          able to convince them that this fee should be waived, since we are
          forced to open the account as part of our necessarily short-term
          employment with HK Disney. The fee really isn't fair in our case, and
          they have never pushed back too hard when we have complained about
          this fee.
        </p>
        <p>
          However, since there's no fee to keep the account open and empty, I
          will probably just leave my account open from now on. A much simpler
          solution! Plus, leaving my HK account open saved my booty in 2020 when
          a large wire transfer failed and bounced back to my HK account. If I
          had closed my HK account before that wire transfer bounced back to HK,
          it could very possibly have caused that money to disappear into thin
          air, screwing me over royally!!{" "}
        </p>
        <h3>Octopus Card</h3>
        <p>
          The Octopus card is a rechargeable 'smart' card that works only in
          Hong Kong. You load it with cash anywhere Octopus is accepted and at
          special "add value" machines within MTR stations. Then you can tap
          your Octopus on the appropriate sensors to access trains, buses, and
          ferries, and to make purchases at convenience stores, grocery stores,
          fast food and other restaurants, small shops, and more. We use it at
          our employee canteen/cafeteria as well. It will become one of the most
          important (and useful) items you carry with you at all times!
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.hkfastfacts.com/octopus-card/"
          >
            Here is a link
          </a>{" "}
          with more info about the Octopus card.
        </p>
        <h3>Taxes</h3>
        <h4 className="special-note">
          We will almost certainly have HKD$0 in HK tax obligations this year,
          because we will likely not break the minimum threshold for incurring a
          tax burden. In past years, when we had longer contracts, we have only
          owed a very small amount, if any. But with the shorter contract this
          year, I strongly doubt we'll owe anything. The Disney documentation
          has always suggested we withhold 16% of our income for tax purposes.
          But that advice is really more targeted at performers with longer
          contracts than ours.
          <br />
          <br />
          That said, we will still have to schlep into the city one morning near
          the end of the contract to get our taxes filed at their Internal
          Revenue Department building. It's tedious and takes a while, but we
          usually get a nice brunch afterwards!
        </h4>
        <h4>US taxes on HK income</h4>
        <p>
          There are various ways carolers have handled their US taxes when it
          comes to their HK income and expenses. The main point I'll say is that
          it's likely not going to be worth the government's time and money to
          audit any of us over the amount of income tax we're dealing with here.
          So, don't let it stress you out. Get a tax pro to help if you're super
          concerned. I'm happy to go into far too much detail with anyone who
          wants to discuss how I've done it.
        </p>
      </section>
    );
}

export default Money