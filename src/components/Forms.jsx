import { useEffect, useState } from 'react';
import { storageDate } from '../services/storageService';
import { RenderCategories} from './RenderCategories';
import { saveCategory } from '../services/storageCategory';
import CurrencyInput from '../helpers/CurrencyInput'
import { VerifyIfEmpty } from '../validations/Empty'
import Erros from '../helpers/Erros';

export default function Forms({
    categories,
    todayDate,
    history,
    updateHistory,
    editValue
})
{
    const valuesStart = {
        id:'',
        category:'',
        date:todayDate,
        description:'',
        value:'',
        type:'in'
    };
    
    
    const [form,setForm] = useState(valuesStart);
    const [message, setMessage] = useState(null);
      
    useEffect(() => {
      if (editValue && editValue.id != null) {
        setForm({...editValue,...editValue});
      }else{
        setForm(valuesStart);
      } 
    }, [editValue?.id]);
    
    function submit() {
      const messageError = VerifyIfEmpty(valuesStart, form);
      if (messageError?.message?.length) {
        setMessage(messageError);
        return;
      }
    
      const result = storageDate(form);      
      const saved  = result.data;
    
      updateHistory(prev => {
        const exists = prev.some(x => x.id === saved.id);
        return exists
          ? prev.map(x => (x.id === saved.id ? saved : x)) 
          : [...prev, saved];                      
      });
    
      setMessage(result);
      saveCategory(form.category);
      setForm(valuesStart);
    }
    

    function changeValue(e){
        const { name,value } = e.target;
        setForm({...form,[name]:value})
    }
    return (
        <div className="row">
          <Erros objectMessage={message}></Erros>
          <div className="col-12 col-md-6">
            <input type="hidden" value={form.id ?? ""} name='id' />
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select
                id="type"
                className="form-control"
                value={form.type}
                onChange={changeValue}
                name="type"
              >
                <option value="in">In</option>
                <option value="out">Out</option>
              </select>
            </div>
      
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
                id="category"
                className="form-control"
                type="text"
                value={form.category}
                onChange={changeValue}
                name="category"
                placeholder="Put the Category"
                list="categories"
              />
              <RenderCategories categories={categories} />
            </div>
          </div>
      
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="value">Value</label>
              <CurrencyInput value={form.value ?? "0"} onChange={changeValue} />
            </div>
      
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                className="form-control"
                type="date"
                value={form.date}
                onChange={changeValue}
                name="date"
              />
            </div>
          </div>
      
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                value={form.description}
                onChange={changeValue}
                placeholder="Put the description"
              ></textarea>
            </div>
          </div>

          <div className="col-12 mt-3">
            <button
              onClick={submit}
              className="btn btn-primary btn-block form-control"
              type="button"
            >
              Send!
            </button>
          </div>
        </div>
      );      
}