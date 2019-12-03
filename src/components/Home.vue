<template>
    <div class="container mt-5" style="flex: 1 0 auto;">
        <div class="d-flex align-items-center justify-content-center py-5">
            <img src="../assets/logo.svg" alt="" class="img-fluid" style="max-width: 250px;">
        </div>
        <form action="/">
            <div class="form-group">
                <label for="marks">Оценки</label>
                <input id="marks" v-model="markstring" type="text" placeholder="Введите здесь свои оценки"
                       class="form-control">
            </div>
            <div class="form-group">
                <p>Обработанные оценки</p>
                <div class="input-group">
                    <div class="input-group-prepend w-50">
                        <span class="input-group-text w-100 bg-greeny text-white border-0">Двойки</span>
                    </div>
                    <input type="number" v-model="marks.two" @change="computeMarks" aria-label="Количество двоек"
                           min="0" max="100" value="0"
                           class="form-control">
                </div>
                <div class="input-group">
                    <div class="input-group-prepend w-50">
                        <span class="input-group-text w-100 bg-greeny text-white border-0">Тройки</span>
                    </div>
                    <input type="number" v-model="marks.three" @change="computeMarks" aria-label="Количество троек"
                           min="0" max="100" value="0"
                           class="form-control">
                </div>
                <div class="input-group">
                    <div class="input-group-prepend w-50">
                        <span class="input-group-text w-100 bg-greeny text-white border-0">Четвёрки</span>
                    </div>
                    <input type="number" v-model="marks.four" @change="computeMarks" aria-label="Количество четверок"
                           min="0" max="100" value="0"
                           class="form-control">
                </div>
                <div class="input-group">
                    <div class="input-group-prepend w-50">
                        <span class="input-group-text w-100 bg-greeny text-white border-0">Пятёрки</span>
                    </div>
                    <input type="number" v-model="marks.five" @change="computeMarks" aria-label="Количество пятерок"
                           min="0" max="100" value="0"
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
            <div class="col-12 d-flex align-items-stretch col-md-6">
                <div class="card text-white bg-greeny mb-3 w-100">
                    <div class="card-header">Текущий балл</div>
                    <div class="card-body d-flex align-items-center justify-content-center">
                        <h1 class="card-title">{{ average }}</h1>
                    </div>
                </div>
            </div>
            <div class="col-12 d-flex align-items-stretch col-md-6">
                <div class="card text-white bg-greeny mb-3 w-100">
                    <div class="card-header">До требуемого балла ({{need}})</div>
                    <div class="card-body">
                        <p class="my-0">Требуется четвёрок</p>
                        <h3 class="card-title">{{ needed.four }} <span class="h5" v-if="needed.four && needed.four >= 0">{{ needFour }}</span>
                        </h3>
                        <p class="my-0">Требуется пятёрок</p>
                        <h3 class="card-title">{{ needed.five }} <span class="h5" v-if="needed.five && needed.five >= 0">{{ needFive }}</span></h3>
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
                marks: {
                    two: 0,
                    three: 0,
                    four: 0,
                    five: 0,
                },
                markarr: [],
                needed: {
                    four: 0,
                    five: 0
                },
                summ: 0,
            }
        },
        watch: {
            need: function (val) {
                if (val > 5)
                    this.need = 5;
                else if (val < 0)
                    this.need = 0;
                this.need = Math.round(this.need * 100) / 100;
                this.needanceProcess();
            },
            markstring: function (val) {
                this.markarr = val.replace(/\t/g, '').replace(/\s\s+/g, '').replace(/[^2-5]/g, '').split('').map(val => {
                    return parseInt(val)
                });
                this.markstring = this.markarr.join(' ');
                this.marks = {
                    two: 0,
                    three: 0,
                    four: 0,
                    five: 0,
                };
                this.summ = 0;
                this.markarr.forEach((value) => {
                    switch (value) {
                        case 2:
                            this.marks.two++;
                            break;
                        case 3:
                            this.marks.three++;
                            break;
                        case 4:
                            this.marks.four++;
                            break;
                        case 5:
                            this.marks.five++;
                            break;
                        default:
                            break;
                    }
                    this.summ += value;
                });
                this.needanceProcess();
            }
        },
        methods: {
            needanceProcess: function () {
                let temp = this.summ;
                let need = this.need;
                let needed = 0;
                let marklen = this.markarr.length;
                while (temp / (marklen + needed) < need) {
                    temp += 4;
                    needed++;
                    if (needed > 100) {
                        needed = -1;
                        break;
                    }
                }
                this.needed.four = needed >= 0 ? needed : '-';

                temp = this.summ;
                needed = 0;
                while (temp / (marklen + needed) < need) {
                    temp += 5;
                    needed++;
                    if (needed > 100) {
                        needed = -1;
                        break;
                    }
                }
                this.needed.five = needed >= 0 ? needed : '-';
            },
            computeMarks: function () {
                if (this.marks.two > 100)
                    this.marks.two = 100;
                if (this.marks.three > 100)
                    this.marks.three = 100;
                if (this.marks.four > 100)
                    this.marks.four = 100;
                if (this.marks.five > 100)
                    this.marks.five = 100;
                if (this.marks.two < 0)
                    this.marks.two = 0;
                if (this.marks.three < 0)
                    this.marks.three = 0;
                if (this.marks.four < 0)
                    this.marks.four = 0;
                if (this.marks.five < 0)
                    this.marks.five = 0;
                this.markarr = [];
                this.markarr.push(new Array(parseInt(this.marks.two)).fill(2));
                this.markarr.push(new Array(parseInt(this.marks.three)).fill(3));
                this.markarr.push(new Array(parseInt(this.marks.four)).fill(4));
                this.markarr.push(new Array(parseInt(this.marks.five)).fill(5));
                this.markstring = this.markarr.join(' ');
                this.needanceProcess();
            }
        },
        computed: {
            average: function () {
                let temp = this.summ / this.markarr.length;
                return temp ? temp.toFixed(2) : '-';
            },
            needFour: function () {
                return ((this.summ + this.needed.four * 4) / (this.markarr.length + this.needed.four)).toFixed(2);
            },
            needFive: function () {
                return ((this.summ + this.needed.five * 5) / (this.markarr.length + this.needed.five)).toFixed(2);
            }
        }
    }
</script>

<style scoped>

</style>