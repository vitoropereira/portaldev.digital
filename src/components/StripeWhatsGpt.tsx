import Head from "next/head";

const StripePage = () => {
  return (
    <>
      <Head>
        <title>Sua Página Stripe</title>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      </Head>
      <stripe-pricing-table
        pricing-table-id="prctbl_1OmcxdCuOWI61DOsSLVvNep7"
        publishable-key="pk_live_51HaZWRCuOWI61DOsDWhtkjbxjgClfSGylNewxkL0MBrdbI8ARcgyNvBhKRO0XpfR6B77SUhg9od5yIgT1UlYeo8300S7OG67vW"
      ></stripe-pricing-table>
    </>
  );
};

export default StripePage;
