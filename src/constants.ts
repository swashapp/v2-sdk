import JSBI from 'jsbi'

export const FACTORY_ADDRESS: { [chainId: number]: string } = {
    1: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    100: '0xA818b4F111Ccac7AA31D0BCc0806d64F2E0737D7',
}

export const INIT_CODE_HASH: { [chainId: number]: string } = {
    1: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    100: '0x3f88503e8580ab941773b59034fb4b2a63e86dbc031b3633a925533ad3ed2b93'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
