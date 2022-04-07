import { ref, effect, reactive } from "./reactivity-common.mjs";

function computed(getter) {
  const result = ref();
  effect(() => {result.value = getter()});
  return result;
}
const product = reactive({price: 5, quantity: 2});

let salePrice = computed(() => {
  return product.price * 0.9;
});
let total = computed(() => {
  return salePrice.value * product.quantity;
});
// let salePrice = 0;
// let total = 0;

console.log(`Before updated total (should be 9) = ${total.value} salePrice (should be 4.5) = ${salePrice.value}`);
product.quantity = 3;
console.log(`After updated total (should be 13.5) = ${total.value} salePrice (should be 4.5) = ${salePrice.value}`);
product.price = 10;
console.log(`After updated total (should be 27) = ${total.value} salePrice (should be 9) = ${salePrice.value}`);