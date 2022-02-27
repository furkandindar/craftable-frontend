export interface Nft {
    nftId: string;
    nftImage: string;
    nftCoinPrice: number;
    nftDollarPrice: number;
    coin: string;
    coinLogo: string;
    bookmarkCount: number;
    collectionId: string;
}

let nfts: Nft[] = [
    {
        nftId: "NFT Name",
        nftImage: "https://lh3.googleusercontent.com/9WkSu8CP7gZjaEmUy8cpaKG3mK6ScHeEDvQf8driDoRxuxy4GPAs_W_Dn_DQascQSGDkdUL4cjmsnRrL6xN-NDp-s_RNwN5pxiCo=w600",
        nftCoinPrice: 3,
        nftDollarPrice: 30,
        coin: "AVAX",
        coinLogo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcryptologos.cc%2Favalanche&psig=AOvVaw15qKPouOa_ZdJes3mmxl7k&ust=1645734727597000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCt8ePVlvYCFQAAAAAdAAAAABAD",
        bookmarkCount: 99,
        collectionId: "Collection Name",
    }
]

export function getNfts(){
    return nfts;
}