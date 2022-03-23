import Prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client("https://portaldev2021.prismic.io/api/v2", {
    req,
    accessToken:
      "MC5ZamVlQmhBQUFDRUFvd0Nk.Fe-_vQ4a77-9OwHvv70E77-977-977-9TO-_ve-_vVR2PFnvv73vv71j77-977-9Ve-_vRUyee-_ve-_vSI",
  });

  return prismic;
}
