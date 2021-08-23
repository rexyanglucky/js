const r = [[2,-788346195],[2,663130427],[2,199473611],[2,-195891979],[1,500832003,16688758],[2,500832003],[1,611386314,-165759898],[2,468212983],[2,-271818474],[1,652927731,-348635282],[1,-238995884,-258671053],[2,500832003],[2,-147772526],[1,476972438,303030386],[2,611386314],[2,500832003],[1,-122160324,226250640],[2,-613589387],[1,-278040308,-367610673],[1,225799075,-205870402],[1,-146502911,538248725],[2,225799075],[1,188913912,458810061],[2,-119477399],[1,-298402981,-545080319],[1,-212003183,-395967680],[1,-403828707,312998011],[2,-629547856],[2,-591793417],[2,-238995884],[2,-221284932],[2,612267338],[1,196500800,-910183182],[1,-642727487,390702112],[2,3788878],[2,225799075],[1,473983650,-454872678],[1,324437559,-590323082],[1,-111589492,-168572335],[2,-300599720],[1,-812965602,-161093786],[2,-642727487],[2,188913912],[1,-218604410,-90822424],[2,-87730129],[2,265165195],[2,-569793417],[2,-735605468],[1,333199655,133683700],[1,-763325900,-572482758],[1,497099029,-624508071],[2,-315061766],[2,-642727487],[2,-172489387],[1,-126506312,-661171046],[1,-228770667,110505831],[2,14939851],[2,225799075],[1,41839,81862151],[1,720095888,-829415148],[2,-107363800],[2,108111576],[1,-164464796,-50478014],[1,673800810,676579578],[2,333199655],[1,-376502501,520266971],[2,18123250],[2,-355618060],[1,317541429,-496924381],[1,532361869,-193819067],[2,-146502911],[1,13255831,215012435],[1,212786497,-259466844],[2,212786497],[2,-76179546],[1,208731547,-346426473],[1,-379844741,37483217],[1,418861952,-632911083],[2,590753811],[1,-182038778,99070433],[1,-255626757,-245701776],[2,212786497],[1,-50736696,223451417],[1,824482016,-191887185],[2,-431317093],[1,207876912,-74094350],[2,207876912],[1,-600453358,-39692330],[1,-246867638,-281264102],[2,-488558],[2,26726728],[2,-141826073],[1,501396780,-698492622],[1,740955506,-314567765],[2,356005885],[1,-34549395,-815604168],[1,418408622,176458303],[1,-426908813,496481231],[2,611386314],[1,65959955,169104162],[2,124436973],[2,-398619432],[1,290572649,300]];
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * lfu design
 * @param operators int整型二维数组 ops
 * @param k int整型 the k
 * @return int整型一维数组
 */
 class Solution {
  countMap = new Map();
  bucketMap = new Map();
  k = 0;
  constructor(k) {
     this.k = k;
  }
  get(key){
      if (this.countMap.has(key)) {
          this.addCount(key);
          const count = this.countMap.get(key);
          return this.bucketMap.get(count).get(key)
      }
      return -1;
 }
 set(key, val){
         this.addCount(key, val);
         if (this.countMap.size > this.k) {
             // 删除最小引用，且最早引用的值
             const minBucketKey = this.bucketMap.keys().next().value;
             const minBucket = this.bucketMap.values().next().value;
             if (minBucket.keys === 1) {
                 minBucket.clear();
                 this.bucketMap.delete(minBucketKey)
             } else {
                 minBucket.delete(minBucket.keys().next().value); // 删除最早插入的
             }
             this.countMap.delete(minBucketKey);
         }
 }
 addCount(key, val) {
      if (this.countMap.has(key)) {
          let oldCount = this.countMap.get(key);
          const oldVal = this.bucketMap.get(oldCount).get(key);
          const newVal = val || oldVal;
          this.countMap.set(key, oldCount + 1);
          this.bucketMap.get(oldCount).delete(key);
          if (!this.bucketMap.has(oldCount + 1)) {
              this.bucketMap.set(oldCount + 1, new Map());
          } 
           this.bucketMap.get(oldCount + 1).set(key, newVal);   
      } else {
          this.countMap.set(key, 1);
          if (!this.bucketMap.has(1)) {
              this.bucketMap.set(1, new Map());
          } 
          this.bucketMap.get(1).set(key, val);
      }
      
   }
}
// module.exports = {
   function LFU(operators, k) {
   // write code here
 const solution = new Solution(k);
 const n = operators.length;
 const res = []
 for(let i = 0;i < n;i ++){
     if(operators[i][0] === 1){
         solution.set(operators[i][1],operators[i][2]);
     }else{
         res.push(solution.get(operators[i][1]));
     }
 }

 return res;
// }}
// const t = LFU(operators, )