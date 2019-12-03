<template>
    <div class="container" style="flex: 1 0 auto;">
        <div class="d-flex align-items-center justify-content-center py-5">
            <img src="../assets/logo.svg" alt="" class="img-fluid" style="max-width: 250px;">
        </div>
        <form action="/">
            <div class="form-group">
                <label for="marks">Оценки</label>
                <input id="marks" v-model="markstring" type="text" placeholder="Введите здесь свои оценки через пробел" class="form-control">
            </div>
            <div class="form-group">
                <p>Обработанные оценки</p>
                <div class="input-group">
                    <div class="input-group-prepend w-50">
                        <span class="input-group-text w-100 bg-greeny text-white border-0">Двойки</span>
                    </div>
                    <input type="number" aria-label="Количество двоек" min="0" value="0" class="form-control">
                </div>
                <div class="input-group">
                    <div class="input-group-prepend w-50">
                        <span class="input-group-text w-100 bg-greeny text-white border-0">Тройки</span>
                    </div>
                    <input type="number" aria-label="Количество троек" min="0" value="0" class="form-control">
                </div>
                <div class="input-group">
                    <div class="input-group-prepend w-50">
                        <span class="input-group-text w-100 bg-greeny text-white border-0">Четвёрки</span>
                    </div>
                    <input type="number" aria-label="Количество четверок" min="0" value="0"
                           class="form-control">
                </div>
                <div class="input-group">
                    <div class="input-group-prepend w-50">
                        <span class="input-group-text w-100 bg-greeny text-white border-0">Пятёрки</span>
                    </div>
                    <input type="number" aria-label="Количество пятерок" min="0" value="0"
                           class="form-control">
                </div>
            </div>
            <div class="form-group">
                <label for="need">Требуемый балл</label>
                <input id="need" v-model="need" type="number" min="0" max="5" placeholder="Требуемый балл" value="3.50"
                       class="form-control">
            </div>
        </form>
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card text-white bg-greeny mb-3 w-100">
                    <div class="card-header">Текущий балл</div>
                    <div class="card-body">
                        <h2 class="card-title">4.50</h2>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card text-white bg-greeny mb-3 w-100">
                    <div class="card-header">До требуемого балла ({{need}})</div>
                    <div class="card-body">
                        <p class="my-0">Требуется четвёрок</p>
                        <h3 class="card-title">2</h3>
                        <p class="my-0">Требуется пятёрок</p>
                        <h3 class="card-title">1</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data: function () {
            return {
                need: 3.50,
                markstring: '',
            }
        },
        watch: {
            need: function (val) {
                if (val > 5)
                    this.need = 5;
                else if (val < 0)
                    this.need = 0;
            },
            markstring: function () {

            }
        }
    }
</script>

<style scoped>

</style>