<template>
    <div style="background-color:transparent !important;">
        <h1>書籍リスト</h1>

        <div class="panel">
            <div class="input-group flex-column" style="margin-bottom: 20px !important;">
                <form>
                    <div class="form-group form-inline float-right">
                        <input v-model="targettitle" class="form-control" id="titleSearch" placeholder="タイトルで検索"/>
                        <button type="button" class="btn btn-primary" v-on:click="searchByTitle(targettitle)">検索</button>
                    </div>
                </form>
            </div>

            <div class="input-group flex-column" style="margin-bottom: 20px !important;">
                    <span class="input-group-btn">
                        <button class="btn btn-primary" v-on:click="addNewItem">新規追加</button>
                        <button class="btn btn-primary float-right" v-on:click="refreshItems">再読込み</button>
                    </span>
            </div>

            <table class="table table-bordered" id="booklist-table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">タイトル</th>
                        <th scope="col">著者</th>
                        <th scope="col">出版社</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in this.booklist" v-bind:key="item.id">
                        <td class="title">{{item.title}}</td>
                        <td class="author">{{item.author}}</td>
                        <td class="publisher">{{item.publisher}}</td>
                        <td class="button">
                            <button type="button" class="btn btn-success btn-sm" v-on:click="editItem(item.id)">詳細編集</button>
                            <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteItem(item.id)">削除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import booklistService from '../booklistService.js'

    export default {
        name: "Booklist",
        data: function () {
            return {
                booklist: null,
                targettitle: ''
            }
        },
        created: async function () {
            let res = await booklistService.getItems()
            this.booklist = res
            console.log("Initialized.")
            console.log(JSON.stringify(this.booklist))
        },
        methods: {
            async refreshItems() {
                let res = await booklistService.getItems()
                this.booklist = res
                this.targettitle = ''
                console.log("Refreshed.")
                console.log(JSON.stringify(this.booklist))
            },
            addNewItem() {
                this.$router.push({ name: 'BookDatail', params: { id: null} })
            },
            editItem(itemid) {
                this.$router.push({ name: 'BookDatail', params: { id: itemid} })
            },
            async searchByTitle(title) {
                if (title) {
                    let res = await booklistService.getByTitle(title)
                    this.booklist = res;
                    console.log(res)
                } else {
                    this.refreshItems();
                }
            },
            async deleteItem(item) {
                let res = await booklistService.deleteItem(item)
                console.log(res)
                this.refreshItems()
            }
        }
    }
</script>

<style scoped>
    td.author {
        width: 15%;
    }
    td.publisher {
        width: 15%;
    }
    td.button {
        width: 150px;
        text-align: center;
    }
</style>
