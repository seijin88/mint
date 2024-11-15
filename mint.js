async function main() {
    const [deployer] = await ethers.getSigners();
    const myTokenAddress = "0x3798c81E28489e5eD0eb76119C21EC57E41AC42F"; // Replace with your deployed token address
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = MyToken.attach(myTokenAddress);

    const amountToMint = ethers.utils.parseUnits("100000", 18); // Mint 100 tokens
    await myToken.mint(deployer.address, amountToMint);
    console.log(`Minted ${amountToMint.toString()} tokens to ${deployer.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });