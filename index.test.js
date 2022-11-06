import {getPercents} from "/index.js";
import {getMonth} from "/index.js";
import {countDown} from "/index.js";

xdescribe('getPercents test', ()=>{
    it('10 percent of 100', ()=>{
    const result = getPercents(10,100);
    expect(result).toBe(10);
    }),
    it('10 percent of 10', ()=>{
    const result = getPercents(10,10);
    expect(result).toBe(1);
    });
});

xdescribe('getMonth test', ()=>{
    it('ноябрь', ()=>{
    const result = getMonth(11);
    expect(result).toBe('ноябрь');
    });
});

xdescribe('countDown test', ()=>{
    it('countDown 321', ()=>{
    const result = countDown(3);
    expect(result).toBe('321');
    });
});