import { BigInt } from "@graphprotocol/graph-ts"
import {
  PolymathFinance,
  Approval,
  ExcludeFromFees,
  ExcludeMultipleAccountsFromFees,
  GasForProcessingUpdated,
  LiquidityWalletUpdated,
  OwnershipTransferred,
  ProcessedDividendTracker,
  SendDividends,
  SetAutomatedMarketMakerPair,
  SwapAndLiquify,
  SwapAndLiquifyEnabledUpdated,
  SwapETHForTokens,
  Transfer,
  UpdateDividendTracker,
  UpdateUniswapV2Router
} from "../generated/PolymathFinance/PolymathFinance"
import { Contract } from "../generated/schema"

export function handleApproval(event: Approval): void {
  let polymathFinance = PolymathFinance.bind(event.address)
  let contract = new Contract(event.params.spender.toHexString())

  contract.name = polymathFinance.name()
  contract.symbol = polymathFinance.symbol()
  contract.totalSupply = polymathFinance.totalSupply()
  
  contract.save()

} 
export function handleExcludeFromFees(event: ExcludeFromFees): void {}

export function handleExcludeMultipleAccountsFromFees(
  event: ExcludeMultipleAccountsFromFees
): void {}

export function handleGasForProcessingUpdated(
  event: GasForProcessingUpdated
): void {}

export function handleLiquidityWalletUpdated(
  event: LiquidityWalletUpdated
): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleProcessedDividendTracker(
  event: ProcessedDividendTracker
): void {}

export function handleSendDividends(event: SendDividends): void {}

export function handleSetAutomatedMarketMakerPair(
  event: SetAutomatedMarketMakerPair
): void {}

export function handleSwapAndLiquify(event: SwapAndLiquify): void {}

export function handleSwapAndLiquifyEnabledUpdated(
  event: SwapAndLiquifyEnabledUpdated
): void {}

export function handleSwapETHForTokens(event: SwapETHForTokens): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUpdateDividendTracker(
  event: UpdateDividendTracker
): void {}

export function handleUpdateUniswapV2Router(
  event: UpdateUniswapV2Router
): void {}
