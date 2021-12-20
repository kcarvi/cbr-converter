<template>
  <div>

    <h1 class="text-center text-uppercase my-5">Конвертер валют</h1>
    
    <b-row>
      <b-col>
        <b-form-select v-model="fromValute" :options="options" @change="calc"></b-form-select>
      </b-col>
      <b-col>
        <b-form-input v-model="fromValue" placeholder="Введите сумму" @input="calc"></b-form-input>
      </b-col>
      <b-col class="text-center">
        <b-button @click="reverse">↔</b-button>
      </b-col>
      <b-col>
        <b-form-select v-model="toValute" :options="options" @change="calc"></b-form-select>
      </b-col>
      <b-col>
        <b-form-input v-model="toValue" disabled @input="calc"></b-form-input>
      </b-col>
    </b-row>

  </div>
</template>

<script>

export default {
  name: 'Converter',
  data(){
    return {
      fromValute: '',
      fromValue: '',
      toValute: '',
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
      let opt = [];
      this.$store.getters.getValute.map((item)=>{
        opt.push({ value: item.Value, text: item.CharCode})
      })
      return opt
    }
  }
}
</script>