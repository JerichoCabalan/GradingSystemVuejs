<template>
    <div>
        <div class="header bg-primary pb-6">
            <div class="container-fluid"></div>
        </div>
        <div class="container-fluid mt--6">
            <ProductTable></ProductTable>
        </div>
    </div>
</template>

<script>
import ProductTable from "./ProductTable";
export default {
    name: "Dashboard",
    components: { ProductTable }
};
</script>
