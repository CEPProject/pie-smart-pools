/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface IBPoolInterface extends Interface {
  functions: {
    bind: TypedFunctionDescription<{
      encode([token, balance, denorm]: [
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    calcPoolInGivenSingleOut: TypedFunctionDescription<{
      encode([
        tokenBalanceOut,
        tokenWeightOut,
        poolSupply,
        totalWeight,
        tokenAmountOut,
        swapFee
      ]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    calcPoolOutGivenSingleIn: TypedFunctionDescription<{
      encode([
        tokenBalanceIn,
        tokenWeightIn,
        poolSupply,
        totalWeight,
        tokenAmountIn,
        swapFee
      ]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    calcSingleInGivenPoolOut: TypedFunctionDescription<{
      encode([
        tokenBalanceIn,
        tokenWeightIn,
        poolSupply,
        totalWeight,
        poolAmountOut,
        swapFee
      ]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    calcSingleOutGivenPoolIn: TypedFunctionDescription<{
      encode([
        tokenBalanceOut,
        tokenWeightOut,
        poolSupply,
        totalWeight,
        poolAmountIn,
        swapFee
      ]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    getBalance: TypedFunctionDescription<{ encode([token]: [string]): string }>;

    getCurrentTokens: TypedFunctionDescription<{ encode([]: []): string }>;

    getDenormalizedWeight: TypedFunctionDescription<{
      encode([token]: [string]): string;
    }>;

    getSwapFee: TypedFunctionDescription<{ encode([]: []): string }>;

    getTotalDenormalizedWeight: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    gulp: TypedFunctionDescription<{ encode([token]: [string]): string }>;

    isBound: TypedFunctionDescription<{ encode([token]: [string]): string }>;

    isPublicSwap: TypedFunctionDescription<{ encode([]: []): string }>;

    rebind: TypedFunctionDescription<{
      encode([token, balance, denorm]: [
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    setController: TypedFunctionDescription<{
      encode([manager]: [string]): string;
    }>;

    setPublicSwap: TypedFunctionDescription<{
      encode([_public]: [boolean]): string;
    }>;

    setSwapFee: TypedFunctionDescription<{
      encode([swapFee]: [BigNumberish]): string;
    }>;

    unbind: TypedFunctionDescription<{ encode([token]: [string]): string }>;
  };

  events: {};
}

export class IBPool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IBPool;
  attach(addressOrName: string): IBPool;
  deployed(): Promise<IBPool>;

  on(event: EventFilter | string, listener: Listener): IBPool;
  once(event: EventFilter | string, listener: Listener): IBPool;
  addListener(eventName: EventFilter | string, listener: Listener): IBPool;
  removeAllListeners(eventName: EventFilter | string): IBPool;
  removeListener(eventName: any, listener: Listener): IBPool;

  interface: IBPoolInterface;

  functions: {
    bind(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    calcPoolInGivenSingleOut(
      tokenBalanceOut: BigNumberish,
      tokenWeightOut: BigNumberish,
      poolSupply: BigNumberish,
      totalWeight: BigNumberish,
      tokenAmountOut: BigNumberish,
      swapFee: BigNumberish
    ): Promise<BigNumber>;

    calcPoolOutGivenSingleIn(
      tokenBalanceIn: BigNumberish,
      tokenWeightIn: BigNumberish,
      poolSupply: BigNumberish,
      totalWeight: BigNumberish,
      tokenAmountIn: BigNumberish,
      swapFee: BigNumberish
    ): Promise<BigNumber>;

    calcSingleInGivenPoolOut(
      tokenBalanceIn: BigNumberish,
      tokenWeightIn: BigNumberish,
      poolSupply: BigNumberish,
      totalWeight: BigNumberish,
      poolAmountOut: BigNumberish,
      swapFee: BigNumberish
    ): Promise<BigNumber>;

    calcSingleOutGivenPoolIn(
      tokenBalanceOut: BigNumberish,
      tokenWeightOut: BigNumberish,
      poolSupply: BigNumberish,
      totalWeight: BigNumberish,
      poolAmountIn: BigNumberish,
      swapFee: BigNumberish
    ): Promise<BigNumber>;

    getBalance(token: string): Promise<BigNumber>;

    getCurrentTokens(): Promise<string[]>;

    getDenormalizedWeight(token: string): Promise<BigNumber>;

    getSwapFee(): Promise<BigNumber>;

    getTotalDenormalizedWeight(): Promise<BigNumber>;

    gulp(
      token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    isBound(token: string): Promise<boolean>;

    isPublicSwap(): Promise<boolean>;

    rebind(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setController(
      manager: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setPublicSwap(
      _public: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setSwapFee(
      swapFee: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    unbind(
      token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  bind(
    token: string,
    balance: BigNumberish,
    denorm: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  calcPoolInGivenSingleOut(
    tokenBalanceOut: BigNumberish,
    tokenWeightOut: BigNumberish,
    poolSupply: BigNumberish,
    totalWeight: BigNumberish,
    tokenAmountOut: BigNumberish,
    swapFee: BigNumberish
  ): Promise<BigNumber>;

  calcPoolOutGivenSingleIn(
    tokenBalanceIn: BigNumberish,
    tokenWeightIn: BigNumberish,
    poolSupply: BigNumberish,
    totalWeight: BigNumberish,
    tokenAmountIn: BigNumberish,
    swapFee: BigNumberish
  ): Promise<BigNumber>;

  calcSingleInGivenPoolOut(
    tokenBalanceIn: BigNumberish,
    tokenWeightIn: BigNumberish,
    poolSupply: BigNumberish,
    totalWeight: BigNumberish,
    poolAmountOut: BigNumberish,
    swapFee: BigNumberish
  ): Promise<BigNumber>;

  calcSingleOutGivenPoolIn(
    tokenBalanceOut: BigNumberish,
    tokenWeightOut: BigNumberish,
    poolSupply: BigNumberish,
    totalWeight: BigNumberish,
    poolAmountIn: BigNumberish,
    swapFee: BigNumberish
  ): Promise<BigNumber>;

  getBalance(token: string): Promise<BigNumber>;

  getCurrentTokens(): Promise<string[]>;

  getDenormalizedWeight(token: string): Promise<BigNumber>;

  getSwapFee(): Promise<BigNumber>;

  getTotalDenormalizedWeight(): Promise<BigNumber>;

  gulp(
    token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  isBound(token: string): Promise<boolean>;

  isPublicSwap(): Promise<boolean>;

  rebind(
    token: string,
    balance: BigNumberish,
    denorm: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setController(
    manager: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setPublicSwap(
    _public: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setSwapFee(
    swapFee: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  unbind(
    token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    bind(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish
    ): Promise<BigNumber>;

    calcPoolInGivenSingleOut(
      tokenBalanceOut: BigNumberish,
      tokenWeightOut: BigNumberish,
      poolSupply: BigNumberish,
      totalWeight: BigNumberish,
      tokenAmountOut: BigNumberish,
      swapFee: BigNumberish
    ): Promise<BigNumber>;

    calcPoolOutGivenSingleIn(
      tokenBalanceIn: BigNumberish,
      tokenWeightIn: BigNumberish,
      poolSupply: BigNumberish,
      totalWeight: BigNumberish,
      tokenAmountIn: BigNumberish,
      swapFee: BigNumberish
    ): Promise<BigNumber>;

    calcSingleInGivenPoolOut(
      tokenBalanceIn: BigNumberish,
      tokenWeightIn: BigNumberish,
      poolSupply: BigNumberish,
      totalWeight: BigNumberish,
      poolAmountOut: BigNumberish,
      swapFee: BigNumberish
    ): Promise<BigNumber>;

    calcSingleOutGivenPoolIn(
      tokenBalanceOut: BigNumberish,
      tokenWeightOut: BigNumberish,
      poolSupply: BigNumberish,
      totalWeight: BigNumberish,
      poolAmountIn: BigNumberish,
      swapFee: BigNumberish
    ): Promise<BigNumber>;

    getBalance(token: string): Promise<BigNumber>;

    getCurrentTokens(): Promise<BigNumber>;

    getDenormalizedWeight(token: string): Promise<BigNumber>;

    getSwapFee(): Promise<BigNumber>;

    getTotalDenormalizedWeight(): Promise<BigNumber>;

    gulp(token: string): Promise<BigNumber>;

    isBound(token: string): Promise<BigNumber>;

    isPublicSwap(): Promise<BigNumber>;

    rebind(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish
    ): Promise<BigNumber>;

    setController(manager: string): Promise<BigNumber>;

    setPublicSwap(_public: boolean): Promise<BigNumber>;

    setSwapFee(swapFee: BigNumberish): Promise<BigNumber>;

    unbind(token: string): Promise<BigNumber>;
  };
}
