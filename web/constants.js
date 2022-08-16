const CONTRACT_ADDRESS = '0x31F5379930A2aEEAcfBA8a45cB61dA2bA5292EF7';

const transformCharacterData = (characterData) => {
    return{
        name: characterData.name,
        imageURI: characterData.imageURI,
        hp: characterData.hp.toNumber(),
        maxHp: characterData.maxHp.toNumber(),
        attackDamage : characterData.attackDamage.toNumber(),
    };
};


export { CONTRACT_ADDRESS, transformCharacterData };