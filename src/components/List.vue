<template>
  <div>

    <h1 class="text-center text-uppercase my-5">Список валют</h1>

    <b-input-group prepend="Поиск">
      <b-form-input v-model="query" placeholder="Введите код или название валюты"></b-form-input>
    </b-input-group>

    <b-table small striped hover :items="filteredValute" :fields="fields">

      <template #cell(CharCode)="filteredValute">
        <small class="text-muted m-2">
          {{ filteredValute.item.Name }}
        </small>
        <br>
        <span class="badge bg-light p-2 m-2">
          1 {{ filteredValute.item.CharCode }} ↔ {{ filteredValute.item.Value }} RUB
        </span>
        <span class="badge bg-light p-2 m-2">
          1 RUB ↔ {{ (1 / filteredValute.item.Value).toFixed(4) }} {{ filteredValute.item.CharCode }}
        </span>
      </template>

      <template #cell(Previous)="filteredValute">
        <b class="text-success" 
          :class="{ 'text-danger': (filteredValute.item.Value - filteredValute.item.Previous) < 0 }">
          {{ filteredValute.item.Value - filteredValute.item.Previous | rateDirection }}
        </b>
      </template>

    </b-table>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return {
      query: '',
      fields: [
          {
            key: 'CharCode',
            label: 'Валюты',
            sortable: true,
          },
          {
            key: 'Previous',
            label: 'выросла/упала',
          }
        ],
    }
  },
  computed: {
    valute(){
      return this.$store.getters.getValute
    },
    filteredValute(){
      let query = this.query;
      return this.valute.filter(function(item) {
        return ( item.CharCode.toLowerCase().indexOf(query.toLowerCase()) !== -1 || item.Name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
      })

    }
  },
  filters: {
    rateDirection: function (value) {
      if(value < 0) {
        return '↓ ' + value.toFixed(4)
      } else if(value > 0){
        return '↑ ' + value.toFixed(4)
      } else {
        return value.toFixed(4)
      }
    }
  }
}
</script>
