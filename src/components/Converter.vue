<template>
  <div>

    <h1 class="text-center text-uppercase my-5">Конвертер валют</h1>
    
    <b-row>
      <b-col>
        <b-select v-model="fromValute" :options="options" @change="calc"></b-select>
      </b-col>
      <b-col>
        <b-input v-model="fromValue" placeholder="Введите сумму" @input="calc"></b-input>
      </b-col>
      <b-col class="text-center">
        <b-button @click="reverse">↔</b-button>
      </b-col>
      <b-col>
        <b-select v-model="toValute" :options="options" @change="calc"></b-select>
      </b-col>
      <b-col>
        <b-input v-model="toValue" disabled @input="calc"></b-input>
      </b-col>
    </b-row>

  </div>
</template>

<script>

export default {
  name: 'Converter',
  data(){
    return {
      fromValute: '1',
      fromValue: '',
      toValute: '1',
      toValue: '',
    }
  },
  methods: {
    calc(){
      if(this.fromValute && this.fromValue && this.toValute) {
        let toRub = this.fromValue * this.fromValute;
        this.toValue = (toRub * (1 / this.toValute)).toFixed(4);
      }
    },
    reverse(){
      let temp = this.fromValute;
      this.fromValute = this.toValute
      this.toValute = temp;
      this.calc();
    }
  },
  computed: {
    options(){
      let opt = [{value: 1, text: 'RUB'}];
      this.$store.getters.getValute.map((item)=>{
        opt.push({ value: item.Value, text: item.CharCode})
      })
      return opt.sort((a, b) => a.text > b.text ? 1 : -1);
    }
  }
}
</script>