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

export const switchPage = defineStore('switchPage', () => {
    const activePage = ref(0)

    function receiptsPage() {
        activePage.value = 0
    }

    function formPage() {
        activePage.value = 1
    }

    function getPage() {
        return activePage.value
    }

    return { receiptsPage, formPage, getPage }
})