<template>
  <div v-click-outside id="dateBox">
    <input type="text" :value="formatDate" />
    <transition name="slide-fade">
      <div v-if="show" class="panel">
        <div class="pany-nav">
          <span @click="prevYear">&lt;&lt;</span>
          <span @click="prevMonth">&lt;</span>
          <span>{{time.year}}年</span>
          <span>{{time.month + 1}}月</span>
          <span @click="nextMonth">&gt;</span>
          <span @click="nextYear">&gt;&gt;</span>
        </div>
        <div class="pany-content">
          <div class="days">
            <span v-for="d in weeks" :key="d" class="week">{{d}}</span>
            <div v-for="i in 6" :key="i">
              <span
                v-for="j in 7"
                :key="j"
                class="cell"
                @click="chooseDate(visibeDays[(i - 1) * 7 + (j - 1)])"
                :class="[
                    {notCurrentMonth : !isCurrentMonth(visibeDays[(i-1)*7+(j-1)])},
                    {today : isToday(visibeDays[(i-1)*7+(j-1)])},
                    {select : isSelect(visibeDays[(i-1)*7+(j-1)])},
                    {currentMonth : isCurrentMonth(visibeDays[(i-1)*7+(j-1)])}
                        ]"
              >{{visibeDays[(i - 1) * 7 + (j - 1)].getDate()}}</span>
            </div>
          </div>
        </div>
        <div class="pany-footer" @click="returnToday">返回今天</div>
        <div class="arrow"></div>
      </div>
    </transition>
  </div>
</template>
<script>
import utils from './util';
export default {
  name: "yDate",
  directives: {
    clickOutside: {
      bind(el, bindings, vnode) {
        let handler = e => {
          if (el.contains(e.target)) {
            if (!vnode.context.show) {
              console.log(e.target, el.id);
              vnode.context.showContent();
            }
          } else {
            if (vnode.context.show) {
              vnode.context.hiddenContent();
            }
          }
        };
        el.handler = handler;
        document.addEventListener("mouseup", handler);
      },
      unbind(el) {
        document.removeEventListener("mouseup", el.handler);
      }
    }
  },
  props: {
    value: {
      type: Date,
      defaule: () => new Date()
    }
  },
  data() {
    let { year, month } = utils.getYearMonthDay(this.value);
    return {
      weeks: ["日", "一", "二", "三", "四", "五", "六"],
      time: { year, month },
      show: false
    };
  },
  computed: {
    formatDate() {
      let year = this.value.getFullYear(),
        month = this.value.getMonth() + 1,
        day = this.value.getDate();
      return `${year}-${month}-${day}`;
    },
    visibeDays() {
      let { year, month } = utils.getYearMonthDay(
        utils.getDate(this.time.year, this.time.month, 1)
      );
      let currentFirstDay = utils.getDate(year, month, 1);
      let week = currentFirstDay.getDay();
      let startDay = currentFirstDay - week * 60 * 60 * 1000 * 24;
      let arr = [];
      for (let i = 0; i < 42; i++) {
        arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24));
      }
      return arr;
    }
  },
  methods: {
    showContent() {
      this.show = true;
    },
    hiddenContent() {
      this.show = false;
    },
    isCurrentMonth(date) {
      let { year, month } = utils.getYearMonthDay(
        utils.getDate(this.time.year, this.time.month, 1)
      );
      let { year: y, month: m } = utils.getYearMonthDay(date);
      return year === y && month === m;
    },
    isToday(date) {
      let { year, month, day } = utils.getYearMonthDay(new Date());
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date);
      return year === y && month === m && day === d;
    },
    chooseDate(date) {
      //如果点击的日期是本月，就通知父组件，并且隐藏选择日期的面板。
      if (this.isCurrentMonth(date)) {
        this.$emit("input", date);
        this.hiddenContent();
      }
      //如果点击了上月或者下月的灰色。就只切换月份。
      this.time.month = utils.getYearMonthDay(date).month;
      this.time.year = utils.getYearMonthDay(date).year;
    },
    isSelect(date) {
      let { year, month, day } = utils.getYearMonthDay(this.value);
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date);
      return year === y && month === m && day === d;
    },
    prevMonth() {
      let d = utils.getDate(this.time.year, this.time.month, 1);
      d.setMonth(d.getMonth() - 1);
      this.time = utils.getYearMonthDay(d);
    },
    nextMonth() {
      let d = utils.getDate(this.time.year, this.time.month, 1);
      d.setMonth(d.getMonth() + 1);
      this.time = utils.getYearMonthDay(d);
    },
    prevYear() {
      let d = utils.getDate(this.time.year, this.time.month, 1);
      d.setYear(d.getFullYear() - 1);
      this.time = utils.getYearMonthDay(d);
    },
    nextYear() {
      let d = utils.getDate(this.time.year, this.time.month, 1);
      d.setYear(d.getFullYear() + 1);
      this.time = utils.getYearMonthDay(d);
    },
    //返回当前的时间
    returnToday() {
      this.$emit("input", new Date());
      this.time = utils.getYearMonthDay(new Date());
    }
  }
};
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}

#dateBox input {
  height: 20px;
  width: 200px;
}
.panel {
  background:#fff;
  user-select: none;
  position: absolute;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e4e7ed;
  margin-top: 10px;
  padding: 10px;
}
.panel .arrow {
  position: absolute;
  height: 0px;
  width: 0px;
  border: 6px solid transparent;
  border-bottom-color: #dcdfe6;
  border-top: none;
  left: 35px;
  top: -6px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.panel .arrow::after {
  content: "";
  display: block;
  height: 0px;
  width: 0px;
  border: 6px solid transparent;
  border-bottom-color: #fff;
  border-top: none;
  position: absolute;
  top: 1px;
  left: -6px;
}
.pany-nav {
  height: 30px;
  display: flex;
  justify-content: space-around;
}
.pany-nav span {
  cursor: pointer;
}
.pany-footer {
  height: 30px;
  line-height: 30px;
  background: #33333321;
  text-align: center;
}
#dateBox {
  height: 30px;
  width: 100px;
}
#dateBox input {
  height: 100%;
  width: 100%;
  outline: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0 5px;
  transition: border-color 0.3s;
}
#dateBox input:focus {
  border-color: #409eff;
}

.pany-content .week {
  height: 32px;
  width: 32px;
  display: inline-block;
  line-height: 32px;
  text-align: center;
  border-bottom: 1px solid #333;
  color: #999;
  
}
.pany-content .cell {
  height: 32px;
  width: 32px;
  display: inline-block;
  line-height: 32px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50%;
}
.pany-content .currentMonth:hover {
  color: #398bfb;
}
.notCurrentMonth {
  color: #999;
}
.select {
  background: #80a0f3;
}
.today {
  background: #409eff;
  color: #fff;
}
</style>
