/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/Factory/Factory'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x582E08a1B9C02F21684e690a27eBeE07e27fBafe'
export const NPM_ADDRESS='0x912140b8eA2D022D3A6e859Dc1dB9C3C60CF404a';
export const ETH_USD_PRICE_ADDRESS='0x639fe6ab55c921f74e7fac1ee960c0b6293ba612'

export const SUM_ADDRESS='0x20f9628a485ebcc566622314f6e07e7ee61ff332'
export const WETH_ADDRESS='0x82af49447d8a07e3bd95bd0d56f35241523fbab1'
export const DAI_ADDRESS='0xda10009cbd5d07dd0cecc66161fc93d7c9000da1'
export const USDT_ADDRESS='0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9'
export const USDC_ADDRESS='0xff970a61a04b1ca14834a43f5de4533ebddb5cc8'

export const USDC_WETH_POOL = '0x5461ae9d2acbc43e085b3ce5e2c85985acf9d69d'

export const WHITELIST_TOKENS: string[] = [
    WETH_ADDRESS,
    USDC_ADDRESS,
    USDT_ADDRESS,
    DAI_ADDRESS,
    SUM_ADDRESS,
  ]

export const ZERO_BI = BigInt.fromI32(0)
export const ONE_BI = BigInt.fromI32(1)
export const ONE_BI_N = BigInt.fromI32(-1)
export const TEN_BI = BigInt.fromI32(10)

export const ZERO_BD = BigDecimal.fromString('0')
export const Q192_BI = BigInt.fromString('6277101735386680763835789423207666416102355444464034512896');
export const Q192_BD = Q192_BI.toBigDecimal();

export const N12_BD_P = BigDecimal.fromString('0.000000000001');
export const N12_BD_N = BigDecimal.fromString('-0.000000000001');


export const ONE_BD = BigDecimal.fromString('1')
export const ONE_BD_N = BigDecimal.fromString('-1');

export const BI_18 = BigInt.fromI32(18)
export const MINIMUM_ETH_LOCKED = BigDecimal.fromString('4')


export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))
