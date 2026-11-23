import { defineStore } from "pinia";
import { ref } from "vue";

export const receiptState = defineStore('receiptList', () => {
    const receipts = ref([]);
    const index = ref(null);

    function addReceipt(newReceipt) {
        receipts.value.push(newReceipt);
    }

    function removeReceipt(index) {
        receipts.value.splice(index, 1);
    }

    function getReceipts() {
        return receipts.value;
    }

    function setUpdatedIndex(newIndex) {
        index.value = newIndex;
    }

    function getUpdateIndex() {
        return index.value;
    }

    return { addReceipt, removeReceipt, getReceipts, getUpdateIndex, setUpdatedIndex }
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

export const receiptUpdate = defineStore('receiptUpdate', () => {
    const update = ref(false)

    function updateTrue() {
        update.value = true
    }

    function updateFalse() {
        update.value = false
    }

    function getUpdate() {
        return update.value
    }

    return { updateTrue, updateFalse, getUpdate }
})