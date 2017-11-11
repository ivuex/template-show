<template>
    <div class="wrap">
        <p v-text="shortCut" class="short-cut"></p>
        <div v-html="renderStr"></div>
    </div>
</template>

<script>
    import axios from 'axios';
    import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

    export default {
        name: "bsTempView",
        props: [
            'uri',
        ],
        data() {
            return {
                tempStr: '',
                renderStr: '',
                // shortCut: '短指令: ',
            }
        },
        created() {
            this.tempStr = 'loading ...'
        },
        computed: {
            shortCut: {
                get: function () {
                   let short =  this.uri.match(/\/([^\/]+)\.bs\.html$/)[1] ;
                   console.log(short);
                   return short;
                },
                set: function () {

                }
            }
        },
        watch: {
            tempStr() {
                const base = 'http://localhost:17002';
                this.uri = this.uri || 'http://localhost:7786/bs-template/badge/bs3-badge.bs.html';
                let hackedUri = encodeURIComponent(this.uri);
                hackedUri = base + '/' + hackedUri;
                axios.get(hackedUri).then(res => {
                    const str = res.data;
                    if (/(?:\.ttf|woff|woff2)$/.test(str)) {
                    }
                    this.renderStr = str.replace(/<link\s.*>/g, '');
                }, err => {
                    throw err;
                })
            },
        }

    }
</script>

<style scoped>

</style>