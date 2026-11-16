import { defineStore } from "pinia";
import { ref } from "vue";

export const receiptState = defineStore('receiptList', () => {
    const receipts = ref([]);

    function addReceipt(newReceipt) {
        receipts.value.push(newReceipt);
    }

    function removeReceipt(index) {
        receipts.value.splice(index, 1);
    }

    function getReceipts() {
        return receipts.value;
    }

    return { addReceipt, removeReceipt, getReceipts }
});